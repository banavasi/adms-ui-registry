# ADMS RDS UI Registry

A Vue 3 component library implementing the **ASU Rocket Design System (RDS)**. This monorepo contains a CLI tool for installing components into your projects, shared ESLint configuration, and Storybook for component documentation.

## What is this?

This is **not** a traditional npm component library. Instead, components are copied directly into your project via our CLI. This gives you:

- **Full ownership** of component code — customize anything
- **No dependency chains** — components live in your codebase
- **Design system consistency** — ASU brand tokens built-in
- **Vue 3 + Bootstrap 5** — familiar stack with Reka UI primitives

---

## Published Packages

| Package | Version | Description |
|---------|---------|-------------|
| [`@banavasi/adms-rds-ui-cli`](packages/cli/README.md) | ![CLI](https://img.shields.io/npm/v/@banavasi/adms-rds-ui-cli) | CLI tool to add components to your project |
| [`@banavasi/eslint-config`](packages/eslint-config/README.md) | ![ESLint](https://img.shields.io/npm/v/@banavasi/eslint-config) | ESLint configuration for Vue + TypeScript projects |

---

## Quick Start

### 1. Install the CLI

```bash
# Using npm
npm install -g @banavasi/adms-rds-ui-cli

# Using pnpm
pnpm add -g @banavasi/adms-rds-ui-cli

# Using yarn
yarn global add @banavasi/adms-rds-ui-cli

# Using bun
bun add -g @banavasi/adms-rds-ui-cli

# Or use npx without installing (not recommended for frequent use)
npx @banavasi/adms-rds-ui-cli init
```

The CLI installs an `adms-rds-ui` command that you can run from any Vue project.

### 2. Initialize Your Project

```bash
# From your Vue project directory
adms-rds-ui init
```

**What `init` does:**

| Step | Description |
|------|-------------|
| 1. Detects package manager | Automatically finds pnpm, npm, yarn, or bun |
| 2. Creates directories | Sets up `src/components/ui/` and `src/styles/` |
| 3. Copies utility functions | Adds `src/lib/util.ts` with `cn()` helper |
| 4. Copies SCSS styles | Adds all ASU brand styles (colors, variables, etc.) |
| 5. Updates config files | Modifies `vite.config.ts` and `tsconfig.json` with path aliases |
| 6. Installs dependencies | Adds required packages: `reka-ui`, `bootstrap`, etc. |
| 7. Creates config file | Generates `rds-ui.json` for project settings |

**Files created/modified:**

```
your-project/
├── src/
│   ├── components/ui/          # New: Component directory
│   ├── lib/
│   │   └── util.ts             # New: Utility functions (cn, cva)
│   └── styles/                 # New: ASU brand styles
│       ├── _colors.scss
│       ├── _variables.scss
│       ├── _spacing.scss
│       ├── _typography.scss
│       ├── _mixins.scss
│       ├── _index.scss
│       └── styles.scss
├── vite.config.ts              # Modified: Adds path aliases
├── tsconfig.json               # Modified: Adds path aliases
└── rds-ui.json                 # New: CLI configuration
```

### 3. Import Styles in Your App

Add this to your main entry file (`main.ts` or `main.js`):

```typescript
import '@/styles/styles.scss'
```

### 4. Add Components

```bash
# Add a specific component
adms-rds-ui add button

# Add multiple components
adms-rds-ui add button tooltip card

# Add with options
adms-rds-ui add button --yes --overwrite
```

**What `add` does:**

| Step | Description |
|------|-------------|
| 1. Fetches component | Reads from local or remote registry |
| 2. Copies files | Places component in `src/components/ui/{ComponentName}/` |
| 3. Installs deps | Adds component-specific dependencies |
| 4. Updates imports | Transforms `@/` imports to your alias |

---

## Available Components

| Component | Description | Dependencies |
|-----------|-------------|--------------|
| [Button](#button) | Primary/secondary/outline buttons with variants | `reka-ui` |
| [Tooltip](#tooltip) | Accessible tooltips with positioning | `reka-ui` |

---

## Component Usage

### Button

```vue
<script setup lang="ts">
import { Button } from '@/components/ui/Button'
</script>

<template>
  <!-- Variants -->
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="success">Success</Button>
  <Button variant="danger">Danger</Button>
  <Button variant="warning">Warning</Button>
  <Button variant="info">Info</Button>

  <!-- Outline variants -->
  <Button variant="outline-primary">Outline Primary</Button>
  <Button variant="outline-secondary">Outline Secondary</Button>

  <!-- Sizes -->
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>

  <!-- Link style -->
  <Button variant="link">Link Button</Button>
</template>
```

**Button Variants:**

| Variant | Description |
|---------|-------------|
| `primary` | ASU Maroon (`#8c1d40`) |
| `secondary` | ASU Gold (`#ffc627`) |
| `success` | Green (`#78be20`) |
| `danger` | Red (`#cc2f2f`) |
| `warning` | Orange (`#ff7f32`) |
| `info` | Blue (`#00a3e0`) |
| `light` | Light gray |
| `dark` | Dark gray |
| `outline-*` | Outlined versions |
| `link` | Link styled |

**Button Sizes:**

| Size | Description |
|------|-------------|
| `sm` | Small button |
| `md` | Medium (default) |
| `lg` | Large button |

### Tooltip

```vue
<script setup lang="ts">
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/Tooltip'
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger as-child>
        <button class="btn btn-primary">Hover me</button>
      </TooltipTrigger>
      <TooltipContent>
        This is a tooltip
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
```

**Tooltip Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `side` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'top'` | Tooltip position |
| `align` | `'start' \| 'center' \| 'end'` | `'center'` | Alignment on the side |
| `sideOffset` | `number` | `5` | Distance from trigger |
| `delayDuration` | `number` | `400` | Delay before showing |

---

## ESLint Configuration

The `@banavasi/eslint-config` package provides a shareable ESLint configuration for Vue 3 + TypeScript projects.

### Installation

```bash
npm install -D @banavasi/eslint-config
```

### Usage

Create an `eslint.config.js` in your project root:

```javascript
import config from "@banavasi/eslint-config";

export default [
  ...config,
];
```

**What the ESLint config includes:**

| Feature | Description |
|---------|-------------|
| Vue 3 support | Via `eslint-plugin-vue` |
| TypeScript | Via `@typescript-eslint/eslint-plugin` |
| Antfu config | Extends popular `@antfu/eslint-config` |
| Auto-fix rules | Opinionated formatting rules |

---

## Design Tokens

### ASU Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `$asu-maroon` | `#8c1d40` | Primary brand color |
| `$asu-gold` | `#ffc627` | Secondary brand color |
| `$asu-gold-light` | `#ffeebd` | Light gold accent |
| `$asu-success` | `#78be20` | Success states |
| `$asu-info` | `#00a3e0` | Information/links |
| `$asu-warning` | `#ff7f32` | Warnings |
| `$asu-danger` | `#cc2f2f` | Errors/danger |

### Neutral Colors (Light)

| Token | Hex |
|-------|-----|
| `$asu-light-1` | `#fafafa` |
| `$asu-light-2` | `#f5f5f5` |
| `$asu-light-3` | `#e5e5e5` |
| `$asu-light-4` | `#d4d4d4` |
| `$asu-light-5` | `#bfbfbf` |

### Neutral Colors (Dark)

| Token | Hex |
|-------|-----|
| `$asu-dark-1` | `#747474` |
| `$asu-dark-2` | `#404040` |
| `$asu-dark-3` | `#191919` |

### CSS Custom Properties

All colors are available as CSS custom properties with the `--rds-` prefix:

```css
.my-element {
  color: var(--rds-primary);
  background: var(--rds-light-1);
}
```

---

## Development

```bash
# Install dependencies
pnpm install

# Run CLI in watch mode
pnpm dev

# Run Storybook
pnpm --filter storybook dev

# Build all packages
pnpm build

# Run linting
pnpm lint

# Format code with Biome
pnpm format
```

---

## Registry Structure

```
registry/
├── ui/                 # Component source files
│   ├── button/
│   │   ├── Button.vue
│   │   └── index.ts
│   └── tooltip/
│       ├── Tooltip.vue
│       ├── TooltipProvider.vue
│       ├── TooltipTrigger.vue
│       ├── TooltipContent.vue
│       ├── tooltip.css
│       └── index.ts
├── lib/                # Utility functions
│   └── util.ts
├── styles/             # ASU brand SCSS
│   ├── _colors.scss
│   ├── _variables.scss
│   ├── _spacing.scss
│   ├── _typography.scss
│   ├── _mixins.scss
│   ├── _index.scss
│   └── styles.scss
└── index.json          # Registry manifest
```

---

## How Releases Work

1. **Add a changeset** when making changes:
   ```bash
   pnpm changeset
   ```
2. **Push to main** — CI creates a Version PR automatically
3. **Merge Version PR** — publishes packages to GitHub Packages

See [CONTRIBUTING.md](docs/CONTRIBUTING.md) for details.

---

## License

MIT

---

Built with the [ASU Rocket Design System](https://unity.web.asu.edu/) guidelines.
