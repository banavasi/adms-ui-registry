import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { InputRoot } from '@/components/ui/InputRoot'
import { InputField } from '@/components/ui/InputField'
import { InputError } from '@/components/ui/InputError'
import { InputHelp } from '@/components/ui/InputHelp'
import { Label } from '@/components/ui/Label'

const meta: Meta = {
  title: 'Primitives/Input',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Input primitives for building form fields. These composable components work together via Vue's provide/inject.

## Installation

\`\`\`bash
# Install all primitives
adms-rds-ui add input-root input-field input-error input-help

# Or install individually
adms-rds-ui add input-root
adms-rds-ui add input-field
\`\`\`

## Usage

\`\`\`vue
<script setup lang="ts">
import { InputRoot, InputField, InputError, InputHelp } from '@/components/ui'
import { Label } from '@/components/ui/Label'

const email = ref('')
const isInvalid = ref(false)
</script>

<template>
  <InputRoot id="email" :invalid="isInvalid">
    <Label for="email">Email</Label>
    <InputField v-model="email" type="email" placeholder="Enter email" />
    <InputHelp>We'll never share your email.</InputHelp>
    <InputError>Please enter a valid email address.</InputError>
  </InputRoot>
</template>
\`\`\`

## Components

- **InputRoot** - Context provider (required wrapper)
- **InputField** - The actual input element
- **InputError** - Error message (shown when invalid=true)
- **InputHelp** - Help text (shown when invalid=false)
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
    components: { InputRoot, InputField, Label },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div style="min-width: 300px;">
        <InputRoot id="username">
          <Label for="username">Username</Label>
          <InputField v-model="value" placeholder="Enter username" />
        </InputRoot>
        <p class="mt-2 text-muted fs-small">Value: {{ value }}</p>
      </div>
    `,
  }),
}

export const WithHelp: Story = {
  name: 'With Help Text',
  render: () => ({
    components: { InputRoot, InputField, InputHelp, Label },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div style="min-width: 300px;">
        <InputRoot id="email">
          <Label for="email">Email Address</Label>
          <InputField v-model="value" type="email" placeholder="you@example.com" />
          <InputHelp>We'll never share your email with anyone.</InputHelp>
        </InputRoot>
      </div>
    `,
  }),
}

export const WithError: Story = {
  name: 'With Error State',
  render: () => ({
    components: { InputRoot, InputField, InputError, Label },
    setup() {
      const value = ref('invalid-email')
      return { value }
    },
    template: `
      <div style="min-width: 300px;">
        <InputRoot id="email-error" :invalid="true">
          <Label for="email-error">Email Address</Label>
          <InputField v-model="value" type="email" placeholder="you@example.com" />
          <InputError>Please enter a valid email address.</InputError>
        </InputRoot>
      </div>
    `,
  }),
}

export const WithHelpAndError: Story = {
  name: 'Help and Error (toggles)',
  render: () => ({
    components: { InputRoot, InputField, InputError, InputHelp, Label },
    setup() {
      const value = ref('')
      const isInvalid = ref(false)
      return { value, isInvalid }
    },
    template: `
      <div style="min-width: 300px;">
        <InputRoot id="email-toggle" :invalid="isInvalid">
          <Label for="email-toggle">Email Address</Label>
          <InputField v-model="value" type="email" placeholder="you@example.com" />
          <InputHelp>Enter your email to receive updates.</InputHelp>
          <InputError>Please enter a valid email address.</InputError>
        </InputRoot>
        <button class="btn btn-sm btn-outline-secondary mt-3" @click="isInvalid = !isInvalid">
          Toggle Invalid: {{ isInvalid }}
        </button>
      </div>
    `,
  }),
}

export const Required: Story = {
  name: 'Required Field',
  render: () => ({
    components: { InputRoot, InputField, InputHelp, Label },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div style="min-width: 300px;">
        <InputRoot id="required-field" :required="true">
          <Label for="required-field">Full Name</Label>
          <InputField v-model="value" placeholder="John Doe" />
          <InputHelp>This field is required.</InputHelp>
        </InputRoot>
      </div>
    `,
  }),
}

export const Disabled: Story = {
  name: 'Disabled Field',
  render: () => ({
    components: { InputRoot, InputField, Label },
    setup() {
      const value = ref('Cannot edit this')
      return { value }
    },
    template: `
      <div style="min-width: 300px;">
        <InputRoot id="disabled-field" :disabled="true">
          <Label for="disabled-field">Locked Field</Label>
          <InputField v-model="value" />
        </InputRoot>
      </div>
    `,
  }),
}

export const WithPrefix: Story = {
  name: 'With Prefix',
  render: () => ({
    components: { InputRoot, InputField, Label },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div style="min-width: 300px;">
        <InputRoot id="price">
          <Label for="price">Price</Label>
          <InputField v-model="value" type="number" placeholder="0.00" :has-prefix="true">
            <template #prefix>$</template>
          </InputField>
        </InputRoot>
      </div>
    `,
  }),
}

export const WithSuffix: Story = {
  name: 'With Suffix',
  render: () => ({
    components: { InputRoot, InputField, Label },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div style="min-width: 300px;">
        <InputRoot id="website">
          <Label for="website">Website</Label>
          <InputField v-model="value" placeholder="example" :has-suffix="true">
            <template #suffix>.com</template>
          </InputField>
        </InputRoot>
      </div>
    `,
  }),
}

export const WithPrefixAndSuffix: Story = {
  name: 'With Prefix and Suffix',
  render: () => ({
    components: { InputRoot, InputField, Label },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div style="min-width: 300px;">
        <InputRoot id="subdomain">
          <Label for="subdomain">Subdomain</Label>
          <InputField v-model="value" placeholder="mysite" :has-prefix="true" :has-suffix="true">
            <template #prefix>https://</template>
            <template #suffix>.asu.edu</template>
          </InputField>
        </InputRoot>
      </div>
    `,
  }),
}

export const InputTypes: Story = {
  name: 'Input Types',
  render: () => ({
    components: { InputRoot, InputField, Label },
    setup() {
      const text = ref('')
      const email = ref('')
      const password = ref('')
      const number = ref('')
      const tel = ref('')
      const url = ref('')
      const search = ref('')
      return { text, email, password, number, tel, url, search }
    },
    template: `
      <div style="min-width: 400px;" class="d-flex flex-column gap-3">
        <InputRoot id="type-text">
          <Label for="type-text">Text</Label>
          <InputField v-model="text" type="text" placeholder="Text input" />
        </InputRoot>
        <InputRoot id="type-email">
          <Label for="type-email">Email</Label>
          <InputField v-model="email" type="email" placeholder="email@example.com" />
        </InputRoot>
        <InputRoot id="type-password">
          <Label for="type-password">Password</Label>
          <InputField v-model="password" type="password" placeholder="Enter password" />
        </InputRoot>
        <InputRoot id="type-number">
          <Label for="type-number">Number</Label>
          <InputField v-model="number" type="number" placeholder="123" />
        </InputRoot>
        <InputRoot id="type-tel">
          <Label for="type-tel">Telephone</Label>
          <InputField v-model="tel" type="tel" placeholder="(555) 123-4567" />
        </InputRoot>
        <InputRoot id="type-url">
          <Label for="type-url">URL</Label>
          <InputField v-model="url" type="url" placeholder="https://example.com" />
        </InputRoot>
        <InputRoot id="type-search">
          <Label for="type-search">Search</Label>
          <InputField v-model="search" type="search" placeholder="Search..." />
        </InputRoot>
      </div>
    `,
  }),
}

export const FormExample: Story = {
  name: 'Complete Form Example',
  render: () => ({
    components: { InputRoot, InputField, InputError, InputHelp, Label },
    setup() {
      const firstName = ref('')
      const lastName = ref('')
      const email = ref('')
      const phone = ref('')
      const errors = ref({
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
      })
      return { firstName, lastName, email, phone, errors }
    },
    template: `
      <form class="p-4 border rounded" style="min-width: 400px;">
        <h4 class="mb-4">Contact Information</h4>

        <InputRoot id="form-firstName" :invalid="errors.firstName" :required="true">
          <Label for="form-firstName">First Name</Label>
          <InputField v-model="firstName" placeholder="John" />
          <InputError>First name is required.</InputError>
        </InputRoot>

        <InputRoot id="form-lastName" :invalid="errors.lastName" :required="true">
          <Label for="form-lastName">Last Name</Label>
          <InputField v-model="lastName" placeholder="Doe" />
          <InputError>Last name is required.</InputError>
        </InputRoot>

        <InputRoot id="form-email" :invalid="errors.email" :required="true">
          <Label for="form-email" tooltip="We'll send a confirmation email">Email</Label>
          <InputField v-model="email" type="email" placeholder="john.doe@asu.edu" />
          <InputHelp>Use your ASU email if available.</InputHelp>
          <InputError>Please enter a valid email address.</InputError>
        </InputRoot>

        <InputRoot id="form-phone" :invalid="errors.phone">
          <Label for="form-phone" optional>Phone Number</Label>
          <InputField v-model="phone" type="tel" placeholder="(555) 123-4567" />
          <InputHelp>We'll only call if there's an issue.</InputHelp>
          <InputError>Please enter a valid phone number.</InputError>
        </InputRoot>

        <button type="submit" class="btn btn-primary mt-3">Submit</button>
      </form>
    `,
  }),
}
