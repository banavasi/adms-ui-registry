# @banavasi/adms-rds-ui-cli

CLI tool for installing ADMS RDS UI components into your Vue 3 project.

## What Does This Do?

This CLI copies Vue components from the ADMS RDS UI registry directly into your project. Unlike traditional component libraries, **you own the code** — components live in your codebase and can be customized to your needs.

## Installation

### Global Installation (Recommended)

Install globally to use the `adms-rds-ui` command anywhere:

```bash
# npm
npm install -g @banavasi/adms-rds-ui-cli

# pnpm
pnpm add -g @banavasi/adms-rds-ui-cli

# yarn
yarn global add @banavasi/adms-rds-ui-cli

# bun
bun add -g @banavasi/adms-rds-ui-cli
```

### npx (Without Installing)

```bash
npx @banavasi/adms-rds-ui-cli init
```

Not recommended for frequent use as it downloads the package each time.

---

## Commands

### `adms-rds-ui init`

Initializes your project with the required base files.

```bash
adms-rds-ui init
```

**What happens:**

| Step | Description |
|------|-------------|
| 1. Package manager detection | Finds pnpm, npm, yarn, or bun in your project |
| 2. Directory creation | Creates `src/components/ui/` and `src/styles/` |
| 3. Utility functions | Copies `src/lib/util.ts` with `cn()` and CVA helpers |
| 4. SCSS styles | Copies all ASU brand styles (colors, variables, etc.) |
| 5. Config updates | Updates `vite.config.ts` and `tsconfig.json` with path aliases |
| 6. Dependencies | Installs: `clsx`, `tailwind-merge`, `class-variance-authority`, `reka-ui`, `bootstrap`, `sass` |
| 7. Config file | Creates `rds-ui.json` for project-specific settings |

**Files created/modified:**

```
your-project/
├── src/
│   ├── components/ui/          # Created
│   ├── lib/
│   │   └── util.ts             # Created
│   └── styles/                 # Created
│       ├── _colors.scss
│       ├── _variables.scss
│       ├── _spacing.scss
│       ├── _typography.scss
│       ├── _mixins.scss
│       ├── _index.scss
│       └── styles.scss
├── vite.config.ts              # Modified (adds alias)
├── tsconfig.json               # Modified (adds paths)
└── rds-ui.json                 # Created
```

**Options:**

| Flag | Alias | Description |
|------|-------|-------------|
| `--yes` | `-y` | Skip confirmation prompts |
| `--defaults` | `-d` | Use all default values |
| `--src <dir>` | `-s` | Custom source directory (default: `src`) |

### `adms-rds-ui add <component>`

Adds a component to your project.

```bash
# Add a single component
adms-rds-ui add button

# Add multiple components
adms-rds-ui add button tooltip card

# Add with options
adms-rds-ui add button --yes --overwrite
```

**What happens:**

| Step | Description |
|------|-------------|
| 1. Fetch registry | Reads component from local or remote registry |
| 2. Copy files | Places component files in `src/components/ui/{ComponentName}/` |
| 3. Install deps | Installs component-specific dependencies |
| 4. Transform imports | Updates `@/` imports to match your project alias |

**Component structure:**

Each component is copied with its full structure:

```
src/components/ui/Button/
├── Button.vue          # Vue SFC component
└── index.ts            # Exports and CVA variants
```

**Options:**

| Flag | Alias | Description |
|------|-------|-------------|
| `--yes` | `-y` | Skip confirmation prompts |
| `--overwrite` | `-o` | Overwrite existing files |
| `--src <dir>` | `-s` | Custom source directory |
| `--cwd <path>` | | Custom working directory |

---

## Available Components

Run `adms-rds-ui add` without arguments to see all available components:

```bash
adms-rds-ui add
```

| Component | Description | Dependencies |
|-----------|-------------|--------------|
| `button` | Buttons with variants (primary, secondary, outline, etc.) and sizes | `reka-ui` |
| `tooltip` | Accessible tooltips with positioning options | `reka-ui` |

---

## After Installation

### 1. Import Styles

Add to your `main.ts` or `main.js`:

```typescript
import '@/styles/styles.scss'
```

### 2. Use Components

```vue
<script setup lang="ts">
import { Button } from '@/components/ui/Button'
</script>

<template>
  <Button variant="primary">Click me</Button>
</template>
```

---

## Configuration

The CLI creates a `rds-ui.json` file in your project root:

```json
{
  "src": "src",
  "components": "@/components/ui",
  "lib": "@/lib",
  "styles": "@/styles",
  "aliases": {
    "@/components/ui": "src/components/ui",
    "@/lib": "src/lib",
    "@/styles": "src/styles"
  }
}
```

You can modify these paths to match your project structure.

---

## How It Works

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Your Project  │ ←── │      CLI        │ ←── │    Registry     │
│                 │     │                 │     │                 │
│  src/components │     │  - Reads config │     │  - Component    │
│  src/lib/util   │     │  - Fetches files│     │    source       │
│  src/styles/    │     │  - Transforms   │     │  - Dependencies │
└─────────────────┘     │    imports      │     │  - Metadata     │
                        └─────────────────┘     └─────────────────┘
```

1. **Local registry first** — CLI checks for local registry at `../../registry` relative to itself
2. **Remote fallback** — Falls back to GitHub-hosted registry
3. **Import transformation** — Converts `@/` imports to match your project's alias
4. **Dependency installation** — Automatically runs your package manager to install deps

---

## Examples

### Vue 3 + Vite Project

```bash
# Initialize
adms-rds-ui init

# Add styles to main.ts
echo "import '@/styles/styles.scss'" >> src/main.ts

# Add components
adms-rds-ui add button tooltip
```

### Nuxt 3 Project

```bash
# Initialize with src directory
adms-rds-ui init --src .

# Add components
adms-rds-ui add button
```

### Custom Source Directory

```bash
# For projects without src/ folder
adms-rds-ui init --src app

adms-rds-ui add button --src app
```

---

## Troubleshooting

### "Cannot find module '@/components/ui/Button'"

Make sure your `vite.config.ts` has the alias configured:

```typescript
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
```

### "Styles not applying"

Make sure you imported the styles in your entry file:

```typescript
import '@/styles/styles.scss'
```

And that `sass` is installed:

```bash
npm install -D sass
```

### "Command not found: adms-rds-ui"

Make sure you installed the CLI globally:

```bash
npm install -g @banavasi/adms-rds-ui-cli

# Or use npx
npx @banavasi/adms-rds-ui-cli add button
```

---

## License

MIT
