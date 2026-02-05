import path from 'node:path'
import fs from 'fs-extra'
import pc from 'picocolors'
import prompts from 'prompts'
import { configExists, loadConfig } from '../utils/config.js'
import { installDependencies } from '../utils/package-manager.js'
import { fetchFile, fetchRegistry } from '../utils/registry.js'
import { transformImports } from '../utils/transformer.js'

interface AddOptions {
  yes?: boolean
  overwrite?: boolean
}

export async function add(components: string[] | undefined, options: AddOptions) {
  const cwd = process.cwd()

  // Check if initialized
  if (!configExists(cwd)) {
    console.log(pc.red('❌ rds-ui.json not found. Run `rds-ui init` first.'))
    process.exit(1)
  }

  const config = loadConfig(cwd)

  // Fetch registry
  console.log(pc.dim('Fetching registry...'))
  const registry = await fetchRegistry()

  // If no components specified, prompt
  if (!components || components.length === 0) {
    const choices = Object.entries(registry.components).map(([key, comp]) => ({
      title: comp.name,
      value: key,
    }))

    const response = await prompts({
      type: 'multiselect',
      name: 'components',
      message: 'Which components would you like to add?',
      choices,
      min: 1,
    })

    components = response.components
  }

  if (!components || components.length === 0) {
    console.log(pc.dim('No components selected.'))
    process.exit(0)
  }

  // Filter out lib dependencies (handled separately)
  const libComponents = components.filter((c) => c.startsWith('lib/'))
  const actualComponents = components.filter((c) => !c.startsWith('lib/'))

  // Warn about lib dependencies if needed
  for (const libDep of libComponents) {
    const fileName = libDep.replace('lib/', '') + '.ts'
    const libPath = path.join(cwd, config.libDir, fileName)
    if (!fs.existsSync(libPath)) {
      console.log(pc.yellow(`⚠ Missing ${libDep}. Run \`adms-rds-ui init\` to install it.`))
    }
  }

  // If only lib deps were requested, exit early
  if (actualComponents.length === 0) {
    if (libComponents.length > 0) {
      console.log(pc.dim('Lib dependencies are installed via `adms-rds-ui init`.'))
    }
    return
  }

  // Update components to only include actual components
  components = actualComponents

  // Validate components
  for (const comp of components) {
    if (!registry.components[comp]) {
      console.log(pc.red(`❌ Unknown component: ${comp}`))
      console.log(pc.dim(`Available: ${Object.keys(registry.components).join(', ')}`))
      process.exit(1)
    }
  }

  // Collect all dependencies
  const allDeps: string[] = []
  const allRegistryDeps: string[] = []

  // Process each component
  for (const compKey of components) {
    const comp = registry.components[compKey]
    console.log(pc.cyan(`\n📦 Adding ${comp.name}...\n`))

    // Collect dependencies
    allDeps.push(...comp.dependencies)
    allRegistryDeps.push(...comp.registryDependencies)

    // Component folder name
    const compFolder = comp.name
    const destDir = path.join(cwd, config.componentsDir, compFolder)

    for (const file of comp.files) {
      const fileName = path.basename(file)
      const destPath = path.join(destDir, fileName)

      // Check if exists
      if (fs.existsSync(destPath) && !options.overwrite) {
        if (!options.yes) {
          const { overwrite } = await prompts({
            type: 'confirm',
            name: 'overwrite',
            message: `${fileName} already exists. Overwrite?`,
            initial: false,
          })
          if (!overwrite) {
            console.log(pc.dim(`  Skipped ${fileName}`))
            continue
          }
        } else {
          console.log(pc.dim(`  Skipped ${fileName} (use --overwrite)`))
          continue
        }
      }

      // Fetch file
      let content = await fetchFile(file)

      // Transform imports with user's alias
      content = transformImports(content, config)

      // Write file
      fs.ensureDirSync(destDir)
      fs.writeFileSync(destPath, content)
      console.log(pc.green(`✓ Created ${config.componentsDir}/${compFolder}/${fileName}`))
    }
  }

  // Handle registry dependencies (other components)
  const uniqueRegistryDeps = [...new Set(allRegistryDeps)].filter(
    (dep) => !components!.includes(dep)
  )

  // Separate lib dependencies from component dependencies
  const libDeps = uniqueRegistryDeps.filter((dep) => dep.startsWith('lib/'))
  const componentDeps = uniqueRegistryDeps.filter((dep) => !dep.startsWith('lib/'))

  // Handle lib dependencies (check if they exist, warn if missing)
  if (libDeps.length > 0) {
    for (const libDep of libDeps) {
      // lib/util -> util.ts
      const fileName = libDep.replace('lib/', '') + '.ts'
      const libPath = path.join(cwd, config.libDir, fileName)
      if (!fs.existsSync(libPath)) {
        console.log(pc.yellow(`\n⚠ Missing ${libDep}. Run \`adms-rds-ui init\` to install it.`))
      }
    }
  }

  // Recursively add component dependencies
  if (componentDeps.length > 0) {
    console.log(pc.yellow(`\n⚠ Installing required component dependencies...`))
    for (const dep of componentDeps) {
      await add([dep], { ...options, yes: true })
    }
  }

  // Install npm dependencies
  const uniqueDeps = [...new Set(allDeps)]
  if (uniqueDeps.length > 0) {
    console.log(pc.cyan('\n📦 Installing dependencies...\n'))
    installDependencies(cwd, uniqueDeps)
  }

  // Print usage
  const compPath = config.componentsDir.replace(`${config.srcDir}/`, '')

  console.log(pc.cyan('\n✅ Done!\n'))
  console.log('Usage:')
  for (const compKey of components) {
    const comp = registry.components[compKey]
    console.log(
      pc.white(`  import { ${comp.name} } from "${config.alias}/${compPath}/${comp.name}";`)
    )
  }
  console.log('')
}
