# @banavasi/eslint-config

ESLint configuration for ADMS RDS UI projects. Built on top of [@antfu/eslint-config](https://github.com/antfu/eslint-config) with Vue and TypeScript support.

## Features

- Vue 3 + TypeScript support out of the box
- Three strictness levels: `base`, `recommended`, `strict`
- No formatting rules (use Biome for formatting)
- Composable and customizable

## Installation

```bash
npm install -D @banavasi/eslint-config eslint
```

## Usage

Create `eslint.config.js` in your project root:

```js
import adms from '@banavasi/eslint-config'

export default adms()
```

### With Options

```js
import adms from '@banavasi/eslint-config'

export default adms({
  // Enable/disable features
  vue: true,           // default: true
  typescript: true,    // default: true

  // Strictness level
  level: 'recommended', // 'base' | 'recommended' | 'strict'

  // Additional ignores
  ignores: ['legacy/**'],

  // Override specific rules
  rules: {
    'no-console': 'off'
  }
})
```

## Strictness Levels

### `base`
Minimal rules that only catch real bugs:
- Unused variables
- Unreachable code
- Invalid typeof comparisons

### `recommended` (default)
Balanced defaults for most projects:
- Everything in `base`
- `no-console` as warning
- `prefer-const`, `no-var`
- Consistent type imports
- Vue component naming conventions

### `strict`
Maximum strictness for new projects:
- Everything in `recommended`
- `no-console` as error
- Explicit return types required
- No `any` type allowed
- Strict boolean expressions

## Biome Integration

This config disables all formatting rules. Use Biome for formatting:

```json
{
  "formatter": { "enabled": true },
  "linter": { "enabled": false }
}
```

## License

MIT
