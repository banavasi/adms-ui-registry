import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { ListBoxMultiSelect, ListBoxSelect, ListBoxSelectIcon } from '@/components/ui/listbox'

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

export const MultiSelectCheckbox: Story = {
  render: () => ({
    components: { ListBoxMultiSelect },
    setup() {
      const selectedEthnicities = ref<string[]>([])
      const ethnicityOptions = [
        { label: 'American Indian/Alaska Native', value: 'american-indian-alaska-native' },
        { label: 'Asian', value: 'asian' },
        { label: 'Black or African American', value: 'black-african-american' },
        { label: 'Native Hawaiian/Pacific Islander', value: 'native-hawaiian-pacific-islander' },
        { label: 'White', value: 'white' },
      ]

      return { selectedEthnicities, ethnicityOptions }
    },
    template: `
      <div style="width: 640px">
        <ListBoxMultiSelect
          id="ethnicity-listbox-multi"
          v-model="selectedEthnicities"
          label="Please choose all that apply:"
          :options="ethnicityOptions"
          placeholder="Choose one or more options"
          plural-label="selected options"
          help-text="If one option is selected, its label is shown. If multiple are selected, a total count is shown."
          clearable
        />

        <p class="mt-2" style="font-size: 0.875rem; color: var(--rds-dark-2, #484848)">
          Selected values: {{ selectedEthnicities.join(', ') || 'None' }}
        </p>
      </div>
    `,
  }),
}

export const IconOptions: Story = {
  render: () => ({
    components: { ListBoxSelectIcon },
    setup() {
      const studyIntent = ref<string | null>('degree')
      const intentOptions = [
        {
          label: 'take classes as a nondegree or visiting student',
          value: 'nondegree',
          description: 'Coursework without a degree track',
        },
        {
          label: 'pursue a degree',
          value: 'degree',
          description: 'Undergraduate or graduate program',
        },
      ]

      return { intentOptions, studyIntent }
    },
    template: `
      <div style="width: 560px">
        <ListBoxSelectIcon
          id="intent-listbox-icon"
          v-model="studyIntent"
          label="I want to.."
          :options="intentOptions"
          placeholder="Select an option"
        >
          <template #option-icon="{ option }">
            <span
              v-if="option.value === 'nondegree'"
              aria-hidden="true"
              style="font-size: 28px; line-height: 1;"
            >
              🧑‍🏫
            </span>
            <span
              v-else
              aria-hidden="true"
              style="font-size: 28px; line-height: 1;"
            >
              🎓
            </span>
          </template>
        </ListBoxSelectIcon>
      </div>
    `,
  }),
}

export const MultiSelectCustomSummaryLabel: Story = {
  render: () => ({
    components: { ListBoxMultiSelect },
    setup() {
      const selectedInterestAreas = ref<string[]>(['ai', 'security', 'robotics'])
      const selectedColleges = ref<string[]>(['engineering'])

      const interestAreaOptions = [
        { label: 'Artificial Intelligence', value: 'ai' },
        { label: 'Cybersecurity', value: 'security' },
        { label: 'Robotics', value: 'robotics' },
        { label: 'Data Science', value: 'data-science' },
      ]

      const collegeOptions = [
        { label: 'Engineering', value: 'engineering' },
        { label: 'Liberal Arts', value: 'liberal-arts' },
        { label: 'Business', value: 'business' },
      ]

      return {
        collegeOptions,
        interestAreaOptions,
        selectedColleges,
        selectedInterestAreas,
      }
    },
    template: `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; width: 980px;">
        <ListBoxMultiSelect
          id="interest-area-custom-summary"
          v-model="selectedInterestAreas"
          :options="interestAreaOptions"
          placeholder="Choose one or more options"
          clearable
        >
          <template #summary="{ count }">
            Interest area: ({{ count }})
          </template>
        </ListBoxMultiSelect>

        <ListBoxMultiSelect
          id="college-custom-summary"
          v-model="selectedColleges"
          :options="collegeOptions"
          placeholder="Choose one or more options"
          clearable
        >
          <template #summary="{ count }">
            College: ({{ count }})
          </template>
        </ListBoxMultiSelect>
      </div>
    `,
  }),
}
