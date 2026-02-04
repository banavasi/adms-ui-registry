import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { TextSSN } from '@/components/ui/TextSSN'

const meta: Meta = {
  title: 'Components/TextSSN',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `A masked input for Social Security Numbers. Automatically formats input as ###-##-####.

## Installation

\`\`\`bash
adms-rds-ui add text-ssn
\`\`\`

This will also install: input-root, input-masked, input-error, input-help, and label.

## Usage

\`\`\`vue
<script setup lang="ts">
import { TextSSN } from '@/components/ui/TextSSN'
import { ref } from 'vue'

const ssn = ref('')
</script>

<template>
  <TextSSN
    id="ssn"
    v-model="ssn"
    label="Social Security Number"
    help-text="Format: ###-##-####"
  />
</template>
\`\`\`

## Props

- **id** - Unique identifier (required)
- **v-model** - Two-way binding for SSN value (stores unmasked 9 digits)
- **label** - Label text
- **tooltip** - Tooltip text for label
- **optional** - Show "Optional" badge on label
- **placeholder** - Placeholder text (default: "###-##-####")
- **invalid** - Error state
- **disabled** - Disabled state
- **required** - Required field
- **helpText** - Help text (shown when not invalid)
- **errorText** - Error text (shown when invalid)

## Masked Input Primitive

For custom masks, use the InputMasked primitive:

\`\`\`bash
adms-rds-ui add input-masked
\`\`\`

### Mask Tokens

| Token | Description | Example |
|-------|-------------|---------|
| \`#\` | Digit (0-9) | Phone: \`###-###-####\` |
| \`%\` | Letter (a-z, A-Z) | Code: \`%%%-###\` |
| \`@\` | Alphanumeric | ID: \`@@@-####\` |
| \`*\` | Any character | Custom: \`***-***\` |
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Basic SSN',
  render: () => ({
    components: { TextSSN },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div style="min-width: 300px;">
        <TextSSN
          id="ssn"
          v-model="value"
          label="Social Security Number"
        />
        <p class="mt-2 text-muted fs-small">Unmasked value: {{ value || '(empty)' }}</p>
      </div>
    `,
  }),
}

export const WithHelp: Story = {
  name: 'With Help Text',
  render: () => ({
    components: { TextSSN },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div style="min-width: 300px;">
        <TextSSN
          id="ssn-help"
          v-model="value"
          label="Social Security Number"
          help-text="Your SSN is required for tax purposes and will be kept secure."
        />
      </div>
    `,
  }),
}

export const WithError: Story = {
  name: 'With Error State',
  render: () => ({
    components: { TextSSN },
    setup() {
      const value = ref('12345')
      return { value }
    },
    template: `
      <div style="min-width: 300px;">
        <TextSSN
          id="ssn-error"
          v-model="value"
          label="Social Security Number"
          error-text="Please enter a valid 9-digit SSN."
          :invalid="true"
        />
      </div>
    `,
  }),
}

export const WithTooltip: Story = {
  name: 'With Label Tooltip',
  render: () => ({
    components: { TextSSN },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div style="min-width: 300px;">
        <TextSSN
          id="ssn-tooltip"
          v-model="value"
          label="Social Security Number"
          tooltip="Your SSN is encrypted and stored securely. We never share this information."
          help-text="Required for identity verification."
        />
      </div>
    `,
  }),
}

export const Optional: Story = {
  name: 'Optional Field',
  render: () => ({
    components: { TextSSN },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div style="min-width: 300px;">
        <TextSSN
          id="ssn-optional"
          v-model="value"
          label="Social Security Number"
          :optional="true"
          help-text="Providing your SSN helps speed up verification."
        />
      </div>
    `,
  }),
}

export const Disabled: Story = {
  name: 'Disabled Field',
  render: () => ({
    components: { TextSSN },
    setup() {
      const value = ref('123456789')
      return { value }
    },
    template: `
      <div style="min-width: 300px;">
        <TextSSN
          id="ssn-disabled"
          v-model="value"
          label="Social Security Number"
          :disabled="true"
        />
      </div>
    `,
  }),
}

export const ValidationExample: Story = {
  name: 'With Validation',
  render: () => ({
    components: { TextSSN },
    setup() {
      const value = ref('')
      const isInvalid = ref(false)
      const errorMessage = ref('')

      function validate() {
        if (!value.value) {
          isInvalid.value = true
          errorMessage.value = 'SSN is required.'
        } else if (value.value.length !== 9) {
          isInvalid.value = true
          errorMessage.value = 'SSN must be exactly 9 digits.'
        } else {
          isInvalid.value = false
          errorMessage.value = ''
        }
      }

      return { value, isInvalid, errorMessage, validate }
    },
    template: `
      <div style="min-width: 300px;">
        <TextSSN
          id="ssn-validation"
          v-model="value"
          label="Social Security Number"
          :required="true"
          help-text="Enter your 9-digit SSN."
          :error-text="errorMessage"
          :invalid="isInvalid"
          @blur="validate"
        />
        <p class="mt-2 text-muted fs-small">
          Length: {{ value.length }}/9 digits
        </p>
      </div>
    `,
  }),
}

export const PrefilledValue: Story = {
  name: 'Prefilled Value',
  render: () => ({
    components: { TextSSN },
    setup() {
      const value = ref('123456789')
      return { value }
    },
    template: `
      <div style="min-width: 300px;">
        <TextSSN
          id="ssn-prefilled"
          v-model="value"
          label="Social Security Number"
          help-text="Click to edit. Shows ###-##-6789 when blurred."
        />
        <p class="mt-2 text-muted fs-small">Stored value: {{ value }}</p>
      </div>
    `,
  }),
}

export const MaskedOnBlur: Story = {
  name: 'Masked on Blur (Security)',
  render: () => ({
    components: { TextSSN },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div style="min-width: 300px;">
        <TextSSN
          id="ssn-masked-blur"
          v-model="value"
          label="Social Security Number"
          help-text="Type an SSN, then click outside. Only last 4 digits shown."
        />
        <p class="mt-2 text-muted fs-small">
          Stored: {{ value || '(empty)' }}<br/>
          Display on blur: {{ value && value.length >= 4 ? '###-##-' + value.slice(-4) : '(type at least 4 digits)' }}
        </p>
      </div>
    `,
  }),
}
