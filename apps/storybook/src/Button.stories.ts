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

const PlusCircleIcon = `
  <svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="11.5" cy="11.5" r="10.5" stroke="currentColor" stroke-width="1.5"/>
    <path d="M11.5 6.5v10M6.5 11.5h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>
`

const PencilIcon = `
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M2 13.5h2.5L13 5 10.5 2.5 2 11v2.5Z" fill="currentColor"/>
    <path d="M11 2 13.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
`

const ChatBubbleIcon = `
  <svg viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M1 6.5C1 3.46 4.36 1 8.5 1S16 3.46 16 6.5 12.64 12 8.5 12c-.86 0-1.69-.1-2.46-.29L2.5 13.5l.83-2.6C1.9 9.84 1 8.25 1 6.5Z" fill="currentColor"/>
  </svg>
`

const PhoneSolidIcon = `
  <svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M15.5 12.1l-3.1-1.3a1 1 0 0 0-1.2.3l-1.1 1.4a10.5 10.5 0 0 1-5.1-5.1l1.4-1.1a1 1 0 0 0 .3-1.2L5.4 1.9a1 1 0 0 0-1.2-.6L1.7 2a1 1 0 0 0-.7 1c.1 7.2 5.9 13 13.1 13.1a1 1 0 0 0 1-.7l.7-2.5a1 1 0 0 0-.6-1.2Z" fill="currentColor"/>
  </svg>
`

const HelpIcon = `
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="10" cy="10" r="10" fill="#fafafa"/>
    <path d="M7.6 7.4a2.4 2.4 0 1 1 3.4 2.2c-.9.45-1.2 1-1.2 1.9" stroke="#191919" stroke-width="1.7" stroke-linecap="round" fill="none"/>
    <circle cx="9.85" cy="14.4" r="1.05" fill="#191919"/>
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
        'exit',
        'close',
        'tag',
        'tag-mobile',
        'feedback-maroon',
        'feedback-gold',
        'help-footer',
        'help-footer-mobile',
        'outline-pill',
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

export const GoldButtonStates: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Gold pill button pair from Figma section `40:269`. Keeps the example literal and ready to paste into an app or form action row.',
      },
    },
  },
  render: () => ({
    components: { Button },
    data() {
      return { ArrowRightIcon }
    },
    template: `
      <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 16px; width: 240px;">
        <Button variant="gold">
          Save changes
          <template #trailing><span v-html="ArrowRightIcon" /></template>
        </Button>
        <Button variant="gold" disabled>
          Save changes
          <template #trailing><span v-html="ArrowRightIcon" /></template>
        </Button>
      </div>
    `,
  }),
}

export const SignOutButtons: Story = {
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

export const ExitButtons: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Exit icon-button treatment from Figma section `232:4259`. This shows the outlined-circle and filled-circle states using the shared `exit` variant plus a supported state modifier class.',
      },
    },
  },
  render: () => ({
    components: { Button },
    data() {
      return { CloseIcon }
    },
    template: `
      <div style="display: flex; align-items: center; gap: 48px;">
        <Button variant="exit" aria-label="Exit">
          <template #leading><span v-html="CloseIcon" /></template>
          Exit
        </Button>
        <Button variant="exit" class="rds-button--exit-solid" aria-label="Exit">
          <template #leading><span v-html="CloseIcon" /></template>
          Exit
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

export const CloseButtons: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Close icon treatment from Figma section `94:1167`. This shows the plain `X` state and the gray-circle state using the shared `close` variant plus a supported state modifier class.',
      },
    },
  },
  render: () => ({
    components: { Button },
    data() {
      return { CloseIcon }
    },
    template: `
      <div style="display: flex; align-items: center; gap: 40px;">
        <Button variant="close" aria-label="Close">
          <template #close><span v-html="CloseIcon" /></template>
          Close
        </Button>
        <Button variant="close" class="rds-button--close-filled" aria-label="Close">
          <template #close><span v-html="CloseIcon" /></template>
          Close
        </Button>
      </div>
    `,
  }),
}

export const OutlinePillButtons: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Outlined pill buttons with a leading icon. Use the `outline-pill` variant and pass any icon via the `#leading` slot. Ready to copy.',
      },
    },
  },
  render: () => ({
    components: { Button },
    data() {
      return { PlusCircleIcon, PencilIcon, ChatBubbleIcon, PhoneSolidIcon }
    },
    template: `
      <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 16px;">
        <Button variant="outline-pill">
          <template #leading><span v-html="PlusCircleIcon" /></template>
          Add a former name
        </Button>
        <Button variant="outline-pill">
          <template #leading><span v-html="PencilIcon" /></template>
          Edit information
        </Button>
        <Button variant="outline-pill">
          <template #leading><span v-html="ChatBubbleIcon" /></template>
          Chat
        </Button>
        <Button variant="outline-pill">
          <template #leading><span v-html="PhoneSolidIcon" /></template>
          Call
        </Button>
      </div>
    `,
  }),
}

export const OutlinePillAddName: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Add-name action button. Copy the template below into your project.',
      },
    },
  },
  render: () => ({
    components: { Button },
    data() {
      return { PlusCircleIcon }
    },
    template: `
      <Button variant="outline-pill">
        <template #leading><span v-html="PlusCircleIcon" /></template>
        Add a former name
      </Button>
    `,
  }),
}

export const OutlinePillEditInfo: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Edit-information action button.',
      },
    },
  },
  render: () => ({
    components: { Button },
    data() {
      return { PencilIcon }
    },
    template: `
      <Button variant="outline-pill">
        <template #leading><span v-html="PencilIcon" /></template>
        Edit information
      </Button>
    `,
  }),
}

export const OutlinePillChat: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Chat action button.',
      },
    },
  },
  render: () => ({
    components: { Button },
    data() {
      return { ChatBubbleIcon }
    },
    template: `
      <Button variant="outline-pill">
        <template #leading><span v-html="ChatBubbleIcon" /></template>
        Chat
      </Button>
    `,
  }),
}

export const OutlinePillCall: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Call action button.',
      },
    },
  },
  render: () => ({
    components: { Button },
    data() {
      return { PhoneSolidIcon }
    },
    template: `
      <Button variant="outline-pill">
        <template #leading><span v-html="PhoneSolidIcon" /></template>
        Call
      </Button>
    `,
  }),
}

export const HelpFooterButtons: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Floating help buttons. Wire `@click` to open your help drawer, modal, or navigate to a help route.',
      },
    },
  },
  render: () => ({
    components: { Button },
    data() {
      return { HelpIcon }
    },
    methods: {
      onHelpClick(source: string) {
        // Replace with your real help handler (open drawer, route to /help, etc.)
        window.alert(`Help clicked from: ${source}`)
      },
    },
    template: `
      <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 18px;">
        <Button variant="help-footer" aria-label="Open help" @click="onHelpClick('desktop')">
          <template #leading><span v-html="HelpIcon" /></template>
          Help
        </Button>
        <Button variant="help-footer-mobile" aria-label="Open help" @click="onHelpClick('mobile')">
          <template #leading><span v-html="HelpIcon" /></template>
          Help
        </Button>
      </div>
    `,
  }),
}
