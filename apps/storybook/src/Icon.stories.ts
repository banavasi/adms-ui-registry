import type { Meta, StoryObj } from '@storybook/vue3'
import { FontAwesomeIcon } from '@/components/ui/icon'

const meta: Meta<typeof FontAwesomeIcon> = {
  title: 'Foundations/Icon',
  component: FontAwesomeIcon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Icons are **FontAwesome Pro** rendered through [\`@banavasi/adms-rds-ui-icons\`](https://www.npmjs.com/package/@banavasi/adms-rds-ui-icons). You reference icons **by name** — no per-component \`import { faStar }\`.

## Installation

\`\`\`bash
adms-rds-ui add icon
\`\`\`

## How it works

1. **Declare** which FA Pro packages and icons to bundle in \`vite.config.ts\` — the \`rdsIcons()\` plugin calls \`library.add()\` for you (tree-shaken to only the names you list):

\`\`\`ts
import { rdsIcons } from '@banavasi/adms-rds-ui-icons/vite'

export default defineConfig({
  plugins: [
    vue(),
    rdsIcons({
      packages: ['light'],
      icons: { light: ['star', 'gear', 'circle-question'] },
    }),
  ],
})
\`\`\`

2. **Register** \`<FontAwesomeIcon>\` globally once in \`main.ts\`:

\`\`\`ts
import rdsIconsApp from '@banavasi/adms-rds-ui-icons/app'
createApp(App).use(rdsIconsApp).mount('#app')
\`\`\`

3. **Use** anywhere by name — \`fal\` = light, \`fas\` = solid, \`far\` = regular:

\`\`\`vue
<script setup lang="ts">
import { FontAwesomeIcon } from '@/components/ui/icon'
</script>

<template>
  <FontAwesomeIcon :icon="['fal', 'star']" />
</template>
\`\`\`

Icons used by RDS components (\`check\`, \`chevron-down\`, \`circle-info\`, \`xmark\`, …) are registered **automatically** (\`rds: true\` by default), so installing a component just works.`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Icons registered automatically by the RDS preset (rds: true).
const PRESET_ICONS = [
  'check',
  'chevron-down',
  'chevron-up',
  'circle-exclamation',
  'circle-info',
  'eye',
  'eye-slash',
  'xmark',
]

// Icons declared in this app's vite.config.ts `rdsIcons({ icons: { light: [...] } })`.
const CUSTOM_ICONS = [
  'star',
  'heart',
  'house',
  'gear',
  'bell',
  'circle-question',
  'triangle-exclamation',
  'magnifying-glass',
  'user',
  'envelope',
  'calendar',
  'trash',
  'pen',
  'download',
]

const gridTemplate = (binding: string) => `
  <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); gap: 16px; padding: 24px; max-width: 760px;">
    <div
      v-for="name in ${binding}"
      :key="name"
      style="display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 16px 8px; border: 1px solid #dee2e6; border-radius: 8px;"
    >
      <FontAwesomeIcon :icon="['fal', name]" style="font-size: 1.75rem; color: #8c1d40;" />
      <code style="font-size: 11px; color: #6c757d; text-align: center;">{{ name }}</code>
    </div>
  </div>
`

export const PresetIcons: Story = {
  name: 'RDS Preset (auto-registered)',
  parameters: {
    docs: {
      description: {
        story:
          'These ship with `rds: true` — no need to list them in `rdsIcons({ icons })`. RDS components depend on them.',
      },
    },
  },
  render: () => ({
    components: { FontAwesomeIcon },
    setup: () => ({ names: PRESET_ICONS }),
    template: gridTemplate('names'),
  }),
}

export const CustomIcons: Story = {
  name: 'Declared in vite.config',
  parameters: {
    docs: {
      description: {
        story:
          "Each of these was added by name under `rdsIcons({ icons: { light: [...] } })` in this app's `vite.config.ts`. That single line is what makes them render here.",
      },
    },
  },
  render: () => ({
    components: { FontAwesomeIcon },
    setup: () => ({ names: CUSTOM_ICONS }),
    template: gridTemplate('names'),
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { FontAwesomeIcon },
    template: `
      <div style="display: flex; align-items: baseline; gap: 24px; padding: 24px; color: #8c1d40;">
        <FontAwesomeIcon :icon="['fal', 'star']" size="xs" />
        <FontAwesomeIcon :icon="['fal', 'star']" size="sm" />
        <FontAwesomeIcon :icon="['fal', 'star']" />
        <FontAwesomeIcon :icon="['fal', 'star']" size="lg" />
        <FontAwesomeIcon :icon="['fal', 'star']" size="2x" />
        <FontAwesomeIcon :icon="['fal', 'star']" size="3x" />
      </div>
    `,
  }),
}

export const Colors: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Icons inherit `currentColor`, so Bootstrap text utilities and inline color both work.',
      },
    },
  },
  render: () => ({
    components: { FontAwesomeIcon },
    template: `
      <div style="display: flex; align-items: center; gap: 24px; padding: 24px; font-size: 1.75rem;">
        <FontAwesomeIcon :icon="['fal', 'heart']" class="text-primary" />
        <FontAwesomeIcon :icon="['fal', 'heart']" class="text-danger" />
        <FontAwesomeIcon :icon="['fal', 'heart']" class="text-success" />
        <FontAwesomeIcon :icon="['fal', 'heart']" class="text-warning" />
        <FontAwesomeIcon :icon="['fal', 'heart']" style="color: #8c1d40;" />
        <FontAwesomeIcon :icon="['fal', 'heart']" style="color: #ffc627;" />
      </div>
    `,
  }),
}

export const InButtons: Story = {
  name: 'In Buttons',
  parameters: {
    docs: {
      description: {
        story: 'Real usage: icons alongside text and as icon-only buttons.',
      },
    },
  },
  render: () => ({
    components: { FontAwesomeIcon },
    template: `
      <div style="display: flex; align-items: center; gap: 12px; padding: 24px;">
        <button class="btn btn-primary d-inline-flex align-items-center gap-2">
          <FontAwesomeIcon :icon="['fal', 'download']" /> Download
        </button>
        <button class="btn btn-outline-primary d-inline-flex align-items-center gap-2">
          <FontAwesomeIcon :icon="['fal', 'magnifying-glass']" /> Search
        </button>
        <button class="btn btn-outline-danger d-inline-flex align-items-center gap-2">
          <FontAwesomeIcon :icon="['fal', 'trash']" /> Delete
        </button>
        <button class="btn btn-light" aria-label="Settings">
          <FontAwesomeIcon :icon="['fal', 'gear']" />
        </button>
      </div>
    `,
  }),
}
