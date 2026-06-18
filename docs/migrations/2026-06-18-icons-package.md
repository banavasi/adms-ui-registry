# Upgrade notes: Font Awesome icons move to a published package

**Affected CLI version:** `@banavasi/adms-rds-ui-cli` **3.3.0**
**New package:** `@banavasi/adms-rds-ui-icons` **0.2.0**
**Affected components:** `icon`, and every component that depends on it
(`Button`, `Heading`, `Select`, `Combobox`, `ListBox`, `RadioCard`,
`InputPasswordToggle`, …)

Icons are no longer copied into your project as a `fontawesome.ts` file you had to
hand-maintain. They now come from a published package,
[`@banavasi/adms-rds-ui-icons`](https://www.npmjs.com/package/@banavasi/adms-rds-ui-icons),
which ships a Vite plugin (`rdsIcons()`) that registers exactly the Font Awesome
Pro icons you ask for — tree-shaken, no per-component `import { faStar }`.

## What changed

- **`adms-rds-ui init`** now:
  - installs `@banavasi/adms-rds-ui-icons` and the `@fortawesome/pro-light-svg-icons`
    peer,
  - wires `rdsIcons({ packages: ["light"] })` into your `vite.config.ts`,
  - prints the one-line `main.ts` registration step (below).
- **The `icon` registry component** is now a thin re-export:
  `export { FontAwesomeIcon } from '@banavasi/adms-rds-ui-icons'` — instead of a
  copied `fontawesome.ts` with a hardcoded `library.add(...)` list.
- **Icon set is declared, not copied.** The RDS preset icons (`check`,
  `chevron-down`, `circle-info`, `xmark`, …) register automatically. Anything
  else you use, you declare by name in `vite.config.ts`.

## What you may need to do

### 1. Authenticate Font Awesome Pro (one-time, per machine / CI)

The FA Pro packages come from a private registry. The repo's committed `.npmrc`
already points `@fortawesome` at `https://npm.fontawesome.com/`, but the **token
must live in your user `~/.npmrc`** (pnpm refuses to expand env vars in a
committed `.npmrc`):

```bash
echo "//npm.fontawesome.com/:_authToken=YOUR_TOKEN" >> ~/.npmrc
```

In CI, write it from a secret (this repo uses `FONTAWESOME_NPM_AUTH_TOKEN`).
If `init` fails at the install step, this is almost always why.

### 2. Register the icons plugin in `main.ts`

`init` wires the Vite plugin, but the global `<FontAwesomeIcon>` component still
needs to be registered once on your app:

```ts
import { createApp } from 'vue'
import App from './App.vue'
import rdsIconsApp from '@banavasi/adms-rds-ui-icons/app'

createApp(App).use(rdsIconsApp).mount('#app')
```

That single `.use(rdsIconsApp)` registers `<FontAwesomeIcon>` (and the
`font-awesome-icon` kebab alias) globally — no per-component import.

### 3. Use icons by name

```vue
<template>
  <FontAwesomeIcon :icon="['fal', 'star']" />
</template>
```

`fal` = light, `fas` = solid, `far` = regular. Do **not**
`import { faStar } from '@fortawesome/...'` inside a component.

### 4. Declare any non-preset icons you use

If a name isn't in the RDS preset, add it to `rdsIcons()` in `vite.config.ts`:

```ts
import { rdsIcons } from '@banavasi/adms-rds-ui-icons/vite'

export default defineConfig({
  plugins: [
    vue(),
    rdsIcons({
      packages: ['light'],
      icons: { light: ['star', 'heart', 'gear'] },
    }),
  ],
})
```

To use solid/regular styles, add the package to both the `packages` list and
install the matching `@fortawesome/pro-solid-svg-icons` /
`@fortawesome/pro-regular-svg-icons` peer:

```ts
rdsIcons({
  packages: ['light', 'solid'],
  icons: { light: ['star'], solid: ['user'] },
})
```

### 5. If you have an existing project with a copied `fontawesome.ts`

Earlier setups copied a `fontawesome.ts` into `src/lib` (or similar) with a
manual `library.add(...)`. To migrate:

1. Re-run `adms-rds-ui init` — it installs the package, wires the plugin, and
   prints the `main.ts` step. It is idempotent: an already-wired
   `vite.config.ts` is left alone.
2. Replace your old global registration (importing the copied `fontawesome.ts`)
   with `app.use(rdsIconsApp)` as in step 2.
3. Move the icon names from your old `library.add(...)` into
   `rdsIcons({ icons: { light: [...] } })` — only the names you actually use.
   Preset icons can be dropped (they register automatically).
4. Delete the old `fontawesome.ts`.

## Verification checklist

- [ ] `vite.config.ts` imports `rdsIcons` from `@banavasi/adms-rds-ui-icons/vite`
      and lists it in `plugins`.
- [ ] `main.ts` calls `.use(rdsIconsApp)`.
- [ ] `@banavasi/adms-rds-ui-icons` and `@fortawesome/pro-light-svg-icons` are in
      `package.json` and installed.
- [ ] Preset icons (e.g. a `Select` chevron, a password-toggle eye) render
      without being listed in `rdsIcons({ icons })`.
- [ ] Any custom icon you reference by name is declared under
      `rdsIcons({ icons })` — an unregistered name renders nothing.
