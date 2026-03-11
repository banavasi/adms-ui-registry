import{_ as t,a as i,b as n,c as o}from"./TooltipContent-814Cu58g.js";import"./vue.esm-bundler-DIwgUAuo.js";import"./Primitive-DEAM-xiZ.js";const Q={title:"Components/Tooltip",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`Tooltips display informative text when users hover, focus, or tap on an element.

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
<\/script>

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
- **TooltipContent**: The tooltip content container`}}},argTypes:{delayDuration:{control:"number",description:"Delay in milliseconds before tooltip appears",table:{defaultValue:{summary:"400"}}},disableHoverableContent:{control:"boolean",description:"Prevent hovering over tooltip content",table:{defaultValue:{summary:"false"}}}}},e={render:()=>({components:{Tooltip:o,TooltipContent:n,TooltipProvider:i,TooltipTrigger:t},template:`
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
    `})},r={name:"Positioning - All Sides",render:()=>({components:{Tooltip:o,TooltipContent:n,TooltipProvider:i,TooltipTrigger:t},template:`
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
    `})},l={name:"Alignment Options",render:()=>({components:{Tooltip:o,TooltipContent:n,TooltipProvider:i,TooltipTrigger:t},template:`
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
    `})},p={name:"Custom Colors",render:()=>({components:{Tooltip:o,TooltipContent:n,TooltipProvider:i,TooltipTrigger:t},template:`
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
    `})},T={name:"HTML Content",render:()=>({components:{Tooltip:o,TooltipContent:n,TooltipProvider:i,TooltipTrigger:t},template:`
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
    `})},a={name:"With Delay",render:()=>({components:{Tooltip:o,TooltipContent:n,TooltipProvider:i,TooltipTrigger:t},template:`
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
    `})},s={name:"Link Trigger",render:()=>({components:{Tooltip:o,TooltipContent:n,TooltipProvider:i,TooltipTrigger:t},template:`
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
    `})},d={name:"Icon Trigger",render:()=>({components:{Tooltip:o,TooltipContent:n,TooltipProvider:i,TooltipTrigger:t},template:`
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
    `})},c={name:"Long Content",render:()=>({components:{Tooltip:o,TooltipContent:n,TooltipProvider:i,TooltipTrigger:t},template:`
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
    `})},g={name:"Usage Example - Form Help",parameters:{docs:{description:{story:"Common pattern for providing help text for form fields."}}},render:()=>({components:{Tooltip:o,TooltipContent:n,TooltipProvider:i,TooltipTrigger:t},template:`
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
    `})},b={name:"Interactive Elements Inside",render:()=>({components:{Tooltip:o,TooltipContent:n,TooltipProvider:i,TooltipTrigger:t},template:`
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
    `})};var m,u,v;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Tooltip,
      TooltipContent,
      TooltipProvider,
      TooltipTrigger
    },
    template: \`
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
    \`
  })
}`,...(v=(u=e.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var h,C,P;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Positioning - All Sides',
  render: () => ({
    components: {
      Tooltip,
      TooltipContent,
      TooltipProvider,
      TooltipTrigger
    },
    template: \`
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
    \`
  })
}`,...(P=(C=r.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var y,f,x;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Alignment Options',
  render: () => ({
    components: {
      Tooltip,
      TooltipContent,
      TooltipProvider,
      TooltipTrigger
    },
    template: \`
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
    \`
  })
}`,...(x=(f=l.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var w,S,k;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Custom Colors',
  render: () => ({
    components: {
      Tooltip,
      TooltipContent,
      TooltipProvider,
      TooltipTrigger
    },
    template: \`
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
    \`
  })
}`,...(k=(S=p.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var A,H,L;T.parameters={...T.parameters,docs:{...(A=T.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'HTML Content',
  render: () => ({
    components: {
      Tooltip,
      TooltipContent,
      TooltipProvider,
      TooltipTrigger
    },
    template: \`
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
    \`
  })
}`,...(L=(H=T.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var W,D,E;a.parameters={...a.parameters,docs:{...(W=a.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'With Delay',
  render: () => ({
    components: {
      Tooltip,
      TooltipContent,
      TooltipProvider,
      TooltipTrigger
    },
    template: \`
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
    \`
  })
}`,...(E=(D=a.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var F,I,U;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Link Trigger',
  render: () => ({
    components: {
      Tooltip,
      TooltipContent,
      TooltipProvider,
      TooltipTrigger
    },
    template: \`
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
    \`
  })
}`,...(U=(I=s.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};var _,M,B;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Icon Trigger',
  render: () => ({
    components: {
      Tooltip,
      TooltipContent,
      TooltipProvider,
      TooltipTrigger
    },
    template: \`
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
    \`
  })
}`,...(B=(M=d.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};var R,O,G;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Long Content',
  render: () => ({
    components: {
      Tooltip,
      TooltipContent,
      TooltipProvider,
      TooltipTrigger
    },
    template: \`
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
    \`
  })
}`,...(G=(O=c.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var Y,$,j;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Usage Example - Form Help',
  parameters: {
    docs: {
      description: {
        story: 'Common pattern for providing help text for form fields.'
      }
    }
  },
  render: () => ({
    components: {
      Tooltip,
      TooltipContent,
      TooltipProvider,
      TooltipTrigger
    },
    template: \`
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
    \`
  })
}`,...(j=($=g.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var N,V,q;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Interactive Elements Inside',
  render: () => ({
    components: {
      Tooltip,
      TooltipContent,
      TooltipProvider,
      TooltipTrigger
    },
    template: \`
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
    \`
  })
}`,...(q=(V=b.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};const X=["Default","AllSides","Alignment","WithCustomColors","WithHtmlContent","WithDelay","WithLinkTrigger","WithIconTrigger","LongContent","WithinForm","InteractiveElements"];export{l as Alignment,r as AllSides,e as Default,b as InteractiveElements,c as LongContent,p as WithCustomColors,a as WithDelay,T as WithHtmlContent,d as WithIconTrigger,s as WithLinkTrigger,g as WithinForm,X as __namedExportsOrder,Q as default};
