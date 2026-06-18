import type { App } from 'vue'

/**
 * Stub for `@banavasi/adms-rds-ui-icons/app`.
 *
 * In a Vite project the `rdsIcons()` plugin replaces this with a module that
 * registers your configured icons and exports the global Vue plugin.
 *
 * @example
 * ```ts
 * // main.ts — one import, use anywhere in templates without per-file imports
 * import rdsIconsApp from '@banavasi/adms-rds-ui-icons/app'
 * createApp(App).use(rdsIconsApp).mount('#app')
 * ```
 */
declare const rdsIconsApp: {
  install: (app: App) => void
}

export { rdsIconsApp as rdsFontAwesome }
export default rdsIconsApp
