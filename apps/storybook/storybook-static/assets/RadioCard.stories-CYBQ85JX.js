import{d as le,a as R,b as h,s as E,u as d,c as o,F as ne,o as r,E as c,B as k,f as v,z as f,y as C,q as ce,v as U,G as ue,x as V,e as pe,P as me,r as s}from"./vue.esm-bundler-DIwgUAuo.js";import{a as he,R as ve}from"./RadioGroupItem-DjEKwTJ1.js";import{a as se}from"./Primitive-DEAM-xiZ.js";import{a as fe,b as Ce,_ as ge}from"./InputHelp-CgoVujsi.js";import{L as ye}from"./index-CGkXqMRd.js";import{u as ke}from"./useRadioKeyboard-QWBn16uf.js";import"./TooltipContent-814Cu58g.js";import"./RovingFocusItem-DEglRN0X.js";import"./VisuallyHiddenInput-BC-QcxJ9.js";import"./index-DSxA2iZ_.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const Re={class:"radio-card-check"},Se={key:0,class:"radio-card-check-icon radio-card-check-icon-selected",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},be={key:1,class:"radio-card-check-icon",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},xe={key:0,class:"radio-card-icon"},we={class:"radio-card-content"},Ge={class:"radio-card-heading"},Ie={key:0,class:"radio-card-description"},qe=["href"],i=le({__name:"RadioCard",props:{value:{},heading:{},description:{},linkText:{},linkUrl:{},disabled:{type:Boolean},class:{}},setup(a){const u=a,e=ne("radioCardContext"),p=o(()=>(e==null?void 0:e.modelValue.value)===u.value),g=o(()=>u.disabled||(e==null?void 0:e.disabled.value)),D=o(()=>e==null?void 0:e.invalid.value),n=o(()=>(e==null?void 0:e.variant.value)??"default"),t=o(()=>(e==null?void 0:e.cardLayout.value)??"horizontal"),m=o(()=>(e==null?void 0:e.stacked.value)??!0),y=S=>{S.stopPropagation()};return(S,b)=>(r(),R(d(he),{value:u.value,disabled:g.value,class:E(d(se)("radio-card",{"radio-card-default":n.value==="default","radio-card-simple":n.value==="simple","radio-card-vertical":n.value==="default"&&t.value==="vertical","radio-card-horizontal":n.value==="default"&&t.value==="horizontal","radio-card-stacked":m.value,"radio-card-selected":p.value,"radio-card-invalid":D.value},u.class))},{default:h(()=>[c("span",Re,[p.value?(r(),k("svg",Se,[...b[0]||(b[0]=[c("circle",{cx:"12",cy:"12",r:"10",fill:"#ffc627",stroke:"#ffc627","stroke-width":"2"},null,-1),c("path",{d:"M8 12l3 3 5-6",stroke:"#191919","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])])):(r(),k("svg",be,[...b[1]||(b[1]=[c("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"2"},null,-1),c("path",{d:"M8 12l3 3 5-6",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])]))]),S.$slots.icon&&n.value==="default"?(r(),k("div",xe,[v(S.$slots,"icon")])):f("",!0),c("div",we,[c("h3",Ge,C(a.heading),1),a.description?(r(),k("p",Ie,C(a.description),1)):f("",!0),a.linkText?(r(),k("a",{key:1,href:a.linkUrl||"#",class:"radio-card-link",onClick:y},C(a.linkText),9,qe)):f("",!0)])]),_:3},8,["value","disabled","class"]))}});i.__docgenInfo={exportName:"default",displayName:"RadioCard",description:"",tags:{},props:[{name:"value",description:"Unique value for this option",required:!0,type:{name:"string"}},{name:"heading",description:"Heading/title text",required:!0,type:{name:"string"}},{name:"description",description:"Description/body text",required:!1,type:{name:"string"}},{name:"linkText",description:"Optional hyperlink text",required:!1,type:{name:"string"}},{name:"linkUrl",description:"Optional hyperlink URL",required:!1,type:{name:"string"}},{name:"disabled",description:"Whether this card is disabled",required:!1,type:{name:"boolean"}},{name:"class",description:"Additional CSS classes",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"icon"}],sourceFiles:["/Users/shashankshandilya/Documents/adms-ui-registry/apps/storybook/src/components/ui/RadioCard/RadioCard.vue"]};const l=le({__name:"RadioCardGroup",props:U({id:{},label:{},tooltip:{},optional:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},helpText:{},errorText:{},variant:{default:"default"},cardLayout:{default:"horizontal"},stacked:{type:Boolean,default:!0},isInToolbar:{type:Boolean,default:!1},class:{}},{modelValue:{},modelModifiers:{}}),emits:U(["update:modelValue","blur","focus","change"],["update:modelValue"]),setup(a,{emit:u}){const e=a,p=u,g=ce(a,"modelValue"),D=t=>{g.value=t,p("change",t)},{handleKeyDown:n}=ke({isInToolbar:ue(e,"isInToolbar"),orientation:o(()=>e.stacked?"vertical":"horizontal").value});return me("radioCardContext",{modelValue:o(()=>g.value),disabled:o(()=>e.disabled),invalid:o(()=>e.invalid),variant:o(()=>e.variant),cardLayout:o(()=>e.cardLayout),stacked:o(()=>e.stacked)}),(t,m)=>(r(),R(d(ge),{id:e.id,invalid:e.invalid,disabled:e.disabled,required:e.required,class:E(e.class)},{default:h(()=>[e.label||t.$slots.label?(r(),R(d(ye),{key:0,for:e.id,tooltip:e.tooltip,optional:e.optional},{default:h(()=>[v(t.$slots,"label",{},()=>[V(C(e.label),1)])]),_:3},8,["for","tooltip","optional"])):f("",!0),pe(d(ve),{id:e.id,"model-value":g.value,disabled:e.disabled,required:e.required,"data-slot":"radio-card-group",class:E(d(se)("radio-card-group",{"radio-card-group-stacked":e.stacked,"radio-card-group-horizontal":!e.stacked,"is-invalid":e.invalid})),"aria-required":e.required,"aria-invalid":e.invalid?"true":void 0,orientation:e.stacked?"vertical":"horizontal",onKeydownCapture:d(n),"onUpdate:modelValue":D,onFocusin:m[0]||(m[0]=y=>p("focus",y)),onFocusout:m[1]||(m[1]=y=>p("blur",y))},{default:h(()=>[v(t.$slots,"default")]),_:3},8,["id","model-value","disabled","required","class","aria-required","aria-invalid","orientation","onKeydownCapture"]),e.helpText||t.$slots.help?(r(),R(d(fe),{key:1},{default:h(()=>[v(t.$slots,"help",{},()=>[V(C(e.helpText),1)])]),_:3})):f("",!0),e.errorText||t.$slots.error?(r(),R(d(Ce),{key:2},{default:h(()=>[v(t.$slots,"error",{},()=>[V(C(e.errorText),1)])]),_:3})):f("",!0),v(t.$slots,"footer")]),_:3},8,["id","invalid","disabled","required","class"]))}});l.__docgenInfo={exportName:"default",displayName:"RadioCardGroup",description:"",tags:{},props:[{name:"id",description:"Unique identifier for the radio group",required:!0,type:{name:"string"}},{name:"label",description:"Label text",required:!1,type:{name:"string"}},{name:"tooltip",description:"Tooltip text for label",required:!1,type:{name:"string"}},{name:"optional",description:"Show optional badge on label",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"invalid",description:"Whether the radio group is in an invalid state",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",description:"Whether the radio group is disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",description:"Whether the radio group is required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"helpText",description:"Help text shown when not invalid",required:!1,type:{name:"string"}},{name:"errorText",description:"Error text shown when invalid",required:!1,type:{name:"string"}},{name:"variant",description:"Card variant: 'default' (with icon support) or 'simple' (text only)",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"simple"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"cardLayout",description:"Internal card content layout: 'vertical' (icon on top, centered) or 'horizontal' (icon on left)",required:!1,type:{name:"union",elements:[{name:'"vertical"'},{name:'"horizontal"'}]},defaultValue:{func:!1,value:"'horizontal'"}},{name:"stacked",description:"Whether cards are stacked vertically. If false, cards are side-by-side (stacks on mobile via CSS)",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"isInToolbar",description:`Whether this radiogroup is inside a toolbar.
- false (default): Arrow keys navigate AND check
- true: Arrow keys only navigate; Space/Enter check`,required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"class",description:"Additional CSS classes for the root element",required:!1,type:{name:"TSIndexedAccessType"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"undefined"}]}},{name:"blur",type:{names:["FocusEvent"]}},{name:"focus",type:{names:["FocusEvent"]}},{name:"change",type:{names:["union"],elements:[{name:"string"},{name:"undefined"}]}}],slots:[{name:"label"},{name:"default"},{name:"help"},{name:"error"},{name:"footer"}],sourceFiles:["/Users/shashankshandilya/Documents/adms-ui-registry/apps/storybook/src/components/ui/RadioCard/RadioCardGroup.vue"]};const Fe={title:"Components/RadioCard",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A rich selectable card component for radio group selections. Supports two variants and flexible stacking options.

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
<\/script>

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
`}}}},z=`
<svg viewBox="0 0 66 59" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;">
  <rect x="8" y="20" width="50" height="35" fill="#FFC627" stroke="#191919" stroke-width="2"/>
  <rect x="24" y="30" width="18" height="25" fill="#fff" stroke="#191919" stroke-width="2"/>
  <polygon points="33,5 58,20 8,20" fill="#8C1D40" stroke="#191919" stroke-width="2"/>
  <circle cx="33" cy="15" r="4" fill="#FFC627"/>
</svg>
`,x={name:"Default + Stacked",render:()=>({components:{RadioCard:i,RadioCardGroup:l},setup(){return{selected:s(),SchoolIcon:z}},template:`
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
    `})},w={name:"Vertical Card Layout",render:()=>({components:{RadioCard:i,RadioCardGroup:l},setup(){return{selected:s("online"),SchoolIcon:z}},template:`
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
    `})},G={name:"Horizontal Card Layout",render:()=>({components:{RadioCard:i,RadioCardGroup:l},setup(){return{selected:s(),SchoolIcon:z}},template:`
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
    `})},I={name:"Simple + Stacked",render:()=>({components:{RadioCard:i,RadioCardGroup:l},setup(){return{selected:s()}},template:`
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
    `})},q={name:"Simple + Horizontal",render:()=>({components:{RadioCard:i,RadioCardGroup:l},setup(){return{selected:s()}},template:`
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
    `})},T={name:"With Preselection",render:()=>({components:{RadioCard:i,RadioCardGroup:l},setup(){return{selected:s("plan-pro"),SchoolIcon:z}},template:`
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
    `})},L={name:"With Error State",render:()=>({components:{RadioCard:i,RadioCardGroup:l},setup(){return{selected:s()}},template:`
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
    `})},B={name:"Disabled State",render:()=>({components:{RadioCard:i,RadioCardGroup:l},setup(){return{selected:s("yes")}},template:`
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
    `})};var N,_,A;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Default + Stacked',
  render: () => ({
    components: {
      RadioCard,
      RadioCardGroup
    },
    setup() {
      const selected = ref<string>();
      return {
        selected,
        SchoolIcon
      };
    },
    template: \`
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
    \`
  })
}`,...(A=(_=x.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var F,H,P;w.parameters={...w.parameters,docs:{...(F=w.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Vertical Card Layout',
  render: () => ({
    components: {
      RadioCard,
      RadioCardGroup
    },
    setup() {
      const selected = ref<string>('online');
      return {
        selected,
        SchoolIcon
      };
    },
    template: \`
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
    \`
  })
}`,...(P=(H=w.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var Y,W,$;G.parameters={...G.parameters,docs:{...(Y=G.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Horizontal Card Layout',
  render: () => ({
    components: {
      RadioCard,
      RadioCardGroup
    },
    setup() {
      const selected = ref<string>();
      return {
        selected,
        SchoolIcon
      };
    },
    template: \`
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
    \`
  })
}`,...($=(W=G.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var M,O,K;I.parameters={...I.parameters,docs:{...(M=I.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Simple + Stacked',
  render: () => ({
    components: {
      RadioCard,
      RadioCardGroup
    },
    setup() {
      const selected = ref<string>();
      return {
        selected
      };
    },
    template: \`
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
    \`
  })
}`,...(K=(O=I.parameters)==null?void 0:O.docs)==null?void 0:K.source}}};var j,J,Q;q.parameters={...q.parameters,docs:{...(j=q.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Simple + Horizontal',
  render: () => ({
    components: {
      RadioCard,
      RadioCardGroup
    },
    setup() {
      const selected = ref<string>();
      return {
        selected
      };
    },
    template: \`
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
    \`
  })
}`,...(Q=(J=q.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,ee;T.parameters={...T.parameters,docs:{...(X=T.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'With Preselection',
  render: () => ({
    components: {
      RadioCard,
      RadioCardGroup
    },
    setup() {
      const selected = ref<string>('plan-pro');
      return {
        selected,
        SchoolIcon
      };
    },
    template: \`
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
    \`
  })
}`,...(ee=(Z=T.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,te,oe;L.parameters={...L.parameters,docs:{...(ae=L.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'With Error State',
  render: () => ({
    components: {
      RadioCard,
      RadioCardGroup
    },
    setup() {
      const selected = ref<string>();
      return {
        selected
      };
    },
    template: \`
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
    \`
  })
}`,...(oe=(te=L.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var re,de,ie;B.parameters={...B.parameters,docs:{...(re=B.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Disabled State',
  render: () => ({
    components: {
      RadioCard,
      RadioCardGroup
    },
    setup() {
      const selected = ref<string>('yes');
      return {
        selected
      };
    },
    template: \`
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
    \`
  })
}`,...(ie=(de=B.parameters)==null?void 0:de.docs)==null?void 0:ie.source}}};const He=["DefaultStacked","VerticalCards","DefaultHorizontal","SimpleStacked","SimpleHorizontal","WithPreselection","WithError","Disabled"];export{G as DefaultHorizontal,x as DefaultStacked,B as Disabled,q as SimpleHorizontal,I as SimpleStacked,w as VerticalCards,L as WithError,T as WithPreselection,He as __namedExportsOrder,Fe as default};
