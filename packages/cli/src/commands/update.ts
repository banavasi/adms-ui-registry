import path from 'node:path'
import fs from 'fs-extra'
import pc from 'picocolors'
import prompts from 'prompts'
import { configExists, loadConfig } from '../utils/config.js'
import { fetchFile, fetchRegistry } from '../utils/registry.js'
import { transformImports } from '../utils/transformer.js'

interface UpdateOptions {
  yes?: boolean
  overwrite?: boolean
  check?: boolean
}

interface Change {
  name: string
  destPath: string
  rel: string
  next: string
  isNew: boolean
}

/**
 * Update already-installed components to the latest registry version.
 *
 * Components are discovered by scanning the configured `componentsDir` for
 * folders whose name matches a registry component (the same PascalCase folder
 * `add` writes). Each registry file is fetched, import-transformed with the
 * local config, and compared byte-for-byte against the installed file — so a
 * clean, unmodified install reads as "up to date".
 */
export async function update(components: string[] | undefined, options: UpdateOptions) {
  const cwd = process.cwd()

  if (!configExists(cwd)) {
    console.log(pc.red('❌ rds-ui.json not found. Run `adms-rds-ui init` first.'))
    process.exit(1)
  }

  const config = loadConfig(cwd)

  console.log(pc.dim('Fetching registry...'))
  const registry = await fetchRegistry()

  // Map installed folder name (comp.name) -> registry key
  const nameToKey = new Map<string, string>()
  for (const [key, comp] of Object.entries(registry.components)) {
    nameToKey.set(comp.name, key)
  }

  const componentsRoot = path.join(cwd, config.componentsDir)
  if (!fs.existsSync(componentsRoot)) {
    console.log(pc.red(`❌ Components directory not found: ${config.componentsDir}`))
    process.exit(1)
  }

  // Resolve which components to update
  let targetKeys: string[] = []
  if (components && components.length > 0) {
    for (const c of components) {
      if (registry.components[c]) {
        targetKeys.push(c)
      } else if (nameToKey.has(c)) {
        targetKeys.push(nameToKey.get(c) as string)
      } else {
        console.log(pc.red(`❌ Unknown component: ${c}`))
        console.log(pc.dim(`Available: ${Object.keys(registry.components).join(', ')}`))
        process.exit(1)
      }
    }
  } else {
    // Auto-discover installed components by scanning folders
    targetKeys = fs
      .readdirSync(componentsRoot, { withFileTypes: true })
      .filter((entry) => entry.isDirectory() && nameToKey.has(entry.name))
      .map((entry) => nameToKey.get(entry.name) as string)
  }

  if (targetKeys.length === 0) {
    console.log(pc.dim('No installed RDS UI components found to update.'))
    return
  }

  // Diff each installed component against the registry
  const changes: Change[] = []
  for (const compKey of targetKeys) {
    const comp = registry.components[compKey]
    const destDir = path.join(cwd, config.componentsDir, comp.name)

    // A component counts as "installed" only if its folder exists
    if (!fs.existsSync(destDir)) continue

    for (const file of comp.files) {
      const fileName = path.basename(file)
      const destPath = path.join(destDir, fileName)
      const next = transformImports(await fetchFile(file), config)
      const current = fs.existsSync(destPath) ? fs.readFileSync(destPath, 'utf-8') : null

      if (current !== next) {
        changes.push({
          name: comp.name,
          destPath,
          rel: `${config.componentsDir}/${comp.name}/${fileName}`,
          next,
          isNew: current === null,
        })
      }
    }
  }

  if (changes.length === 0) {
    console.log(pc.green(`\n✓ All ${targetKeys.length} installed component(s) are up to date.`))
    return
  }

  // Summary grouped by component
  const byComponent = new Map<string, number>()
  for (const change of changes) {
    byComponent.set(change.name, (byComponent.get(change.name) ?? 0) + 1)
  }
  console.log(
    pc.cyan(
      `\n${changes.length} file(s) differ from the registry across ${byComponent.size} component(s):`
    )
  )
  for (const [name, count] of byComponent) {
    console.log(pc.yellow(`  • ${name} (${count} file${count > 1 ? 's' : ''})`))
  }

  if (options.check) {
    console.log(
      pc.dim('\nRun `adms-rds-ui update` to apply (or add `--overwrite` to skip confirmations).')
    )
    return
  }

  // Apply (confirm per file unless --overwrite / --yes)
  console.log('')
  let applied = 0
  for (const change of changes) {
    if (!options.overwrite && !options.yes) {
      const { ok } = await prompts({
        type: 'confirm',
        name: 'ok',
        message: change.isNew
          ? `Add new file ${change.rel}?`
          : `Update ${change.rel}? (overwrites local changes)`,
        initial: true,
      })
      if (!ok) {
        console.log(pc.dim(`  Skipped ${change.rel}`))
        continue
      }
    }

    fs.ensureDirSync(path.dirname(change.destPath))
    fs.writeFileSync(change.destPath, change.next)
    console.log(pc.green(`✓ ${change.isNew ? 'Added' : 'Updated'} ${change.rel}`))
    applied++
  }

  console.log(pc.cyan(`\n✅ Updated ${applied} file(s).`))
  if (applied < changes.length) {
    console.log(pc.dim(`${changes.length - applied} skipped.`))
  }
  console.log(
    pc.dim(
      'Note: new transitive dependencies / npm packages are not auto-installed — run `adms-rds-ui add <component>` if a component is newly required.'
    )
  )
}
