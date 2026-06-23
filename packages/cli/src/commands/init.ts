import type { RdsConfig } from '../utils/config.js'
import path from 'node:path'
import fs from 'fs-extra'
import pc from 'picocolors'
import prompts from 'prompts'
import { configExists, getDefaultConfig, saveConfig } from '../utils/config.js'
import { readJsoncSync } from '../utils/jsonc.js'
import { detectPackageManager, installDependencies } from '../utils/package-manager.js'
import { fetchFile, fetchRegistry } from '../utils/registry.js'

interface InitOptions {
  yes?: boolean
}

interface TsConfigFile {
  compilerOptions?: {
    baseUrl?: string
    paths?: Record<string, string[]>
    [key: string]: unknown
  }
  exclude?: string[]
  files?: string[]
  include?: string[]
  references?: Array<{ path: string }>
  [key: string]: unknown
}

export async function init(options: InitOptions) {
  console.log(pc.cyan('\n🚀 Initializing ADMS RDS UI...\n'))

  const cwd = process.cwd()

  // Check if package.json exists
  if (!fs.existsSync(path.join(cwd, 'package.json'))) {
    console.log(pc.red('❌ No package.json found. Run this in a project root.'))
    process.exit(1)
  }

  // Detect package manager
  const pm = detectPackageManager(cwd)
  console.log(pc.dim(`Detected package manager: ${pm}\n`))

  // Check if already initialized
  if (configExists(cwd) && !options.yes) {
    const { overwrite } = await prompts({
      type: 'confirm',
      name: 'overwrite',
      message: 'rds-ui.json already exists. Overwrite?',
      initial: false,
    })
    if (!overwrite) {
      console.log(pc.dim('Cancelled.'))
      process.exit(0)
    }
  }

  // Prompt for config
  let config: RdsConfig

  if (options.yes) {
    config = getDefaultConfig()
  } else {
    const answers = await prompts([
      {
        type: 'text',
        name: 'srcDir',
        message: 'Where is your src directory?',
        initial: 'src',
      },
      {
        type: 'text',
        name: 'alias',
        message: 'What alias do you use for src imports?',
        initial: '@',
      },
      {
        type: 'text',
        name: 'componentsDir',
        message: 'Where should components be installed?',
        initial: 'src/components/ui',
      },
      {
        type: 'text',
        name: 'componentsAlias',
        message: 'What alias for components? (leave empty to use main alias)',
        initial: '',
      },
      {
        type: 'text',
        name: 'libDir',
        message: 'Where should lib/utils.ts go?',
        initial: 'src/lib',
      },
      {
        type: 'text',
        name: 'stylesDir',
        message: 'Where should styles/tokens go?',
        initial: 'src/styles',
      },
    ])

    config = {
      alias: answers.alias,
      srcDir: answers.srcDir,
      componentsDir: answers.componentsDir,
      componentsAlias: answers.componentsAlias || '',
      libDir: answers.libDir,
      stylesDir: answers.stylesDir,
    }
  }

  // Create directories
  fs.ensureDirSync(path.join(cwd, config.componentsDir))
  fs.ensureDirSync(path.join(cwd, config.libDir))
  fs.ensureDirSync(path.join(cwd, config.stylesDir))
  console.log(pc.green('✓ Created directories'))

  // Update vite.config.ts
  await updateViteConfig(cwd, config)

  // Update tsconfig.json
  await updateTsConfig(cwd, config)

  // Fetch registry
  console.log(pc.dim('\nFetching registry...'))
  const registry = await fetchRegistry()

  // Download and write utils.ts
  for (const file of registry.lib.utils.files) {
    let content = await fetchFile(file)
    content = transformAliasImports(content, config)
    const fileName = path.basename(file)
    const destPath = path.join(cwd, config.libDir, fileName)
    fs.writeFileSync(destPath, content)
    console.log(pc.green(`✓ Created ${config.libDir}/${fileName}`))
  }

  // Download and write styles
  for (const file of registry.styles.files) {
    const content = await fetchFile(file)
    const fileName = path.basename(file)
    const destPath = path.join(cwd, config.stylesDir, fileName)
    fs.writeFileSync(destPath, content)
    console.log(pc.green(`✓ Created ${config.stylesDir}/${fileName}`))
  }

  // Save config
  saveConfig(cwd, config)
  console.log(pc.green('✓ Created rds-ui.json'))

  // Collect and install dependencies
  // The icons package + its FA Pro light peer are installed up front so the
  // rdsIcons() plugin wired into vite.config.ts resolves on first run. FA Pro
  // is a private registry — consumers need the auth token in ~/.npmrc (see the
  // next-steps output below).
  const allDeps = [
    ...registry.lib.utils.dependencies,
    ...registry.styles.dependencies,
    'reka-ui',
    '@banavasi/adms-rds-ui-icons',
    '@fortawesome/pro-light-svg-icons',
  ]
  const uniqueDeps = [...new Set(allDeps)]

  console.log(pc.cyan('\n📦 Installing dependencies...\n'))
  const installed = installDependencies(cwd, uniqueDeps)

  if (installed) {
    console.log(pc.green('\n✓ Dependencies installed'))
  }

  // Print next steps
  const stylesPath = config.stylesDir.replace(`${config.srcDir}/`, '')

  console.log(pc.cyan('\n✅ ADMS RDS UI initialized!\n'))
  console.log('Next steps:')
  console.log(pc.dim(`  1. Import styles in your main.ts:`))
  console.log(pc.white(`     import "${config.alias}/${stylesPath}/styles.scss";`))
  console.log(pc.dim(`  2. Register icons globally in your main.ts:`))
  console.log(pc.white(`     import rdsIconsApp from "@banavasi/adms-rds-ui-icons/app";`))
  console.log(pc.white(`     createApp(App).use(rdsIconsApp).mount("#app");`))
  console.log(pc.dim(`  3. Add a component:`))
  console.log(pc.white(`     npx @adms-rds-ui/cli add button\n`))
  console.log(
    pc.dim(
      `  Font Awesome Pro is a private registry. If install failed, add your token:\n` +
        `     echo "//npm.fontawesome.com/:_authToken=YOUR_TOKEN" >> ~/.npmrc\n` +
        `  Declare extra icons via rdsIcons({ icons: { light: ["star"] } }) in vite.config.ts.\n`
    )
  )
}

// Transform @/ to user's alias
function transformAliasImports(content: string, config: RdsConfig): string {
  return content.replace(/@\//g, `${config.alias}/`)
}

// Update vite.config.ts with the src alias and the rdsIcons() plugin
async function updateViteConfig(cwd: string, config: RdsConfig) {
  const viteConfigPath = path.join(cwd, 'vite.config.ts')

  // Build aliases object
  const aliases: Record<string, string> = {
    [config.alias]: `./${config.srcDir}`,
  }

  if (config.componentsAlias) {
    aliases[config.componentsAlias] = `./${config.componentsDir}`
  }

  // Create from scratch — alias + rdsIcons plugin wired in
  if (!fs.existsSync(viteConfigPath)) {
    const aliasEntries = Object.entries(aliases)
      .map(([key, val]) => `      "${key}": path.resolve(__dirname, "${val}"),`)
      .join('\n')

    const viteConfig = `import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { rdsIcons } from "@banavasi/adms-rds-ui-icons/vite";
import path from "path";

export default defineConfig({
  plugins: [
    vue(),
    rdsIcons({ packages: ["light"] }),
  ],
  resolve: {
    alias: {
${aliasEntries}
    },
  },
});
`
    fs.writeFileSync(viteConfigPath, viteConfig)
    console.log(pc.green('✓ Created vite.config.ts (alias + rdsIcons plugin)'))
    return
  }

  let content = fs.readFileSync(viteConfigPath, 'utf-8')

  // --- src alias ---
  if (content.includes(`"${config.alias}"`)) {
    console.log(pc.dim('  vite.config.ts already has alias configured'))
  } else {
    if (content.includes('resolve:') && content.includes('alias:')) {
      const aliasLines = Object.entries(aliases)
        .map(([key, val]) => `      "${key}": path.resolve(__dirname, "${val}"),`)
        .join('\n')
      content = content.replace(/(alias:\s*\{)/, `$1\n${aliasLines}`)
    } else if (content.includes('resolve:')) {
      const aliasLines = Object.entries(aliases)
        .map(([key, val]) => `      "${key}": path.resolve(__dirname, "${val}"),`)
        .join('\n')
      const aliasConfig = `    alias: {\n${aliasLines}\n    },`
      content = content.replace(/(resolve:\s*\{)/, `$1\n${aliasConfig}`)
    } else {
      const aliasLines = Object.entries(aliases)
        .map(([key, val]) => `      "${key}": path.resolve(__dirname, "${val}"),`)
        .join('\n')
      const resolveConfig = `  resolve: {\n    alias: {\n${aliasLines}\n    },\n  },`
      content = content.replace(/(defineConfig\(\s*)\{/, `$1{\n${resolveConfig}`)
    }

    if (
      !content.includes('import path from "path"') &&
      !content.includes("import path from 'path'")
    ) {
      content = `import path from "path";\n${content}`
    }
    console.log(pc.green('✓ Updated vite.config.ts with alias'))
  }

  // --- rdsIcons() plugin ---
  content = ensureRdsIconsPlugin(content)

  fs.writeFileSync(viteConfigPath, content)
}

// Ensure the rdsIcons() plugin (and its import) are present in an existing
// vite.config.ts. No-op if already wired. Returns the updated source.
function ensureRdsIconsPlugin(content: string): string {
  if (content.includes('adms-rds-ui-icons/vite') || content.includes('rdsIcons(')) {
    console.log(pc.dim('  vite.config.ts already has the rdsIcons plugin'))
    return content
  }

  // Add the import after the vue plugin import when present, else at the top.
  const importLine = `import { rdsIcons } from "@banavasi/adms-rds-ui-icons/vite";`
  if (/import\s+vue\s+from\s+['"]@vitejs\/plugin-vue['"];?\n/.test(content)) {
    content = content.replace(
      /(import\s+vue\s+from\s+['"]@vitejs\/plugin-vue['"];?\n)/,
      `$1${importLine}\n`
    )
  } else {
    content = `${importLine}\n${content}`
  }

  // Inject into the existing plugins array, or create one inside defineConfig.
  const pluginEntry = `rdsIcons({ packages: ["light"] }),`
  if (/plugins:\s*\[/.test(content)) {
    // Consume whitespace after `[` so the existing first plugin keeps its own
    // line instead of being mashed onto the rdsIcons() entry.
    content = content.replace(/plugins:\s*\[\s*/, `plugins: [\n    ${pluginEntry}\n    `)
  } else {
    content = content.replace(/(defineConfig\(\s*\{)/, `$1\n  plugins: [${pluginEntry}],`)
  }

  console.log(pc.green('✓ Wired rdsIcons() plugin into vite.config.ts'))
  return content
}

// Merge paths without duplicating existing aliases
function mergePaths(
  existingPaths: Record<string, string[]> | undefined,
  newPaths: Record<string, string[]>
): Record<string, string[]> {
  const merged = { ...existingPaths }
  for (const [key, value] of Object.entries(newPaths)) {
    if (!merged[key]) {
      merged[key] = value
    }
  }
  return merged
}

// Update tsconfig.json with paths
async function updateTsConfig(cwd: string, config: RdsConfig) {
  const tsConfigPath = path.join(cwd, 'tsconfig.json')

  const paths: Record<string, string[]> = {
    [`${config.alias}/*`]: [`./${config.srcDir}/*`],
  }

  if (config.componentsAlias) {
    paths[`${config.componentsAlias}/*`] = [`./${config.componentsDir}/*`]
  }

  if (!fs.existsSync(tsConfigPath)) {
    const tsConfig = {
      compilerOptions: {
        target: 'ES2020',
        module: 'ESNext',
        moduleResolution: 'bundler',
        strict: true,
        jsx: 'preserve',
        skipLibCheck: true,
        baseUrl: '.',
        paths,
      },
      include: [`${config.srcDir}/**/*`, `${config.srcDir}/**/*.vue`],
      exclude: ['node_modules', 'dist'],
    }
    fs.writeJsonSync(tsConfigPath, tsConfig, { spaces: 2 })
    console.log(pc.green('✓ Created tsconfig.json'))
    return
  }

  const tsConfig = readJsoncSync<TsConfigFile>(tsConfigPath)

  // Check if using TypeScript project references
  const usesProjectReferences =
    Array.isArray(tsConfig.references) &&
    tsConfig.references.length > 0 &&
    Array.isArray(tsConfig.files) &&
    tsConfig.files.length === 0

  if (usesProjectReferences) {
    // Find and update the app tsconfig (the one that includes src files)
    let appConfigUpdated = false

    for (const ref of tsConfig.references ?? []) {
      const refPath = path.join(cwd, ref.path)
      const refConfigPath = refPath.endsWith('.json') ? refPath : `${refPath}.json`

      if (!fs.existsSync(refConfigPath)) continue

      const refConfig = readJsoncSync<TsConfigFile>(refConfigPath)

      // Check if this config includes src files
      const includesSrc =
        Array.isArray(refConfig.include) &&
        refConfig.include.some((inc: string) => inc.includes('src/') || inc.startsWith('src'))

      if (includesSrc) {
        refConfig.compilerOptions = refConfig.compilerOptions || {}
        refConfig.compilerOptions.baseUrl = '.'
        refConfig.compilerOptions.paths = mergePaths(refConfig.compilerOptions.paths, paths)

        fs.writeJsonSync(refConfigPath, refConfig, { spaces: 2 })
        console.log(pc.green(`✓ Updated ${path.basename(refConfigPath)} with paths`))
        appConfigUpdated = true
      }
    }

    // Also update root tsconfig for IDE support
    tsConfig.compilerOptions = tsConfig.compilerOptions || {}
    tsConfig.compilerOptions.baseUrl = tsConfig.compilerOptions.baseUrl || '.'
    tsConfig.compilerOptions.paths = mergePaths(tsConfig.compilerOptions.paths, paths)
    fs.writeJsonSync(tsConfigPath, tsConfig, { spaces: 2 })

    if (appConfigUpdated) {
      console.log(pc.green('✓ Updated tsconfig.json with paths'))
    } else {
      console.log(
        pc.yellow('⚠ Could not find app tsconfig to update. You may need to add paths manually.')
      )
    }
  } else {
    // Standard tsconfig without project references
    tsConfig.compilerOptions = tsConfig.compilerOptions || {}
    tsConfig.compilerOptions.baseUrl = tsConfig.compilerOptions.baseUrl || '.'
    tsConfig.compilerOptions.paths = mergePaths(tsConfig.compilerOptions.paths, paths)

    fs.writeJsonSync(tsConfigPath, tsConfig, { spaces: 2 })
    console.log(pc.green('✓ Updated tsconfig.json with paths'))
  }
}
