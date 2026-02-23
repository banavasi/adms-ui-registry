import type { Meta, StoryObj } from '@storybook/vue3'
import { computed, ref } from 'vue'
import { ComboboxMultiSelect, ComboboxSelect } from '@/components/ui/combobox'
import { ListBoxSelect } from '@/components/ui/listbox'
import { TextInput } from '@/components/ui/TextInput'

const meta: Meta<typeof ComboboxSelect> = {
  title: 'Components/Combobox',
  component: ComboboxSelect,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Select2-style combobox for business forms.\n\n- Searchable options\n- Keyboard navigation\n- Clear selection action\n- Works with existing InputRoot/Label/Help/Error styles`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const businessUnits = [
  {
    label: 'Admissions Operations',
    value: 'admissions',
    description: 'Intake and processing workflows',
  },
  {
    label: 'Financial Aid Services',
    value: 'financial-aid',
    description: 'Awards, eligibility, and packaging',
  },
  {
    label: 'Records and Compliance',
    value: 'records',
    description: 'Academic records and policy controls',
  },
  {
    label: 'International Student Office',
    value: 'international',
    description: 'Visa and immigration support',
  },
  {
    label: 'Student Success Center',
    value: 'success',
    description: 'Retention and advising support',
  },
]

export const BusinessDefault: Story = {
  render: () => ({
    components: { ComboboxSelect },
    setup() {
      const selectedUnit = ref<string | null>(null)
      return { selectedUnit, businessUnits }
    },
    template: `
      <div style="width: 440px">
        <ComboboxSelect
          id="business-unit"
          v-model="selectedUnit"
          label="Business Unit"
          :options="businessUnits"
          placeholder="Choose a business unit"
          help-text="Used to route work items and approvals."
          required
        />

        <p class="mt-2" style="font-size: 0.875rem; color: var(--rds-dark-2, #484848)">
          Value: {{ selectedUnit ?? 'None' }}
        </p>
      </div>
    `,
  }),
}

export const SearchablePeople: Story = {
  render: () => ({
    components: { ComboboxSelect },
    setup() {
      const selectedOwner = ref<string | null>(null)

      const owners = [
        {
          label: 'Ava Thompson',
          value: 'ava.thompson',
          description: 'Admissions Manager • Phoenix Campus',
          keywords: ['manager', 'phoenix', 'admissions'],
        },
        {
          label: 'Noah Patel',
          value: 'noah.patel',
          description: 'Compliance Analyst • Downtown Campus',
          keywords: ['compliance', 'analyst', 'downtown'],
        },
        {
          label: 'Sophia Rivera',
          value: 'sophia.rivera',
          description: 'Financial Aid Lead • Tempe Campus',
          keywords: ['financial aid', 'lead', 'tempe'],
        },
        {
          label: 'Liam Chen',
          value: 'liam.chen',
          description: 'Student Success Partner • Online Programs',
          keywords: ['student success', 'online'],
        },
      ]

      return { selectedOwner, owners }
    },
    template: `
      <div style="width: 440px">
        <ComboboxSelect
          id="ticket-owner"
          v-model="selectedOwner"
          label="Ticket Owner"
          :options="owners"
          placeholder="Search by name, team, or campus"
          empty-text="No matching team member"
          clearable
        />

        <p class="mt-2" style="font-size: 0.875rem; color: var(--rds-dark-2, #484848)">
          Assigned to: {{ selectedOwner ?? 'Unassigned' }}
        </p>
      </div>
    `,
  }),
}

export const KeyboardInteractions: Story = {
  render: () => ({
    components: { ComboboxSelect },
    setup() {
      const selected = ref<string | null>(null)
      const fields = [
        { label: 'Mr.', value: 'mr' },
        { label: 'Ms.', value: 'ms' },
        { label: 'Mx.', value: 'mx' },
        { label: 'Dr.', value: 'dr' },
      ]

      return { selected, fields }
    },
    template: `
      <div style="width: 440px">
        <ComboboxSelect
          id="suffix"
          v-model="selected"
          label="Suffix"
          :options="fields"
          placeholder="Select suffix"
          help-text="Keyboard: use Space, ArrowDown, or ArrowUp to open. Click caret to toggle."
        />

        <p class="mt-2" style="font-size: 0.875rem; color: var(--rds-dark-2, #484848)">
          Selected: {{ selected ?? 'None' }}
        </p>
      </div>
    `,
  }),
}

export const ValidationAndDisabled: Story = {
  render: () => ({
    components: { ComboboxSelect },
    setup() {
      const selectedPriority = ref<string | null>(null)
      const touched = ref(false)

      const priorities = [
        {
          label: 'Critical',
          value: 'critical',
          description: 'Production outage or security issue',
        },
        { label: 'High', value: 'high', description: 'Customer-facing workflow blocked' },
        { label: 'Normal', value: 'normal', description: 'Standard business request' },
        { label: 'Low', value: 'low', description: 'Enhancement or deferred request' },
      ]

      const invalid = computed(() => touched.value && !selectedPriority.value)

      return { selectedPriority, priorities, touched, invalid }
    },
    template: `
      <div style="width: 440px; display: grid; gap: 1.5rem;">
        <ComboboxSelect
          id="priority"
          v-model="selectedPriority"
          label="Case Priority"
          :options="priorities"
          placeholder="Select priority"
          :invalid="invalid"
          :error-text="invalid ? 'Priority is required for SLA tracking.' : undefined"
          help-text="This drives escalation and response targets."
          required
          @blur="touched = true"
        />

        <ComboboxSelect
          id="source-system"
          label="Source System"
          :options="[
            { label: 'PeopleSoft', value: 'peoplesoft' },
            { label: 'Salesforce', value: 'salesforce' },
            { label: 'Slate', value: 'slate' }
          ]"
          model-value="salesforce"
          disabled
          help-text="System is locked after case creation."
        />
      </div>
    `,
  }),
}

export const LoadingState: Story = {
  render: () => ({
    components: { ComboboxSelect },
    setup() {
      const selectedProgram = ref<string | null>(null)

      return { selectedProgram }
    },
    template: `
      <div style="width: 440px">
        <ComboboxSelect
          id="program"
          v-model="selectedProgram"
          label="Academic Program"
          :options="[]"
          loading
          loading-text="Fetching programs from SIS..."
          placeholder="Search programs"
        />
      </div>
    `,
  }),
}

export const MultiSelectBadges: Story = {
  render: () => ({
    components: { ComboboxMultiSelect },
    setup() {
      const selectedEthnicities = ref<string[]>([
        'asian',
        'black-african-american',
        'native-hawaiian-pacific-islander',
      ])

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
        <ComboboxMultiSelect
          id="ethnicity-multiselect"
          v-model="selectedEthnicities"
          label="Please choose all that apply:"
          :options="ethnicityOptions"
          placeholder="Type to search and select"
          help-text="Selected options appear as badges and wrap automatically."
          clearable
        />

        <p class="mt-2" style="font-size: 0.875rem; color: var(--rds-dark-2, #484848)">
          Selected: {{ selectedEthnicities.join(', ') || 'None' }}
        </p>
      </div>
    `,
  }),
}

export const SearchEmptyState: Story = {
  render: () => ({
    components: { ComboboxSelect },
    setup() {
      const selectedCountry = ref<string | null>(null)
      const searchTerm = ref('zzzzz')
      const countryOptions = [
        { label: 'United States', value: 'us' },
        { label: 'India', value: 'in' },
        { label: 'Canada', value: 'ca' },
        { label: 'Mexico', value: 'mx' },
      ]
      return { selectedCountry, searchTerm, countryOptions }
    },
    template: `
      <div style="width: 440px">
        <ComboboxSelect
          id="country-empty-search"
          v-model="selectedCountry"
          v-model:search-term="searchTerm"
          label="Country"
          :options="countryOptions"
          placeholder="Type to search country"
          empty-text="No countries match your search."
          clearable
        />

        <p class="mt-2" style="font-size: 0.875rem; color: var(--rds-dark-2, #484848)">
          Search term: {{ searchTerm || 'None' }}
        </p>
      </div>
    `,
  }),
}

export const SearchErrorState: Story = {
  render: () => ({
    components: { ComboboxSelect },
    setup() {
      const selectedProgram = ref<string | null>(null)
      const programOptions = [
        { label: 'Computer Science', value: 'cs' },
        { label: 'Data Science', value: 'ds' },
        { label: 'Business Analytics', value: 'ba' },
      ]
      return { selectedProgram, programOptions }
    },
    template: `
      <div style="width: 440px">
        <ComboboxSelect
          id="program-error-state"
          v-model="selectedProgram"
          label="Program"
          :options="programOptions"
          placeholder="Search program"
          :invalid="true"
          error-text="Please select a valid option from the list."
          help-text="Start typing to search available programs."
          required
        />
      </div>
    `,
  }),
}

export const FormHeightAlignment: Story = {
  render: () => ({
    components: { ComboboxSelect, ListBoxSelect, TextInput },
    setup() {
      const email = ref('')
      const country = ref<string | null>('in')
      const suffix = ref<string | null>('mr')

      const countries = [
        { label: 'India', value: 'in' },
        { label: 'United States', value: 'us' },
        { label: 'Canada', value: 'ca' },
      ]

      const suffixes = [
        { label: 'Mr.', value: 'mr' },
        { label: 'Ms.', value: 'ms' },
        { label: 'Mx.', value: 'mx' },
        { label: 'Dr.', value: 'dr' },
      ]

      return { email, country, suffix, countries, suffixes }
    },
    template: `
      <div style="width: 980px">
        <div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; align-items: start;">
          <TextInput
            id="alignment-email"
            v-model="email"
            label="Email Address"
            placeholder="name@asu.edu"
          />

          <ComboboxSelect
            id="alignment-combobox"
            v-model="suffix"
            label="Suffix"
            :options="suffixes"
            placeholder="Select suffix"
          />

          <ListBoxSelect
            id="alignment-listbox"
            v-model="country"
            label="Home country"
            :options="countries"
            placeholder="Select country"
          />
        </div>
      </div>
    `,
  }),
}
