import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { BaseSelect } from '@/components/ui/base-select'

const meta: Meta<typeof BaseSelect> = {
  title: 'Components/BaseSelect',
  component: BaseSelect,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Reusable select wrapper with a single API for single and multi-select scenarios, built on top of the combobox primitives with a summary trigger and in-panel search.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const enrollmentOptions = [
  { text: 'First-time Student', value: 'first-time' },
  { text: 'Transfer Student', value: 'transfer' },
  { text: 'Graduate Student', value: 'graduate' },
  { text: 'Non-degree Student', value: 'non-degree' },
]

export const SingleSelect: Story = {
  render: () => ({
    components: { BaseSelect },
    setup() {
      const selectedEnrollment = ref<Record<string, unknown> | null>(null)
      const searchQuery = ref('')

      return { selectedEnrollment, searchQuery, enrollmentOptions }
    },
    template: `
      <div style="width: 440px; display: grid; gap: 1rem;">
        <BaseSelect
          id="base-select-single"
          v-model="selectedEnrollment"
          label="Enrollment Type"
          :options="enrollmentOptions"
          placeholder="Choose one..."
          @search="value => searchQuery = value"
        />

        <p style="font-size: 0.875rem; color: var(--rds-dark-2, #484848); margin: 0;">
          Selected: {{ selectedEnrollment?.text ?? 'None' }}
        </p>

        <p style="font-size: 0.875rem; color: var(--rds-dark-2, #484848); margin: 0;">
          Search term: {{ searchQuery || '—' }}
        </p>

        <p style="font-size: 0.875rem; color: var(--rds-dark-1, #747474); margin: 0;">
          Open the dropdown to search; the closed field now acts as a summary trigger.
        </p>
      </div>
    `,
  }),
}

export const MultiSelect: Story = {
  render: () => ({
    components: { BaseSelect },
    setup() {
      const selectedPrograms = ref<Record<string, unknown>[]>([])

      const programOptions = [
        { text: 'Business Administration', value: 'business-administration' },
        { text: 'Computer Science', value: 'computer-science' },
        { text: 'Data Science', value: 'data-science' },
        { text: 'Mechanical Engineering', value: 'mechanical-engineering' },
      ]

      return { selectedPrograms, programOptions }
    },
    template: `
      <div style="width: 540px; display: grid; gap: 1rem;">
        <BaseSelect
          id="base-select-multi"
          v-model="selectedPrograms"
          label="Programs of Interest"
          :options="programOptions"
          :is-multi-select="true"
          placeholder="Choose one or more..."
        />

        <p style="font-size: 0.875rem; color: var(--rds-dark-2, #484848); margin: 0;">
          Selected values:
          {{ selectedPrograms.map(option => option.value).join(', ') || 'None' }}
        </p>
      </div>
    `,
  }),
}

export const ValidationState: Story = {
  render: () => ({
    components: { BaseSelect },
    setup() {
      const selectedTerm = ref<Record<string, unknown> | null>(null)
      const termOptions = [
        { text: 'Spring 2026', value: 'spring-2026' },
        { text: 'Summer 2026', value: 'summer-2026' },
        { text: 'Fall 2026', value: 'fall-2026' },
      ]

      return { selectedTerm, termOptions }
    },
    template: `
      <div style="width: 440px;">
        <BaseSelect
          id="base-select-validation"
          v-model="selectedTerm"
          label="Entry Term"
          :options="termOptions"
          required
          :errors="selectedTerm ? [] : ['Entry term is required.']"
        />
      </div>
    `,
  }),
}
