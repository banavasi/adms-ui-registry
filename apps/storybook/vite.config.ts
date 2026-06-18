import path from 'node:path'
import { rdsIcons } from '@banavasi/adms-rds-ui-icons/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    rdsIcons({
      packages: ['light'],
      // Demo icons used by the stories (the RDS preset icons are added
      // automatically by `rds: true`). Declaring a name here is all it takes
      // for `<FontAwesomeIcon :icon="['fal', 'name']" />` to render.
      icons: {
        light: [
          'star',
          'heart',
          'house',
          'gear',
          'bell',
          'circle-question',
          'triangle-exclamation',
          'magnifying-glass',
          'user',
          'envelope',
          'calendar',
          'trash',
          'pen',
          'download',
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
