import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { RadioCard, RadioCardGroup } from '@/components/ui/RadioCard'

const meta: Meta = {
  title: 'Components/RadioCard',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `A rich selectable card component for radio group selections. Supports two variants and flexible stacking options.

## Installation

\`\`\`bash
adms-rds-ui add radio-card
\`\`\`

## Usage

\`\`\`vue
<script setup lang="ts">
import { RadioCard, RadioCardGroup } from '@/components/ui/RadioCard'
import { ref } from 'vue'

const selected = ref<string>()
</script>

<template>
  <!-- Default variant with icons, stacked -->
  <RadioCardGroup id="schools" v-model="selected" variant="default" :stacked="true">
    <RadioCard value="eng" heading="Engineering" description="STEM programs">
      <template #icon><SchoolIcon /></template>
    </RadioCard>
  </RadioCardGroup>

  <!-- Simple variant, horizontal (stacks on mobile) -->
  <RadioCardGroup id="yesno" v-model="selected" variant="simple" :stacked="false">
    <RadioCard value="yes" heading="Yes" />
    <RadioCard value="no" heading="No" />
  </RadioCardGroup>
\`\`\`

## Props

### RadioCardGroup

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | \`'default' \\| 'simple'\` | \`'default'\` | Card style: default (with icon support) or simple (text only) |
| stacked | \`boolean\` | \`true\` | Stack cards vertically. If false, cards are horizontal (stacks on mobile) |
| id | \`string\` | required | Unique identifier |
| label | \`string\` | - | Label text |
| invalid | \`boolean\` | \`false\` | Error state |
| disabled | \`boolean\` | \`false\` | Disabled state |

### RadioCard

| Prop | Type | Description |
|------|------|-------------|
| value | \`string\` | Unique value (required) |
| heading | \`string\` | Heading text (required) |
| description | \`string\` | Description text |
| linkText | \`string\` | Hyperlink text |
| linkUrl | \`string\` | Hyperlink URL |
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Sample school icon SVG
const SchoolIcon = `
<svg viewBox="0 0 66 59" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;">
  <rect x="8" y="20" width="50" height="35" fill="#FFC627" stroke="#191919" stroke-width="2"/>
  <rect x="24" y="30" width="18" height="25" fill="#fff" stroke="#191919" stroke-width="2"/>
  <polygon points="33,5 58,20 8,20" fill="#8C1D40" stroke="#191919" stroke-width="2"/>
  <circle cx="33" cy="15" r="4" fill="#FFC627"/>
</svg>
`

export const DefaultStacked: Story = {
  name: 'Default + Stacked',
  render: () => ({
    components: { RadioCard, RadioCardGroup },
    setup() {
      const selected = ref<string>()
      return { selected, SchoolIcon }
    },
    template: `
      <div style="max-width: 500px;">
        <RadioCardGroup
          id="default-stacked"
          v-model="selected"
          label="Select Your School"
          variant="default"
          :stacked="true"
        >
          <RadioCard
            value="school-a"
            heading="School of Engineering"
            description="This is the body text for this component. Use two or three lines at max."
            link-text="Learn more"
            link-url="#"
          >
            <template #icon>
              <div v-html="SchoolIcon" />
            </template>
          </RadioCard>
          <RadioCard
            value="school-b"
            heading="School of Business"
            description="This is the body text for this component. Use two or three lines at max."
            link-text="Learn more"
            link-url="#"
          >
            <template #icon>
              <div v-html="SchoolIcon" />
            </template>
          </RadioCard>
        </RadioCardGroup>
        <p class="mt-3 text-muted fs-small">Selected: {{ selected ?? 'none' }}</p>
      </div>
    `,
  }),
}

export const VerticalCards: Story = {
  name: 'Vertical Card Layout',
  render: () => ({
    components: { RadioCard, RadioCardGroup },
    setup() {
      const selected = ref<string>('online')
      return { selected, SchoolIcon }
    },
    template: `
      <div>
        <RadioCardGroup
          id="vertical-cards"
          v-model="selected"
          label="How do you want to learn?"
          variant="default"
          card-layout="vertical"
          :stacked="false"
        >
          <RadioCard
            value="in-person"
            heading="In-person"
            description="I want to take most of my classes on campus or through ASU Sync."
            link-text="Learn more"
            link-url="#"
          >
            <template #icon>
              <div v-html="SchoolIcon" />
            </template>
          </RadioCard>
          <RadioCard
            value="online"
            heading="Online"
            description="I want to take most of my classes online where I can access my coursework anytime, anywhere."
            link-text="Learn more"
            link-url="#"
          >
            <template #icon>
              <svg viewBox="0 0 80 60" fill="none" style="width: 100%; height: 100%;">
                <rect x="5" y="5" width="70" height="45" rx="4" fill="#FFC627" stroke="#191919" stroke-width="2"/>
                <rect x="15" y="15" width="50" height="30" fill="#fff" stroke="#191919" stroke-width="2"/>
                <circle cx="40" cy="30" r="8" fill="#8C1D40"/>
                <polygon points="38,27 38,33 44,30" fill="#fff"/>
                <rect x="30" y="52" width="20" height="4" fill="#191919"/>
              </svg>
            </template>
          </RadioCard>
        </RadioCardGroup>
        <p class="mt-3 text-muted fs-small">Selected: {{ selected ?? 'none' }}</p>
      </div>
    `,
  }),
}

export const DefaultHorizontal: Story = {
  name: 'Horizontal Card Layout',
  render: () => ({
    components: { RadioCard, RadioCardGroup },
    setup() {
      const selected = ref<string>()
      return { selected, SchoolIcon }
    },
    template: `
      <div>
        <RadioCardGroup
          id="default-horizontal"
          v-model="selected"
          label="Select Your School"
          variant="default"
          :stacked="false"
        >
          <RadioCard
            value="school-a"
            heading="Engineering"
            description="STEM programs and research."
            link-text="Learn more"
          >
            <template #icon>
              <div v-html="SchoolIcon" />
            </template>
          </RadioCard>
          <RadioCard
            value="school-b"
            heading="Business"
            description="MBA and management programs."
            link-text="Learn more"
          >
            <template #icon>
              <div v-html="SchoolIcon" />
            </template>
          </RadioCard>
          <RadioCard
            value="school-c"
            heading="Arts"
            description="Creative and liberal arts."
            link-text="Learn more"
          >
            <template #icon>
              <div v-html="SchoolIcon" />
            </template>
          </RadioCard>
        </RadioCardGroup>
        <p class="mt-3 text-muted fs-small">Selected: {{ selected ?? 'none' }}</p>
      </div>
    `,
  }),
}

export const SimpleStacked: Story = {
  name: 'Simple + Stacked',
  render: () => ({
    components: { RadioCard, RadioCardGroup },
    setup() {
      const selected = ref<string>()
      return { selected }
    },
    template: `
      <div style="max-width: 600px;">
        <RadioCardGroup
          id="simple-stacked"
          v-model="selected"
          label="Are you interested in pursuing a degree?"
          variant="simple"
          :stacked="true"
        >
          <RadioCard
            value="yes"
            heading="Yes, I want to pursue an associate or bachelor's degree."
          />
          <RadioCard
            value="no"
            heading="No, I want to take individual classes as a nondegree or visiting university student."
          />
        </RadioCardGroup>
        <p class="mt-3 text-muted fs-small">Selected: {{ selected ?? 'none' }}</p>
      </div>
    `,
  }),
}

export const SimpleHorizontal: Story = {
  name: 'Simple + Horizontal',
  render: () => ({
    components: { RadioCard, RadioCardGroup },
    setup() {
      const selected = ref<string>()
      return { selected }
    },
    template: `
      <div>
        <RadioCardGroup
          id="simple-horizontal"
          v-model="selected"
          label="Select an option"
          variant="simple"
          :stacked="false"
        >
          <RadioCard value="yes" heading="Yes" />
          <RadioCard value="no" heading="No" />
        </RadioCardGroup>
        <p class="mt-3 text-muted fs-small">Selected: {{ selected ?? 'none' }}</p>
      </div>
    `,
  }),
}

export const WithPreselection: Story = {
  name: 'With Preselection',
  render: () => ({
    components: { RadioCard, RadioCardGroup },
    setup() {
      const selected = ref<string>('plan-pro')
      return { selected, SchoolIcon }
    },
    template: `
      <div style="max-width: 500px;">
        <RadioCardGroup
          id="preselect-demo"
          v-model="selected"
          label="Select a Plan"
          variant="default"
          :stacked="true"
        >
          <RadioCard
            value="plan-basic"
            heading="Basic"
            description="Great for getting started with essential features."
          >
            <template #icon>
              <div v-html="SchoolIcon" />
            </template>
          </RadioCard>
          <RadioCard
            value="plan-pro"
            heading="Professional"
            description="Best for power users who need advanced features."
          >
            <template #icon>
              <div v-html="SchoolIcon" />
            </template>
          </RadioCard>
        </RadioCardGroup>
        <p class="mt-3 text-muted fs-small">Selected: {{ selected }}</p>
      </div>
    `,
  }),
}

export const WithError: Story = {
  name: 'With Error State',
  render: () => ({
    components: { RadioCard, RadioCardGroup },
    setup() {
      const selected = ref<string>()
      return { selected }
    },
    template: `
      <div style="max-width: 500px;">
        <RadioCardGroup
          id="error-demo"
          v-model="selected"
          label="Select Your School"
          variant="simple"
          :stacked="true"
          :invalid="true"
          error-text="Please select an option to continue."
        >
          <RadioCard value="yes" heading="Yes, I want to pursue a degree." />
          <RadioCard value="no" heading="No, I want individual classes." />
        </RadioCardGroup>
      </div>
    `,
  }),
}

export const Disabled: Story = {
  name: 'Disabled State',
  render: () => ({
    components: { RadioCard, RadioCardGroup },
    setup() {
      const selected = ref<string>('yes')
      return { selected }
    },
    template: `
      <div style="max-width: 500px;">
        <RadioCardGroup
          id="disabled-demo"
          v-model="selected"
          label="Select an option"
          variant="simple"
          :stacked="true"
          :disabled="true"
        >
          <RadioCard value="yes" heading="Yes" />
          <RadioCard value="no" heading="No" />
        </RadioCardGroup>
        <p class="mt-3 text-muted fs-small">Component is disabled</p>
      </div>
    `,
  }),
}
