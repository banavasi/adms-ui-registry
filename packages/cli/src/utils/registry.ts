import path from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'fs-extra'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const REGISTRY_BASE_URL =
  'https://raw.githubusercontent.com/banavasi/adms-ui-registry/main/registry'

function getRegistryPath(): string | null {
  const localPath = path.resolve(__dirname, '../../../registry')
  if (fs.existsSync(localPath)) {
    return localPath
  }
  return null
}

export interface RegistryIndex {
  name: string
  baseUrl: string
  lib: {
    utils: {
      files: string[]
      dependencies: string[]
    }
  }
  styles: {
    files: string[]
    dependencies: string[]
  }
  components: Record<
    string,
    {
      name: string
      files: string[]
      dependencies: string[]
      registryDependencies: string[]
    }
  >
}

export async function fetchRegistry(): Promise<RegistryIndex> {
  const localPath = getRegistryPath()

  if (localPath) {
    const indexPath = path.join(localPath, 'index.json')
    return fs.readJsonSync(indexPath)
  }

  const res = await fetch(`${REGISTRY_BASE_URL}/index.json`)
  if (!res.ok) {
    throw new Error(`Failed to fetch registry: ${res.statusText}`)
  }
  return res.json() as Promise<RegistryIndex>
}

export async function fetchFile(filePath: string): Promise<string> {
  const localPath = getRegistryPath()

  if (localPath) {
    const fullPath = path.join(localPath, filePath)
    return fs.readFileSync(fullPath, 'utf-8')
  }

  const res = await fetch(`${REGISTRY_BASE_URL}/${filePath}`)
  if (!res.ok) {
    throw new Error(`Failed to fetch ${filePath}: ${res.statusText}`)
  }
  return res.text()
}
