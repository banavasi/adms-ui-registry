import type { Meta, StoryObj } from '@storybook/vue3'
import { Label } from '@/components/ui/Label'

const meta: Meta = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Form label component with optional badge and tooltip support.

## Installation

\`\`\`bash
adms-rds-ui add label
\`\`\`

## Import

\`\`\`vue
<script setup lang="ts">
import { Label } from '@/components/ui/Label'
</script>

<template>
  <Label for="email" optional tooltip="We'll never share your email">
    Email Address
  </Label>
  <input id="email" type="email" class="form-control" />
</template>
\`\`\``,
      },
    },
  },
  argTypes: {
    for: {
      control: 'text',
      description: 'ID of the associated input element',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      table: { defaultValue: { summary: 'md' } },
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
  args: { for: 'email' },
  render: (args) => ({
    components: { Label },
    setup() { return { args } },
    template: `
      <div>
        <Label v-bind="args">Email Address</Label>
        <input id="email" type="email" class="form-control" placeholder="Enter email" />
      </div>
    `,
  }),
}

export const WithOptional: Story = {
  args: { for: 'phone', optional: true },
  render: (args) => ({
    components: { Label },
    setup() { return { args } },
    template: `
      <div>
        <Label v-bind="args">Phone Number</Label>
        <input id="phone" type="tel" class="form-control" placeholder="Enter phone" />
      </div>
    `,
  }),
}

export const WithTooltip: Story = {
  args: { for: 'ssn', tooltip: 'Required for identity verification. Your data is encrypted.' },
  render: (args) => ({
    components: { Label },
    setup() { return { args } },
    template: `
      <div>
        <Label v-bind="args">Social Security Number</Label>
        <input id="ssn" type="text" class="form-control" placeholder="XXX-XX-XXXX" />
      </div>
    `,
  }),
}

export const FullExample: Story = {
  name: 'With Optional and Tooltip',
  args: { for: 'middle-name', optional: true, tooltip: 'Include if you have one' },
  render: (args) => ({
    components: { Label },
    setup() { return { args } },
    template: `
      <div>
        <Label v-bind="args">Middle Name</Label>
        <input id="middle-name" type="text" class="form-control" placeholder="Enter middle name" />
      </div>
    `,
  }),
}

export const FormExample: Story = {
  name: 'Form Example',
  render: () => ({
    components: { Label },
    template: `
      <form class="p-4 border rounded" style="min-width: 400px;">
        <div class="mb-3">
          <Label for="firstName">First Name</Label>
          <input id="firstName" type="text" class="form-control" />
        </div>
        <div class="mb-3">
          <Label for="lastName">Last Name</Label>
          <input id="lastName" type="text" class="form-control" />
        </div>
        <div class="mb-3">
          <Label for="emailForm" tooltip="We'll send confirmation to this address">Email</Label>
          <input id="emailForm" type="email" class="form-control" />
        </div>
        <div class="mb-3">
          <Label for="nickname" optional>Nickname</Label>
          <input id="nickname" type="text" class="form-control" />
        </div>
      </form>
    `,
  }),
}

export const MultiLine: Story = {
  name: 'Multi-line Label',
  render: () => ({
    components: { Label },
    template: `
      <div style="max-width: 250px;">
        <div class="mb-3">
          <Label for="address" optional tooltip="Enter your full mailing address including apartment number">
            Please enter your complete mailing address
          </Label>
          <textarea id="address" class="form-control" rows="3"></textarea>
        </div>
      </div>
    `,
  }),
}
