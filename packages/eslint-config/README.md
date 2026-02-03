# @banavasi/eslint-config

Shareable ESLint configuration for Vue 3 + TypeScript projects. Built on top of [`@antfu/eslint-config`](https://github.com/antfu/eslint-config) with opinionated defaults for ADMS RDS UI projects.

## What Does This Do?

This package provides a pre-configured ESLint setup that includes:

| Feature | Description |
|---------|-------------|
| **Vue 3 support** | Latest Vue.js linting rules via `eslint-plugin-vue` |
| **TypeScript** | Full TypeScript support via `@typescript-eslint` |
| **Antfu config base** | Extends the popular `@antfu/eslint-config` |
| **Three strictness levels** | Choose between `base`, `recommended`, or `strict` |
| **No formatting rules** | Designed to work alongside Biome for formatting |

---

## Installation

```bash
# npm
npm install -D @banavasi/eslint-config

# pnpm
pnpm add -D @banavasi/eslint-config

# yarn
yarn add -D @banavasi/eslint-config

# bun
bun add -D @banavasi/eslint-config
```

### Peer Dependencies

This package requires:

```json
{
  "eslint": ">=9.0.0",
  "typescript": ">=5.0.0"
}
```

---

## Usage

### Basic Setup

Create an `eslint.config.js` file in your project root:

```javascript
import config from "@banavasi/eslint-config";

export default [
  ...config,
];
```

### With Options

```javascript
import config from "@banavasi/eslint-config";

export default [
  ...config({
    // Enable/disable features
    vue: true,           // default: true
    typescript: true,    // default: true

    // Strictness level
    level: 'recommended', // 'base' | 'recommended' | 'strict'

    // Additional ignores
    ignores: ['dist/**', 'node_modules/**'],

    // Override specific rules
    rules: {
      'no-console': 'off',
      'vue/multi-word-component-names': 'off',
    }
  }),
];
```

---

## Strictness Levels

### `base`

Minimal rules that only catch real bugs:

| Rule | Description |
|------|-------------|
| Unused variables | Catches variables that are declared but never used |
| Unreachable code | Detects code after return/throw statements |
| Invalid typeof | Catches invalid typeof comparisons |

**Use for:** Legacy projects, scripts, or when you want minimal linting.

### `recommended` (default)

Balanced defaults for most projects:

- Everything in `base`
- `no-console` as warning
- `prefer-const`, `no-var` (enforce const, forbid var)
- Consistent type imports
- Vue component naming conventions
- Proper prop definitions

**Use for:** Most new and existing projects.

### `strict`

Maximum strictness for new projects:

- Everything in `recommended`
- `no-console` as error
- Explicit return types required on functions
- No `any` type allowed
- Strict boolean expressions
- All Vue props must have types

**Use for:** New projects where you want maximum code quality.

---

## What Gets Linted

| File Type | Extension | Rules Applied |
|-----------|-----------|---------------|
| Vue SFC | `.vue` | Vue 3 template, script, and style rules |
| TypeScript | `.ts` | TypeScript-specific rules |
| JavaScript | `.js` | ES6+ JavaScript rules |
| JSX | `.jsx` | React/JSX rules |
| TSX | `.tsx` | TypeScript JSX rules |

---

## Included Rules

### Vue 3 (`eslint-plugin-vue`)

```javascript
// Enforces Vue 3 best practices
'vue/component-name-in-template-casing': 'error',
'vue/custom-event-name-casing': 'error',
'vue/define-macros-order': 'error',
'vue/multi-word-component-names': 'warn',
'vue/no-v-html': 'warn',
// ... and more
```

### TypeScript (`@typescript-eslint`)

```javascript
// Type checking
'@typescript-eslint/no-unused-vars': 'error',
'@typescript-eslint/no-explicit-any': 'warn', // error in strict mode
'@typescript-eslint/consistent-type-imports': 'error',
'@typescript-eslint/no-import-type-side-effects': 'error',
// ... and more
```

### General Rules

```javascript
// Code quality
'no-console': 'warn', // error in strict mode
'no-debugger': 'warn',
'prefer-const': 'error',
'no-var': 'error',
// ... and more
```

---

## Configuration Examples

### Vue 3 + Vite Project

**Install:**

```bash
npm install -D @banavasi/eslint-config
```

**Create `eslint.config.js`:**

```javascript
import config from "@banavasi/eslint-config";

export default [
  ...config(),
];
```

### Monorepo Setup

For monorepos with different package types:

```javascript
import config from "@banavasi/eslint-config";

export default [
  ...config(),
  {
    // Override for CLI packages
    files: ["packages/cli/**"],
    rules: {
      "no-console": "off", // CLI uses console
    },
  },
  {
    // Override for web packages
    files: ["packages/web/**"],
    rules: {
      "vue/no-template-target-blank": "error",
    },
  },
];
```

### With Custom Ignores

```javascript
import config from "@banavasi/eslint-config";

export default [
  {
    ignores: [
      "dist/**",
      "node_modules/**",
      "*.config.js",
      "coverage/**",
    ],
  },
  ...config(),
];
```

### Strict Mode for New Project

```javascript
import config from "@banavasi/eslint-config";

export default [
  ...config({
    level: "strict",
  }),
];
```

---

## Package.json Scripts

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

Run them:

```bash
# Check for issues
npm run lint

# Auto-fix issues
npm run lint:fix
```

---

## Editor Integration

### VS Code

1. Install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

2. Add to `.vscode/settings.json`:

```json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue"
  ],
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```

### WebStorm / IntelliJ IDEA

1. Go to **Settings → Languages & Frameworks → JavaScript → Code Quality Tools → ESLint**
2. Enable:
   - **Automatic ESLint configuration**
   - **Run eslint --fix on save**

### Neovim (with nvim-lintconfig)

```lua
require('lint').linters_by_ft = {
  typescript = {'eslint'},
  typescriptreact = {'eslint'},
  vue = {'eslint'},
}
```

---

## Biome Integration

This config disables all formatting rules. Use Biome for formatting:

**Install Biome:**

```bash
npm install -D @biomejs/biome
```

**Create `biome.json`:**

```json
{
  "formatter": {
    "enabled": true,
    "formatWithErrors": false
  },
  "linter": {
    "enabled": false
  },
  "files": {
    "ignoreUnknown": false,
    "ignore": ["node_modules", "dist"]
  }
}
```

**Update `package.json`:**

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "biome format --write .",
    "format:check": "biome format ."
  }
}
```

---

## Troubleshooting

### "Cannot find module '@banavasi/eslint-config'"

Make sure you installed the package:

```bash
npm install -D @banavasi/eslint-config
```

### "ESLint configuration in .eslintrc* is deprecated"

You're using ESLint 9+ which requires flat config. Migrate from `.eslintrc.js` to `eslint.config.js`:

```javascript
// Old (.eslintrc.js) - NOT supported
module.exports = {
  // ...
};

// New (eslint.config.js) - REQUIRED
import config from "@banavasi/eslint-config";
export default [
  ...config,
];
```

### Rules not showing in VS Code

1. Reload VS Code window (`Cmd+Shift+P` → "Reload Window")
2. Check ESLint output in the "Output" panel
3. Ensure your workspace is the project root (not a subdirectory)

### Type errors in `.vue` files

Make sure your `tsconfig.json` includes `.vue` files:

```json
{
  "compilerOptions": {
    "types": ["vite/client"]
  },
  "include": ["**/*.ts", "**/*.d.ts", "**/*.vue", "**/*.ts"]
}
```

---

## License

MIT
