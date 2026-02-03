# Adding a New Component

This guide outlines the steps required when adding a new component to the ADMS RDS UI registry.

## Overview

When adding a new component, you need to update:
1. **Registry** - The component source code in `registry/ui/`
2. **Registry Index** - Metadata in `registry/index.json`
3. **Storybook** - Stories and documentation in `apps/storybook/src/`
4. **Documentation** - Update documentation pages with the new component

---

## Step 1: Create the Component in Registry

Create the component in `registry/ui/{component-name}/` following the standard structure:

```
registry/ui/{component-name}/
├── {Component}.vue      # Vue SFC with template
└── index.ts             # CVA variants, types, and exports
```

### Component.vue Pattern

```vue
<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { type ComponentNameVariants, componentNameVariants } from '.'
import { cn } from '@/lib/util'

interface Props extends PrimitiveProps {
  variant?: ComponentNameVariants['variant']
  size?: ComponentNameVariants['size']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  asChild: false,
})
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

### index.ts Pattern

```typescript
import { cva, type VariantProps } from '@/lib/util'

export { default as ComponentName } from './ComponentName.vue'

export const componentNameVariants = cva('base-classes', {
  variants: {
    variant: {
      primary: 'btn-primary',
      secondary: 'btn-secondary',
    },
    size: {
      sm: 'btn-sm',
      md: '',
      lg: 'btn-lg',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export type ComponentNameVariants = VariantProps<typeof componentNameVariants>
```

---

## Step 2: Update registry/index.json

Add the component to the `components` section:

```json
{
  "components": {
    "component-name": {
      "name": "ComponentName",
      "files": [
        "ui/component-name/ComponentName.vue",
        "ui/component-name/index.ts"
      ],
      "dependencies": ["reka-ui"],
      "registryDependencies": []
    }
  }
}
```

### Fields

| Field | Description |
|-------|-------------|
| `name` | PascalCase component name |
| `files` | Array of file paths relative to `registry/` |
| `dependencies` | npm packages required (e.g., `reka-ui`) |
| `registryDependencies` | Other components this one uses (e.g., `button` if Card uses Button) |

**Important:**
- **DO NOT** include `lib/util` in `registryDependencies` - it's installed during `init`
- Only list other components if your component embeds them

---

## Step 3: Create Storybook Stories

Create `apps/storybook/src/{Component}.stories.ts`:

```typescript
import type { Meta, StoryObj } from '@storybook/vue3'
import { ComponentName } from '@/components/ui/ComponentName'

const meta: Meta<typeof ComponentName> = {
  title: 'Components/ComponentName',
  component: ComponentName,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Brief component description.

## Installation

\`\`\`bash
adms-rds-ui add component-name
\`\`\`

## Import

\`\`\`vue
<script setup lang="ts">
import { ComponentName } from '@/components/ui/ComponentName'
</script>

<template>
  <ComponentName variant="primary">Example</ComponentName>
</template>
\`\`\``,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      description: 'Component variant',
      options: ['primary', 'secondary', 'etc'],
      table: { defaultValue: { summary: 'primary' } },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { variant: 'primary' },
  render: (args) => ({
    components: { ComponentName },
    setup() { return { args } },
    template: '<ComponentName v-bind="args">Example</ComponentName>',
  }),
}

// Add more stories for variants, sizes, states, etc.
```

---

## Step 4: Update Documentation Pages

### Update Intro.mdx

Add the component to the Available Components grid:

```jsx
<a href="?path=/docs/components-componentname--docs" style={{display: 'block', padding: '16px', border: '1px solid #dee2e6', borderRadius: '8px', textDecoration: 'none', color: 'inherit', background: '#fff'}}>
  <div style={{width: '40px', height: '40px', background: '#color', borderRadius: '8px', marginBottom: '12px'}}></div>
  <h3 style={{margin: '0 0 8px', fontSize: '16px'}}>ComponentName</h3>
  <p style={{margin: '0', fontSize: '14px', color: '#6c757d'}}>Brief description</p>
</a>
```

### Update GettingStarted.mdx

Add to the Available Components table:

```html
<tr>
  <td><code>component-name</code></td>
  <td>Brief description</td>
  <td><code>reka-ui</code></td>
</tr>
```

---

## Step 5: Design Tokens

When using colors, always use SCSS variables from `registry/styles/_colors.scss`:

| Variable | Value |
|----------|-------|
| `$asu-maroon` | `#8c1d40` |
| `$asu-gold` | `#ffc627` |
| `$asu-success` | `#78be20` |
| `$asu-info` | `#00a3e0` |
| `$asu-warning` | `#ff7f32` |
| `$asu-danger` | `#cc2f2f` |

**Never hardcode hex colors!**

---

## Step 6: Test

1. **Sync component to Storybook:**
   ```bash
   cd apps/storybook
   pnpm sync
   ```

2. **Run Storybook:**
   ```bash
   pnpm dev
   ```

3. **Verify:**
   - Component renders correctly
   - All variants work
   - Documentation displays properly
   - Links work from Intro/GettingStarted pages

---

## Checklist

- [ ] Component created in `registry/ui/{component-name}/`
- [ ] `registry/index.json` updated (NO `lib/util` in registryDependencies!)
- [ ] Storybook stories created
- [ ] Installation docs added to story description
- [ ] `Intro.mdx` updated with component card
- [ ] `GettingStarted.mdx` updated with component table entry
- [ ] All tests pass
- [ ] Component tested in Storybook

---

## Component File Reference

| File | Purpose |
|------|---------|
| `registry/ui/{name}/{Component}.vue` | Vue SFC component |
| `registry/ui/{name}/index.ts` | Exports + CVA variants |
| `registry/index.json` | Component metadata for CLI |
| `apps/storybook/src/{Component}.stories.ts` | Stories + docs |
| `apps/storybook/src/Intro.mdx` | Homepage component grid |
| `apps/storybook/src/GettingStarted.mdx` | Component table |
