import type { Meta, StoryObj } from '@storybook/vue3'
import { Highlight } from '@/components/ui/Highlight'

const meta: Meta = {
  title: 'Components/Highlight',
  component: Highlight,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Inline text highlighting with background color variants.

## Installation

\`\`\`bash
adms-rds-ui add highlight
\`\`\`

## Import

\`\`\`vue
<script setup lang="ts">
import { Highlight } from '@/components/ui/Highlight'
</script>

<template>
  <p>Welcome to <Highlight variant="gold">ASU</Highlight></p>
</template>
\`\`\``,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'gold', 'success', 'danger', 'info', 'light', 'dark'],
      table: { defaultValue: { summary: 'gold' } },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { variant: 'gold' },
  render: (args) => ({
    components: { Highlight },
    setup() {
      return { args }
    },
    template: '<Highlight v-bind="args">Highlighted Text</Highlight>',
  }),
}

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => ({
    components: { Highlight },
    template: `
      <div class="d-flex flex-column gap-2">
        <p>This is <Highlight variant="primary">primary</Highlight> highlight</p>
        <p>This is <Highlight variant="secondary">secondary</Highlight> highlight</p>
        <p>This is <Highlight variant="gold">gold</Highlight> highlight</p>
        <p>This is <Highlight variant="success">success</Highlight> highlight</p>
        <p>This is <Highlight variant="danger">danger</Highlight> highlight</p>
        <p>This is <Highlight variant="info">info</Highlight> highlight</p>
        <p>This is <Highlight variant="light">light</Highlight> highlight</p>
        <p>This is <Highlight variant="dark">dark</Highlight> highlight</p>
      </div>
    `,
  }),
}

export const InHeading: Story = {
  name: 'In Heading Context',
  render: () => ({
    components: { Highlight },
    template: `
      <div>
        <h1>Welcome to <Highlight variant="gold">Arizona State University</Highlight></h1>
        <h2>The <Highlight variant="primary">Innovation</Highlight> University</h2>
      </div>
    `,
  }),
}
