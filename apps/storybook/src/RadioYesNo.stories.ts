import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { RadioYesNo } from '@/components/ui/RadioYesNo'

const meta: Meta = {
  title: 'Components/RadioYesNo',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `A card-style radio group for yes/no questions that emits 'Y' or 'N' as the v-model value. Includes label, help text, and error text.

## Installation

\`\`\`bash
adms-rds-ui add radio-yes-no
\`\`\`

This will also install the required dependencies: input-root, input-error, input-help, and label.

## Usage

\`\`\`vue
<script setup lang="ts">
import { RadioYesNo } from '@/components/ui/RadioYesNo'
import { ref } from 'vue'

const isCitizen = ref<'Y' | 'N'>()
</script>

<template>
  <RadioYesNo
    id="citizen"
    v-model="isCitizen"
    label="Are you a U.S. citizen?"
    help-text="Select your citizenship status."
    error-text="This field is required."
    :invalid="!isCitizen"
  />
</template>
\`\`\`

## Props

- **id** - Unique identifier (required)
- **v-model** - Two-way binding for 'Y' or 'N' value
- **label** - Label text
- **tooltip** - Tooltip text for label
- **optional** - Show "Optional" badge on label
- **yesLabel** - Custom label for "Yes" option (default: "Yes")
- **noLabel** - Custom label for "No" option (default: "No")
- **invalid** - Error state
- **disabled** - Disabled state
- **required** - Required field
- **helpText** - Help text (shown when not invalid)
- **errorText** - Error text (shown when invalid)
- **readonly** - Make the radio group read-only
- **isInToolbar** - Toolbar keyboard mode (arrow keys navigate only; Space/Enter check)

## Keyboard Navigation

**Standard Mode (default):**
- Tab/Shift+Tab: Move focus in/out of radiogroup
- Arrow Keys (any direction): Navigate AND automatically check the focused radio
- Space: Check the focused radio (if not already checked)

**Toolbar Mode (\`isInToolbar: true\`):**
- Tab/Shift+Tab: Move focus in/out of toolbar
- Arrow Keys (any direction): Navigate WITHOUT checking
- Space/Enter: Explicitly check the focused radio

## Events

- **@change** - Emitted when selection changes (value: 'Y' | 'N')
- **@focus** - Emitted when radio group receives focus
- **@blur** - Emitted when radio group loses focus
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Basic Radio Yes/No',
  render: () => ({
    components: { RadioYesNo },
    setup() {
      const value = ref<'Y' | 'N'>()
      return { value }
    },
    template: `
      <div style="min-width: 400px;">
        <RadioYesNo
          id="basic-question"
          v-model="value"
          label="Are you a U.S. citizen?"
        />
        <p class="mt-3 text-muted fs-small">Value: {{ value ?? 'undefined' }}</p>
      </div>
    `,
  }),
}

export const WithOptionalLabel: Story = {
  name: 'With Optional Badge',
  render: () => ({
    components: { RadioYesNo },
    setup() {
      const value = ref<'Y' | 'N'>()
      return { value }
    },
    template: `
      <div style="min-width: 400px;">
        <RadioYesNo
          id="optional-question"
          v-model="value"
          label="Have you traveled internationally in the last year?"
          :optional="true"
        />
        <p class="mt-3 text-muted fs-small">Value: {{ value ?? 'undefined' }}</p>
      </div>
    `,
  }),
}

export const WithHelpText: Story = {
  name: 'With Help Text',
  render: () => ({
    components: { RadioYesNo },
    setup() {
      const value = ref<'Y' | 'N'>()
      return { value }
    },
    template: `
      <div style="min-width: 400px;">
        <RadioYesNo
          id="help-question"
          v-model="value"
          label="Do you have a valid passport?"
          help-text="Your passport must be valid for at least 6 months from your travel date."
        />
      </div>
    `,
  }),
}

export const WithError: Story = {
  name: 'With Error State',
  render: () => ({
    components: { RadioYesNo },
    setup() {
      const value = ref<'Y' | 'N'>()
      return { value }
    },
    template: `
      <div style="min-width: 400px;">
        <RadioYesNo
          id="error-question"
          v-model="value"
          label="Are you over 18 years old?"
          error-text="This field is required."
          :invalid="true"
        />
      </div>
    `,
  }),
}

export const WithPreselectedValue: Story = {
  name: 'With Preselected Value',
  render: () => ({
    components: { RadioYesNo },
    setup() {
      const value = ref<'Y' | 'N'>('Y')
      return { value }
    },
    template: `
      <div style="min-width: 400px;">
        <RadioYesNo
          id="preselected-question"
          v-model="value"
          label="Have you read the terms and conditions?"
        />
        <p class="mt-3 text-muted fs-small">Value: {{ value }}</p>
      </div>
    `,
  }),
}

export const CustomLabels: Story = {
  name: 'Custom Labels',
  render: () => ({
    components: { RadioYesNo },
    setup() {
      const value = ref<'Y' | 'N'>()
      return { value }
    },
    template: `
      <div style="min-width: 400px;">
        <RadioYesNo
          id="custom-labels"
          v-model="value"
          label="Do you agree to the terms?"
          yes-label="I Agree"
          no-label="I Decline"
        />
        <p class="mt-3 text-muted fs-small">Value: {{ value ?? 'undefined' }}</p>
      </div>
    `,
  }),
}

export const WithTooltip: Story = {
  name: 'With Label Tooltip',
  render: () => ({
    components: { RadioYesNo },
    setup() {
      const value = ref<'Y' | 'N'>()
      return { value }
    },
    template: `
      <div style="min-width: 400px;">
        <RadioYesNo
          id="tooltip-question"
          v-model="value"
          label="Are you a first-generation college student?"
          tooltip="A first-generation college student is someone whose parents did not complete a four-year college degree."
          help-text="This helps us identify students who may need additional support."
        />
      </div>
    `,
  }),
}

export const Disabled: Story = {
  name: 'Disabled State',
  render: () => ({
    components: { RadioYesNo },
    setup() {
      const value = ref<'Y' | 'N'>('Y')
      return { value }
    },
    template: `
      <div style="min-width: 400px;">
        <RadioYesNo
          id="disabled-question"
          v-model="value"
          label="Is this account verified?"
          :disabled="true"
        />
        <p class="mt-3 text-muted fs-small">Value: {{ value }} (disabled)</p>
      </div>
    `,
  }),
}

export const Required: Story = {
  name: 'Required Field with Validation',
  render: () => ({
    components: { RadioYesNo },
    setup() {
      const value = ref<'Y' | 'N'>()
      const hasError = ref(false)

      const validate = () => {
        hasError.value = !value.value
      }

      return { value, hasError, validate }
    },
    template: `
      <div style="min-width: 400px;">
        <RadioYesNo
          id="required-question"
          v-model="value"
          label="Are you currently employed?"
          :required="true"
          :invalid="hasError"
          error-text="Please select an option."
          @change="hasError = false"
        />
        <button class="btn btn-sm btn-outline-secondary mt-3" @click="validate">
          Validate
        </button>
        <p class="mt-2 text-muted fs-small">Value: {{ value ?? 'undefined' }}</p>
      </div>
    `,
  }),
}

export const ToolbarMode: Story = {
  name: 'Toolbar Keyboard Mode',
  parameters: {
    docs: {
      description: {
        story: `When \`isInToolbar\` is \`true\`, the keyboard navigation changes:
- **Arrow keys** only move focus (do NOT auto-check)
- **Space or Enter** explicitly checks the focused option

Try keyboard navigation: use arrows to move between options, then press Space/Enter to select.`,
      },
    },
  },
  render: () => ({
    components: { RadioYesNo },
    setup() {
      const value = ref<'Y' | 'N'>()
      return { value }
    },
    template: `
      <div style="min-width: 400px;">
        <div role="toolbar" aria-label="Answer toolbar" class="p-3 border rounded" style="background: #f8f9fa;">
          <p class="mb-2"><strong>Keyboard Test:</strong> Use arrow keys to navigate, Space/Enter to select</p>
          <RadioYesNo
            id="toolbar-question"
            v-model="value"
            label="Do you agree?"
            :is-in-toolbar="true"
          />
        </div>
        <div class="mt-3 p-2 bg-light rounded">
          <small class="text-muted">Value: {{ value ?? 'undefined' }}</small>
        </div>
        <div class="mt-2 p-2 bg-info-subtle rounded">
          <small><strong>Try it:</strong> Tab to focus, use arrow keys (↑↓←→) to navigate, press Space or Enter to check</small>
        </div>
      </div>
    `,
  }),
}

export const ToolbarVsStandard: Story = {
  name: 'Comparison: Toolbar vs Standard',
  parameters: {
    docs: {
      description: {
        story: `Side-by-side comparison of keyboard behaviors:

**Standard Mode (top):**
- Arrow keys navigate AND check automatically

**Toolbar Mode (bottom):**
- Arrow keys navigate only
- Space/Enter required to check`,
      },
    },
  },
  render: () => ({
    components: { RadioYesNo },
    setup() {
      const standardValue = ref<'Y' | 'N'>()
      const toolbarValue = ref<'Y' | 'N'>()
      return { standardValue, toolbarValue }
    },
    template: `
      <div style="min-width: 500px;">
        <div class="mb-4 p-3 border rounded">
          <h5 class="mb-3">Standard Mode (default)</h5>
          <RadioYesNo
            id="standard-comparison"
            v-model="standardValue"
            label="Arrow keys navigate AND check"
            help-text="Try: Use any arrow key to move and auto-select"
          />
          <div class="mt-2 p-2 bg-light rounded">
            <small class="text-muted">Value: {{ standardValue ?? 'undefined' }}</small>
          </div>
        </div>

        <div class="p-3 border rounded" style="background: #f8f9fa;">
          <h5 class="mb-3">Toolbar Mode</h5>
          <div role="toolbar" aria-label="Comparison toolbar">
            <RadioYesNo
              id="toolbar-comparison"
              v-model="toolbarValue"
              label="Arrow keys navigate only"
              help-text="Try: Use arrow keys to navigate, then press Space/Enter to select"
              :is-in-toolbar="true"
            />
          </div>
          <div class="mt-2 p-2 bg-light rounded">
            <small class="text-muted">Value: {{ toolbarValue ?? 'undefined' }}</small>
          </div>
        </div>
      </div>
    `,
  }),
}

export const FormExample: Story = {
  name: 'Complete Form Example',
  render: () => ({
    components: { RadioYesNo },
    setup() {
      const form = ref({
        citizen: undefined as 'Y' | 'N' | undefined,
        veteran: undefined as 'Y' | 'N' | undefined,
        disability: undefined as 'Y' | 'N' | undefined,
      })
      const errors = ref({
        citizen: false,
        veteran: false,
      })

      const validate = () => {
        errors.value.citizen = !form.value.citizen
        errors.value.veteran = !form.value.veteran
        // disability is optional
      }

      return { form, errors, validate }
    },
    template: `
      <form class="p-4 border rounded" style="min-width: 500px;">
        <h4 class="mb-4">Demographic Information</h4>

        <RadioYesNo
          id="form-citizen"
          v-model="form.citizen"
          label="Are you a U.S. citizen?"
          :required="true"
          :invalid="errors.citizen"
          error-text="This field is required."
          @change="errors.citizen = false"
          class="mb-4"
        />

        <RadioYesNo
          id="form-veteran"
          v-model="form.veteran"
          label="Are you a veteran?"
          help-text="Include active duty and reserve service."
          :required="true"
          :invalid="errors.veteran"
          error-text="This field is required."
          @change="errors.veteran = false"
          class="mb-4"
        />

        <RadioYesNo
          id="form-disability"
          v-model="form.disability"
          label="Do you have a disability?"
          :optional="true"
          help-text="This information is used for statistical purposes only."
          class="mb-4"
        />

        <button type="button" class="btn btn-primary" @click="validate">Submit</button>

        <div class="mt-3 p-2 bg-light rounded">
          <small class="text-muted">
            Form values: citizen={{ form.citizen ?? 'undefined' }},
            veteran={{ form.veteran ?? 'undefined' }},
            disability={{ form.disability ?? 'undefined' }}
          </small>
        </div>
      </form>
    `,
  }),
}
