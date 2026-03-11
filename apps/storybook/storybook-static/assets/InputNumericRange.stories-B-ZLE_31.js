import{d as me,q as de,w as ce,B as fe,E as ve,u as f,s as Ie,v as D,F as be,r,c as ge,o as xe}from"./vue.esm-bundler-DIwgUAuo.js";import{I as Re,a as L,_ as i,b as he}from"./InputHelp-CgoVujsi.js";import{a as ye}from"./Primitive-DEAM-xiZ.js";import{_ as we}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{L as p}from"./index-CGkXqMRd.js";import"./index-DSxA2iZ_.js";import"./TooltipContent-814Cu58g.js";const Le={class:"input-wrapper"},Ne=["id","value","placeholder","required","disabled","readonly","autocomplete","aria-required","aria-invalid","aria-describedby"],ae=me({__name:"InputNumericRange",props:D({min:{default:void 0},max:{default:void 0},defaultValue:{default:void 0},allowDecimal:{type:Boolean,default:!1},decimalPlaces:{default:2},suffix:{default:void 0},prefix:{default:void 0},placeholder:{default:void 0},readonly:{type:Boolean,default:!1},autocomplete:{default:void 0},class:{}},{modelValue:{},modelModifiers:{}}),emits:D(["blur","focus","input","change","keydown","keyup"],["update:modelValue"]),setup(l,{emit:te}){const a=l,d=te,u=be(Re);if(!u)throw new Error("InputNumericRange must be used within InputRoot");const N=r(),m=de(l,"modelValue"),c=r(""),V=n=>a.allowDecimal&&a.decimalPlaces!==void 0?n.toFixed(a.decimalPlaces):Math.floor(n).toString(),le=n=>{let e=n;if(a.prefix&&(e=e.replace(a.prefix,"")),a.suffix&&(e=e.replace(a.suffix,"")),e=e.trim(),e===""||e==="-")return null;const t=a.allowDecimal?Number.parseFloat(e):Number.parseInt(e,10);return Number.isNaN(t)?null:t},ue=n=>{let e=n;return a.min!==void 0&&e<a.min&&(e=a.min),a.max!==void 0&&e>a.max&&(e=a.max),e},E=n=>{if(n===null){c.value="";return}const e=V(n),t=a.prefix?`${a.prefix}${e}`:e,o=a.suffix?`${t}${a.suffix}`:t;c.value=o},re=n=>{if(!n.data)return;const e=n.data;if(!/\d/.test(e)){if(a.allowDecimal&&e==="."){let o=c.value||"";if(a.prefix&&(o=o.replace(a.prefix,"")),a.suffix&&(o=o.replace(a.suffix,"")),!o.includes("."))return}e==="-"&&(a.min===void 0||a.min<0)&&(n.target.selectionStart||0)===0||n.preventDefault()}},oe=n=>{const t=n.target.value,o=le(t);if(o===null){c.value=t,m.value=null,d("input",n);return}m.value=o,c.value=t,d("input",n)},ie=n=>{let e=m.value??a.defaultValue??null;e!==null&&(e=ue(e),m.value=e),E(e),d("blur",n)},pe=n=>{if(m.value!==null&&m.value!==void 0){const e=V(m.value);c.value=e}d("focus",n)};ce(()=>m.value,n=>{document.activeElement!==N.value&&E(n??null)},{immediate:!0});const se=ge(()=>{const n=[];return u.invalid.value||n.push(u.helpId.value),u.invalid.value&&n.push(u.errorId.value),n.length>0?n.join(" "):void 0});return(n,e)=>(xe(),fe("div",Le,[ve("input",{id:f(u).id.value,ref_key:"inputRef",ref:N,value:c.value,"data-slot":"input-numeric-range",type:"text",inputmode:"decimal",class:Ie(f(ye)("form-control col-12 p-space-xs",{"is-invalid":f(u).invalid.value},a.class)),placeholder:l.placeholder,required:f(u).required.value,disabled:f(u).disabled.value,readonly:l.readonly,autocomplete:l.autocomplete,"aria-required":f(u).required.value,"aria-invalid":f(u).invalid.value?"true":void 0,"aria-describedby":se.value,onBeforeinput:re,onInput:oe,onBlur:ie,onFocus:pe,onChange:e[0]||(e[0]=t=>d("change",t)),onKeydown:e[1]||(e[1]=t=>d("keydown",t)),onKeyup:e[2]||(e[2]=t=>d("keyup",t))},null,42,Ne)]))}}),s=we(ae,[["__scopeId","data-v-61fff1f7"]]);ae.__docgenInfo={exportName:"default",displayName:"InputNumericRange",description:"",tags:{},props:[{name:"min",description:"Minimum allowed value",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"max",description:"Maximum allowed value",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"defaultValue",description:"Default value when input is empty (applied on blur)",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"allowDecimal",description:"Allow decimal values",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"decimalPlaces",description:"Number of decimal places (only used when allowDecimal is true)",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"2"}},{name:"suffix",description:'Suffix to display after the value (e.g., "%", "kg", "cm")',required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"prefix",description:'Prefix to display before the value (e.g., "$", "€")',required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"placeholder",description:"Placeholder text",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"readonly",description:"Make the input read-only",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"autocomplete",description:"Autocomplete attribute",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"class",description:"Additional CSS classes",required:!1,type:{name:"TSIndexedAccessType"}}],events:[{name:"blur",type:{names:["FocusEvent"]}},{name:"focus",type:{names:["FocusEvent"]}},{name:"input",type:{names:["Event"]}},{name:"change",type:{names:["Event"]}},{name:"keydown",type:{names:["KeyboardEvent"]}},{name:"keyup",type:{names:["KeyboardEvent"]}}],sourceFiles:["/Users/shashankshandilya/Documents/adms-ui-registry/apps/storybook/src/components/ui/InputNumericRange/InputNumericRange.vue"]};const Se={title:"Primitives/InputNumericRange",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A numeric input primitive with min/max range validation, decimal support, and prefix/suffix formatting.

## Installation

\`\`\`bash
adms-rds-ui add input-numeric-range
\`\`\`

## Usage

\`\`\`vue
<script setup lang="ts">
import { InputRoot } from '@/components/ui/InputRoot'
import { InputNumericRange } from '@/components/ui/InputNumericRange'
import { Label } from '@/components/ui/Label'
import { ref } from 'vue'

const price = ref<number | null>(null)
<\/script>

<template>
  <InputRoot id="price">
    <Label for="price">Price</Label>
    <InputNumericRange
      v-model="price"
      :min="0"
      :max="1000"
      prefix="$"
      :allow-decimal="true"
      :decimal-places="2"
    />
  </InputRoot>
</template>
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| min | number | undefined | Minimum allowed value |
| max | number | undefined | Maximum allowed value |
| defaultValue | number | undefined | Default value on blur if empty |
| allowDecimal | boolean | false | Allow decimal values |
| decimalPlaces | number | 2 | Decimal places (when allowDecimal is true) |
| prefix | string | undefined | Prefix (e.g., "$", "€") |
| suffix | string | undefined | Suffix (e.g., "%", "kg") |

## Behavior

- **On focus**: Shows raw number without prefix/suffix for editing
- **On blur**: Applies min/max clamping and shows formatted value with prefix/suffix
- **Invalid characters**: Prevented via beforeinput event
`}}}},v={name:"Basic Number",render:()=>({components:{InputRoot:i,InputNumericRange:s,Label:p},setup(){return{value:r(null)}},template:`
      <div style="min-width: 300px;">
        <InputRoot id="number">
          <Label for="number">Enter a number</Label>
          <InputNumericRange v-model="value" placeholder="0" />
        </InputRoot>
        <p class="mt-2 text-muted fs-small">Value: {{ value }}</p>
      </div>
    `})},I={name:"With Min/Max Range",render:()=>({components:{InputRoot:i,InputNumericRange:s,Label:p,InputHelp:L},setup(){return{value:r(50)}},template:`
      <div style="min-width: 300px;">
        <InputRoot id="range">
          <Label for="range">Age</Label>
          <InputNumericRange v-model="value" :min="18" :max="120" placeholder="Enter age" />
          <InputHelp>Must be between 18 and 120</InputHelp>
        </InputRoot>
        <p class="mt-2 text-muted fs-small">Value: {{ value }} (try typing 200, then blur)</p>
      </div>
    `})},b={name:"With Decimals",render:()=>({components:{InputRoot:i,InputNumericRange:s,Label:p},setup(){return{value:r(3.14)}},template:`
      <div style="min-width: 300px;">
        <InputRoot id="decimal">
          <Label for="decimal">Weight (kg)</Label>
          <InputNumericRange
            v-model="value"
            :allow-decimal="true"
            :decimal-places="2"
            suffix=" kg"
            placeholder="0.00"
          />
        </InputRoot>
        <p class="mt-2 text-muted fs-small">Value: {{ value }}</p>
      </div>
    `})},g={name:"Currency Input",render:()=>({components:{InputRoot:i,InputNumericRange:s,Label:p,InputHelp:L},setup(){return{value:r(99.99)}},template:`
      <div style="min-width: 300px;">
        <InputRoot id="price">
          <Label for="price">Price</Label>
          <InputNumericRange
            v-model="value"
            :min="0"
            :max="10000"
            prefix="$"
            :allow-decimal="true"
            :decimal-places="2"
            placeholder="0.00"
          />
          <InputHelp>Enter amount between $0 and $10,000</InputHelp>
        </InputRoot>
        <p class="mt-2 text-muted fs-small">Value: {{ value }}</p>
      </div>
    `})},x={name:"Percentage Input",render:()=>({components:{InputRoot:i,InputNumericRange:s,Label:p,InputHelp:L},setup(){return{value:r(75)}},template:`
      <div style="min-width: 300px;">
        <InputRoot id="percentage">
          <Label for="percentage">Completion</Label>
          <InputNumericRange
            v-model="value"
            :min="0"
            :max="100"
            suffix="%"
            placeholder="0"
          />
          <InputHelp>Enter percentage (0-100)</InputHelp>
        </InputRoot>
        <p class="mt-2 text-muted fs-small">Value: {{ value }}%</p>
      </div>
    `})},R={name:"Temperature Input",render:()=>({components:{InputRoot:i,InputNumericRange:s,Label:p},setup(){return{value:r(72)}},template:`
      <div style="min-width: 300px;">
        <InputRoot id="temp">
          <Label for="temp">Temperature</Label>
          <InputNumericRange
            v-model="value"
            :min="-40"
            :max="140"
            suffix="°F"
            placeholder="72"
          />
        </InputRoot>
        <p class="mt-2 text-muted fs-small">Value: {{ value }}°F (negative allowed)</p>
      </div>
    `})},h={name:"With Default Value",render:()=>({components:{InputRoot:i,InputNumericRange:s,Label:p,InputHelp:L},setup(){return{value:r(null)}},template:`
      <div style="min-width: 300px;">
        <InputRoot id="default">
          <Label for="default">Quantity</Label>
          <InputNumericRange
            v-model="value"
            :min="1"
            :max="100"
            :default-value="1"
            placeholder="Enter quantity"
          />
          <InputHelp>Leave empty and blur to see default value (1)</InputHelp>
        </InputRoot>
        <p class="mt-2 text-muted fs-small">Value: {{ value }}</p>
      </div>
    `})},y={name:"With Error State",render:()=>({components:{InputRoot:i,InputNumericRange:s,Label:p,InputError:he},setup(){return{value:r(150)}},template:`
      <div style="min-width: 300px;">
        <InputRoot id="error" :invalid="true">
          <Label for="error">Age</Label>
          <InputNumericRange v-model="value" :min="18" :max="120" />
          <InputError>Age must be between 18 and 120</InputError>
        </InputRoot>
      </div>
    `})},w={name:"Disabled",render:()=>({components:{InputRoot:i,InputNumericRange:s,Label:p},setup(){return{value:r(42)}},template:`
      <div style="min-width: 300px;">
        <InputRoot id="disabled" :disabled="true">
          <Label for="disabled">Locked Value</Label>
          <InputNumericRange v-model="value" prefix="$" />
        </InputRoot>
      </div>
    `})};var H,P,k;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Basic Number',
  render: () => ({
    components: {
      InputRoot,
      InputNumericRange,
      Label
    },
    setup() {
      const value = ref<number | null>(null);
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 300px;">
        <InputRoot id="number">
          <Label for="number">Enter a number</Label>
          <InputNumericRange v-model="value" placeholder="0" />
        </InputRoot>
        <p class="mt-2 text-muted fs-small">Value: {{ value }}</p>
      </div>
    \`
  })
}`,...(k=(P=v.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var q,S,W;I.parameters={...I.parameters,docs:{...(q=I.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'With Min/Max Range',
  render: () => ({
    components: {
      InputRoot,
      InputNumericRange,
      Label,
      InputHelp
    },
    setup() {
      const value = ref<number | null>(50);
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 300px;">
        <InputRoot id="range">
          <Label for="range">Age</Label>
          <InputNumericRange v-model="value" :min="18" :max="120" placeholder="Enter age" />
          <InputHelp>Must be between 18 and 120</InputHelp>
        </InputRoot>
        <p class="mt-2 text-muted fs-small">Value: {{ value }} (try typing 200, then blur)</p>
      </div>
    \`
  })
}`,...(W=(S=I.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};var $,M,_;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'With Decimals',
  render: () => ({
    components: {
      InputRoot,
      InputNumericRange,
      Label
    },
    setup() {
      const value = ref<number | null>(3.14);
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 300px;">
        <InputRoot id="decimal">
          <Label for="decimal">Weight (kg)</Label>
          <InputNumericRange
            v-model="value"
            :allow-decimal="true"
            :decimal-places="2"
            suffix=" kg"
            placeholder="0.00"
          />
        </InputRoot>
        <p class="mt-2 text-muted fs-small">Value: {{ value }}</p>
      </div>
    \`
  })
}`,...(_=(M=b.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var B,A,F;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Currency Input',
  render: () => ({
    components: {
      InputRoot,
      InputNumericRange,
      Label,
      InputHelp
    },
    setup() {
      const value = ref<number | null>(99.99);
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 300px;">
        <InputRoot id="price">
          <Label for="price">Price</Label>
          <InputNumericRange
            v-model="value"
            :min="0"
            :max="10000"
            prefix="$"
            :allow-decimal="true"
            :decimal-places="2"
            placeholder="0.00"
          />
          <InputHelp>Enter amount between $0 and $10,000</InputHelp>
        </InputRoot>
        <p class="mt-2 text-muted fs-small">Value: {{ value }}</p>
      </div>
    \`
  })
}`,...(F=(A=g.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var C,T,K;x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Percentage Input',
  render: () => ({
    components: {
      InputRoot,
      InputNumericRange,
      Label,
      InputHelp
    },
    setup() {
      const value = ref<number | null>(75);
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 300px;">
        <InputRoot id="percentage">
          <Label for="percentage">Completion</Label>
          <InputNumericRange
            v-model="value"
            :min="0"
            :max="100"
            suffix="%"
            placeholder="0"
          />
          <InputHelp>Enter percentage (0-100)</InputHelp>
        </InputRoot>
        <p class="mt-2 text-muted fs-small">Value: {{ value }}%</p>
      </div>
    \`
  })
}`,...(K=(T=x.parameters)==null?void 0:T.docs)==null?void 0:K.source}}};var O,U,j;R.parameters={...R.parameters,docs:{...(O=R.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Temperature Input',
  render: () => ({
    components: {
      InputRoot,
      InputNumericRange,
      Label
    },
    setup() {
      const value = ref<number | null>(72);
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 300px;">
        <InputRoot id="temp">
          <Label for="temp">Temperature</Label>
          <InputNumericRange
            v-model="value"
            :min="-40"
            :max="140"
            suffix="°F"
            placeholder="72"
          />
        </InputRoot>
        <p class="mt-2 text-muted fs-small">Value: {{ value }}°F (negative allowed)</p>
      </div>
    \`
  })
}`,...(j=(U=R.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var Q,z,J;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'With Default Value',
  render: () => ({
    components: {
      InputRoot,
      InputNumericRange,
      Label,
      InputHelp
    },
    setup() {
      const value = ref<number | null>(null);
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 300px;">
        <InputRoot id="default">
          <Label for="default">Quantity</Label>
          <InputNumericRange
            v-model="value"
            :min="1"
            :max="100"
            :default-value="1"
            placeholder="Enter quantity"
          />
          <InputHelp>Leave empty and blur to see default value (1)</InputHelp>
        </InputRoot>
        <p class="mt-2 text-muted fs-small">Value: {{ value }}</p>
      </div>
    \`
  })
}`,...(J=(z=h.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var Y,G,X;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'With Error State',
  render: () => ({
    components: {
      InputRoot,
      InputNumericRange,
      Label,
      InputError
    },
    setup() {
      const value = ref<number | null>(150);
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 300px;">
        <InputRoot id="error" :invalid="true">
          <Label for="error">Age</Label>
          <InputNumericRange v-model="value" :min="18" :max="120" />
          <InputError>Age must be between 18 and 120</InputError>
        </InputRoot>
      </div>
    \`
  })
}`,...(X=(G=y.parameters)==null?void 0:G.docs)==null?void 0:X.source}}};var Z,ee,ne;w.parameters={...w.parameters,docs:{...(Z=w.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => ({
    components: {
      InputRoot,
      InputNumericRange,
      Label
    },
    setup() {
      const value = ref<number | null>(42);
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 300px;">
        <InputRoot id="disabled" :disabled="true">
          <Label for="disabled">Locked Value</Label>
          <InputNumericRange v-model="value" prefix="$" />
        </InputRoot>
      </div>
    \`
  })
}`,...(ne=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};const We=["Default","WithRange","WithDecimals","Currency","Percentage","Temperature","WithDefaultValue","WithError","Disabled"];export{g as Currency,v as Default,w as Disabled,x as Percentage,R as Temperature,b as WithDecimals,h as WithDefaultValue,y as WithError,I as WithRange,We as __namedExportsOrder,Se as default};
