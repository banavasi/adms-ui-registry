import{L as t}from"./index-DGB1qItb.js";import"./index-DY-ezr3f.js";import"./Primitive-Rd18uyw-.js";import"./vue.esm-bundler-DQ1Hw63L.js";import"./TooltipTrigger-Dg6AGGiz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const O={title:"Components/Label",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`Form label component with optional badge and tooltip support.

## Installation

\`\`\`bash
adms-rds-ui add label
\`\`\`

## Import

\`\`\`vue
<script setup lang="ts">
import { Label } from '@/components/ui/Label'
<\/script>

<template>
  <Label for="email" optional tooltip="We'll never share your email">
    Email Address
  </Label>
  <input id="email" type="email" class="form-control" />
</template>
\`\`\``}}},argTypes:{for:{control:"text",description:"ID of the associated input element"},size:{control:"select",options:["sm","md","lg"],table:{defaultValue:{summary:"md"}}},optional:{control:"boolean",table:{defaultValue:{summary:"false"}}},tooltip:{control:"text"},tooltipPosition:{control:"select",options:["top","bottom","left","right"],table:{defaultValue:{summary:"top"}}}}},a={args:{for:"email"},render:e=>({components:{Label:t},setup(){return{args:e}},template:`
      <div>
        <Label v-bind="args">Email Address</Label>
        <input id="email" type="email" class="form-control" placeholder="Enter email" />
      </div>
    `})},o={args:{for:"phone",optional:!0},render:e=>({components:{Label:t},setup(){return{args:e}},template:`
      <div>
        <Label v-bind="args">Phone Number</Label>
        <input id="phone" type="tel" class="form-control" placeholder="Enter phone" />
      </div>
    `})},r={args:{for:"ssn",tooltip:"Required for identity verification. Your data is encrypted."},render:e=>({components:{Label:t},setup(){return{args:e}},template:`
      <div>
        <Label v-bind="args">Social Security Number</Label>
        <input id="ssn" type="text" class="form-control" placeholder="XXX-XX-XXXX" />
      </div>
    `})},n={name:"With Optional and Tooltip",args:{for:"middle-name",optional:!0,tooltip:"Include if you have one"},render:e=>({components:{Label:t},setup(){return{args:e}},template:`
      <div>
        <Label v-bind="args">Middle Name</Label>
        <input id="middle-name" type="text" class="form-control" placeholder="Enter middle name" />
      </div>
    `})},l={name:"Form Example",render:()=>({components:{Label:t},template:`
      <form class="p-4 border rounded" style="min-width: 400px;">
        <div class="mb-3">
          <Label for="firstName">First Name</Label>
          <input id="firstName" type="text" class="form-control" />
        </div>
        <div class="mb-3">
          <Label for="lastName">Last Name</Label>
          <input id="lastName" type="text" class="form-control" />
        </div>
        <div class="mb-3">
          <Label for="emailForm" tooltip="We'll send confirmation to this address">Email</Label>
          <input id="emailForm" type="email" class="form-control" />
        </div>
        <div class="mb-3">
          <Label for="nickname" optional>Nickname</Label>
          <input id="nickname" type="text" class="form-control" />
        </div>
      </form>
    `})},s={name:"Multi-line Label",render:()=>({components:{Label:t},template:`
      <div style="max-width: 250px;">
        <div class="mb-3">
          <Label for="address" optional tooltip="Enter your full mailing address including apartment number">
            Please enter your complete mailing address
          </Label>
          <textarea id="address" class="form-control" rows="3"></textarea>
        </div>
      </div>
    `})};var i,m,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    for: 'email'
  },
  render: args => ({
    components: {
      Label
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div>
        <Label v-bind="args">Email Address</Label>
        <input id="email" type="email" class="form-control" placeholder="Enter email" />
      </div>
    \`
  })
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,c,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    for: 'phone',
    optional: true
  },
  render: args => ({
    components: {
      Label
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div>
        <Label v-bind="args">Phone Number</Label>
        <input id="phone" type="tel" class="form-control" placeholder="Enter phone" />
      </div>
    \`
  })
}`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var b,f,L;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    for: 'ssn',
    tooltip: 'Required for identity verification. Your data is encrypted.'
  },
  render: args => ({
    components: {
      Label
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div>
        <Label v-bind="args">Social Security Number</Label>
        <input id="ssn" type="text" class="form-control" placeholder="XXX-XX-XXXX" />
      </div>
    \`
  })
}`,...(L=(f=r.parameters)==null?void 0:f.docs)==null?void 0:L.source}}};var v,g,y;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'With Optional and Tooltip',
  args: {
    for: 'middle-name',
    optional: true,
    tooltip: 'Include if you have one'
  },
  render: args => ({
    components: {
      Label
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div>
        <Label v-bind="args">Middle Name</Label>
        <input id="middle-name" type="text" class="form-control" placeholder="Enter middle name" />
      </div>
    \`
  })
}`,...(y=(g=n.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var h,x,E;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Form Example',
  render: () => ({
    components: {
      Label
    },
    template: \`
      <form class="p-4 border rounded" style="min-width: 400px;">
        <div class="mb-3">
          <Label for="firstName">First Name</Label>
          <input id="firstName" type="text" class="form-control" />
        </div>
        <div class="mb-3">
          <Label for="lastName">Last Name</Label>
          <input id="lastName" type="text" class="form-control" />
        </div>
        <div class="mb-3">
          <Label for="emailForm" tooltip="We'll send confirmation to this address">Email</Label>
          <input id="emailForm" type="email" class="form-control" />
        </div>
        <div class="mb-3">
          <Label for="nickname" optional>Nickname</Label>
          <input id="nickname" type="text" class="form-control" />
        </div>
      </form>
    \`
  })
}`,...(E=(x=l.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var N,X,F;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Multi-line Label',
  render: () => ({
    components: {
      Label
    },
    template: \`
      <div style="max-width: 250px;">
        <div class="mb-3">
          <Label for="address" optional tooltip="Enter your full mailing address including apartment number">
            Please enter your complete mailing address
          </Label>
          <textarea id="address" class="form-control" rows="3"></textarea>
        </div>
      </div>
    \`
  })
}`,...(F=(X=s.parameters)==null?void 0:X.docs)==null?void 0:F.source}}};const P=["Default","WithOptional","WithTooltip","FullExample","FormExample","MultiLine"];export{a as Default,l as FormExample,n as FullExample,s as MultiLine,o as WithOptional,r as WithTooltip,P as __namedExportsOrder,O as default};
