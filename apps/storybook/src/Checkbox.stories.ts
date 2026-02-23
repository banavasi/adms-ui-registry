import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { Checkbox, CheckboxGroup } from '@/components/ui/checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Checkbox primitives and composed checkbox fields with InputRoot/Label/Help/Error integration.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const SingleLarge: Story = {
  render: () => ({
    components: { Checkbox },
    setup() {
      const consent = ref<'Y' | 'N' | null>('N')
      return { consent }
    },
    template: `
      <div style="width: 520px">
        <Checkbox
          id="consent-checkbox"
          v-model="consent"
          label="I agree to receive SMS notifications about my application"
          size="lg"
          variant="rds-dark-3"
          help-text="Standard message and data rates may apply."
        />

        <p class="mt-2" style="font-size: 0.875rem; color: var(--rds-dark-2, #484848)">
          Value: {{ consent }}
        </p>
      </div>
    `,
  }),
}

export const GroupListItem: Story = {
  render: () => ({
    components: { CheckboxGroup },
    setup() {
      const selected = ref<Array<string | number>>(['email'])
      const options = [
        { value: 'email', label: 'Email notifications' },
        { value: 'sms', label: 'SMS notifications' },
        { value: 'push', label: 'Push notifications' },
        { value: 'mail', label: 'Postal mail updates' },
      ]
      return { selected, options }
    },
    template: `
      <div style="width: 520px">
        <CheckboxGroup
          id="notification-preferences"
          v-model="selected"
          label="Notification preferences"
          :options="options"
          spacing="sm"
          size="md"
          variant="rds-dark-3"
          help-text="Choose one or more channels."
        />

        <p class="mt-2" style="font-size: 0.875rem; color: var(--rds-dark-2, #484848)">
          Selected: {{ selected.join(', ') || 'None' }}
        </p>
      </div>
    `,
  }),
}

export const ImplementationExamples: Story = {
  render: () => ({
    components: { Checkbox, CheckboxGroup },
    setup() {
      const accepted = ref<'Y' | 'N' | null>('N')
      const identities = ref<Array<string | number>>([])
      const identityOptions = [
        { value: 'american-indian-alaska-native', label: 'American Indian/Alaska Native' },
        { value: 'asian', label: 'Asian' },
        { value: 'black-african-american', label: 'Black or African American' },
        { value: 'native-hawaiian-pacific-islander', label: 'Native Hawaiian/Pacific Islander' },
      ]
      return { accepted, identities, identityOptions }
    },
    template: `
      <div style="width: 760px; display: grid; gap: 1.5rem;">
        <Checkbox
          id="example-single"
          v-model="accepted"
          label="I confirm the above information is accurate"
          size="lg"
          variant="rds-dark-3"
        />

        <CheckboxGroup
          id="example-group"
          v-model="identities"
          label="Please choose all that apply:"
          :options="identityOptions"
          spacing="sm"
          size="sm"
          variant="rds-dark-3"
        />
      </div>
    `,
  }),
}
