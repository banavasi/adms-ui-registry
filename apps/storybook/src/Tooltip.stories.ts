import type { Meta, StoryObj } from '@storybook/vue3'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/Tooltip'

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    delayDuration: { control: 'number' },
    disableHoverableContent: { control: 'boolean' },
    open: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger },
    template: `
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <button class="btn btn-primary">Hover me</button>
          </TooltipTrigger>
          <TooltipContent>
            This is a tooltip
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    `,
  }),
}

export const AllSides: Story = {
  render: () => ({
    components: { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger },
    template: `
      <div class="d-flex justify-content-center gap-4 p-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <button class="btn btn-outline-primary">Top</button>
            </TooltipTrigger>
            <TooltipContent side="top">
              Tooltip on top
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <button class="btn btn-outline-primary">Right</button>
            </TooltipTrigger>
            <TooltipContent side="right">
              Tooltip on right
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <button class="btn btn-outline-primary">Bottom</button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              Tooltip on bottom
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <button class="btn btn-outline-primary">Left</button>
            </TooltipTrigger>
            <TooltipContent side="left">
              Tooltip on left
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    `,
  }),
}

export const WithCustomColors: Story = {
  render: () => ({
    components: { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger },
    template: `
      <div class="d-flex gap-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <button class="btn btn-primary">Primary tooltip</button>
            </TooltipTrigger>
            <TooltipContent bg-color="bg-primary" text-color="text-white">
              Styled with Bootstrap classes
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <button class="btn btn-danger">Danger tooltip</button>
            </TooltipTrigger>
            <TooltipContent bg-color="bg-danger" text-color="text-white">
              Styled with Bootstrap classes
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <button class="btn btn-dark">Custom color</button>
            </TooltipTrigger>
            <TooltipContent bg-color="#8c1d40" text-color="#ffffff">
              ASU Maroon custom color
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    `,
  }),
}

export const WithHtmlContent: Story = {
  render: () => ({
    components: { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger },
    template: `
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <button class="btn btn-info">Hover for HTML</button>
          </TooltipTrigger>
          <TooltipContent
            html-content="<strong>Bold text</strong> and <em>italic text</em><br/>With line breaks"
          />
        </Tooltip>
      </TooltipProvider>
    `,
  }),
}

export const WithDelay: Story = {
  render: () => ({
    components: { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger },
    template: `
      <TooltipProvider>
        <Tooltip :delay-duration="1000">
          <TooltipTrigger as-child>
            <button class="btn btn-secondary">Hover and wait 1s</button>
          </TooltipTrigger>
          <TooltipContent>
            Delayed tooltip (1000ms)
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    `,
  }),
}

export const WithLinkTrigger: Story = {
  render: () => ({
    components: { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger },
    template: `
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <a href="#" class="link-primary">Link with tooltip</a>
          </TooltipTrigger>
          <TooltipContent>
            This tooltip is on a link
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    `,
  }),
}
