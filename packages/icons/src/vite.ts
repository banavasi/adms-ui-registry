import type { Plugin } from 'vite'
import type { RdsIconsOptions } from './generate.js'
import { generateAppModule, generateSetupModule } from './generate.js'
import { APP_MODULE, SETUP_MODULE } from './modules.js'

export type { FaIconsConfig, FaPackage } from './constants.js'
export { FA_PACKAGE_MODULE, FA_PREFIX, RDS_ICONS, toFaExportName } from './constants.js'
export { generateAppModule, generateSetupModule, type RdsIconsOptions } from './generate.js'

const VIRTUAL_SETUP_ID = 'virtual:rds-icons-setup'
const RESOLVED_SETUP_ID = '\0virtual:rds-icons-setup'
const VIRTUAL_APP_ID = 'virtual:rds-icons-app'
const RESOLVED_APP_ID = '\0virtual:rds-icons-app'

/**
 * Vite plugin that registers Font Awesome Pro icons for ADMS RDS UI.
 *
 * @example
 * ```ts
 * // vite.config.ts
 * import { defineConfig } from 'vite'
 * import vue from '@vitejs/plugin-vue'
 * import { rdsIcons } from '@banavasi/adms-rds-ui-icons/vite'
 *
 * export default defineConfig({
 *   plugins: [
 *     vue(),
 *     rdsIcons({
 *       packages: ['light', 'solid'],
 *       icons: { light: ['star'], solid: ['user'] },
 *     }),
 *   ],
 * })
 * ```
 *
 * Then in `main.ts` — one line registers icons globally:
 * ```ts
 * import rdsIconsApp from '@banavasi/adms-rds-ui-icons/app'
 * createApp(App).use(rdsIconsApp).mount('#app')
 *
 * // Now use anywhere — no import needed in each component:
 * // <FontAwesomeIcon :icon="['fal', 'star']" />
 * ```
 */
export function rdsIcons(options: RdsIconsOptions = {}): Plugin {
  const setupSource = generateSetupModule(options)
  const appSource = generateAppModule()

  return {
    name: 'rds-icons',
    enforce: 'pre',
    resolveId(source) {
      if (source === SETUP_MODULE || source === VIRTUAL_SETUP_ID) return RESOLVED_SETUP_ID
      if (source === APP_MODULE || source === VIRTUAL_APP_ID) return RESOLVED_APP_ID
      return undefined
    },
    load(id) {
      if (id === RESOLVED_SETUP_ID) return setupSource
      if (id === RESOLVED_APP_ID) return appSource
      return undefined
    },
  }
}

export default rdsIcons
