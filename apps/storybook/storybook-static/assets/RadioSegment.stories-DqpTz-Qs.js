import{d as Se,q as xe,l as ke,w as we,a as y,b as c,s as T,u as d,v as M,G as Re,o as u,f as v,x as V,y as f,z as P,e as N,B as Ce,H as Oe,I as qe,E as A,c as Te,r as o}from"./vue.esm-bundler-DIwgUAuo.js";import{R as Ve,a as Pe}from"./RadioGroupItem-DjEKwTJ1.js";import{R as Ee}from"./RadioGroupIndicator-PKB8QUuY.js";import{a as Me,b as Ne,_ as Ae}from"./InputHelp-CgoVujsi.js";import{a as W}from"./Primitive-DEAM-xiZ.js";import{L as We}from"./index-CGkXqMRd.js";import{u as ze}from"./useRadioKeyboard-QWBn16uf.js";import"./TooltipContent-814Cu58g.js";import"./RovingFocusItem-DEglRN0X.js";import"./VisuallyHiddenInput-BC-QcxJ9.js";import"./index-DSxA2iZ_.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const De={class:"radio-segment-label"},Ke={class:"radio-segment-indicator-wrapper"},r=Se({__name:"RadioSegment",props:M({id:{},options:{},labelKey:{},valueKey:{},prefillValue:{},label:{},tooltip:{},optional:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},helpText:{},errorText:{},readonly:{type:Boolean,default:!1},isInToolbar:{type:Boolean,default:!1},class:{}},{modelValue:{},modelModifiers:{}}),emits:M(["update:modelValue","blur","focus","change"],["update:modelValue"]),setup(t,{emit:s}){const e=t,m=s,l=xe(t,"modelValue"),p=a=>{const n=a[e.valueKey];return String(n)},ve=a=>{const n=a[e.labelKey];return String(n)},E=a=>{if(a==null)return;const n=String(a).toLowerCase();return e.options.find(i=>String(i[e.valueKey]).toLowerCase()===n)},fe=Te(()=>{if(l.value)return p(l.value)}),ge=a=>{const n=e.options.find(i=>p(i)===a);l.value=n,m("change",n)},{handleKeyDown:he}=ze({isInToolbar:Re(e,"isInToolbar"),orientation:"horizontal"}),be=a=>l.value?p(l.value)===p(a):!1;return ke(()=>{if(e.prefillValue!==void 0&&!l.value){const a=E(e.prefillValue);a&&(l.value=a)}}),we(()=>e.prefillValue,a=>{if(a!==void 0){const n=E(a);n&&(l.value=n)}}),(a,n)=>(u(),y(d(Ae),{id:e.id,invalid:e.invalid,disabled:e.disabled,required:e.required,class:T(e.class)},{default:c(()=>[e.label||a.$slots.label?(u(),y(d(We),{key:0,for:e.id,tooltip:e.tooltip,optional:e.optional},{default:c(()=>[v(a.$slots,"label",{},()=>[V(f(e.label),1)])]),_:3},8,["for","tooltip","optional"])):P("",!0),N(d(Ve),{id:e.id,"model-value":fe.value,disabled:e.disabled||e.readonly,required:e.required,"data-slot":"radio-segment",class:T(d(W)("radio-segment-group",{"is-invalid":e.invalid})),"aria-required":e.required,"aria-invalid":e.invalid?"true":void 0,orientation:"horizontal",onKeydownCapture:d(he),"onUpdate:modelValue":ge,onFocusin:n[0]||(n[0]=i=>m("focus",i)),onFocusout:n[1]||(n[1]=i=>m("blur",i))},{default:c(()=>[(u(!0),Ce(Oe,null,qe(t.options,i=>(u(),y(d(Pe),{key:p(i),value:p(i),class:T(d(W)("radio-segment-card",{"radio-segment-card-selected":be(i),"radio-segment-card-invalid":e.invalid}))},{default:c(()=>[A("span",De,f(ve(i)),1),A("span",Ke,[N(d(Ee),{class:"radio-segment-indicator"})])]),_:2},1032,["value","class"]))),128))]),_:1},8,["id","model-value","disabled","required","class","aria-required","aria-invalid","onKeydownCapture"]),e.helpText||a.$slots.help?(u(),y(d(Me),{key:1},{default:c(()=>[v(a.$slots,"help",{},()=>[V(f(e.helpText),1)])]),_:3})):P("",!0),e.errorText||a.$slots.error?(u(),y(d(Ne),{key:2},{default:c(()=>[v(a.$slots,"error",{},()=>[V(f(e.errorText),1)])]),_:3})):P("",!0),v(a.$slots,"footer")]),_:3},8,["id","invalid","disabled","required","class"]))}});r.__docgenInfo={exportName:"default",displayName:"RadioSegment",description:"",tags:{},props:[{name:"id",description:"Unique identifier for the radio group",required:!0,type:{name:"string"}},{name:"options",description:"Array of option objects",required:!0,type:{name:"Array",elements:[{name:"T"}]}},{name:"labelKey",description:"Key in option object to use as display label",required:!0,type:{name:"intersection",elements:[{name:"TSTypeOperator"},{name:"string"}]}},{name:"valueKey",description:"Key in option object to use as value for matching",required:!0,type:{name:"intersection",elements:[{name:"TSTypeOperator"},{name:"string"}]}},{name:"prefillValue",description:"Value to prefill/preselect (matches against valueKey, case-insensitive)",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"label",description:"Label text",required:!1,type:{name:"string"}},{name:"tooltip",description:"Tooltip text for label",required:!1,type:{name:"string"}},{name:"optional",description:"Show optional badge on label",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"invalid",description:"Whether the radio group is in an invalid state",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",description:"Whether the radio group is disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",description:"Whether the radio group is required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"helpText",description:"Help text shown when not invalid",required:!1,type:{name:"string"}},{name:"errorText",description:"Error text shown when invalid",required:!1,type:{name:"string"}},{name:"readonly",description:"Make the radio group read-only",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isInToolbar",description:`Whether this radiogroup is inside a toolbar.
- false (default): Arrow keys navigate AND check
- true: Arrow keys only navigate; Space/Enter check`,required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"class",description:"Additional CSS classes for the root element",required:!1,type:{name:"TSIndexedAccessType"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"T"},{name:"undefined"}]}},{name:"blur",type:{names:["FocusEvent"]}},{name:"focus",type:{names:["FocusEvent"]}},{name:"change",type:{names:["union"],elements:[{name:"T"},{name:"undefined"}]}}],slots:[{name:"label"},{name:"help"},{name:"error"},{name:"footer"}],sourceFiles:["/Users/shashankshandilya/Documents/adms-ui-registry/apps/storybook/src/components/ui/RadioSegment/RadioSegment.vue"]};const Qe={title:"Components/RadioSegment",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A card-style horizontal radio group that works with any array of JSON objects. Displays options as separate cards with shadows and radio indicators. Fully typed with generic support.

## Installation

\`\`\`bash
adms-rds-ui add radio-segment
\`\`\`

This will also install the required dependencies: input-root, input-error, input-help, and label.

## Usage

\`\`\`vue
<script setup lang="ts">
import { RadioSegment } from '@/components/ui/RadioSegment'
import { ref } from 'vue'

interface Country {
  name: string
  code: string
}

const countries: Country[] = [
  { name: 'America', code: 'usa' },
  { name: 'Canada', code: 'can' },
  { name: 'Mexico', code: 'mex' },
]

const selectedCountry = ref<Country>()
<\/script>

<template>
  <RadioSegment
    id="country"
    v-model="selectedCountry"
    :options="countries"
    label-key="name"
    value-key="code"
    prefill-value="usa"
    label="Select Country"
  />
</template>
\`\`\`

## Props

- **id** - Unique identifier (required)
- **options** - Array of option objects (required)
- **labelKey** - Key in option object to use as display label (required)
- **valueKey** - Key in option object to use as value for matching (required)
- **prefillValue** - Value to prefill/preselect (case-insensitive match against valueKey)
- **v-model** - Two-way binding for the selected option object
- **label** - Label text
- **tooltip** - Tooltip text for label
- **optional** - Show "Optional" badge on label
- **invalid** - Error state
- **disabled** - Disabled state
- **required** - Required field
- **helpText** - Help text (shown when not invalid)
- **errorText** - Error text (shown when invalid)
- **readonly** - Make the radio group read-only

## Events

- **@change** - Emitted when selection changes (value: full option object)
- **@focus** - Emitted when radio group receives focus
- **@blur** - Emitted when radio group loses focus

## Type Safety

The component uses Vue 3.3+ generics. When you provide typed options, the v-model will be correctly typed:

\`\`\`typescript
interface Country {
  name: string
  code: string
}

const countries: Country[] = [...]
const selected = ref<Country>() // Properly typed!
\`\`\`
`}}}},g={name:"Basic Usage",render:()=>({components:{RadioSegment:r},setup(){const t=[{name:"America",code:"usa"},{name:"Canada",code:"can"},{name:"Mexico",code:"mex"}],s=o();return{countries:t,selected:s}},template:`
      <div style="min-width: 400px;">
        <RadioSegment
          id="country-basic"
          v-model="selected"
          :options="countries"
          label-key="name"
          value-key="code"
          label="Select Country"
        />
        <p class="mt-3 text-muted fs-small">
          Selected: {{ selected ? JSON.stringify(selected) : 'undefined' }}
        </p>
      </div>
    `})},h={name:"With Prefill Value",render:()=>({components:{RadioSegment:r},setup(){const t=[{name:"America",code:"usa"},{name:"Canada",code:"can"},{name:"Mexico",code:"mex"}],s=o();return{countries:t,selected:s}},template:`
      <div style="min-width: 400px;">
        <RadioSegment
          id="country-prefill"
          v-model="selected"
          :options="countries"
          label-key="name"
          value-key="code"
          prefill-value="can"
          label="Select Country"
          help-text="Canada is pre-selected using prefill-value='can'"
        />
        <p class="mt-3 text-muted fs-small">
          Selected: {{ selected ? JSON.stringify(selected) : 'undefined' }}
        </p>
      </div>
    `})},b={name:"Case-Insensitive Prefill",render:()=>({components:{RadioSegment:r},setup(){const t=[{name:"America",code:"usa"},{name:"Canada",code:"can"},{name:"Mexico",code:"mex"}],s=o();return{countries:t,selected:s}},template:`
      <div style="min-width: 400px;">
        <RadioSegment
          id="country-case"
          v-model="selected"
          :options="countries"
          label-key="name"
          value-key="code"
          prefill-value="USA"
          label="Select Country"
          help-text="Matching is case-insensitive: 'USA' matches 'usa'"
        />
        <p class="mt-3 text-muted fs-small">
          Selected: {{ selected ? JSON.stringify(selected) : 'undefined' }}
        </p>
      </div>
    `})},S={name:"With Numeric Values",render:()=>({components:{RadioSegment:r},setup(){const t=[{text:"Low",level:1},{text:"Medium",level:2},{text:"High",level:3}],s=o();return{priorities:t,selected:s}},template:`
      <div style="min-width: 400px;">
        <RadioSegment
          id="priority"
          v-model="selected"
          :options="priorities"
          label-key="text"
          value-key="level"
          :prefill-value="2"
          label="Priority Level"
          help-text="Using numeric values for matching"
        />
        <p class="mt-3 text-muted fs-small">
          Selected: {{ selected ? JSON.stringify(selected) : 'undefined' }}
        </p>
      </div>
    `})},x={name:"Objects with Extra Fields",render:()=>({components:{RadioSegment:r},setup(){const t=[{label:"Small",value:"sm",price:10},{label:"Medium",value:"md",price:15},{label:"Large",value:"lg",price:20},{label:"X-Large",value:"xl",price:25}],s=o();return{sizes:t,selected:s}},template:`
      <div style="min-width: 500px;">
        <RadioSegment
          id="size"
          v-model="selected"
          :options="sizes"
          label-key="label"
          value-key="value"
          prefill-value="md"
          label="Select Size"
        />
        <div v-if="selected" class="mt-3 p-3 bg-light rounded">
          <strong>Selected Size:</strong> {{ selected.label }}<br>
          <strong>Price:</strong> \${{ selected.price }}
        </div>
        <p v-else class="mt-3 text-muted fs-small">Select a size to see price</p>
      </div>
    `})},k={name:"With Error State",render:()=>({components:{RadioSegment:r},setup(){const t=[{name:"Option A",id:"a"},{name:"Option B",id:"b"},{name:"Option C",id:"c"}],s=o();return{options:t,selected:s}},template:`
      <div style="min-width: 400px;">
        <RadioSegment
          id="error-demo"
          v-model="selected"
          :options="options"
          label-key="name"
          value-key="id"
          label="Required Selection"
          :invalid="true"
          error-text="Please select an option."
        />
      </div>
    `})},w={name:"Disabled State",render:()=>({components:{RadioSegment:r},setup(){const t=[{name:"Yes",value:"yes"},{name:"No",value:"no"},{name:"Maybe",value:"maybe"}],s=o();return{options:t,selected:s}},template:`
      <div style="min-width: 400px;">
        <RadioSegment
          id="disabled-demo"
          v-model="selected"
          :options="options"
          label-key="name"
          value-key="value"
          prefill-value="yes"
          label="Answer"
          :disabled="true"
        />
        <p class="mt-3 text-muted fs-small">Component is disabled</p>
      </div>
    `})},R={name:"With Label Tooltip",render:()=>({components:{RadioSegment:r},setup(){const t=[{name:"Standard",code:"std"},{name:"Express",code:"exp"},{name:"Overnight",code:"ovn"}],s=o();return{options:t,selected:s}},template:`
      <div style="min-width: 400px;">
        <RadioSegment
          id="tooltip-demo"
          v-model="selected"
          :options="options"
          label-key="name"
          value-key="code"
          label="Shipping Method"
          tooltip="Select how quickly you need your order delivered"
          help-text="Express and Overnight have additional fees."
        />
      </div>
    `})},C={name:"Two Options (Yes/No Alternative)",render:()=>({components:{RadioSegment:r},setup(){const t=[{label:"Agree",value:"Y"},{label:"Disagree",value:"N"}],s=o();return{options:t,selected:s}},template:`
      <div style="min-width: 300px;">
        <RadioSegment
          id="agree-demo"
          v-model="selected"
          :options="options"
          label-key="label"
          value-key="value"
          label="Do you agree to the terms?"
          :required="true"
        />
        <p class="mt-3 text-muted fs-small">
          Selected: {{ selected ? selected.value : 'undefined' }}
        </p>
      </div>
    `})},O={name:"Many Options",render:()=>({components:{RadioSegment:r},setup(){const t=[{name:"Mon",day:"monday"},{name:"Tue",day:"tuesday"},{name:"Wed",day:"wednesday"},{name:"Thu",day:"thursday"},{name:"Fri",day:"friday"}],s=o();return{days:t,selected:s}},template:`
      <div>
        <RadioSegment
          id="days-demo"
          v-model="selected"
          :options="days"
          label-key="name"
          value-key="day"
          label="Preferred Day"
          prefill-value="wednesday"
        />
        <p class="mt-3 text-muted fs-small">
          Selected: {{ selected ? selected.day : 'undefined' }}
        </p>
      </div>
    `})},q={name:"Complete Form Example",render:()=>({components:{RadioSegment:r},setup(){const t=[{name:"Standard",code:"std",days:"5-7"},{name:"Express",code:"exp",days:"2-3"},{name:"Next Day",code:"next",days:"1"}],s=[{label:"Credit Card",value:"cc"},{label:"PayPal",value:"pp"},{label:"Bank Transfer",value:"bt"}],e=o(),m=o(),l=o({shipping:!1,payment:!1});return{shippingOptions:t,paymentOptions:s,shipping:e,payment:m,errors:l,validate:()=>{l.value.shipping=!e.value,l.value.payment=!m.value}}},template:`
      <form class="p-4 border rounded" style="min-width: 500px;">
        <h4 class="mb-4">Checkout Options</h4>

        <RadioSegment
          id="form-shipping"
          v-model="shipping"
          :options="shippingOptions"
          label-key="name"
          value-key="code"
          label="Shipping Method"
          :required="true"
          :invalid="errors.shipping"
          error-text="Please select a shipping method."
          @change="errors.shipping = false"
          class="mb-4"
        />

        <div v-if="shipping" class="mb-4 p-2 bg-light rounded">
          <small>Estimated delivery: {{ shipping.days }} business days</small>
        </div>

        <RadioSegment
          id="form-payment"
          v-model="payment"
          :options="paymentOptions"
          label-key="label"
          value-key="value"
          label="Payment Method"
          :required="true"
          :invalid="errors.payment"
          error-text="Please select a payment method."
          @change="errors.payment = false"
          class="mb-4"
        />

        <button type="button" class="btn btn-primary" @click="validate">
          Continue to Payment
        </button>

        <div class="mt-3 p-2 bg-light rounded">
          <small class="text-muted">
            Shipping: {{ shipping?.name ?? 'None' }} |
            Payment: {{ payment?.label ?? 'None' }}
          </small>
        </div>
      </form>
    `})};var z,D,K;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Basic Usage',
  render: () => ({
    components: {
      RadioSegment
    },
    setup() {
      const countries: Country[] = [{
        name: 'America',
        code: 'usa'
      }, {
        name: 'Canada',
        code: 'can'
      }, {
        name: 'Mexico',
        code: 'mex'
      }];
      const selected = ref<Country>();
      return {
        countries,
        selected
      };
    },
    template: \`
      <div style="min-width: 400px;">
        <RadioSegment
          id="country-basic"
          v-model="selected"
          :options="countries"
          label-key="name"
          value-key="code"
          label="Select Country"
        />
        <p class="mt-3 text-muted fs-small">
          Selected: {{ selected ? JSON.stringify(selected) : 'undefined' }}
        </p>
      </div>
    \`
  })
}`,...(K=(D=g.parameters)==null?void 0:D.docs)==null?void 0:K.source}}};var B,L,F;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'With Prefill Value',
  render: () => ({
    components: {
      RadioSegment
    },
    setup() {
      const countries: Country[] = [{
        name: 'America',
        code: 'usa'
      }, {
        name: 'Canada',
        code: 'can'
      }, {
        name: 'Mexico',
        code: 'mex'
      }];
      const selected = ref<Country>();
      return {
        countries,
        selected
      };
    },
    template: \`
      <div style="min-width: 400px;">
        <RadioSegment
          id="country-prefill"
          v-model="selected"
          :options="countries"
          label-key="name"
          value-key="code"
          prefill-value="can"
          label="Select Country"
          help-text="Canada is pre-selected using prefill-value='can'"
        />
        <p class="mt-3 text-muted fs-small">
          Selected: {{ selected ? JSON.stringify(selected) : 'undefined' }}
        </p>
      </div>
    \`
  })
}`,...(F=(L=h.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var _,I,U;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Case-Insensitive Prefill',
  render: () => ({
    components: {
      RadioSegment
    },
    setup() {
      const countries: Country[] = [{
        name: 'America',
        code: 'usa'
      }, {
        name: 'Canada',
        code: 'can'
      }, {
        name: 'Mexico',
        code: 'mex'
      }];
      const selected = ref<Country>();
      return {
        countries,
        selected
      };
    },
    template: \`
      <div style="min-width: 400px;">
        <RadioSegment
          id="country-case"
          v-model="selected"
          :options="countries"
          label-key="name"
          value-key="code"
          prefill-value="USA"
          label="Select Country"
          help-text="Matching is case-insensitive: 'USA' matches 'usa'"
        />
        <p class="mt-3 text-muted fs-small">
          Selected: {{ selected ? JSON.stringify(selected) : 'undefined' }}
        </p>
      </div>
    \`
  })
}`,...(U=(I=b.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};var $,j,J;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'With Numeric Values',
  render: () => ({
    components: {
      RadioSegment
    },
    setup() {
      const priorities: Priority[] = [{
        text: 'Low',
        level: 1
      }, {
        text: 'Medium',
        level: 2
      }, {
        text: 'High',
        level: 3
      }];
      const selected = ref<Priority>();
      return {
        priorities,
        selected
      };
    },
    template: \`
      <div style="min-width: 400px;">
        <RadioSegment
          id="priority"
          v-model="selected"
          :options="priorities"
          label-key="text"
          value-key="level"
          :prefill-value="2"
          label="Priority Level"
          help-text="Using numeric values for matching"
        />
        <p class="mt-3 text-muted fs-small">
          Selected: {{ selected ? JSON.stringify(selected) : 'undefined' }}
        </p>
      </div>
    \`
  })
}`,...(J=(j=S.parameters)==null?void 0:j.docs)==null?void 0:J.source}}};var Y,H,G;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Objects with Extra Fields',
  render: () => ({
    components: {
      RadioSegment
    },
    setup() {
      const sizes: Size[] = [{
        label: 'Small',
        value: 'sm',
        price: 10
      }, {
        label: 'Medium',
        value: 'md',
        price: 15
      }, {
        label: 'Large',
        value: 'lg',
        price: 20
      }, {
        label: 'X-Large',
        value: 'xl',
        price: 25
      }];
      const selected = ref<Size>();
      return {
        sizes,
        selected
      };
    },
    template: \`
      <div style="min-width: 500px;">
        <RadioSegment
          id="size"
          v-model="selected"
          :options="sizes"
          label-key="label"
          value-key="value"
          prefill-value="md"
          label="Select Size"
        />
        <div v-if="selected" class="mt-3 p-3 bg-light rounded">
          <strong>Selected Size:</strong> {{ selected.label }}<br>
          <strong>Price:</strong> \\\${{ selected.price }}
        </div>
        <p v-else class="mt-3 text-muted fs-small">Select a size to see price</p>
      </div>
    \`
  })
}`,...(G=(H=x.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var X,Q,Z;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'With Error State',
  render: () => ({
    components: {
      RadioSegment
    },
    setup() {
      const options = [{
        name: 'Option A',
        id: 'a'
      }, {
        name: 'Option B',
        id: 'b'
      }, {
        name: 'Option C',
        id: 'c'
      }];
      const selected = ref();
      return {
        options,
        selected
      };
    },
    template: \`
      <div style="min-width: 400px;">
        <RadioSegment
          id="error-demo"
          v-model="selected"
          :options="options"
          label-key="name"
          value-key="id"
          label="Required Selection"
          :invalid="true"
          error-text="Please select an option."
        />
      </div>
    \`
  })
}`,...(Z=(Q=k.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,te,ae;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Disabled State',
  render: () => ({
    components: {
      RadioSegment
    },
    setup() {
      const options = [{
        name: 'Yes',
        value: 'yes'
      }, {
        name: 'No',
        value: 'no'
      }, {
        name: 'Maybe',
        value: 'maybe'
      }];
      const selected = ref();
      return {
        options,
        selected
      };
    },
    template: \`
      <div style="min-width: 400px;">
        <RadioSegment
          id="disabled-demo"
          v-model="selected"
          :options="options"
          label-key="name"
          value-key="value"
          prefill-value="yes"
          label="Answer"
          :disabled="true"
        />
        <p class="mt-3 text-muted fs-small">Component is disabled</p>
      </div>
    \`
  })
}`,...(ae=(te=w.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var se,ne,oe;R.parameters={...R.parameters,docs:{...(se=R.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'With Label Tooltip',
  render: () => ({
    components: {
      RadioSegment
    },
    setup() {
      const options = [{
        name: 'Standard',
        code: 'std'
      }, {
        name: 'Express',
        code: 'exp'
      }, {
        name: 'Overnight',
        code: 'ovn'
      }];
      const selected = ref();
      return {
        options,
        selected
      };
    },
    template: \`
      <div style="min-width: 400px;">
        <RadioSegment
          id="tooltip-demo"
          v-model="selected"
          :options="options"
          label-key="name"
          value-key="code"
          label="Shipping Method"
          tooltip="Select how quickly you need your order delivered"
          help-text="Express and Overnight have additional fees."
        />
      </div>
    \`
  })
}`,...(oe=(ne=R.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var le,ie,re;C.parameters={...C.parameters,docs:{...(le=C.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Two Options (Yes/No Alternative)',
  render: () => ({
    components: {
      RadioSegment
    },
    setup() {
      const options = [{
        label: 'Agree',
        value: 'Y'
      }, {
        label: 'Disagree',
        value: 'N'
      }];
      const selected = ref();
      return {
        options,
        selected
      };
    },
    template: \`
      <div style="min-width: 300px;">
        <RadioSegment
          id="agree-demo"
          v-model="selected"
          :options="options"
          label-key="label"
          value-key="value"
          label="Do you agree to the terms?"
          :required="true"
        />
        <p class="mt-3 text-muted fs-small">
          Selected: {{ selected ? selected.value : 'undefined' }}
        </p>
      </div>
    \`
  })
}`,...(re=(ie=C.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var de,pe,me;O.parameters={...O.parameters,docs:{...(de=O.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: 'Many Options',
  render: () => ({
    components: {
      RadioSegment
    },
    setup() {
      const days = [{
        name: 'Mon',
        day: 'monday'
      }, {
        name: 'Tue',
        day: 'tuesday'
      }, {
        name: 'Wed',
        day: 'wednesday'
      }, {
        name: 'Thu',
        day: 'thursday'
      }, {
        name: 'Fri',
        day: 'friday'
      }];
      const selected = ref();
      return {
        days,
        selected
      };
    },
    template: \`
      <div>
        <RadioSegment
          id="days-demo"
          v-model="selected"
          :options="days"
          label-key="name"
          value-key="day"
          label="Preferred Day"
          prefill-value="wednesday"
        />
        <p class="mt-3 text-muted fs-small">
          Selected: {{ selected ? selected.day : 'undefined' }}
        </p>
      </div>
    \`
  })
}`,...(me=(pe=O.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ce,ue,ye;q.parameters={...q.parameters,docs:{...(ce=q.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: 'Complete Form Example',
  render: () => ({
    components: {
      RadioSegment
    },
    setup() {
      const shippingOptions = [{
        name: 'Standard',
        code: 'std',
        days: '5-7'
      }, {
        name: 'Express',
        code: 'exp',
        days: '2-3'
      }, {
        name: 'Next Day',
        code: 'next',
        days: '1'
      }];
      const paymentOptions = [{
        label: 'Credit Card',
        value: 'cc'
      }, {
        label: 'PayPal',
        value: 'pp'
      }, {
        label: 'Bank Transfer',
        value: 'bt'
      }];
      const shipping = ref<(typeof shippingOptions)[0]>();
      const payment = ref<(typeof paymentOptions)[0]>();
      const errors = ref({
        shipping: false,
        payment: false
      });
      const validate = () => {
        errors.value.shipping = !shipping.value;
        errors.value.payment = !payment.value;
      };
      return {
        shippingOptions,
        paymentOptions,
        shipping,
        payment,
        errors,
        validate
      };
    },
    template: \`
      <form class="p-4 border rounded" style="min-width: 500px;">
        <h4 class="mb-4">Checkout Options</h4>

        <RadioSegment
          id="form-shipping"
          v-model="shipping"
          :options="shippingOptions"
          label-key="name"
          value-key="code"
          label="Shipping Method"
          :required="true"
          :invalid="errors.shipping"
          error-text="Please select a shipping method."
          @change="errors.shipping = false"
          class="mb-4"
        />

        <div v-if="shipping" class="mb-4 p-2 bg-light rounded">
          <small>Estimated delivery: {{ shipping.days }} business days</small>
        </div>

        <RadioSegment
          id="form-payment"
          v-model="payment"
          :options="paymentOptions"
          label-key="label"
          value-key="value"
          label="Payment Method"
          :required="true"
          :invalid="errors.payment"
          error-text="Please select a payment method."
          @change="errors.payment = false"
          class="mb-4"
        />

        <button type="button" class="btn btn-primary" @click="validate">
          Continue to Payment
        </button>

        <div class="mt-3 p-2 bg-light rounded">
          <small class="text-muted">
            Shipping: {{ shipping?.name ?? 'None' }} |
            Payment: {{ payment?.label ?? 'None' }}
          </small>
        </div>
      </form>
    \`
  })
}`,...(ye=(ue=q.parameters)==null?void 0:ue.docs)==null?void 0:ye.source}}};const Ze=["Default","WithPrefillValue","CaseInsensitivePrefill","WithNumericValues","WithExtraFields","WithError","Disabled","WithTooltip","TwoOptions","ManyOptions","FormExample"];export{b as CaseInsensitivePrefill,g as Default,w as Disabled,q as FormExample,O as ManyOptions,C as TwoOptions,k as WithError,x as WithExtraFields,S as WithNumericValues,h as WithPrefillValue,R as WithTooltip,Ze as __namedExportsOrder,Qe as default};
