import{_ as g}from"./index-Bzn9AYSB.js";import"./index-DY-ezr3f.js";import"./Primitive-Rd18uyw-.js";import"./vue.esm-bundler-DQ1Hw63L.js";const T={title:"Components/Highlight",component:g,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`Inline text highlighting with background color variants.

## Installation

\`\`\`bash
adms-rds-ui add highlight
\`\`\`

## Import

\`\`\`vue
<script setup lang="ts">
import { Highlight } from '@/components/ui/Highlight'
<\/script>

<template>
  <p>Welcome to <Highlight variant="gold">ASU</Highlight></p>
</template>
\`\`\``}}},argTypes:{variant:{control:"select",options:["primary","secondary","gold","success","danger","info","light","dark"],table:{defaultValue:{summary:"gold"}}}}},i={args:{variant:"gold"},render:c=>({components:{Highlight:g},setup(){return{args:c}},template:'<Highlight v-bind="args">Highlighted Text</Highlight>'})},t={name:"All Variants",render:()=>({components:{Highlight:g},template:`
      <div class="d-flex flex-column gap-2">
        <p>This is <Highlight variant="primary">primary</Highlight> highlight</p>
        <p>This is <Highlight variant="secondary">secondary</Highlight> highlight</p>
        <p>This is <Highlight variant="gold">gold</Highlight> highlight</p>
        <p>This is <Highlight variant="success">success</Highlight> highlight</p>
        <p>This is <Highlight variant="danger">danger</Highlight> highlight</p>
        <p>This is <Highlight variant="info">info</Highlight> highlight</p>
        <p>This is <Highlight variant="light">light</Highlight> highlight</p>
        <p>This is <Highlight variant="dark">dark</Highlight> highlight</p>
      </div>
    `})},h={name:"In Heading Context",render:()=>({components:{Highlight:g},template:`
      <div>
        <h1>Welcome to <Highlight variant="gold">Arizona State University</Highlight></h1>
        <h2>The <Highlight variant="primary">Innovation</Highlight> University</h2>
      </div>
    `})};var a,n,e;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    variant: 'gold'
  },
  render: args => ({
    components: {
      Highlight
    },
    setup() {
      return {
        args
      };
    },
    template: '<Highlight v-bind="args">Highlighted Text</Highlight>'
  })
}`,...(e=(n=i.parameters)==null?void 0:n.docs)==null?void 0:e.source}}};var r,l,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'All Variants',
  render: () => ({
    components: {
      Highlight
    },
    template: \`
      <div class="d-flex flex-column gap-2">
        <p>This is <Highlight variant="primary">primary</Highlight> highlight</p>
        <p>This is <Highlight variant="secondary">secondary</Highlight> highlight</p>
        <p>This is <Highlight variant="gold">gold</Highlight> highlight</p>
        <p>This is <Highlight variant="success">success</Highlight> highlight</p>
        <p>This is <Highlight variant="danger">danger</Highlight> highlight</p>
        <p>This is <Highlight variant="info">info</Highlight> highlight</p>
        <p>This is <Highlight variant="light">light</Highlight> highlight</p>
        <p>This is <Highlight variant="dark">dark</Highlight> highlight</p>
      </div>
    \`
  })
}`,...(s=(l=t.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var o,p,d;h.parameters={...h.parameters,docs:{...(o=h.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'In Heading Context',
  render: () => ({
    components: {
      Highlight
    },
    template: \`
      <div>
        <h1>Welcome to <Highlight variant="gold">Arizona State University</Highlight></h1>
        <h2>The <Highlight variant="primary">Innovation</Highlight> University</h2>
      </div>
    \`
  })
}`,...(d=(p=h.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const y=["Default","AllVariants","InHeading"];export{t as AllVariants,i as Default,h as InHeading,y as __namedExportsOrder,T as default};
