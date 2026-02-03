# ADMS RDS UI

A Vue 3 component library implementing the ASU Rocket Design System (RDS). Add beautifully designed, accessible components to your Vue projects with a single command.

## Quick Start

```bash
# Initialize your project
npx @banavasi/adms-rds-ui-cli init

# Add components
npx @banavasi/adms-rds-ui-cli add button
```

## Features

- **Vue 3** - Built with Composition API and `<script setup>`
- **ASU Brand Colors** - Follows official ASU brand guidelines
- **Accessible** - Built on Reka UI primitives for keyboard navigation and ARIA support
- **Type-Safe Variants** - Uses class-variance-authority (CVA) for type-safe component variants
- **Bootstrap Integration** - Leverages Bootstrap 5 with custom ASU theming
- **Copy & Paste** - Components are copied to your project, giving you full control

## Installation

### Prerequisites

- Node.js 18+
- Vue 3 project
- pnpm, npm, or yarn

### Initialize

Run the init command to set up your project:

```bash
npx @banavasi/adms-rds-ui-cli init
```

This will:
1. Create the component directory structure
2. Add required dependencies (`clsx`, `tailwind-merge`, `class-variance-authority`, `reka-ui`)
3. Set up the utility functions (`cn`, `cva`)
4. Copy the RDS SCSS styles

### Add Components

```bash
# Add a specific component
npx @banavasi/adms-rds-ui-cli add button

# Add multiple components
npx @banavasi/adms-rds-ui-cli add button card modal
```

## Available Components

| Component | Description |
|-----------|-------------|
| `button` | Buttons with multiple variants and sizes |

*More components coming soon!*

## Usage

```vue
<script setup>
import { Button } from '@/components/ui/Button'
</script>

<template>
  <Button variant="primary" size="md">
    Click me
  </Button>

  <Button variant="outline-secondary" size="lg">
    Secondary Action
  </Button>
</template>
```

### Button Variants

| Variant | Description |
|---------|-------------|
| `primary` | ASU Maroon background |
| `secondary` | ASU Gold background |
| `success` | Green for success states |
| `danger` | Red for destructive actions |
| `warning` | Orange for warnings |
| `info` | Blue for informational |
| `light` | Light gray background |
| `dark` | Dark background |
| `outline-*` | Outlined versions of all above |
| `link` | Styled as a link |

### Button Sizes

| Size | Description |
|------|-------------|
| `sm` | Small button |
| `md` | Medium (default) |
| `lg` | Large button |

## Project Structure

```
your-project/
├── src/
│   ├── components/
│   │   └── ui/
│   │       └── Button/
│   │           ├── Button.vue
│   │           └── index.ts
│   ├── lib/
│   │   └── util.ts
│   └── styles/
│       ├── _colors.scss
│       ├── _variables.scss
│       ├── _spacing.scss
│       ├── _typography.scss
│       ├── _mixins.scss
│       ├── _index.scss
│       └── styles.scss
└── rds-ui.json          # CLI configuration
```

## Design Tokens

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `$asu-maroon` | `#8c1d40` | Primary brand color |
| `$asu-gold` | `#ffc627` | Secondary brand color |
| `$asu-success` | `#78be20` | Success states |
| `$asu-info` | `#00a3e0` | Information |
| `$asu-warning` | `#ff7f32` | Warnings |
| `$asu-danger` | `#cc2f2f` | Errors/danger |

### CSS Custom Properties

All colors are available as CSS custom properties with the `--rds-` prefix:

```css
.my-element {
  color: var(--rds-primary);
  background: var(--rds-light-1);
}
```

## Development

### Repository Structure

This is a monorepo containing:

- `packages/cli` - The CLI tool for adding components
- `apps/storybook` - Component documentation and playground
- `registry/` - Source of truth for all components and styles

### Local Development

```bash
# Install dependencies
pnpm install

# Start Storybook
pnpm --filter storybook dev

# Build CLI
pnpm --filter @banavasi/adms-rds-ui-cli build

# Build everything
pnpm build
```

### Adding New Components

1. Create component in `registry/ui/{component-name}/`
2. Add entry to `registry/index.json`
3. Create Storybook story in `apps/storybook/src/`

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting a PR.

## License

MIT License - see [LICENSE](LICENSE) for details.

---

Built with the [ASU Rocket Design System](https://unity.web.asu.edu/) guidelines.
