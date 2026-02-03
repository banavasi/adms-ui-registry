# ESLint Config Package & Biome Formatting Setup

**Date:** 2026-02-03
**Status:** Approved

## Overview

Set up a reusable ESLint config package (`@banavasi/eslint-config`) with antfu's config as base, and integrate Biome for formatting. ESLint handles code quality, Biome handles formatting - no overlap.

## Package Structure

```
packages/
├── cli/                          # Existing
└── eslint-config/                # New package
    ├── package.json
    ├── tsconfig.json
    ├── src/
    │   ├── index.ts              # Main entry - composable config factory
    │   ├── presets/
    │   │   ├── base.ts           # Core rules (errors only)
    │   │   ├── typescript.ts     # TS strict rules
    │   │   └── vue.ts            # Vue-specific rules
    │   └── utils.ts              # Helper functions
    └── README.md
```

## Configuration API

```ts
// eslint.config.js
import adms from '@banavasi/eslint-config'

export default adms({
  vue: true,              // Vue support (default: true)
  typescript: true,       // TypeScript support (default: true)
  level: 'recommended',   // 'base' | 'recommended' | 'strict'
  ignores: ['legacy/**'],
  rules: {
    'no-console': 'warn'
  }
})
```

### Strictness Levels

| Level | Description |
|-------|-------------|
| `base` | Only catches real bugs (unused vars, unreachable code) |
| `recommended` | Balanced defaults from antfu config |
| `strict` | All TypeScript strict rules, no-any, explicit return types |

## Biome Configuration

**`biome.json` at root:**

```json
{
  "$schema": "https://biomejs.dev/schemas/1.9.0/schema.json",
  "organizeImports": { "enabled": true },
  "formatter": {
    "enabled": true,
    "indentStyle": "space",
    "indentWidth": 2,
    "lineWidth": 100
  },
  "linter": { "enabled": false },
  "vcs": {
    "enabled": true,
    "clientKind": "git",
    "useIgnoreFile": true
  },
  "files": {
    "ignore": ["dist", "node_modules", "*.min.js"]
  }
}
```

**Key decisions:**
- Linter disabled (ESLint handles linting)
- Import sorting enabled (faster than ESLint plugin)
- 100 char line width
- 2-space indent

## Scripts

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "biome format --write .",
    "format:check": "biome format .",
    "check": "biome check --write . && eslint . --fix"
  }
}
```

## TypeScript Strictness

Enhanced `tsconfig.base.json`:

```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noFallthroughCasesInSwitch": true,
    "forceConsistentCasingInFileNames": true,
    "exactOptionalPropertyTypes": true
  }
}
```

## CI Integration

Add to `.github/workflows/ci.yml`:

```yaml
- name: Check formatting
  run: pnpm format:check

- name: Lint
  run: pnpm lint
```

## VS Code Integration

`.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "biomejs.biome",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports.biome": "explicit"
  }
}
```

## Dependencies

**eslint-config package:**
- `@antfu/eslint-config` - Base config
- `eslint` - Peer dependency
- `typescript-eslint` - Strict TS rules

**Root devDependencies:**
- `@biomejs/biome` - Formatting
- `eslint` - Linting
- `@banavasi/eslint-config` - Our config (workspace dependency)
