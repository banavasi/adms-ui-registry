/**
 * Sync all components from the local registry to Storybook.
 * Reads registry/index.json and installs all listed components.
 */

import { readFileSync, existsSync } from 'node:fs'
import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const REGISTRY_INDEX = join(__dirname, '../../registry/index.json')
const CLI_PATH = join(__dirname, '../../packages/cli/dist/index.js')

async function runCli(args) {
  return new Promise((resolve, reject) => {
    const proc = spawn('node', [CLI_PATH, ...args], {
      stdio: 'inherit',
      cwd: __dirname,
    })

    proc.on('close', (code) => {
      if (code === 0) {
        resolve()
      } else {
        reject(new Error(`CLI exited with code ${code}`))
      }
    })
  })
}

async function main() {
  console.log('📦 Syncing components from local registry...\n')

  // Read registry index
  if (!existsSync(REGISTRY_INDEX)) {
    console.error(`❌ Registry index not found: ${REGISTRY_INDEX}`)
    process.exit(1)
  }

  const registry = JSON.parse(readFileSync(REGISTRY_INDEX, 'utf-8'))
  const components = Object.keys(registry.components || {})

  if (components.length === 0) {
    console.log('No components found in registry.')
    return
  }

  console.log(`Found ${components.length} component(s): ${components.join(', ')}\n`)

  // Initialize if needed
  console.log('🔧 Initializing Storybook registry...')
  await runCli(['init', '-y'])

  // Install each component (skip registry deps like lib/util which are installed via init)
  for (const component of components) {
    // Skip library dependencies - they're installed during init
    if (component.includes('/') || registry.lib?.[component]) {
      console.log(`\n⏭️  Skipping ${component} (library dependency)`)
      continue
    }

    console.log(`\n📥 Installing ${component}...`)
    try {
      await runCli(['add', component, '-y', '-o'])
      console.log(`✅ ${component} installed`)
    } catch (err) {
      console.error(`❌ Failed to install ${component}:`, err.message)
    }
  }

  console.log('\n✨ Sync complete!')
  console.log(`\nInstalled components: ${components.join(', ')}`)
}

main().catch((err) => {
  console.error('❌ Sync failed:', err)
  process.exit(1)
})
