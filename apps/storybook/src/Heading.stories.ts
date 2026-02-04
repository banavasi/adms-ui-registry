import type { Meta, StoryObj } from '@storybook/vue3'
import { Heading } from '@/components/ui/Heading'
import { Highlight } from '@/components/ui/Highlight'

const meta: Meta = {
  title: 'Components/Heading',
  component: Heading,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Semantic heading component (h1-h6) with optional badge and tooltip support.

## Installation

\`\`\`bash
adms-rds-ui add heading
\`\`\`

## Import

\`\`\`vue
<script setup lang="ts">
import { Heading } from '@/components/ui/Heading'
</script>

<template>
  <Heading level="h2" optional tooltip="Additional info">
    Question Header
  </Heading>
</template>
\`\`\``,
      },
    },
  },
  argTypes: {
    level: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      table: { defaultValue: { summary: 'h3' } },
    },
    optional: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    tooltip: {
      control: 'text',
    },
    tooltipPosition: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      table: { defaultValue: { summary: 'top' } },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { level: 'h3' },
  render: (args) => ({
    components: { Heading },
    setup() { return { args } },
    template: '<Heading v-bind="args">Question Header</Heading>',
  }),
}

export const WithOptional: Story = {
  args: { level: 'h3', optional: true },
  render: (args) => ({
    components: { Heading },
    setup() { return { args } },
    template: '<Heading v-bind="args">Question Header</Heading>',
  }),
}

export const WithTooltip: Story = {
  args: { level: 'h3', tooltip: 'This provides additional context about the question.' },
  render: (args) => ({
    components: { Heading },
    setup() { return { args } },
    template: '<Heading v-bind="args">Question Header</Heading>',
  }),
}

export const FullExample: Story = {
  name: 'With Optional and Tooltip',
  args: { level: 'h3', optional: true, tooltip: 'This field is not required but helps us serve you better.' },
  render: (args) => ({
    components: { Heading },
    setup() { return { args } },
    template: '<Heading v-bind="args">Question Header</Heading>',
  }),
}

export const AllLevels: Story = {
  name: 'All Heading Levels',
  render: () => ({
    components: { Heading },
    template: `
      <div class="d-flex flex-column gap-3">
        <Heading level="h1">Heading Level 1</Heading>
        <Heading level="h2">Heading Level 2</Heading>
        <Heading level="h3">Heading Level 3</Heading>
        <Heading level="h4">Heading Level 4</Heading>
        <Heading level="h5">Heading Level 5</Heading>
        <Heading level="h6">Heading Level 6</Heading>
      </div>
    `,
  }),
}

export const WithHighlight: Story = {
  name: 'With Highlight',
  render: () => ({
    components: { Heading, Highlight },
    template: `
      <div class="d-flex flex-column gap-3">
        <Heading level="h1">Welcome to <Highlight variant="gold">ASU</Highlight></Heading>
        <Heading level="h2" optional>The <Highlight variant="primary">Innovation</Highlight> University</Heading>
      </div>
    `,
  }),
}

export const MultiLine: Story = {
  name: 'Multi-line Heading',
  render: () => ({
    components: { Heading },
    template: `
      <div style="max-width: 300px;">
        <Heading level="h2" optional tooltip="This is a longer heading that wraps to multiple lines">
          This is a longer heading text that will wrap to multiple lines
        </Heading>
      </div>
    `,
  }),
}
