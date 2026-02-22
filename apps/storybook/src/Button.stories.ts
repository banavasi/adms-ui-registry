import type { Meta, StoryObj } from '@storybook/vue3'
import { Button } from '@/components/ui/Button'

const ArrowRightIcon = `
  <svg viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M1 7.5h13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M8.5 1.5L15 7.5 8.5 13.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`

const EditIcon = `
  <svg viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M1.2 7.8h1.2l4.3-4.3-1.2-1.2L1.2 6.6v1.2Z" fill="currentColor"/>
    <path d="M6.1 1.5 7.3 2.7" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/>
  </svg>
`

const SignOutIcon = `
  <svg viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M1 8.5h19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M13.8 1.6L23.2 8.5 13.8 15.4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`

const CloseIcon = `
  <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M3 3L11 11M11 3L3 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>
`

const HelpIcon = `
  <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="9" cy="9" r="8" fill="currentColor" opacity="0.14"/>
    <path d="M7.8 6.5a1.6 1.6 0 1 1 2.2 1.5c-.8.4-1 1-1 1.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
    <circle cx="9" cy="12.8" r="1" fill="currentColor"/>
  </svg>
`

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Figma-aligned button system including core color pills, status chips, sign-out, tag, feedback, and help-footer variants.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'maroon',
        'gold',
        'gray',
        'black',
        'white',
        'complete',
        'incomplete',
        'edit',
        'signout',
        'tag',
        'tag-mobile',
        'feedback-maroon',
        'feedback-gold',
        'help-footer',
        'help-footer-mobile',
      ],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const ColorMatrix: Story = {
  render: () => ({
    components: { Button },
    data() {
      return { ArrowRightIcon }
    },
    template: `
      <div style="width: 640px; display: grid; grid-template-columns: 1fr 1fr; gap: 12px 36px;">
        <Button variant="maroon">Default Button</Button>
        <Button variant="maroon">
          Default Button
          <template #trailing><span v-html="ArrowRightIcon" /></template>
        </Button>

        <Button variant="gold">Default Button</Button>
        <Button variant="gold">
          Default Button
          <template #trailing><span v-html="ArrowRightIcon" /></template>
        </Button>

        <Button variant="gray">Default Button</Button>
        <Button variant="gray">
          Default Button
          <template #trailing><span v-html="ArrowRightIcon" /></template>
        </Button>

        <Button variant="black">Default Button</Button>
        <Button variant="black">
          Default Button
          <template #trailing><span v-html="ArrowRightIcon" /></template>
        </Button>

        <Button variant="white">Default Button</Button>
        <Button variant="white">
          Default Button
          <template #trailing><span v-html="ArrowRightIcon" /></template>
        </Button>

        <Button variant="maroon" disabled>Default Button</Button>
        <Button variant="maroon" disabled>
          Default Button
          <template #trailing><span v-html="ArrowRightIcon" /></template>
        </Button>

        <Button variant="gold" disabled>Default Button</Button>
        <Button variant="gold" disabled>
          Default Button
          <template #trailing><span v-html="ArrowRightIcon" /></template>
        </Button>

        <Button variant="gray" disabled>Default Button</Button>
        <Button variant="gray" disabled>
          Default Button
          <template #trailing><span v-html="ArrowRightIcon" /></template>
        </Button>

        <Button variant="black" disabled>Default Button</Button>
        <Button variant="black" disabled>
          Default Button
          <template #trailing><span v-html="ArrowRightIcon" /></template>
        </Button>

        <Button variant="white" disabled>Default Button</Button>
        <Button variant="white" disabled>
          Default Button
          <template #trailing><span v-html="ArrowRightIcon" /></template>
        </Button>
      </div>
    `,
  }),
}

export const StatusButtons: Story = {
  render: () => ({
    components: { Button },
    data() {
      return { EditIcon }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 18px; width: 220px;">
        <Button variant="complete">Complete</Button>
        <Button variant="incomplete">Incomplete</Button>
        <Button variant="edit">
          <template #leading><span v-html="EditIcon" /></template>
          Edit Information
        </Button>
      </div>
    `,
  }),
}

export const GoldSignOutStates: Story = {
  render: () => ({
    components: { Button },
    data() {
      return { SignOutIcon }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px; width: 260px;">
        <Button variant="signout">
          Sign out
          <template #trailing><span v-html="SignOutIcon" /></template>
        </Button>
        <Button variant="signout">
          Sign out
          <template #trailing><span v-html="SignOutIcon" /></template>
        </Button>
      </div>
    `,
  }),
}

export const Tags: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px; width: 180px;">
        <Button variant="tag">Optional</Button>
        <Button variant="tag-mobile">Optional</Button>
      </div>
    `,
  }),
}

export const FeedbackButtons: Story = {
  render: () => ({
    components: { Button },
    data() {
      return { CloseIcon }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 10px; width: 170px;">
        <Button variant="feedback-maroon">
          Provide
          <br />
          Feedback
          <template #close><span v-html="CloseIcon" /></template>
        </Button>
        <Button variant="feedback-gold">
          How Is Your
          <br />
          Experience?
          <template #close><span v-html="CloseIcon" /></template>
        </Button>
      </div>
    `,
  }),
}

export const HelpFooterButtons: Story = {
  render: () => ({
    components: { Button },
    data() {
      return { HelpIcon }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 18px;">
        <Button variant="help-footer" style="flex-direction: column; gap: 0;">
          <template #leading><span v-html="HelpIcon" /></template>
          Help
        </Button>
        <Button variant="help-footer-mobile" style="flex-direction: column; gap: 0;">
          <template #leading><span v-html="HelpIcon" /></template>
          Help
        </Button>
      </div>
    `,
  }),
}
