import{d as j,a as H,b as n,s as v,u as a,L as G,c as J,o as c,E as i,f as K,B as R,y as f,z as b,e as u,x as X}from"./vue.esm-bundler-DQ1Hw63L.js";import{a as Y,c as Z,_ as ee,b as ae}from"./TooltipTrigger-Dg6AGGiz.js";import{a as x}from"./Primitive-Rd18uyw-.js";import{c as E}from"./index-DY-ezr3f.js";import{_ as te}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as ne}from"./index-Bzn9AYSB.js";const ie={class:"heading-text"},U=j({__name:"Heading",props:{level:{default:"h3"},optional:{type:Boolean,default:!1},optionalText:{default:"Optional"},tooltip:{},tooltipPosition:{default:"top"},class:{}},setup(e){const m=e,P=J(()=>m.level||"h3");return(F,h)=>(c(),H(G(P.value),{"data-slot":"heading",class:v(a(x)(a(le)({level:m.level}),m.class))},{default:n(()=>[i("span",ie,[K(F.$slots,"default",{},void 0,!0)]),e.optional?(c(),R("span",{key:0,class:v([a(x)(a(oe)()),"optional-badge"])},f(e.optionalText),3)):b("",!0),e.tooltip?(c(),H(a(Y),{key:1},{default:n(()=>[u(a(Z),{"delay-duration":300},{default:n(()=>[u(a(ee),{"as-child":""},{default:n(()=>[...h[0]||(h[0]=[i("button",{type:"button",class:"btn btn-link p-0 ms-1 tooltip-trigger","aria-label":"More information"},[i("svg",{width:"24",height:"24",class:"info-icon","aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[i("path",{fill:"currentColor",d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"})])],-1)])]),_:1}),u(a(ae),{side:e.tooltipPosition},{default:n(()=>[X(f(e.tooltip),1)]),_:1},8,["side"])]),_:1})]),_:1})):b("",!0)]),_:3},8,["class"]))}}),t=te(U,[["__scopeId","data-v-7fa88cbc"]]);U.__docgenInfo={exportName:"default",displayName:"Heading",description:"",tags:{},props:[{name:"level",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'h3'"}},{name:"optional",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"optionalText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Optional'"}},{name:"tooltip",required:!1,type:{name:"string"}},{name:"tooltipPosition",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'},{name:'"left"'},{name:'"right"'}]},defaultValue:{func:!1,value:"'top'"}},{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/Users/shashankshandilya/Documents/adms-ui-registry/apps/storybook/src/components/ui/Heading/Heading.vue"]};const le=E("d-flex align-items-start gap-space-sm mb-0",{variants:{level:{h1:"",h2:"",h3:"",h4:"",h5:"",h6:""}},defaultVariants:{level:"h3"}}),oe=E("badge rounded-pill fw-normal",{variants:{variant:{default:""}},defaultVariants:{variant:"default"}}),ce={title:"Components/Heading",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`Semantic heading component (h1-h6) with optional badge and tooltip support.

## Installation

\`\`\`bash
adms-rds-ui add heading
\`\`\`

## Import

\`\`\`vue
<script setup lang="ts">
import { Heading } from '@/components/ui/Heading'
<\/script>

<template>
  <Heading level="h2" optional tooltip="Additional info">
    Question Header
  </Heading>
</template>
\`\`\``}}},argTypes:{level:{control:"select",options:["h1","h2","h3","h4","h5","h6"],table:{defaultValue:{summary:"h3"}}},optional:{control:"boolean",table:{defaultValue:{summary:"false"}}},tooltip:{control:"text"},tooltipPosition:{control:"select",options:["top","bottom","left","right"],table:{defaultValue:{summary:"top"}}}}},l={args:{level:"h3"},render:e=>({components:{Heading:t},setup(){return{args:e}},template:'<Heading v-bind="args">Question Header</Heading>'})},o={args:{level:"h3",optional:!0},render:e=>({components:{Heading:t},setup(){return{args:e}},template:'<Heading v-bind="args">Question Header</Heading>'})},s={args:{level:"h3",tooltip:"This provides additional context about the question."},render:e=>({components:{Heading:t},setup(){return{args:e}},template:'<Heading v-bind="args">Question Header</Heading>'})},r={name:"With Optional and Tooltip",args:{level:"h3",optional:!0,tooltip:"This field is not required but helps us serve you better."},render:e=>({components:{Heading:t},setup(){return{args:e}},template:'<Heading v-bind="args">Question Header</Heading>'})},d={name:"All Heading Levels",render:()=>({components:{Heading:t},template:`
      <div class="d-flex flex-column gap-3">
        <Heading level="h1">Heading Level 1</Heading>
        <Heading level="h2">Heading Level 2</Heading>
        <Heading level="h3">Heading Level 3</Heading>
        <Heading level="h4">Heading Level 4</Heading>
        <Heading level="h5">Heading Level 5</Heading>
        <Heading level="h6">Heading Level 6</Heading>
      </div>
    `})},p={name:"With Highlight",render:()=>({components:{Heading:t,Highlight:ne},template:`
      <div class="d-flex flex-column gap-3">
        <Heading level="h1">Welcome to <Highlight variant="gold">ASU</Highlight></Heading>
        <Heading level="h2" optional>The <Highlight variant="primary">Innovation</Highlight> University</Heading>
      </div>
    `})},g={name:"Multi-line Heading",render:()=>({components:{Heading:t},template:`
      <div style="max-width: 300px;">
        <Heading level="h2" optional tooltip="This is a longer heading that wraps to multiple lines">
          This is a longer heading text that will wrap to multiple lines
        </Heading>
      </div>
    `})};var y,T,_;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    level: 'h3'
  },
  render: args => ({
    components: {
      Heading
    },
    setup() {
      return {
        args
      };
    },
    template: '<Heading v-bind="args">Question Header</Heading>'
  })
}`,...(_=(T=l.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var L,w,V;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    level: 'h3',
    optional: true
  },
  render: args => ({
    components: {
      Heading
    },
    setup() {
      return {
        args
      };
    },
    template: '<Heading v-bind="args">Question Header</Heading>'
  })
}`,...(V=(w=o.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var S,W,q;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    level: 'h3',
    tooltip: 'This provides additional context about the question.'
  },
  render: args => ({
    components: {
      Heading
    },
    setup() {
      return {
        args
      };
    },
    template: '<Heading v-bind="args">Question Header</Heading>'
  })
}`,...(q=(W=s.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var A,Q,k;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'With Optional and Tooltip',
  args: {
    level: 'h3',
    optional: true,
    tooltip: 'This field is not required but helps us serve you better.'
  },
  render: args => ({
    components: {
      Heading
    },
    setup() {
      return {
        args
      };
    },
    template: '<Heading v-bind="args">Question Header</Heading>'
  })
}`,...(k=(Q=r.parameters)==null?void 0:Q.docs)==null?void 0:k.source}}};var B,I,C;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'All Heading Levels',
  render: () => ({
    components: {
      Heading
    },
    template: \`
      <div class="d-flex flex-column gap-3">
        <Heading level="h1">Heading Level 1</Heading>
        <Heading level="h2">Heading Level 2</Heading>
        <Heading level="h3">Heading Level 3</Heading>
        <Heading level="h4">Heading Level 4</Heading>
        <Heading level="h5">Heading Level 5</Heading>
        <Heading level="h6">Heading Level 6</Heading>
      </div>
    \`
  })
}`,...(C=(I=d.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var M,O,N;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'With Highlight',
  render: () => ({
    components: {
      Heading,
      Highlight
    },
    template: \`
      <div class="d-flex flex-column gap-3">
        <Heading level="h1">Welcome to <Highlight variant="gold">ASU</Highlight></Heading>
        <Heading level="h2" optional>The <Highlight variant="primary">Innovation</Highlight> University</Heading>
      </div>
    \`
  })
}`,...(N=(O=p.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var $,z,D;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Multi-line Heading',
  render: () => ({
    components: {
      Heading
    },
    template: \`
      <div style="max-width: 300px;">
        <Heading level="h2" optional tooltip="This is a longer heading that wraps to multiple lines">
          This is a longer heading text that will wrap to multiple lines
        </Heading>
      </div>
    \`
  })
}`,...(D=(z=g.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};const ue=["Default","WithOptional","WithTooltip","FullExample","AllLevels","WithHighlight","MultiLine"];export{d as AllLevels,l as Default,r as FullExample,g as MultiLine,p as WithHighlight,o as WithOptional,s as WithTooltip,ue as __namedExportsOrder,ce as default};
