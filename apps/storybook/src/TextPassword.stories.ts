import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { TextPassword } from '@/components/ui/TextPassword'

const meta: Meta = {
  title: 'Components/TextPassword',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `A password input component with visibility toggle. Click the eye icon to show/hide the password.

## Installation

\`\`\`bash
adms-rds-ui add text-password
\`\`\`

This will also install: input-root, input-field, input-error, input-help, input-password-toggle, and label.

## Usage

\`\`\`vue
<script setup lang="ts">
import { TextPassword } from '@/components/ui/TextPassword'
import { ref } from 'vue'

const password = ref('')
</script>

<template>
  <TextPassword
    id="password"
    v-model="password"
    label="Password"
    placeholder="Enter password"
    help-text="Must be at least 8 characters."
  />
</template>
\`\`\`

## Props

- **id** - Unique identifier (required)
- **v-model** - Two-way binding for password value
- **label** - Label text
- **tooltip** - Tooltip text for label
- **optional** - Show "Optional" badge on label
- **placeholder** - Placeholder text
- **invalid** - Error state
- **disabled** - Disabled state
- **required** - Required field
- **helpText** - Help text (shown when not invalid)
- **errorText** - Error text (shown when invalid)

## Primitives

The password toggle is available as a standalone primitive:

\`\`\`bash
adms-rds-ui add input-password-toggle
\`\`\`
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Basic Password',
  render: () => ({
    components: { TextPassword },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div style="min-width: 300px;">
        <TextPassword
          id="password"
          v-model="value"
          label="Password"
          placeholder="Enter password"
        />
        <p class="mt-2 text-muted fs-small">Value: {{ value ? '•'.repeat(value.length) : '(empty)' }}</p>
      </div>
    `,
  }),
}

export const WithHelp: Story = {
  name: 'With Help Text',
  render: () => ({
    components: { TextPassword },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div style="min-width: 300px;">
        <TextPassword
          id="password-help"
          v-model="value"
          label="Password"
          placeholder="Enter password"
          help-text="Must be at least 8 characters with one uppercase letter."
        />
      </div>
    `,
  }),
}

export const WithRequirements: Story = {
  name: 'With Requirements',
  render: () => ({
    components: { TextPassword },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div style="min-width: 400px;">
        <TextPassword
          id="password-requirements"
          v-model="value"
          label="Password"
          placeholder="Enter password"
        >
          <template #requirements>
            <p class="mb-0">Passwords must be at least 10 characters long and must include the following requirements:</p>
            <ul>
              <li>Contains at least 1 number (0-9)</li>
              <li>Contains at least 1 uppercase letter (A-Z)</li>
              <li>Contains at least 1 lowercase letter (a-z)</li>
            </ul>
          </template>
        </TextPassword>
      </div>
    `,
  }),
}

export const WithError: Story = {
  name: 'With Error State',
  render: () => ({
    components: { TextPassword },
    setup() {
      const value = ref('weak')
      return { value }
    },
    template: `
      <div style="min-width: 300px;">
        <TextPassword
          id="password-error"
          v-model="value"
          label="Password"
          placeholder="Enter password"
          error-text="Password is too weak. Add numbers and special characters."
          :invalid="true"
        />
      </div>
    `,
  }),
}

export const WithTooltip: Story = {
  name: 'With Label Tooltip',
  render: () => ({
    components: { TextPassword },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div style="min-width: 300px;">
        <TextPassword
          id="password-tooltip"
          v-model="value"
          label="Master Password"
          tooltip="This password encrypts all your data. Make sure it's strong and memorable."
          placeholder="Enter master password"
          help-text="This cannot be recovered if forgotten."
        />
      </div>
    `,
  }),
}

export const Required: Story = {
  name: 'Required Field',
  render: () => ({
    components: { TextPassword },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div style="min-width: 300px;">
        <TextPassword
          id="password-required"
          v-model="value"
          label="Password"
          :required="true"
          placeholder="Enter password"
          help-text="This field is required."
        />
      </div>
    `,
  }),
}

export const Disabled: Story = {
  name: 'Disabled Field',
  render: () => ({
    components: { TextPassword },
    setup() {
      const value = ref('secretpassword')
      return { value }
    },
    template: `
      <div style="min-width: 300px;">
        <TextPassword
          id="password-disabled"
          v-model="value"
          label="Password"
          :disabled="true"
        />
      </div>
    `,
  }),
}

export const ValidationExample: Story = {
  name: 'Password Validation',
  render: () => ({
    components: { TextPassword },
    setup() {
      const value = ref('')
      const isInvalid = ref(false)
      const errorMessage = ref('')

      function validate() {
        if (value.value.length < 8) {
          isInvalid.value = true
          errorMessage.value = 'Password must be at least 8 characters.'
        } else if (!/[A-Z]/.test(value.value)) {
          isInvalid.value = true
          errorMessage.value = 'Password must contain at least one uppercase letter.'
        } else if (!/\d/.test(value.value)) {
          isInvalid.value = true
          errorMessage.value = 'Password must contain at least one number.'
        } else {
          isInvalid.value = false
          errorMessage.value = ''
        }
      }

      return { value, isInvalid, errorMessage, validate }
    },
    template: `
      <div style="min-width: 300px;">
        <TextPassword
          id="password-validation"
          v-model="value"
          label="Create Password"
          placeholder="Enter a strong password"
          help-text="Use 8+ characters with uppercase letters and numbers."
          :error-text="errorMessage"
          :invalid="isInvalid"
          @blur="validate"
        />
        <button class="btn btn-sm btn-outline-secondary mt-3" @click="validate">
          Validate
        </button>
      </div>
    `,
  }),
}

export const ConfirmPassword: Story = {
  name: 'Confirm Password Form',
  render: () => ({
    components: { TextPassword },
    setup() {
      const password = ref('')
      const confirmPassword = ref('')
      const passwordError = ref(false)
      const confirmError = ref(false)

      return { password, confirmPassword, passwordError, confirmError }
    },
    template: `
      <form class="p-4 border rounded" style="min-width: 350px;">
        <h4 class="mb-4">Set Password</h4>

        <TextPassword
          id="new-password"
          v-model="password"
          label="New Password"
          :required="true"
          placeholder="Enter password"
          help-text="Must be at least 8 characters."
          error-text="Password is required."
          :invalid="passwordError"
          class="mb-3"
        />

        <TextPassword
          id="confirm-password"
          v-model="confirmPassword"
          label="Confirm Password"
          :required="true"
          placeholder="Re-enter password"
          error-text="Passwords do not match."
          :invalid="confirmError || (confirmPassword && password !== confirmPassword)"
          class="mb-3"
        />

        <button type="submit" class="btn btn-primary">Set Password</button>
      </form>
    `,
  }),
}
