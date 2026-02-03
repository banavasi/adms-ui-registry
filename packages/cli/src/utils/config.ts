import path from 'node:path'
import fs from 'fs-extra'

export interface RdsConfig {
  alias: string
  srcDir: string
  componentsDir: string
  componentsAlias: string
  libDir: string
  stylesDir: string
}

const CONFIG_FILE = 'rds-ui.json'

export function getConfigPath(cwd: string): string {
  return path.join(cwd, CONFIG_FILE)
}

export function configExists(cwd: string): boolean {
  return fs.existsSync(getConfigPath(cwd))
}

export function loadConfig(cwd: string): RdsConfig {
  const configPath = getConfigPath(cwd)
  if (!fs.existsSync(configPath)) {
    throw new Error('rds-ui.json not found. Run `adms-rds-ui init` first.')
  }
  return fs.readJsonSync(configPath)
}

export function saveConfig(cwd: string, config: RdsConfig): void {
  fs.writeJsonSync(getConfigPath(cwd), config, { spaces: 2 })
}

export function getDefaultConfig(): RdsConfig {
  return {
    alias: '@',
    srcDir: 'src',
    componentsDir: 'src/components/ui',
    componentsAlias: '',
    libDir: 'src/lib',
    stylesDir: 'src/styles',
  }
}
