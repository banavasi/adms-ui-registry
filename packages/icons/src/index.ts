import type { App } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export { library } from '@fortawesome/fontawesome-svg-core'
export { FontAwesomeIcon }

/**
 * Optional Vue plugin that registers `<FontAwesomeIcon>` globally.
 *
 * Prefer the one-liner app entry for `main.ts`:
 * `import rdsIconsApp from '@banavasi/adms-rds-ui-icons/app'`
 */
export const rdsFontAwesome = {
  install(app: App) {
    app.component('FontAwesomeIcon', FontAwesomeIcon)
    // Font Awesome's documented kebab-case alias
    // eslint-disable-next-line vue/component-definition-name-casing -- FA convention
    app.component('font-awesome-icon', FontAwesomeIcon)
  },
}

export default rdsFontAwesome
