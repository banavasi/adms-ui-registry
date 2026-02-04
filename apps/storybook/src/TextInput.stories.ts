import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { TextInput } from '@/components/ui/TextInput'

const meta: Meta = {
  title: 'Components/TextInput',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `A composed text input component that bundles InputRoot, InputField, Label, InputHelp, and InputError into a single convenient component.

## Installation

\`\`\`bash
adms-rds-ui add text-input
\`\`\`

This will also install the required dependencies: input-root, input-field, input-error, input-help, and label.

## Usage

\`\`\`vue
<script setup lang="ts">
import { TextInput } from '@/components/ui/TextInput'
import { ref } from 'vue'

const email = ref('')
const hasError = ref(false)
</script>

<template>
  <TextInput
    id="email"
    v-model="email"
    label="Email Address"
    type="email"
    placeholder="you@example.com"
    help-text="We'll never share your email."
    error-text="Please enter a valid email."
    :invalid="hasError"
  />
</template>
\`\`\`

## Props

- **id** - Unique identifier (required)
- **v-model** - Two-way binding for input value
- **label** - Label text
- **tooltip** - Tooltip text for label
- **optional** - Show "Optional" badge on label
- **type** - Input type (text, email, password, etc.)
- **placeholder** - Placeholder text
- **invalid** - Error state
- **disabled** - Disabled state
- **required** - Required field
- **helpText** - Help text (shown when not invalid)
- **errorText** - Error text (shown when invalid)
- **hasPrefix** / **hasSuffix** - Enable prefix/suffix slots
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Basic Input',
  render: () => ({
    components: { TextInput },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div style="min-width: 300px;">
        <TextInput
          id="username"
          v-model="value"
          label="Username"
          placeholder="Enter username"
        />
        <p class="mt-2 text-muted fs-small">Value: {{ value }}</p>
      </div>
    `,
  }),
}

export const WithHelp: Story = {
  name: 'With Help Text',
  render: () => ({
    components: { TextInput },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div style="min-width: 300px;">
        <TextInput
          id="email"
          v-model="value"
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          help-text="We'll never share your email with anyone."
        />
      </div>
    `,
  }),
}

export const WithError: Story = {
  name: 'With Error State',
  render: () => ({
    components: { TextInput },
    setup() {
      const value = ref('invalid-email')
      return { value }
    },
    template: `
      <div style="min-width: 300px;">
        <TextInput
          id="email-error"
          v-model="value"
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          error-text="Please enter a valid email address."
          :invalid="true"
        />
      </div>
    `,
  }),
}

export const WithHelpAndError: Story = {
  name: 'Help and Error (toggles)',
  render: () => ({
    components: { TextInput },
    setup() {
      const value = ref('')
      const isInvalid = ref(false)
      return { value, isInvalid }
    },
    template: `
      <div style="min-width: 300px;">
        <TextInput
          id="email-toggle"
          v-model="value"
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          help-text="Enter your email to receive updates."
          error-text="Please enter a valid email address."
          :invalid="isInvalid"
        />
        <button class="btn btn-sm btn-outline-secondary mt-3" @click="isInvalid = !isInvalid">
          Toggle Invalid: {{ isInvalid }}
        </button>
      </div>
    `,
  }),
}

export const WithTooltip: Story = {
  name: 'With Label Tooltip',
  render: () => ({
    components: { TextInput },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div style="min-width: 300px;">
        <TextInput
          id="api-key"
          v-model="value"
          label="API Key"
          tooltip="Your API key can be found in your account settings under Developer Options."
          placeholder="sk-xxxxxxxxxxxx"
          help-text="Keep your API key secure."
        />
      </div>
    `,
  }),
}

export const Optional: Story = {
  name: 'Optional Field',
  render: () => ({
    components: { TextInput },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div style="min-width: 300px;">
        <TextInput
          id="nickname"
          v-model="value"
          label="Nickname"
          :optional="true"
          placeholder="What should we call you?"
          help-text="This is optional but helps personalize your experience."
        />
      </div>
    `,
  }),
}

export const Required: Story = {
  name: 'Required Field',
  render: () => ({
    components: { TextInput },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div style="min-width: 300px;">
        <TextInput
          id="full-name"
          v-model="value"
          label="Full Name"
          :required="true"
          placeholder="John Doe"
          help-text="This field is required."
        />
      </div>
    `,
  }),
}

export const Disabled: Story = {
  name: 'Disabled Field',
  render: () => ({
    components: { TextInput },
    setup() {
      const value = ref('Cannot edit this')
      return { value }
    },
    template: `
      <div style="min-width: 300px;">
        <TextInput
          id="locked"
          v-model="value"
          label="Locked Field"
          :disabled="true"
        />
      </div>
    `,
  }),
}

export const WithPrefix: Story = {
  name: 'With Prefix',
  render: () => ({
    components: { TextInput },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div style="min-width: 300px;">
        <TextInput
          id="price"
          v-model="value"
          label="Price"
          type="number"
          placeholder="0.00"
        >
          <template #prefix>$</template>
        </TextInput>
      </div>
    `,
  }),
}

export const WithSuffix: Story = {
  name: 'With Suffix',
  render: () => ({
    components: { TextInput },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div style="min-width: 300px;">
        <TextInput
          id="website"
          v-model="value"
          label="Website"
          placeholder="example"
        >
          <template #suffix>.com</template>
        </TextInput>
      </div>
    `,
  }),
}

export const WithPrefixAndSuffix: Story = {
  name: 'With Prefix and Suffix',
  render: () => ({
    components: { TextInput },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div style="min-width: 300px;">
        <TextInput
          id="subdomain"
          v-model="value"
          label="Subdomain"
          placeholder="mysite"
        >
          <template #prefix>https://</template>
          <template #suffix>.asu.edu</template>
        </TextInput>
      </div>
    `,
  }),
}

export const AllFeatures: Story = {
  name: 'All Features Combined',
  render: () => ({
    components: { TextInput },
    setup() {
      const value = ref('')
      const isInvalid = ref(false)
      return { value, isInvalid }
    },
    template: `
      <div style="min-width: 350px;">
        <TextInput
          id="asurite"
          v-model="value"
          label="ASURITE ID"
          tooltip="Your ASURITE ID is your unique ASU username"
          :optional="true"
          placeholder="jdoe1"
          help-text="This is used for ASU system access."
          error-text="ASURITE ID must be alphanumeric."
          :invalid="isInvalid"
        >
          <template #suffix>@asu.edu</template>
        </TextInput>
        <button class="btn btn-sm btn-outline-secondary mt-3" @click="isInvalid = !isInvalid">
          Toggle Invalid: {{ isInvalid }}
        </button>
      </div>
    `,
  }),
}

export const FormExample: Story = {
  name: 'Complete Form Example',
  render: () => ({
    components: { TextInput },
    setup() {
      const form = ref({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      })
      const errors = ref({
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
      })
      return { form, errors }
    },
    template: `
      <form class="p-4 border rounded" style="min-width: 400px;">
        <h4 class="mb-4">Contact Information</h4>

        <TextInput
          id="form-firstName"
          v-model="form.firstName"
          label="First Name"
          :required="true"
          placeholder="John"
          error-text="First name is required."
          :invalid="errors.firstName"
          class="mb-3"
        />

        <TextInput
          id="form-lastName"
          v-model="form.lastName"
          label="Last Name"
          :required="true"
          placeholder="Doe"
          error-text="Last name is required."
          :invalid="errors.lastName"
          class="mb-3"
        />

        <TextInput
          id="form-email"
          v-model="form.email"
          label="Email"
          tooltip="We'll send a confirmation email"
          :required="true"
          type="email"
          placeholder="john.doe@asu.edu"
          help-text="Use your ASU email if available."
          error-text="Please enter a valid email address."
          :invalid="errors.email"
          class="mb-3"
        />

        <TextInput
          id="form-phone"
          v-model="form.phone"
          label="Phone Number"
          :optional="true"
          type="tel"
          placeholder="(555) 123-4567"
          help-text="We'll only call if there's an issue."
          error-text="Please enter a valid phone number."
          :invalid="errors.phone"
          class="mb-3"
        />

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    `,
  }),
}
