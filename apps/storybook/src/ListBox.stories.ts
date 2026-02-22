import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { ListBoxSelect } from '@/components/ui/listbox'

const meta: Meta<typeof ListBoxSelect> = {
  title: 'Components/ListBox',
  component: ListBoxSelect,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Single-select listbox styled like the application dropdown pattern with click-first behavior and keyboard navigation.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const countries = [
  { label: 'United States', value: 'us' },
  { label: 'Afghanistan', value: 'af' },
  { label: 'Aland Islands', value: 'ax' },
  { label: 'Albania', value: 'al' },
  { label: 'Algeria', value: 'dz' },
  { label: 'American Samoa', value: 'as' },
  { label: 'Andorra', value: 'ad' },
  { label: 'Angola', value: 'ao' },
  { label: 'Anguilla', value: 'ai' },
  { label: 'Antarctica', value: 'aq' },
  { label: 'India', value: 'in' },
]

export const Default: Story = {
  render: () => ({
    components: { ListBoxSelect },
    setup() {
      const country = ref<string | null>('in')
      return { country, countries }
    },
    template: `
      <div style="width: 440px">
        <ListBoxSelect
          id="home-country"
          v-model="country"
          label="Home country"
          :options="countries"
          placeholder="Select your home country"
          help-text="Begin by selecting your home country."
          clearable
        />

        <p class="mt-2" style="font-size: 0.875rem; color: var(--rds-dark-2, #484848)">
          Selected: {{ country ?? 'None' }}
        </p>
      </div>
    `,
  }),
}

export const ValidationState: Story = {
  render: () => ({
    components: { ListBoxSelect },
    setup() {
      const suffix = ref<string | null>(null)
      const suffixOptions = [
        { label: 'Mr.', value: 'mr' },
        { label: 'Ms.', value: 'ms' },
        { label: 'Mx.', value: 'mx' },
        { label: 'Dr.', value: 'dr' },
      ]
      return { suffix, suffixOptions }
    },
    template: `
      <div style="width: 440px">
        <ListBoxSelect
          id="suffix-listbox"
          v-model="suffix"
          label="Suffix"
          :options="suffixOptions"
          placeholder="Choose a suffix"
          invalid
          error-text="Suffix is required."
          required
        />
      </div>
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { ListBoxSelect },
    setup() {
      const source = ref<string | null>('salesforce')
      const sourceOptions = [
        { label: 'PeopleSoft', value: 'peoplesoft' },
        { label: 'Salesforce', value: 'salesforce' },
        { label: 'Slate', value: 'slate' },
      ]
      return { source, sourceOptions }
    },
    template: `
      <div style="width: 440px">
        <ListBoxSelect
          id="source-system-listbox"
          v-model="source"
          label="Source system"
          :options="sourceOptions"
          disabled
          help-text="System is locked after submission."
        />
      </div>
    `,
  }),
}
