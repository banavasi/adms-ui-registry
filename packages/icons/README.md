# @banavasi/adms-rds-ui-icons

Font Awesome Pro icon setup for [ADMS RDS UI](https://github.com/banavasi/adms-ui-registry). Configure which FA Pro packages and icons to bundle via a Vite plugin — only the icons you list are imported.

## Install

Installed automatically by `adms-rds-ui init`. To add manually:

```bash
pnpm add @banavasi/adms-rds-ui-icons \
  @fortawesome/fontawesome-svg-core \
  @fortawesome/vue-fontawesome \
  @fortawesome/pro-light-svg-icons
```

Font Awesome Pro requires a registry auth token — see the [main README](../../README.md#fontawesome-pro-auth).

## Quick start

### 1. Configure icons in `vite.config.ts`

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { rdsIcons } from '@banavasi/adms-rds-ui-icons/vite'

export default defineConfig({
  plugins: [
    vue(),
    rdsIcons({
      // Which FA Pro style packages to pull icons from
      packages: ['light', 'solid'],

      // Icons to register (kebab-case), per package
      icons: {
        light: ['star', 'heart'],
        solid: ['user'],
      },

      // Include all icons used by ADMS RDS UI components (default: true)
      rds: true,
    }),
  ],
})
```

`rds: true` (default) automatically includes the icons RDS components need (`check`, `chevron-down`, `xmark`, etc.) so you don't have to list them.

### 2. Load icons once in `main.ts` (global — no per-file imports)

```ts
// main.ts
import rdsIconsApp from '@banavasi/adms-rds-ui-icons/app'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(rdsIconsApp).mount('#app')
```

This registers your configured icons **and** makes `<FontAwesomeIcon>` available in every template.

### 3. Use icons in any template — no import needed

```vue
<template>
  <FontAwesomeIcon :icon="['fal', 'star']" />
  <FontAwesomeIcon :icon="['fas', 'user']" />
</template>
```

RDS components still import from `@/components/ui/icon` internally; your app code does not need to.

## API

### `rdsIcons(options)` — Vite plugin

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `packages` | `('light' \| 'solid' \| 'regular')[]` | `['light']` | FA Pro packages to import from |
| `icons` | `{ light?: string[], solid?: string[], regular?: string[] }` | `{}` | Extra icons to register (kebab-case) |
| `rds` | `boolean` | `true` | Include the RDS component icon preset |

### Runtime exports (`@banavasi/adms-rds-ui-icons`)

| Export | Description |
|--------|-------------|
| `FontAwesomeIcon` | Vue component |
| `rdsFontAwesome` | Vue plugin for global `<FontAwesomeIcon>` |
| `library` | Font Awesome library (for advanced `library.add()` usage) |

## Adding more FA packages

To use solid or regular icons, add the npm package **and** list the package in `rdsIcons({ packages: [...] })`:

```bash
pnpm add @fortawesome/pro-solid-svg-icons
```

```ts
rdsIcons({
  packages: ['light', 'solid'],
  icons: {
    solid: ['shield'],
  },
})
```

Only icons listed under `icons` (plus the RDS preset when enabled) are bundled — tree-shaken per your config.
