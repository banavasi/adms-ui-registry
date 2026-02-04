import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { InputError } from '@/components/ui/InputError'
import { InputHelp } from '@/components/ui/InputHelp'
import { InputNumericRange } from '@/components/ui/InputNumericRange'
import { InputRoot } from '@/components/ui/InputRoot'
import { Label } from '@/components/ui/Label'

const meta: Meta = {
  title: 'Primitives/InputNumericRange',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `A numeric input primitive with min/max range validation, decimal support, and prefix/suffix formatting.

## Installation

\`\`\`bash
adms-rds-ui add input-numeric-range
\`\`\`

## Usage

\`\`\`vue
<script setup lang="ts">
import { InputRoot } from '@/components/ui/InputRoot'
import { InputNumericRange } from '@/components/ui/InputNumericRange'
import { Label } from '@/components/ui/Label'
import { ref } from 'vue'

const price = ref<number | null>(null)
</script>

<template>
  <InputRoot id="price">
    <Label for="price">Price</Label>
    <InputNumericRange
      v-model="price"
      :min="0"
      :max="1000"
      prefix="$"
      :allow-decimal="true"
      :decimal-places="2"
    />
  </InputRoot>
</template>
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| min | number | undefined | Minimum allowed value |
| max | number | undefined | Maximum allowed value |
| defaultValue | number | undefined | Default value on blur if empty |
| allowDecimal | boolean | false | Allow decimal values |
| decimalPlaces | number | 2 | Decimal places (when allowDecimal is true) |
| prefix | string | undefined | Prefix (e.g., "$", "€") |
| suffix | string | undefined | Suffix (e.g., "%", "kg") |

## Behavior

- **On focus**: Shows raw number without prefix/suffix for editing
- **On blur**: Applies min/max clamping and shows formatted value with prefix/suffix
- **Invalid characters**: Prevented via beforeinput event
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Basic Number',
  render: () => ({
    components: { InputRoot, InputNumericRange, Label },
    setup() {
      const value = ref<number | null>(null)
      return { value }
    },
    template: `
      <div style="min-width: 300px;">
        <InputRoot id="number">
          <Label for="number">Enter a number</Label>
          <InputNumericRange v-model="value" placeholder="0" />
        </InputRoot>
        <p class="mt-2 text-muted fs-small">Value: {{ value }}</p>
      </div>
    `,
  }),
}

export const WithRange: Story = {
  name: 'With Min/Max Range',
  render: () => ({
    components: { InputRoot, InputNumericRange, Label, InputHelp },
    setup() {
      const value = ref<number | null>(50)
      return { value }
    },
    template: `
      <div style="min-width: 300px;">
        <InputRoot id="range">
          <Label for="range">Age</Label>
          <InputNumericRange v-model="value" :min="18" :max="120" placeholder="Enter age" />
          <InputHelp>Must be between 18 and 120</InputHelp>
        </InputRoot>
        <p class="mt-2 text-muted fs-small">Value: {{ value }} (try typing 200, then blur)</p>
      </div>
    `,
  }),
}

export const WithDecimals: Story = {
  name: 'With Decimals',
  render: () => ({
    components: { InputRoot, InputNumericRange, Label },
    setup() {
      const value = ref<number | null>(3.14)
      return { value }
    },
    template: `
      <div style="min-width: 300px;">
        <InputRoot id="decimal">
          <Label for="decimal">Weight (kg)</Label>
          <InputNumericRange
            v-model="value"
            :allow-decimal="true"
            :decimal-places="2"
            suffix=" kg"
            placeholder="0.00"
          />
        </InputRoot>
        <p class="mt-2 text-muted fs-small">Value: {{ value }}</p>
      </div>
    `,
  }),
}

export const Currency: Story = {
  name: 'Currency Input',
  render: () => ({
    components: { InputRoot, InputNumericRange, Label, InputHelp },
    setup() {
      const value = ref<number | null>(99.99)
      return { value }
    },
    template: `
      <div style="min-width: 300px;">
        <InputRoot id="price">
          <Label for="price">Price</Label>
          <InputNumericRange
            v-model="value"
            :min="0"
            :max="10000"
            prefix="$"
            :allow-decimal="true"
            :decimal-places="2"
            placeholder="0.00"
          />
          <InputHelp>Enter amount between $0 and $10,000</InputHelp>
        </InputRoot>
        <p class="mt-2 text-muted fs-small">Value: {{ value }}</p>
      </div>
    `,
  }),
}

export const Percentage: Story = {
  name: 'Percentage Input',
  render: () => ({
    components: { InputRoot, InputNumericRange, Label, InputHelp },
    setup() {
      const value = ref<number | null>(75)
      return { value }
    },
    template: `
      <div style="min-width: 300px;">
        <InputRoot id="percentage">
          <Label for="percentage">Completion</Label>
          <InputNumericRange
            v-model="value"
            :min="0"
            :max="100"
            suffix="%"
            placeholder="0"
          />
          <InputHelp>Enter percentage (0-100)</InputHelp>
        </InputRoot>
        <p class="mt-2 text-muted fs-small">Value: {{ value }}%</p>
      </div>
    `,
  }),
}

export const Temperature: Story = {
  name: 'Temperature Input',
  render: () => ({
    components: { InputRoot, InputNumericRange, Label },
    setup() {
      const value = ref<number | null>(72)
      return { value }
    },
    template: `
      <div style="min-width: 300px;">
        <InputRoot id="temp">
          <Label for="temp">Temperature</Label>
          <InputNumericRange
            v-model="value"
            :min="-40"
            :max="140"
            suffix="°F"
            placeholder="72"
          />
        </InputRoot>
        <p class="mt-2 text-muted fs-small">Value: {{ value }}°F (negative allowed)</p>
      </div>
    `,
  }),
}

export const WithDefaultValue: Story = {
  name: 'With Default Value',
  render: () => ({
    components: { InputRoot, InputNumericRange, Label, InputHelp },
    setup() {
      const value = ref<number | null>(null)
      return { value }
    },
    template: `
      <div style="min-width: 300px;">
        <InputRoot id="default">
          <Label for="default">Quantity</Label>
          <InputNumericRange
            v-model="value"
            :min="1"
            :max="100"
            :default-value="1"
            placeholder="Enter quantity"
          />
          <InputHelp>Leave empty and blur to see default value (1)</InputHelp>
        </InputRoot>
        <p class="mt-2 text-muted fs-small">Value: {{ value }}</p>
      </div>
    `,
  }),
}

export const WithError: Story = {
  name: 'With Error State',
  render: () => ({
    components: { InputRoot, InputNumericRange, Label, InputError },
    setup() {
      const value = ref<number | null>(150)
      return { value }
    },
    template: `
      <div style="min-width: 300px;">
        <InputRoot id="error" :invalid="true">
          <Label for="error">Age</Label>
          <InputNumericRange v-model="value" :min="18" :max="120" />
          <InputError>Age must be between 18 and 120</InputError>
        </InputRoot>
      </div>
    `,
  }),
}

export const Disabled: Story = {
  name: 'Disabled',
  render: () => ({
    components: { InputRoot, InputNumericRange, Label },
    setup() {
      const value = ref<number | null>(42)
      return { value }
    },
    template: `
      <div style="min-width: 300px;">
        <InputRoot id="disabled" :disabled="true">
          <Label for="disabled">Locked Value</Label>
          <InputNumericRange v-model="value" prefix="$" />
        </InputRoot>
      </div>
    `,
  }),
}
