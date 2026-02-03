import type { Meta, StoryObj } from '@storybook/vue3'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/Tooltip'

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Tooltips display informative text when users hover, focus, or tap on an element.

## Installation

\`\`\`bash
adms-rds-ui add tooltip
\`\`\`

## Import

\`\`\`vue
<script setup lang="ts">
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent
} from '@/components/ui/Tooltip'
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>Hover me</TooltipTrigger>
      <TooltipContent>Helpful information</TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
\`\`\`

## Components

- **TooltipProvider**: Wraps your application or section to enable tooltips
- **Tooltip**: The root tooltip component
- **TooltipTrigger**: The element that triggers the tooltip (use \`as-child\` to wrap)
- **TooltipContent**: The tooltip content container`,
      },
    },
  },
  argTypes: {
    delayDuration: {
      control: 'number',
      description: 'Delay in milliseconds before tooltip appears',
      table: {
        defaultValue: { summary: '400' },
      },
    },
    disableHoverableContent: {
      control: 'boolean',
      description: 'Prevent hovering over tooltip content',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
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
  name: 'Positioning - All Sides',
  render: () => ({
    components: { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger },
    template: `
      <div class="d-flex justify-content-center gap-4 p-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <button class="btn btn-primary">Top</button>
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

export const Alignment: Story = {
  name: 'Alignment Options',
  render: () => ({
    components: { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger },
    template: `
      <div class="p-5">
        <h6 class="mb-3">Top Alignment</h6>
        <div class="d-flex gap-4 mb-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger as-child>
                <button class="btn btn-primary">Start</button>
              </TooltipTrigger>
              <TooltipContent side="top" align="start">
                Aligned to start
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger as-child>
                <button class="btn btn-primary">Center</button>
              </TooltipTrigger>
              <TooltipContent side="top" align="center">
                Aligned to center
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger as-child>
                <button class="btn btn-primary">End</button>
              </TooltipTrigger>
              <TooltipContent side="top" align="end">
                Aligned to end
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <h6 class="mb-3">Side Offset (20px)</h6>
        <div class="d-flex gap-4">
          <TooltipProvider>
            <Tooltip :side-offset="20">
              <TooltipTrigger as-child>
                <button class="btn btn-outline-primary">Far Top</button>
              </TooltipTrigger>
              <TooltipContent side="top">
                Further away (20px)
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip :side-offset="20">
              <TooltipTrigger as-child>
                <button class="btn btn-outline-primary">Far Right</button>
              </TooltipTrigger>
              <TooltipContent side="right">
                Further away (20px)
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    `,
  }),
}

export const WithCustomColors: Story = {
  name: 'Custom Colors',
  render: () => ({
    components: { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger },
    template: `
      <div class="d-flex gap-4 p-4">
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
              <button class="btn btn-dark">Dark tooltip</button>
            </TooltipTrigger>
            <TooltipContent bg-color="bg-dark" text-color="text-white">
              Dark styled tooltip
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <button class="btn btn-outline-secondary">Light tooltip</button>
            </TooltipTrigger>
            <TooltipContent bg-color="bg-light" text-color="text-dark">
              Light styled tooltip
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <button class="btn" style="background: #8c1d40; color: white;">ASU Maroon</button>
            </TooltipTrigger>
            <TooltipContent bg-color="#8c1d40" text-color="#ffffff">
              ASU Maroon custom color
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <button class="btn" style="background: #ffc627; color: #191919;">ASU Gold</button>
            </TooltipTrigger>
            <TooltipContent bg-color="#ffc627" text-color="#191919">
              ASU Gold custom color
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    `,
  }),
}

export const WithHtmlContent: Story = {
  name: 'HTML Content',
  render: () => ({
    components: { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger },
    template: `
      <div class="d-flex gap-4 p-4">
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

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <button class="btn btn-primary">Rich content</button>
            </TooltipTrigger>
            <TooltipContent
              html-content="<div style='text-align: left;'><h6 style='margin: 0 0 8px 0;'>Title</h6><p style='margin: 0;'>Description text goes here with proper formatting.</p></div>"
            />
          </Tooltip>
        </TooltipProvider>
      </div>
    `,
  }),
}

export const WithDelay: Story = {
  name: 'With Delay',
  render: () => ({
    components: { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger },
    template: `
      <div class="d-flex gap-4 p-4">
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

        <TooltipProvider>
          <Tooltip :delay-duration="2000">
            <TooltipTrigger as-child>
              <button class="btn btn-outline-secondary">Hover and wait 2s</button>
            </TooltipTrigger>
            <TooltipContent>
              Delayed tooltip (2000ms)
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip :delay-duration="0">
            <TooltipTrigger as-child>
              <button class="btn btn-primary">Instant</button>
            </TooltipTrigger>
            <TooltipContent>
              No delay (0ms)
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    `,
  }),
}

export const WithLinkTrigger: Story = {
  name: 'Link Trigger',
  render: () => ({
    components: { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger },
    template: `
      <div class="p-4">
        <p class="mb-3">Hover over the link below:</p>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <a href="#" class="link-primary text-decoration-none">Link with tooltip</a>
            </TooltipTrigger>
            <TooltipContent>
              This tooltip is on a link
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    `,
  }),
}

export const WithIconTrigger: Story = {
  name: 'Icon Trigger',
  render: () => ({
    components: { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger },
    template: `
      <div class="d-flex gap-4 p-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <button class="btn btn-outline-secondary btn-icon">?</button>
            </TooltipTrigger>
            <TooltipContent>
              Help information
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <button class="btn btn-outline-primary btn-icon">⚙</button>
            </TooltipTrigger>
            <TooltipContent>
              Settings
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <button class="btn btn-outline-secondary btn-icon">ℹ</button>
            </TooltipTrigger>
            <TooltipContent>
              More information
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <button class="btn btn-danger btn-icon">!</button>
            </TooltipTrigger>
            <TooltipContent>
              Warning
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    `,
  }),
}

export const LongContent: Story = {
  name: 'Long Content',
  render: () => ({
    components: { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger },
    template: `
      <div class="d-flex gap-4 p-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <button class="btn btn-primary">Long text</button>
            </TooltipTrigger>
            <TooltipContent>
              This is a very long tooltip text that should wrap appropriately and display nicely on multiple lines without breaking the layout.
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <button class="btn btn-outline-primary">Paragraphs</button>
            </TooltipTrigger>
            <TooltipContent>
              First paragraph of text.<br/><br/>
              Second paragraph with more information.<br/><br/>
              Third paragraph for completeness.
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    `,
  }),
}

export const WithinForm: Story = {
  name: 'Usage Example - Form Help',
  parameters: {
    docs: {
      description: {
        story: 'Common pattern for providing help text for form fields.',
      },
    },
  },
  render: () => ({
    components: { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger },
    template: `
      <div class="p-4 border rounded" style="max-width: 400px;">
        <h5 class="mb-3">Create Account</h5>

        <div class="mb-3">
          <label class="form-label d-flex align-items-center gap-2">
            Username
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger as-child>
                  <span class="text-muted" style="cursor: help;">ⓘ</span>
                </TooltipTrigger>
                <TooltipContent>
                  Your username must be 4-20 characters long and can only contain letters, numbers, and underscores.
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </label>
          <input type="text" class="form-control" placeholder="Enter username" />
        </div>

        <div class="mb-3">
          <label class="form-label d-flex align-items-center gap-2">
            Email
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger as-child>
                  <span class="text-muted" style="cursor: help;">ⓘ</span>
                </TooltipTrigger>
                <TooltipContent>
                  We'll send a verification link to this email address.
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </label>
          <input type="email" class="form-control" placeholder="Enter email" />
        </div>

        <div class="mb-3">
          <label class="form-label d-flex align-items-center gap-2">
            Password
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger as-child>
                  <span class="text-muted" style="cursor: help;">ⓘ</span>
                </TooltipTrigger>
                <TooltipContent>
                  Password must be at least 8 characters with uppercase, lowercase, and numbers.
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </label>
          <input type="password" class="form-control" placeholder="Enter password" />
        </div>

        <button class="btn btn-primary w-100">Create Account</button>
      </div>
    `,
  }),
}

export const InteractiveElements: Story = {
  name: 'Interactive Elements Inside',
  render: () => ({
    components: { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger },
    template: `
      <div class="d-flex gap-4 p-4">
        <TooltipProvider>
          <Tooltip :disable-hoverable-content="false">
            <TooltipTrigger as-child>
              <button class="btn btn-primary">Hover me</button>
            </TooltipTrigger>
            <TooltipContent>
              <div class="p-1">
                <p class="mb-2">You can hover this tooltip!</p>
                <a href="#" class="btn btn-sm btn-primary">Click me</a>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    `,
  }),
}
