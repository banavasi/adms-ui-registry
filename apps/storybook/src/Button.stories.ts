import type { Meta, StoryObj } from '@storybook/vue3'
import { Button } from '@/components/ui/Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Buttons allow users to take actions, make choices, and submit data.

## Installation

\`\`\`bash
adms-rds-ui add button
\`\`\`

## Import

\`\`\`vue
<script setup lang="ts">
import { Button } from '@/components/ui/Button'
</script>

<template>
  <Button variant="primary">Click me</Button>
</template>
\`\`\`

## Available Variants

- **Solid**: primary, secondary, success, danger, warning, info, light, dark
- **Outline**: outline-primary, outline-secondary, outline-success, outline-danger, outline-warning, outline-info, outline-light, outline-dark
- **Link**: link

## Sizes

sm, md (default), lg`,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      description: 'Button style variant',
      options: [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
        'outline-primary',
        'outline-secondary',
        'outline-success',
        'outline-danger',
        'outline-warning',
        'outline-info',
        'outline-light',
        'outline-dark',
        'link',
      ],
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      description: 'Button size',
      options: ['sm', 'md', 'lg'],
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Show loading state with spinner',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Primary Button</Button>',
  }),
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Secondary Button</Button>',
  }),
}

export const Success: Story = {
  args: {
    variant: 'success',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Success</Button>',
  }),
}

export const Danger: Story = {
  args: {
    variant: 'danger',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Danger</Button>',
  }),
}

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => ({
    components: { Button },
    template: `
      <div class="d-flex flex-wrap gap-2 p-4">
        <div class="w-100">
          <h6 class="mb-2">Solid Variants</h6>
          <div class="d-flex flex-wrap gap-2 mb-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="info">Info</Button>
            <Button variant="light">Light</Button>
            <Button variant="dark">Dark</Button>
          </div>
        </div>
        <div class="w-100">
          <h6 class="mb-2">Outline Variants</h6>
          <div class="d-flex flex-wrap gap-2 mb-3">
            <Button variant="outline-primary">Primary</Button>
            <Button variant="outline-secondary">Secondary</Button>
            <Button variant="outline-success">Success</Button>
            <Button variant="outline-danger">Danger</Button>
            <Button variant="outline-warning">Warning</Button>
            <Button variant="outline-info">Info</Button>
            <Button variant="outline-light">Light</Button>
            <Button variant="outline-dark">Dark</Button>
          </div>
        </div>
        <div class="w-100">
          <h6 class="mb-2">Link Variant</h6>
          <div class="d-flex flex-wrap gap-2">
            <Button variant="link">Link Button</Button>
          </div>
        </div>
      </div>
    `,
  }),
}

export const OutlineVariants: Story = {
  name: 'Outline Variants',
  render: () => ({
    components: { Button },
    template: `
      <div class="d-flex flex-wrap gap-2 p-4">
        <Button variant="outline-primary">Primary</Button>
        <Button variant="outline-secondary">Secondary</Button>
        <Button variant="outline-success">Success</Button>
        <Button variant="outline-danger">Danger</Button>
        <Button variant="outline-warning">Warning</Button>
        <Button variant="outline-info">Info</Button>
        <Button variant="outline-light">Light</Button>
        <Button variant="outline-dark">Dark</Button>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  name: 'Button Sizes',
  render: () => ({
    components: { Button },
    template: `
      <div class="d-flex align-items-center gap-2 p-4">
        <Button size="sm" variant="primary">Small</Button>
        <Button size="md" variant="primary">Medium</Button>
        <Button size="lg" variant="primary">Large</Button>
      </div>
    `,
  }),
}

export const AllSizes: Story = {
  name: 'All Size Combinations',
  render: () => ({
    components: { Button },
    template: `
      <div class="p-4">
        <div class="mb-4">
          <h6 class="mb-2">Small (sm)</h6>
          <div class="d-flex flex-wrap gap-2">
            <Button size="sm" variant="primary">Primary</Button>
            <Button size="sm" variant="secondary">Secondary</Button>
            <Button size="sm" variant="outline-primary">Outline</Button>
          </div>
        </div>
        <div class="mb-4">
          <h6 class="mb-2">Medium (md) - Default</h6>
          <div class="d-flex flex-wrap gap-2">
            <Button size="md" variant="primary">Primary</Button>
            <Button size="md" variant="secondary">Secondary</Button>
            <Button size="md" variant="outline-primary">Outline</Button>
          </div>
        </div>
        <div>
          <h6 class="mb-2">Large (lg)</h6>
          <div class="d-flex flex-wrap gap-2">
            <Button size="lg" variant="primary">Primary</Button>
            <Button size="lg" variant="secondary">Secondary</Button>
            <Button size="lg" variant="outline-primary">Outline</Button>
          </div>
        </div>
      </div>
    `,
  }),
}

export const Loading: Story = {
  args: {
    loading: true,
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Loading...</Button>',
  }),
}

export const AllLoadingStates: Story = {
  name: 'Loading States',
  render: () => ({
    components: { Button },
    template: `
      <div class="d-flex flex-wrap gap-2 p-4">
        <Button loading variant="primary">Loading Primary</Button>
        <Button loading variant="secondary">Loading Secondary</Button>
        <Button loading variant="success">Loading Success</Button>
        <Button loading variant="danger">Loading Danger</Button>
        <Button loading variant="outline-primary">Loading Outline</Button>
      </div>
    `,
  }),
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Disabled</Button>',
  }),
}

export const AllDisabledStates: Story = {
  name: 'Disabled States',
  render: () => ({
    components: { Button },
    template: `
      <div class="d-flex flex-wrap gap-2 p-4">
        <Button disabled variant="primary">Primary</Button>
        <Button disabled variant="secondary">Secondary</Button>
        <Button disabled variant="success">Success</Button>
        <Button disabled variant="danger">Danger</Button>
        <Button disabled variant="outline-primary">Outline</Button>
        <Button disabled variant="link">Link</Button>
      </div>
    `,
  }),
}

export const AsLink: Story = {
  name: 'Button as Link',
  render: () => ({
    components: { Button },
    template: `
      <div class="p-4">
        <Button as-child variant="primary">
          <a href="https://asu.edu" target="_blank">ASU.edu (opens in new tab)</a>
        </Button>
      </div>
    `,
  }),
}

export const WithIcons: Story = {
  name: 'Button with Icons',
  render: () => ({
    components: { Button },
    template: `
      <div class="d-flex flex-wrap gap-2 p-4">
        <Button variant="primary">
          <span class="me-2">+</span> Add Item
        </Button>
        <Button variant="success">
          <span class="me-2">✓</span> Save
        </Button>
        <Button variant="danger">
          <span class="me-2">✕</span> Delete
        </Button>
        <Button variant="outline-primary">
          <span class="me-2">→</span> Continue
        </Button>
      </div>
    `,
  }),
}

export const IconOnly: Story = {
  name: 'Icon Only Buttons',
  render: () => ({
    components: { Button },
    template: `
      <div class="d-flex flex-wrap gap-2 p-4">
        <Button variant="primary" class="btn-icon">+</Button>
        <Button variant="secondary" class="btn-icon">?</Button>
        <Button variant="success" class="btn-icon">✓</Button>
        <Button variant="danger" class="btn-icon">✕</Button>
        <Button variant="outline-primary" class="btn-icon">→</Button>
        <Button variant="outline-secondary" class="btn-icon">⚙</Button>
      </div>
    `,
  }),
}

export const ButtonGroups: Story = {
  name: 'Button Groups',
  render: () => ({
    components: { Button },
    template: `
      <div class="p-4">
        <div class="mb-3">
          <h6 class="mb-2">Horizontal Button Group</h6>
          <div class="btn-group" role="group">
            <Button variant="primary">Left</Button>
            <Button variant="primary">Middle</Button>
            <Button variant="primary">Right</Button>
          </div>
        </div>
        <div class="mb-3">
          <h6 class="mb-2">Outline Button Group</h6>
          <div class="btn-group" role="group">
            <Button variant="outline-primary">Option 1</Button>
            <Button variant="outline-primary">Option 2</Button>
            <Button variant="outline-primary">Option 3</Button>
          </div>
        </div>
        <div>
          <h6 class="mb-2">Vertical Button Group</h6>
          <div class="btn-group-vertical" role="group">
            <Button variant="secondary">Top</Button>
            <Button variant="secondary">Middle</Button>
            <Button variant="secondary">Bottom</Button>
          </div>
        </div>
      </div>
    `,
  }),
}

export const UsageExample: Story = {
  name: 'Usage Example - Form Actions',
  parameters: {
    docs: {
      description: {
        story: 'Common form action button pattern with primary and secondary actions.',
      },
    },
  },
  render: () => ({
    components: { Button },
    template: `
      <div class="p-4 border rounded" style="max-width: 400px;">
        <h5 class="mb-3">Confirm Action</h5>
        <p class="text-muted mb-4">Are you sure you want to proceed with this action?</p>
        <div class="d-flex justify-content-end gap-2">
          <Button variant="outline-secondary">Cancel</Button>
          <Button variant="primary">Confirm</Button>
        </div>
      </div>
    `,
  }),
}
