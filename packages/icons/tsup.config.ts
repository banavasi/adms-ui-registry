import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts', 'src/vite.ts', 'src/setup.ts', 'src/app.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
  sourcemap: true,
  external: [
    'vite',
    'vue',
    '@fortawesome/fontawesome-svg-core',
    '@fortawesome/vue-fontawesome',
    '@fortawesome/pro-light-svg-icons',
    '@fortawesome/pro-solid-svg-icons',
    '@fortawesome/pro-regular-svg-icons',
  ],
})
