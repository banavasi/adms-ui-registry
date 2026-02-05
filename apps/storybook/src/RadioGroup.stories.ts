import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { RadioGroup } from '@/components/ui/RadioGroup'

const meta: Meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `A vertical radio group component with simple radio button and label layout. Fully accessible with Reka UI primitives and ASU brand styling.

## Installation

\`\`\`bash
adms-rds-ui add radio-group
\`\`\`

This will also install the required dependencies: input-root, input-error, input-help, and label.

## Usage

\`\`\`vue
<script setup lang="ts">
import { RadioGroup } from '@/components/ui/RadioGroup'
import { ref } from 'vue'

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
]

const selected = ref<string>()
</script>

<template>
  <RadioGroup
    id="my-radio-group"
    v-model="selected"
    :options="options"
    label="Select an option"
  />
</template>
\`\`\`

## Props

- **id** - Unique identifier (required)
- **options** - Array of option objects with \`value\` and \`label\` (required)
- **v-model** - Two-way binding for the selected value (string)
- **label** - Label text
- **tooltip** - Tooltip text for label
- **optional** - Show "Optional" badge on label
- **invalid** - Error state
- **disabled** - Disabled state
- **required** - Required field
- **helpText** - Help text (shown when not invalid)
- **errorText** - Error text (shown when invalid)

## Events

- **@change** - Emitted when selection changes (value: selected string value)
- **@focus** - Emitted when radio group receives focus
- **@blur** - Emitted when radio group loses focus

## Option Type

Each option object should have:
- **value** (string) - Unique value for this option
- **label** (string) - Display label for this option
- **disabled** (boolean, optional) - Whether this option is disabled
`,
      },
    },
  },
  argTypes: {
    invalid: {
      control: 'boolean',
      table: { defaultValue: { summary: false } },
    },
    disabled: {
      control: 'boolean',
      table: { defaultValue: { summary: false } },
    },
    required: {
      control: 'boolean',
      table: { defaultValue: { summary: false } },
    },
    optional: {
      control: 'boolean',
      table: { defaultValue: { summary: false } },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Basic Usage',
  render: () => ({
    components: { RadioGroup },
    setup() {
      const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ]
      const selected = ref<string>()
      return { options, selected }
    },
    template: `
      <div style="min-width: 300px;">
        <RadioGroup
          id="default-demo"
          v-model="selected"
          :options="options"
          label="Select an option"
        />
        <p class="mt-3 text-muted fs-small">
          Selected: {{ selected ?? 'undefined' }}
        </p>
      </div>
    `,
  }),
}

export const WithPrefill: Story = {
  name: 'With Prefill Value',
  render: () => ({
    components: { RadioGroup },
    setup() {
      const options = [
        { value: 'small', label: 'Small' },
        { value: 'medium', label: 'Medium' },
        { value: 'large', label: 'Large' },
      ]
      const selected = ref('medium')
      return { options, selected }
    },
    template: `
      <div style="min-width: 300px;">
        <RadioGroup
          id="prefill-demo"
          v-model="selected"
          :options="options"
          label="Select size"
          help-text="Medium is pre-selected"
        />
        <p class="mt-3 text-muted fs-small">
          Selected: {{ selected ?? 'undefined' }}
        </p>
      </div>
    `,
  }),
}

export const WithHelpText: Story = {
  name: 'With Help Text',
  render: () => ({
    components: { RadioGroup },
    setup() {
      const options = [
        { value: 'credit', label: 'Credit Card' },
        { value: 'debit', label: 'Debit Card' },
        { value: 'paypal', label: 'PayPal' },
      ]
      const selected = ref<string>()
      return { options, selected }
    },
    template: `
      <div style="min-width: 300px;">
        <RadioGroup
          id="help-demo"
          v-model="selected"
          :options="options"
          label="Payment Method"
          help-text="Select your preferred payment method for this order."
        />
      </div>
    `,
  }),
}

export const WithError: Story = {
  name: 'With Error State',
  render: () => ({
    components: { RadioGroup },
    setup() {
      const options = [
        { value: 'yes', label: 'Yes, I agree' },
        { value: 'no', label: 'No, I disagree' },
      ]
      const selected = ref<string>()
      return { options, selected }
    },
    template: `
      <div style="min-width: 300px;">
        <RadioGroup
          id="error-demo"
          v-model="selected"
          :options="options"
          label="Terms Agreement"
          :invalid="true"
          :required="true"
          error-text="You must agree to the terms to continue."
        />
      </div>
    `,
  }),
}

export const Disabled: Story = {
  name: 'Disabled State',
  render: () => ({
    components: { RadioGroup },
    setup() {
      const options = [
        { value: 'opt1', label: 'Option 1' },
        { value: 'opt2', label: 'Option 2' },
        { value: 'opt3', label: 'Option 3' },
      ]
      const selected = ref('opt1')
      return { options, selected }
    },
    template: `
      <div style="min-width: 300px;">
        <RadioGroup
          id="disabled-demo"
          v-model="selected"
          :options="options"
          label="Disabled Selection"
          :disabled="true"
        />
        <p class="mt-3 text-muted fs-small">Component is disabled</p>
      </div>
    `,
  }),
}

export const WithDisabledOption: Story = {
  name: 'With Disabled Option',
  render: () => ({
    components: { RadioGroup },
    setup() {
      const options = [
        { value: 'standard', label: 'Standard Shipping' },
        { value: 'express', label: 'Express Shipping (Sold Out)', disabled: true },
        { value: 'overnight', label: 'Overnight Shipping' },
      ]
      const selected = ref<string>()
      return { options, selected }
    },
    template: `
      <div style="min-width: 300px;">
        <RadioGroup
          id="disabled-option-demo"
          v-model="selected"
          :options="options"
          label="Shipping Method"
          help-text="Express shipping is currently unavailable."
        />
      </div>
    `,
  }),
}

export const WithTooltip: Story = {
  name: 'With Label Tooltip',
  render: () => ({
    components: { RadioGroup },
    setup() {
      const options = [
        { value: 'monthly', label: 'Monthly Billing' },
        { value: 'yearly', label: 'Yearly Billing (Save 20%)' },
      ]
      const selected = ref<string>()
      return { options, selected }
    },
    template: `
      <div style="min-width: 300px;">
        <RadioGroup
          id="tooltip-demo"
          v-model="selected"
          :options="options"
          label="Billing Cycle"
          tooltip="Choose how often you want to be billed"
        />
      </div>
    `,
  }),
}

export const Required: Story = {
  name: 'Required Field',
  render: () => ({
    components: { RadioGroup },
    setup() {
      const options = [
        { value: 'mr', label: 'Mr.' },
        { value: 'mrs', label: 'Mrs.' },
        { value: 'ms', label: 'Ms.' },
        { value: 'dr', label: 'Dr.' },
      ]
      const selected = ref<string>()
      return { options, selected }
    },
    template: `
      <div style="min-width: 300px;">
        <RadioGroup
          id="required-demo"
          v-model="selected"
          :options="options"
          label="Title"
          :required="true"
        />
      </div>
    `,
  }),
}

export const Optional: Story = {
  name: 'Optional Field',
  render: () => ({
    components: { RadioGroup },
    setup() {
      const options = [
        { value: 'newsletter', label: 'Subscribe to newsletter' },
        { value: 'no-newsletter', label: "Don't subscribe" },
      ]
      const selected = ref<string>()
      return { options, selected }
    },
    template: `
      <div style="min-width: 300px;">
        <RadioGroup
          id="optional-demo"
          v-model="selected"
          :options="options"
          label="Email Preferences"
          :optional="true"
          help-text="You can change this later in your account settings."
        />
      </div>
    `,
  }),
}

export const TwoOptions: Story = {
  name: 'Two Options (Yes/No)',
  render: () => ({
    components: { RadioGroup },
    setup() {
      const options = [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
      ]
      const selected = ref<string>()
      return { options, selected }
    },
    template: `
      <div style="min-width: 300px;">
        <RadioGroup
          id="yes-no-demo"
          v-model="selected"
          :options="options"
          label="Do you want to receive notifications?"
        />
        <p class="mt-3 text-muted fs-small">
          Selected: {{ selected ?? 'undefined' }}
        </p>
      </div>
    `,
  }),
}

export const ManyOptions: Story = {
  name: 'Many Options',
  render: () => ({
    components: { RadioGroup },
    setup() {
      const options = [
        { value: 'monday', label: 'Monday' },
        { value: 'tuesday', label: 'Tuesday' },
        { value: 'wednesday', label: 'Wednesday' },
        { value: 'thursday', label: 'Thursday' },
        { value: 'friday', label: 'Friday' },
      ]
      const selected = ref<string>()
      return { options, selected }
    },
    template: `
      <div style="min-width: 300px;">
        <RadioGroup
          id="many-demo"
          v-model="selected"
          :options="options"
          label="Preferred Meeting Day"
          help-text="Select your preferred day for weekly meetings."
        />
      </div>
    `,
  }),
}

export const FormExample: Story = {
  name: 'Form Example',
  render: () => ({
    components: { RadioGroup },
    setup() {
      const contactOptions = [
        { value: 'email', label: 'Email' },
        { value: 'phone', label: 'Phone' },
        { value: 'sms', label: 'SMS' },
      ]
      const timeOptions = [
        { value: 'morning', label: 'Morning (9am - 12pm)' },
        { value: 'afternoon', label: 'Afternoon (12pm - 5pm)' },
        { value: 'evening', label: 'Evening (5pm - 8pm)' },
      ]

      const contactMethod = ref<string>()
      const preferredTime = ref<string>()
      const errors = ref({ contact: false, time: false })

      const validate = () => {
        errors.value.contact = !contactMethod.value
        errors.value.time = !preferredTime.value
      }

      return { contactOptions, timeOptions, contactMethod, preferredTime, errors, validate }
    },
    template: `
      <form class="p-4 border rounded" style="min-width: 400px;">
        <h4 class="mb-4">Contact Preferences</h4>

        <RadioGroup
          id="form-contact"
          v-model="contactMethod"
          :options="contactOptions"
          label="How should we contact you?"
          :required="true"
          :invalid="errors.contact"
          error-text="Please select a contact method."
          @change="errors.contact = false"
          class="mb-4"
        />

        <RadioGroup
          id="form-time"
          v-model="preferredTime"
          :options="timeOptions"
          label="Preferred time of day"
          :required="true"
          :invalid="errors.time"
          error-text="Please select a preferred time."
          @change="errors.time = false"
          class="mb-4"
        />

        <button type="button" class="btn btn-primary" @click="validate">
          Save Preferences
        </button>

        <div class="mt-3 p-2 bg-light rounded">
          <small class="text-muted">
            Method: {{ contactMethod ?? 'None' }} |
            Time: {{ preferredTime ?? 'None' }}
          </small>
        </div>
      </form>
    `,
  }),
}
