import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { RadioSegment } from '@/components/ui/RadioSegment'

interface Country {
  name: string
  code: string
}

interface Size {
  label: string
  value: string
  price: number
}

interface Priority {
  text: string
  level: number
}

const meta: Meta = {
  title: 'Components/RadioSegment',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `A card-style horizontal radio group that works with any array of JSON objects. Displays options as separate cards with shadows and radio indicators. Fully typed with generic support.

## Installation

\`\`\`bash
adms-rds-ui add radio-segment
\`\`\`

This will also install the required dependencies: input-root, input-error, input-help, and label.

## Usage

\`\`\`vue
<script setup lang="ts">
import { RadioSegment } from '@/components/ui/RadioSegment'
import { ref } from 'vue'

interface Country {
  name: string
  code: string
}

const countries: Country[] = [
  { name: 'America', code: 'usa' },
  { name: 'Canada', code: 'can' },
  { name: 'Mexico', code: 'mex' },
]

const selectedCountry = ref<Country>()
</script>

<template>
  <RadioSegment
    id="country"
    v-model="selectedCountry"
    :options="countries"
    label-key="name"
    value-key="code"
    prefill-value="usa"
    label="Select Country"
  />
</template>
\`\`\`

## Props

- **id** - Unique identifier (required)
- **options** - Array of option objects (required)
- **labelKey** - Key in option object to use as display label (required)
- **valueKey** - Key in option object to use as value for matching (required)
- **prefillValue** - Value to prefill/preselect (case-insensitive match against valueKey)
- **v-model** - Two-way binding for the selected option object
- **label** - Label text
- **tooltip** - Tooltip text for label
- **optional** - Show "Optional" badge on label
- **invalid** - Error state
- **disabled** - Disabled state
- **required** - Required field
- **helpText** - Help text (shown when not invalid)
- **errorText** - Error text (shown when invalid)
- **readonly** - Make the radio group read-only

## Events

- **@change** - Emitted when selection changes (value: full option object)
- **@focus** - Emitted when radio group receives focus
- **@blur** - Emitted when radio group loses focus

## Type Safety

The component uses Vue 3.3+ generics. When you provide typed options, the v-model will be correctly typed:

\`\`\`typescript
interface Country {
  name: string
  code: string
}

const countries: Country[] = [...]
const selected = ref<Country>() // Properly typed!
\`\`\`
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Basic Usage',
  render: () => ({
    components: { RadioSegment },
    setup() {
      const countries: Country[] = [
        { name: 'America', code: 'usa' },
        { name: 'Canada', code: 'can' },
        { name: 'Mexico', code: 'mex' },
      ]
      const selected = ref<Country>()
      return { countries, selected }
    },
    template: `
      <div style="min-width: 400px;">
        <RadioSegment
          id="country-basic"
          v-model="selected"
          :options="countries"
          label-key="name"
          value-key="code"
          label="Select Country"
        />
        <p class="mt-3 text-muted fs-small">
          Selected: {{ selected ? JSON.stringify(selected) : 'undefined' }}
        </p>
      </div>
    `,
  }),
}

export const WithPrefillValue: Story = {
  name: 'With Prefill Value',
  render: () => ({
    components: { RadioSegment },
    setup() {
      const countries: Country[] = [
        { name: 'America', code: 'usa' },
        { name: 'Canada', code: 'can' },
        { name: 'Mexico', code: 'mex' },
      ]
      const selected = ref<Country>()
      return { countries, selected }
    },
    template: `
      <div style="min-width: 400px;">
        <RadioSegment
          id="country-prefill"
          v-model="selected"
          :options="countries"
          label-key="name"
          value-key="code"
          prefill-value="can"
          label="Select Country"
          help-text="Canada is pre-selected using prefill-value='can'"
        />
        <p class="mt-3 text-muted fs-small">
          Selected: {{ selected ? JSON.stringify(selected) : 'undefined' }}
        </p>
      </div>
    `,
  }),
}

export const CaseInsensitivePrefill: Story = {
  name: 'Case-Insensitive Prefill',
  render: () => ({
    components: { RadioSegment },
    setup() {
      const countries: Country[] = [
        { name: 'America', code: 'usa' },
        { name: 'Canada', code: 'can' },
        { name: 'Mexico', code: 'mex' },
      ]
      const selected = ref<Country>()
      return { countries, selected }
    },
    template: `
      <div style="min-width: 400px;">
        <RadioSegment
          id="country-case"
          v-model="selected"
          :options="countries"
          label-key="name"
          value-key="code"
          prefill-value="USA"
          label="Select Country"
          help-text="Matching is case-insensitive: 'USA' matches 'usa'"
        />
        <p class="mt-3 text-muted fs-small">
          Selected: {{ selected ? JSON.stringify(selected) : 'undefined' }}
        </p>
      </div>
    `,
  }),
}

export const WithNumericValues: Story = {
  name: 'With Numeric Values',
  render: () => ({
    components: { RadioSegment },
    setup() {
      const priorities: Priority[] = [
        { text: 'Low', level: 1 },
        { text: 'Medium', level: 2 },
        { text: 'High', level: 3 },
      ]
      const selected = ref<Priority>()
      return { priorities, selected }
    },
    template: `
      <div style="min-width: 400px;">
        <RadioSegment
          id="priority"
          v-model="selected"
          :options="priorities"
          label-key="text"
          value-key="level"
          :prefill-value="2"
          label="Priority Level"
          help-text="Using numeric values for matching"
        />
        <p class="mt-3 text-muted fs-small">
          Selected: {{ selected ? JSON.stringify(selected) : 'undefined' }}
        </p>
      </div>
    `,
  }),
}

export const WithExtraFields: Story = {
  name: 'Objects with Extra Fields',
  render: () => ({
    components: { RadioSegment },
    setup() {
      const sizes: Size[] = [
        { label: 'Small', value: 'sm', price: 10 },
        { label: 'Medium', value: 'md', price: 15 },
        { label: 'Large', value: 'lg', price: 20 },
        { label: 'X-Large', value: 'xl', price: 25 },
      ]
      const selected = ref<Size>()
      return { sizes, selected }
    },
    template: `
      <div style="min-width: 500px;">
        <RadioSegment
          id="size"
          v-model="selected"
          :options="sizes"
          label-key="label"
          value-key="value"
          prefill-value="md"
          label="Select Size"
        />
        <div v-if="selected" class="mt-3 p-3 bg-light rounded">
          <strong>Selected Size:</strong> {{ selected.label }}<br>
          <strong>Price:</strong> \${{ selected.price }}
        </div>
        <p v-else class="mt-3 text-muted fs-small">Select a size to see price</p>
      </div>
    `,
  }),
}

export const WithError: Story = {
  name: 'With Error State',
  render: () => ({
    components: { RadioSegment },
    setup() {
      const options = [
        { name: 'Option A', id: 'a' },
        { name: 'Option B', id: 'b' },
        { name: 'Option C', id: 'c' },
      ]
      const selected = ref()
      return { options, selected }
    },
    template: `
      <div style="min-width: 400px;">
        <RadioSegment
          id="error-demo"
          v-model="selected"
          :options="options"
          label-key="name"
          value-key="id"
          label="Required Selection"
          :invalid="true"
          error-text="Please select an option."
        />
      </div>
    `,
  }),
}

export const Disabled: Story = {
  name: 'Disabled State',
  render: () => ({
    components: { RadioSegment },
    setup() {
      const options = [
        { name: 'Yes', value: 'yes' },
        { name: 'No', value: 'no' },
        { name: 'Maybe', value: 'maybe' },
      ]
      const selected = ref()
      return { options, selected }
    },
    template: `
      <div style="min-width: 400px;">
        <RadioSegment
          id="disabled-demo"
          v-model="selected"
          :options="options"
          label-key="name"
          value-key="value"
          prefill-value="yes"
          label="Answer"
          :disabled="true"
        />
        <p class="mt-3 text-muted fs-small">Component is disabled</p>
      </div>
    `,
  }),
}

export const WithTooltip: Story = {
  name: 'With Label Tooltip',
  render: () => ({
    components: { RadioSegment },
    setup() {
      const options = [
        { name: 'Standard', code: 'std' },
        { name: 'Express', code: 'exp' },
        { name: 'Overnight', code: 'ovn' },
      ]
      const selected = ref()
      return { options, selected }
    },
    template: `
      <div style="min-width: 400px;">
        <RadioSegment
          id="tooltip-demo"
          v-model="selected"
          :options="options"
          label-key="name"
          value-key="code"
          label="Shipping Method"
          tooltip="Select how quickly you need your order delivered"
          help-text="Express and Overnight have additional fees."
        />
      </div>
    `,
  }),
}

export const TwoOptions: Story = {
  name: 'Two Options (Yes/No Alternative)',
  render: () => ({
    components: { RadioSegment },
    setup() {
      const options = [
        { label: 'Agree', value: 'Y' },
        { label: 'Disagree', value: 'N' },
      ]
      const selected = ref()
      return { options, selected }
    },
    template: `
      <div style="min-width: 300px;">
        <RadioSegment
          id="agree-demo"
          v-model="selected"
          :options="options"
          label-key="label"
          value-key="value"
          label="Do you agree to the terms?"
          :required="true"
        />
        <p class="mt-3 text-muted fs-small">
          Selected: {{ selected ? selected.value : 'undefined' }}
        </p>
      </div>
    `,
  }),
}

export const ManyOptions: Story = {
  name: 'Many Options',
  render: () => ({
    components: { RadioSegment },
    setup() {
      const days = [
        { name: 'Mon', day: 'monday' },
        { name: 'Tue', day: 'tuesday' },
        { name: 'Wed', day: 'wednesday' },
        { name: 'Thu', day: 'thursday' },
        { name: 'Fri', day: 'friday' },
      ]
      const selected = ref()
      return { days, selected }
    },
    template: `
      <div>
        <RadioSegment
          id="days-demo"
          v-model="selected"
          :options="days"
          label-key="name"
          value-key="day"
          label="Preferred Day"
          prefill-value="wednesday"
        />
        <p class="mt-3 text-muted fs-small">
          Selected: {{ selected ? selected.day : 'undefined' }}
        </p>
      </div>
    `,
  }),
}

export const FormExample: Story = {
  name: 'Complete Form Example',
  render: () => ({
    components: { RadioSegment },
    setup() {
      const shippingOptions = [
        { name: 'Standard', code: 'std', days: '5-7' },
        { name: 'Express', code: 'exp', days: '2-3' },
        { name: 'Next Day', code: 'next', days: '1' },
      ]
      const paymentOptions = [
        { label: 'Credit Card', value: 'cc' },
        { label: 'PayPal', value: 'pp' },
        { label: 'Bank Transfer', value: 'bt' },
      ]

      const shipping = ref<(typeof shippingOptions)[0]>()
      const payment = ref<(typeof paymentOptions)[0]>()
      const errors = ref({ shipping: false, payment: false })

      const validate = () => {
        errors.value.shipping = !shipping.value
        errors.value.payment = !payment.value
      }

      return { shippingOptions, paymentOptions, shipping, payment, errors, validate }
    },
    template: `
      <form class="p-4 border rounded" style="min-width: 500px;">
        <h4 class="mb-4">Checkout Options</h4>

        <RadioSegment
          id="form-shipping"
          v-model="shipping"
          :options="shippingOptions"
          label-key="name"
          value-key="code"
          label="Shipping Method"
          :required="true"
          :invalid="errors.shipping"
          error-text="Please select a shipping method."
          @change="errors.shipping = false"
          class="mb-4"
        />

        <div v-if="shipping" class="mb-4 p-2 bg-light rounded">
          <small>Estimated delivery: {{ shipping.days }} business days</small>
        </div>

        <RadioSegment
          id="form-payment"
          v-model="payment"
          :options="paymentOptions"
          label-key="label"
          value-key="value"
          label="Payment Method"
          :required="true"
          :invalid="errors.payment"
          error-text="Please select a payment method."
          @change="errors.payment = false"
          class="mb-4"
        />

        <button type="button" class="btn btn-primary" @click="validate">
          Continue to Payment
        </button>

        <div class="mt-3 p-2 bg-light rounded">
          <small class="text-muted">
            Shipping: {{ shipping?.name ?? 'None' }} |
            Payment: {{ payment?.label ?? 'None' }}
          </small>
        </div>
      </form>
    `,
  }),
}
