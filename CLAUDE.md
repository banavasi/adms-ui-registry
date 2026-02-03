# ADMS RDS UI Registry

## Project Overview

This is a **Vue 3 component library** implementing the ASU Rocket Design System (RDS). It's structured as a monorepo with:
- `packages/cli` - CLI tool for adding components to consumer projects
- `apps/storybook` - Storybook for component documentation and testing
- `registry/` - Source of truth for all components, styles, and utilities

## Tech Stack

- **Framework**: Vue 3 (Composition API with `<script setup>`)
- **Styling**: Bootstrap 5 + SCSS with ASU brand overrides
- **Component Primitives**: Reka UI (headless components)
- **Variant Management**: class-variance-authority (CVA)
- **Utility Functions**: clsx + tailwind-merge (`cn()` function)
- **Build**: Vite, tsup
- **Package Manager**: pnpm

---

# MCP Servers

## Figma MCP Server Rules

### Component Organization

- UI components: `registry/ui/{component-name}/`
- Each component has: `{Component}.vue` (template) + `index.ts` (variants & exports)
- Library utilities: `registry/lib/`
- SCSS styles: `registry/styles/`

### Component Structure Pattern

All components MUST follow this structure:

```
registry/ui/{component-name}/
├── {Component}.vue      # Vue SFC with Reka UI primitives
└── index.ts             # CVA variants, types, and exports
```

**index.ts pattern:**
```typescript
import { cva, type VariantProps } from "@/lib/util";

export { default as ComponentName } from "./ComponentName.vue";

export const componentNameVariants = cva("base-classes", {
  variants: {
    variant: { /* variant options */ },
    size: { /* size options */ },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export type ComponentNameVariants = VariantProps<typeof componentNameVariants>;
```

**Vue component pattern:**
```vue
<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { Primitive, type PrimitiveProps } from "reka-ui";
import { type ComponentNameVariants, componentNameVariants } from ".";
import { cn } from "@/lib/util";

interface Props extends PrimitiveProps {
  variant?: ComponentNameVariants["variant"];
  size?: ComponentNameVariants["size"];
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  as: "button",
  asChild: false,
});
</script>

<template>
  <Primitive
    data-slot="component-name"
    :as-child="props.asChild"
    :as="props.as"
    :class="cn(componentNameVariants({ variant, size }), props.class)"
  >
    <slot />
  </Primitive>
</template>
```

### Design Tokens - ASU Brand Colors

IMPORTANT: Never hardcode colors. Use these SCSS variables from `registry/styles/_colors.scss`:

**Brand Colors:**
- `$asu-maroon: #8c1d40` - Primary brand color
- `$asu-gold: #ffc627` - Secondary brand color
- `$asu-gold-light: #ffeebd` - Light gold accent

**Semantic Colors:**
- `$asu-success: #78be20` - Success states
- `$asu-info: #00a3e0` - Info/links
- `$asu-warning: #ff7f32` - Warning states
- `$asu-danger: #cc2f2f` - Error/danger states

**Neutral Scale (Light):**
- `$asu-light-1: #fafafa` through `$asu-light-5: #bfbfbf`

**Neutral Scale (Dark):**
- `$asu-dark-1: #747474` through `$asu-dark-3: #191919`

**CSS Variable Prefix:** `--rds-`

### Styling Rules

- IMPORTANT: Use Bootstrap utility classes (e.g., `btn`, `btn-primary`, `btn-sm`)
- IMPORTANT: Use CVA for variant management, not conditional classes
- Component-specific styles go in `<style>` block within Vue SFC
- Focus states: `outline: 2px solid #000; outline-offset: 2px; box-shadow: none;`
- Always support `class` prop for composition via `cn()` function

### Variant Naming Conventions

**Colors/Variants:**
- `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`
- Outline variants: `outline-{color}` (e.g., `outline-primary`)
- `link` for link-styled buttons

**Sizes:**
- `sm`, `md` (default), `lg`

### Figma Implementation Flow

1. Run get_design_context for the Figma node
2. Run get_screenshot for visual reference
3. Map Figma colors to ASU brand SCSS variables (see Design Tokens above)
4. Translate to Vue 3 + Bootstrap pattern (NOT React + Tailwind)
5. Use Reka UI primitives for accessibility
6. Define variants with CVA in `index.ts`
7. Validate against Figma screenshot for 1:1 visual parity

### Asset Handling

- IMPORTANT: If Figma MCP returns a localhost source for images/SVGs, use that directly
- IMPORTANT: DO NOT install new icon packages - use assets from Figma payload
- Store static assets in appropriate component directory

### Registry Integration

When adding new components, update `registry/index.json`:

```json
{
  "components": {
    "component-name": {
      "name": "ComponentName",
      "files": ["ui/component-name/ComponentName.vue", "ui/component-name/index.ts"],
      "dependencies": ["reka-ui"],
      "registryDependencies": []
    }
  }
}
```

### Do NOT

- DO NOT use Tailwind utility classes (use Bootstrap classes instead)
- DO NOT hardcode hex colors (use SCSS variables or CSS custom properties)
- DO NOT create React components (this is a Vue 3 project)
- DO NOT skip the `cn()` function for class composition
- DO NOT forget `data-slot` attribute on Primitive components
- DO NOT use inline styles for colors or spacing

### Testing New Components

After creating a component:
1. Add to `registry/index.json`
2. Create a Storybook story in `apps/storybook/src/{Component}.stories.ts`
3. Run `pnpm dev` in `apps/storybook` to verify

---

## CLI Commands

```bash
# Development
pnpm dev                    # Watch mode for CLI
pnpm --filter storybook dev # Start Storybook

# Build
pnpm build                  # Build CLI
pnpm --filter storybook build # Build Storybook

# Sync components to Storybook
pnpm --filter storybook sync
```

## Path Aliases

- `@/lib/util` → `registry/lib/util.ts` (for `cn`, `cva`, `VariantProps`)
- `@/components/ui` → component directory in consumer projects
