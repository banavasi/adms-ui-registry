# ADMS RDS UI Storybook

This is the Storybook for the ADMS RDS UI component library. It provides interactive documentation and examples of all available components.

## What is Storybook?

Storybook is an open-source tool for developing UI components in isolation. It allows you to:

- **Visualize components** — See all your components in one place
- **Interactive testing** — Play with component props and states
- **Documentation** — Auto-generated docs from component metadata
- **Design consistency** — Ensure components match design specifications

---

## Getting Started

### Running Storybook Locally

```bash
# From the monorepo root
pnpm --filter storybook dev

# Or from the storybook directory
cd apps/storybook
pnpm dev
```

Storybook will be available at `http://localhost:6006`

### Building Storybook

```bash
pnpm --filter storybook build
```

This creates a static build in `storybook-static/` that can be deployed.

---

## Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start Storybook dev server on port 6006 |
| `pnpm build` | Build static Storybook for deployment |
| `pnpm sync` | Sync button component from registry |
| `pnpm sync-all` | Sync ALL components from registry |

---

## Component Stories

### Button

The Button component provides various styles and states for user actions.

**Stories:**
- `Primary` — Default primary action button
- `Secondary` — Secondary action button
- `Success` — Success state button
- `Danger` — Destructive action button
- `All Variants` — All available button styles
- `Outline Variants` — Outline style buttons
- `Sizes` — Small, medium, large buttons
- `Loading States` — Buttons with loading spinner
- `Disabled States` — Disabled button examples
- `Button as Link` — Button rendered as anchor
- `Button with Icons` — Buttons with icon prefixes
- `Icon Only Buttons` — Icon-only buttons
- `Button Groups` — Horizontal and vertical button groups
- `Usage Example - Form Actions` — Real-world form pattern

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `string` | `'primary'` | Button style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `loading` | `boolean` | `false` | Show loading state |
| `disabled` | `boolean` | `false` | Disable button |

**Variants:**

- Solid: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`
- Outline: `outline-primary`, `outline-secondary`, `outline-success`, etc.
- Link: `link`

### Tooltip

Accessible tooltip component for displaying additional information on hover.

**Stories:**
- `Default` — Basic tooltip example
- `Positioning - All Sides` — Top, right, bottom, left positioning
- `Alignment Options` — Start, center, end alignment with offset
- `Custom Colors` — Styled tooltips with ASU brand colors
- `HTML Content` — Tooltips with rich HTML content
- `With Delay` — Controlled delay timing
- `Link Trigger` — Tooltip on anchor elements
- `Icon Trigger` — Icon-based tooltip triggers
- `Long Content` — Multi-line tooltip content
- `Usage Example - Form Help` — Real-world form pattern
- `Interactive Elements Inside` — Hoverable tooltip content

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `side` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'top'` | Tooltip position |
| `align` | `'start' \| 'center' \| 'end'` | `'center'` | Alignment on the side |
| `sideOffset` | `number` | `5` | Distance from trigger (px) |
| `delayDuration` | `number` | `400` | Delay before showing (ms) |
| `disableHoverableContent` | `boolean` | `false` | Prevent hovering over tooltip |

---

## Syncing Components

The Storybook components are synced from the main registry. When you add a new component to the registry, sync it to Storybook:

### Sync All Components

```bash
pnpm --filter storybook sync-all
```

This script:
1. Reads `registry/index.json` for available components
2. Runs `init` to set up base utilities and styles
3. Installs each component from the registry

### Sync Individual Component

```bash
node ../../packages/cli/dist/index.js add button -y
```

---

## Adding New Component Stories

When adding a new component to the registry:

1. **Create the component** in `registry/ui/{component-name}/`
2. **Update registry** in `registry/index.json`
3. **Sync to Storybook** with `pnpm --filter storybook sync-all`
4. **Create stories** at `apps/storybook/src/{Component}.stories.ts`

### Story Template

```typescript
import type { Meta, StoryObj } from '@storybook/vue3'
import { ComponentName } from '@/components/ui/ComponentName'

const meta: Meta<typeof ComponentName> = {
  title: 'Components/ComponentName',
  component: ComponentName,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    // Define controls for props
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { ComponentName },
    template: \`<ComponentName />\`,
  }),
}
```

---

## Storybook Configuration

### Main Configuration (`.storybook/main.ts`)

- Framework: Vue 3 + Vite
- Stories: `../src/**/*.stories.@(js|ts)`
- Addons: Links, Essentials (docs, actions, controls, etc.)
- Autodocs: Tag-based

### Preview Configuration (`.storybook/preview.ts`)

Global settings for all stories:

- **Controls**: Color and date matchers
- **Actions**: Click, submit, focus, blur handlers
- **Backgrounds**: Light, dark, ASU maroon, ASU gold
- **Theme**: Light/dark mode toggle (toolbar)

---

## Design Tokens

The Storybook uses ASU brand design tokens defined in `src/styles/`:

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--rds-primary` | `#8c1d40` | ASU Maroon |
| `--rds-secondary` | `#ffc627` | ASU Gold |
| `--rds-success` | `#78be20` | Success |
| `--rds-danger` | `#cc2f2f` | Danger |
| `--rds-warning` | `#ff7f32` | Warning |
| `--rds-info` | `#00a3e0` | Info |

### Typography

- Font family: System fonts (San Francisco, Segoe UI, Roboto)
- Base size: 1rem (16px)
- Scale: Major third (1.25)

### Spacing

- Base unit: 0.25rem (4px)
- Scale: 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20

---

## Development Workflow

### 1. Modify Component

Edit the component in the registry:

```bash
# Edit component source
vim registry/ui/button/Button.vue
```

### 2. Sync to Storybook

```bash
pnpm --filter storybook sync-all
```

### 3. View Changes

Storybook hot-reloads automatically. Open `http://localhost:6006` to see changes.

### 4. Add/Update Stories

Edit story files to add new examples or update existing ones.

---

## Deployment

The Storybook is deployed via GitHub Actions workflow (`.github/workflows/storybook.yml`).

On push to `main`:
1. Storybook is built as static files
2. Deployed to GitHub Pages

---

## Troubleshooting

### Port Already in Use

If port 6006 is in use:

```bash
# Use a different port
pnpm dev -- -p 6007
```

### Components Not Updating

If synced components don't appear:

1. Clear Storybook cache: `rm -rf node_modules/.cache`
2. Restart Storybook: `pnpm dev`
3. Hard refresh browser: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)

### Styles Not Loading

Make sure styles are imported in `.storybook/preview.ts`:

```typescript
import '@/styles/styles.scss'
```

---

## Additional Resources

- [Storybook for Vue 3](https://storybook.js.org/docs/vue/get-started/introduction)
- [Component Story Format](https://storybook.js.org/docs/vue/api/csf)
- [ADMS RDS UI Documentation](../../README.md)
- [ASU Rocket Design System](https://unity.web.asu.edu/)

---

## License

MIT
