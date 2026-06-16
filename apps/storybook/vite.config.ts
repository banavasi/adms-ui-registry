import path from 'node:path'
import { rdsIcons } from '@banavasi/adms-rds-ui-icons/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    rdsIcons({
      packages: ['light'],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
