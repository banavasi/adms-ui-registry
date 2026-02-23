import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { RadioGroup } from '@/components/ui/radio'

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/Radio',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Single-select radio group using InputRoot/Label/Help/Error and Reka UI keyboard semantics.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { RadioGroup },
    setup() {
      const plan = ref<string | number | undefined>('degree')
      const options = [
        { value: 'degree', label: 'Pursue a degree' },
        { value: 'nondegree', label: 'Take classes as a nondegree student' },
        { value: 'certificate', label: 'Complete a certificate program' },
      ]
      return { options, plan }
    },
    template: `
      <div style="width: 560px">
        <RadioGroup
          id="intent-radio-group"
          v-model="plan"
          label="I want to..."
          :options="options"
          size="md"
          variant="rds-dark-3"
          help-text="Choose one option."
        />

        <p class="mt-2" style="font-size: 0.875rem; color: var(--rds-dark-2, #484848)">
          Selected: {{ plan ?? 'None' }}
        </p>
      </div>
    `,
  }),
}

export const ValidationState: Story = {
  render: () => ({
    components: { RadioGroup },
    setup() {
      const education = ref<string | number | undefined>(undefined)
      const options = [
        { value: 'high-school', label: 'High school diploma or GED' },
        { value: 'college', label: 'Some college coursework' },
        { value: 'bachelors', label: "Bachelor's degree" },
      ]
      return { education, options }
    },
    template: `
      <div style="width: 620px">
        <RadioGroup
          id="education-radio-group"
          v-model="education"
          label="Highest level of education"
          :options="options"
          invalid
          error-text="Please select one option."
          required
        />
      </div>
    `,
  }),
}

export const DisabledOption: Story = {
  render: () => ({
    components: { RadioGroup },
    setup() {
      const enrollment = ref<string | number | undefined>('fall')
      const options = [
        { value: 'fall', label: 'Fall 2026' },
        { value: 'spring', label: 'Spring 2027' },
        { value: 'summer', label: 'Summer 2027', disabled: true },
      ]
      return { enrollment, options }
    },
    template: `
      <div style="width: 520px">
        <RadioGroup
          id="term-radio-group"
          v-model="enrollment"
          label="Preferred start term"
          :options="options"
          optional
        />
      </div>
    `,
  }),
}

export const FigmaReference: Story = {
  render: () => ({
    components: { RadioGroup },
    setup() {
      const term = ref<string | number | undefined>('spring-b')
      const options = [
        { value: 'spring-a', label: '2023 Spring (Session C)' },
        { value: 'spring-b', label: '2023 Spring (Session C)' },
        { value: 'spring-c', label: '2023 Spring (Session C)', disabled: true },
      ]
      return { options, term }
    },
    template: `
      <div style="width: 420px">
        <RadioGroup
          id="figma-radio-reference"
          v-model="term"
          label="Field - radio button"
          :options="options"
          size="md"
          variant="rds-dark-3"
        />
      </div>
    `,
  }),
}
