import{d as Ye,q as we,a as m,b as n,s as p,u as t,v as W,G as Te,o as v,f,x as A,y as d,z,e as u,E as b,r as o}from"./vue.esm-bundler-DQ1Hw63L.js";import{R as qe,a as I}from"./RadioGroupItem-CZMthMKr.js";import{R as C}from"./RadioGroupIndicator-B6uzeZY9.js";import{a as Re,b as ke,_ as Ve}from"./InputHelp-D5FNCJnW.js";import{a as D}from"./Primitive-Rd18uyw-.js";import{L as Se}from"./index-DGB1qItb.js";import{u as Ee}from"./useRadioKeyboard-QWBn16uf.js";import{_ as Ae}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./TooltipTrigger-Dg6AGGiz.js";import"./RovingFocusItem-B9dzhp3Z.js";import"./VisuallyHiddenInput-fuKssHsY.js";import"./index-DY-ezr3f.js";const ze={class:"radio-label"},De={class:"radio-indicator-wrapper"},We={class:"radio-label"},Ie={class:"radio-indicator-wrapper"},ge=Ye({__name:"RadioYesNo",props:W({id:{},label:{},tooltip:{},optional:{type:Boolean,default:!1},yesLabel:{default:"Yes"},noLabel:{default:"No"},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},helpText:{},errorText:{},readonly:{type:Boolean,default:!1},isInToolbar:{type:Boolean,default:!1},class:{}},{modelValue:{},modelModifiers:{}}),emits:W(["update:modelValue","blur","focus","change"],["update:modelValue"]),setup(a,{emit:s}){const e=a,S=s,c=we(a,"modelValue"),xe=l=>{const i=l;c.value=i,S("change",i)},{handleKeyDown:Ne}=Ee({isInToolbar:Te(e,"isInToolbar"),orientation:"horizontal"});return(l,i)=>(v(),m(t(Ve),{id:e.id,invalid:e.invalid,disabled:e.disabled,required:e.required,class:p(e.class)},{default:n(()=>[e.label||l.$slots.label?(v(),m(t(Se),{key:0,for:e.id,tooltip:e.tooltip,optional:e.optional},{default:n(()=>[f(l.$slots,"label",{},()=>[A(d(e.label),1)],!0)]),_:3},8,["for","tooltip","optional"])):z("",!0),u(t(qe),{id:e.id,"model-value":c.value,disabled:e.disabled||e.readonly,required:e.required,"data-slot":"radio-yes-no",class:p(t(D)("radio-yes-no-group",{"is-invalid":e.invalid})),"aria-required":e.required,"aria-invalid":e.invalid?"true":void 0,orientation:"horizontal",onKeydownCapture:t(Ne),"onUpdate:modelValue":xe,onFocusin:i[0]||(i[0]=E=>S("focus",E)),onFocusout:i[1]||(i[1]=E=>S("blur",E))},{default:n(()=>[u(t(I),{value:"Y",class:p(t(D)("radio-card",{"radio-card-selected":c.value==="Y","radio-card-invalid":e.invalid}))},{default:n(()=>[b("span",ze,d(a.yesLabel),1),b("span",De,[u(t(C),{class:"radio-indicator"})])]),_:1},8,["class"]),u(t(I),{value:"N",class:p(t(D)("radio-card",{"radio-card-selected":c.value==="N","radio-card-invalid":e.invalid}))},{default:n(()=>[b("span",We,d(a.noLabel),1),b("span",Ie,[u(t(C),{class:"radio-indicator"})])]),_:1},8,["class"])]),_:1},8,["id","model-value","disabled","required","class","aria-required","aria-invalid","onKeydownCapture"]),e.helpText||l.$slots.help?(v(),m(t(Re),{key:1},{default:n(()=>[f(l.$slots,"help",{},()=>[A(d(e.helpText),1)],!0)]),_:3})):z("",!0),e.errorText||l.$slots.error?(v(),m(t(ke),{key:2},{default:n(()=>[f(l.$slots,"error",{},()=>[A(d(e.errorText),1)],!0)]),_:3})):z("",!0),f(l.$slots,"footer",{},void 0,!0)]),_:3},8,["id","invalid","disabled","required","class"]))}}),r=Ae(ge,[["__scopeId","data-v-da2e3a89"]]);ge.__docgenInfo={exportName:"default",displayName:"RadioYesNo",description:"",tags:{},props:[{name:"id",description:"Unique identifier for the radio group",required:!0,type:{name:"string"}},{name:"label",description:"Label text",required:!1,type:{name:"string"}},{name:"tooltip",description:"Tooltip text for label",required:!1,type:{name:"string"}},{name:"optional",description:"Show optional badge on label",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"yesLabel",description:'Label for "Yes" option',required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Yes'"}},{name:"noLabel",description:'Label for "No" option',required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'No'"}},{name:"invalid",description:"Whether the radio group is in an invalid state",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",description:"Whether the radio group is disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",description:"Whether the radio group is required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"helpText",description:"Help text shown when not invalid",required:!1,type:{name:"string"}},{name:"errorText",description:"Error text shown when invalid",required:!1,type:{name:"string"}},{name:"readonly",description:"Make the radio group read-only",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isInToolbar",description:`Whether this radiogroup is inside a toolbar.
- false (default): Arrow keys navigate AND check
- true: Arrow keys only navigate; Space/Enter check`,required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"class",description:"Additional CSS classes for the root element",required:!1,type:{name:"TSIndexedAccessType"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:'"Y"'},{name:'"N"'},{name:"undefined"}]}},{name:"blur",type:{names:["FocusEvent"]}},{name:"focus",type:{names:["FocusEvent"]}},{name:"change",type:{names:["union"],elements:[{name:'"Y"'},{name:'"N"'},{name:"undefined"}]}}],slots:[{name:"label"},{name:"help"},{name:"error"},{name:"footer"}],sourceFiles:["/Users/shashankshandilya/Documents/adms-ui-registry/apps/storybook/src/components/ui/RadioYesNo/RadioYesNo.vue"]};const Ge={title:"Components/RadioYesNo",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A card-style radio group for yes/no questions that emits 'Y' or 'N' as the v-model value. Includes label, help text, and error text.

## Installation

\`\`\`bash
adms-rds-ui add radio-yes-no
\`\`\`

This will also install the required dependencies: input-root, input-error, input-help, and label.

## Usage

\`\`\`vue
<script setup lang="ts">
import { RadioYesNo } from '@/components/ui/RadioYesNo'
import { ref } from 'vue'

const isCitizen = ref<'Y' | 'N'>()
<\/script>

<template>
  <RadioYesNo
    id="citizen"
    v-model="isCitizen"
    label="Are you a U.S. citizen?"
    help-text="Select your citizenship status."
    error-text="This field is required."
    :invalid="!isCitizen"
  />
</template>
\`\`\`

## Props

- **id** - Unique identifier (required)
- **v-model** - Two-way binding for 'Y' or 'N' value
- **label** - Label text
- **tooltip** - Tooltip text for label
- **optional** - Show "Optional" badge on label
- **yesLabel** - Custom label for "Yes" option (default: "Yes")
- **noLabel** - Custom label for "No" option (default: "No")
- **invalid** - Error state
- **disabled** - Disabled state
- **required** - Required field
- **helpText** - Help text (shown when not invalid)
- **errorText** - Error text (shown when invalid)
- **readonly** - Make the radio group read-only
- **isInToolbar** - Toolbar keyboard mode (arrow keys navigate only; Space/Enter check)

## Keyboard Navigation

**Standard Mode (default):**
- Tab/Shift+Tab: Move focus in/out of radiogroup
- Arrow Keys (any direction): Navigate AND automatically check the focused radio
- Space: Check the focused radio (if not already checked)

**Toolbar Mode (\`isInToolbar: true\`):**
- Tab/Shift+Tab: Move focus in/out of toolbar
- Arrow Keys (any direction): Navigate WITHOUT checking
- Space/Enter: Explicitly check the focused radio

## Events

- **@change** - Emitted when selection changes (value: 'Y' | 'N')
- **@focus** - Emitted when radio group receives focus
- **@blur** - Emitted when radio group loses focus
`}}}},h={name:"Basic Radio Yes/No",render:()=>({components:{RadioYesNo:r},setup(){return{value:o()}},template:`
      <div style="min-width: 400px;">
        <RadioYesNo
          id="basic-question"
          v-model="value"
          label="Are you a U.S. citizen?"
        />
        <p class="mt-3 text-muted fs-small">Value: {{ value ?? 'undefined' }}</p>
      </div>
    `})},y={name:"With Optional Badge",render:()=>({components:{RadioYesNo:r},setup(){return{value:o()}},template:`
      <div style="min-width: 400px;">
        <RadioYesNo
          id="optional-question"
          v-model="value"
          label="Have you traveled internationally in the last year?"
          :optional="true"
        />
        <p class="mt-3 text-muted fs-small">Value: {{ value ?? 'undefined' }}</p>
      </div>
    `})},g={name:"With Help Text",render:()=>({components:{RadioYesNo:r},setup(){return{value:o()}},template:`
      <div style="min-width: 400px;">
        <RadioYesNo
          id="help-question"
          v-model="value"
          label="Do you have a valid passport?"
          help-text="Your passport must be valid for at least 6 months from your travel date."
        />
      </div>
    `})},x={name:"With Error State",render:()=>({components:{RadioYesNo:r},setup(){return{value:o()}},template:`
      <div style="min-width: 400px;">
        <RadioYesNo
          id="error-question"
          v-model="value"
          label="Are you over 18 years old?"
          error-text="This field is required."
          :invalid="true"
        />
      </div>
    `})},N={name:"With Preselected Value",render:()=>({components:{RadioYesNo:r},setup(){return{value:o("Y")}},template:`
      <div style="min-width: 400px;">
        <RadioYesNo
          id="preselected-question"
          v-model="value"
          label="Have you read the terms and conditions?"
        />
        <p class="mt-3 text-muted fs-small">Value: {{ value }}</p>
      </div>
    `})},Y={name:"Custom Labels",render:()=>({components:{RadioYesNo:r},setup(){return{value:o()}},template:`
      <div style="min-width: 400px;">
        <RadioYesNo
          id="custom-labels"
          v-model="value"
          label="Do you agree to the terms?"
          yes-label="I Agree"
          no-label="I Decline"
        />
        <p class="mt-3 text-muted fs-small">Value: {{ value ?? 'undefined' }}</p>
      </div>
    `})},w={name:"With Label Tooltip",render:()=>({components:{RadioYesNo:r},setup(){return{value:o()}},template:`
      <div style="min-width: 400px;">
        <RadioYesNo
          id="tooltip-question"
          v-model="value"
          label="Are you a first-generation college student?"
          tooltip="A first-generation college student is someone whose parents did not complete a four-year college degree."
          help-text="This helps us identify students who may need additional support."
        />
      </div>
    `})},T={name:"Disabled State",render:()=>({components:{RadioYesNo:r},setup(){return{value:o("Y")}},template:`
      <div style="min-width: 400px;">
        <RadioYesNo
          id="disabled-question"
          v-model="value"
          label="Is this account verified?"
          :disabled="true"
        />
        <p class="mt-3 text-muted fs-small">Value: {{ value }} (disabled)</p>
      </div>
    `})},q={name:"Required Field with Validation",render:()=>({components:{RadioYesNo:r},setup(){const a=o(),s=o(!1);return{value:a,hasError:s,validate:()=>{s.value=!a.value}}},template:`
      <div style="min-width: 400px;">
        <RadioYesNo
          id="required-question"
          v-model="value"
          label="Are you currently employed?"
          :required="true"
          :invalid="hasError"
          error-text="Please select an option."
          @change="hasError = false"
        />
        <button class="btn btn-sm btn-outline-secondary mt-3" @click="validate">
          Validate
        </button>
        <p class="mt-2 text-muted fs-small">Value: {{ value ?? 'undefined' }}</p>
      </div>
    `})},R={name:"Toolbar Keyboard Mode",parameters:{docs:{description:{story:"When `isInToolbar` is `true`, the keyboard navigation changes:\n- **Arrow keys** only move focus (do NOT auto-check)\n- **Space or Enter** explicitly checks the focused option\n\nTry keyboard navigation: use arrows to move between options, then press Space/Enter to select."}}},render:()=>({components:{RadioYesNo:r},setup(){return{value:o()}},template:`
      <div style="min-width: 400px;">
        <div role="toolbar" aria-label="Answer toolbar" class="p-3 border rounded" style="background: #f8f9fa;">
          <p class="mb-2"><strong>Keyboard Test:</strong> Use arrow keys to navigate, Space/Enter to select</p>
          <RadioYesNo
            id="toolbar-question"
            v-model="value"
            label="Do you agree?"
            :is-in-toolbar="true"
          />
        </div>
        <div class="mt-3 p-2 bg-light rounded">
          <small class="text-muted">Value: {{ value ?? 'undefined' }}</small>
        </div>
        <div class="mt-2 p-2 bg-info-subtle rounded">
          <small><strong>Try it:</strong> Tab to focus, use arrow keys (↑↓←→) to navigate, press Space or Enter to check</small>
        </div>
      </div>
    `})},k={name:"Comparison: Toolbar vs Standard",parameters:{docs:{description:{story:`Side-by-side comparison of keyboard behaviors:

**Standard Mode (top):**
- Arrow keys navigate AND check automatically

**Toolbar Mode (bottom):**
- Arrow keys navigate only
- Space/Enter required to check`}}},render:()=>({components:{RadioYesNo:r},setup(){const a=o(),s=o();return{standardValue:a,toolbarValue:s}},template:`
      <div style="min-width: 500px;">
        <div class="mb-4 p-3 border rounded">
          <h5 class="mb-3">Standard Mode (default)</h5>
          <RadioYesNo
            id="standard-comparison"
            v-model="standardValue"
            label="Arrow keys navigate AND check"
            help-text="Try: Use any arrow key to move and auto-select"
          />
          <div class="mt-2 p-2 bg-light rounded">
            <small class="text-muted">Value: {{ standardValue ?? 'undefined' }}</small>
          </div>
        </div>

        <div class="p-3 border rounded" style="background: #f8f9fa;">
          <h5 class="mb-3">Toolbar Mode</h5>
          <div role="toolbar" aria-label="Comparison toolbar">
            <RadioYesNo
              id="toolbar-comparison"
              v-model="toolbarValue"
              label="Arrow keys navigate only"
              help-text="Try: Use arrow keys to navigate, then press Space/Enter to select"
              :is-in-toolbar="true"
            />
          </div>
          <div class="mt-2 p-2 bg-light rounded">
            <small class="text-muted">Value: {{ toolbarValue ?? 'undefined' }}</small>
          </div>
        </div>
      </div>
    `})},V={name:"Complete Form Example",render:()=>({components:{RadioYesNo:r},setup(){const a=o({citizen:void 0,veteran:void 0,disability:void 0}),s=o({citizen:!1,veteran:!1});return{form:a,errors:s,validate:()=>{s.value.citizen=!a.value.citizen,s.value.veteran=!a.value.veteran}}},template:`
      <form class="p-4 border rounded" style="min-width: 500px;">
        <h4 class="mb-4">Demographic Information</h4>

        <RadioYesNo
          id="form-citizen"
          v-model="form.citizen"
          label="Are you a U.S. citizen?"
          :required="true"
          :invalid="errors.citizen"
          error-text="This field is required."
          @change="errors.citizen = false"
          class="mb-4"
        />

        <RadioYesNo
          id="form-veteran"
          v-model="form.veteran"
          label="Are you a veteran?"
          help-text="Include active duty and reserve service."
          :required="true"
          :invalid="errors.veteran"
          error-text="This field is required."
          @change="errors.veteran = false"
          class="mb-4"
        />

        <RadioYesNo
          id="form-disability"
          v-model="form.disability"
          label="Do you have a disability?"
          :optional="true"
          help-text="This information is used for statistical purposes only."
          class="mb-4"
        />

        <button type="button" class="btn btn-primary" @click="validate">Submit</button>

        <div class="mt-3 p-2 bg-light rounded">
          <small class="text-muted">
            Form values: citizen={{ form.citizen ?? 'undefined' }},
            veteran={{ form.veteran ?? 'undefined' }},
            disability={{ form.disability ?? 'undefined' }}
          </small>
        </div>
      </form>
    `})};var _,L,M;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Basic Radio Yes/No',
  render: () => ({
    components: {
      RadioYesNo
    },
    setup() {
      const value = ref<'Y' | 'N'>();
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 400px;">
        <RadioYesNo
          id="basic-question"
          v-model="value"
          label="Are you a U.S. citizen?"
        />
        <p class="mt-3 text-muted fs-small">Value: {{ value ?? 'undefined' }}</p>
      </div>
    \`
  })
}`,...(M=(L=h.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var U,B,F;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'With Optional Badge',
  render: () => ({
    components: {
      RadioYesNo
    },
    setup() {
      const value = ref<'Y' | 'N'>();
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 400px;">
        <RadioYesNo
          id="optional-question"
          v-model="value"
          label="Have you traveled internationally in the last year?"
          :optional="true"
        />
        <p class="mt-3 text-muted fs-small">Value: {{ value ?? 'undefined' }}</p>
      </div>
    \`
  })
}`,...(F=(B=y.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var H,K,$;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'With Help Text',
  render: () => ({
    components: {
      RadioYesNo
    },
    setup() {
      const value = ref<'Y' | 'N'>();
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 400px;">
        <RadioYesNo
          id="help-question"
          v-model="value"
          label="Do you have a valid passport?"
          help-text="Your passport must be valid for at least 6 months from your travel date."
        />
      </div>
    \`
  })
}`,...($=(K=g.parameters)==null?void 0:K.docs)==null?void 0:$.source}}};var O,P,G;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'With Error State',
  render: () => ({
    components: {
      RadioYesNo
    },
    setup() {
      const value = ref<'Y' | 'N'>();
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 400px;">
        <RadioYesNo
          id="error-question"
          v-model="value"
          label="Are you over 18 years old?"
          error-text="This field is required."
          :invalid="true"
        />
      </div>
    \`
  })
}`,...(G=(P=x.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};var j,J,Q;N.parameters={...N.parameters,docs:{...(j=N.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'With Preselected Value',
  render: () => ({
    components: {
      RadioYesNo
    },
    setup() {
      const value = ref<'Y' | 'N'>('Y');
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 400px;">
        <RadioYesNo
          id="preselected-question"
          v-model="value"
          label="Have you read the terms and conditions?"
        />
        <p class="mt-3 text-muted fs-small">Value: {{ value }}</p>
      </div>
    \`
  })
}`,...(Q=(J=N.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,ee;Y.parameters={...Y.parameters,docs:{...(X=Y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Custom Labels',
  render: () => ({
    components: {
      RadioYesNo
    },
    setup() {
      const value = ref<'Y' | 'N'>();
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 400px;">
        <RadioYesNo
          id="custom-labels"
          v-model="value"
          label="Do you agree to the terms?"
          yes-label="I Agree"
          no-label="I Decline"
        />
        <p class="mt-3 text-muted fs-small">Value: {{ value ?? 'undefined' }}</p>
      </div>
    \`
  })
}`,...(ee=(Z=Y.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,oe,te;w.parameters={...w.parameters,docs:{...(ae=w.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'With Label Tooltip',
  render: () => ({
    components: {
      RadioYesNo
    },
    setup() {
      const value = ref<'Y' | 'N'>();
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 400px;">
        <RadioYesNo
          id="tooltip-question"
          v-model="value"
          label="Are you a first-generation college student?"
          tooltip="A first-generation college student is someone whose parents did not complete a four-year college degree."
          help-text="This helps us identify students who may need additional support."
        />
      </div>
    \`
  })
}`,...(te=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var re,se,le;T.parameters={...T.parameters,docs:{...(re=T.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Disabled State',
  render: () => ({
    components: {
      RadioYesNo
    },
    setup() {
      const value = ref<'Y' | 'N'>('Y');
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 400px;">
        <RadioYesNo
          id="disabled-question"
          v-model="value"
          label="Is this account verified?"
          :disabled="true"
        />
        <p class="mt-3 text-muted fs-small">Value: {{ value }} (disabled)</p>
      </div>
    \`
  })
}`,...(le=(se=T.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ie,ne,de;q.parameters={...q.parameters,docs:{...(ie=q.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'Required Field with Validation',
  render: () => ({
    components: {
      RadioYesNo
    },
    setup() {
      const value = ref<'Y' | 'N'>();
      const hasError = ref(false);
      const validate = () => {
        hasError.value = !value.value;
      };
      return {
        value,
        hasError,
        validate
      };
    },
    template: \`
      <div style="min-width: 400px;">
        <RadioYesNo
          id="required-question"
          v-model="value"
          label="Are you currently employed?"
          :required="true"
          :invalid="hasError"
          error-text="Please select an option."
          @change="hasError = false"
        />
        <button class="btn btn-sm btn-outline-secondary mt-3" @click="validate">
          Validate
        </button>
        <p class="mt-2 text-muted fs-small">Value: {{ value ?? 'undefined' }}</p>
      </div>
    \`
  })
}`,...(de=(ne=q.parameters)==null?void 0:ne.docs)==null?void 0:de.source}}};var ue,ce,me;R.parameters={...R.parameters,docs:{...(ue=R.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'Toolbar Keyboard Mode',
  parameters: {
    docs: {
      description: {
        story: \`When \\\`isInToolbar\\\` is \\\`true\\\`, the keyboard navigation changes:
- **Arrow keys** only move focus (do NOT auto-check)
- **Space or Enter** explicitly checks the focused option

Try keyboard navigation: use arrows to move between options, then press Space/Enter to select.\`
      }
    }
  },
  render: () => ({
    components: {
      RadioYesNo
    },
    setup() {
      const value = ref<'Y' | 'N'>();
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 400px;">
        <div role="toolbar" aria-label="Answer toolbar" class="p-3 border rounded" style="background: #f8f9fa;">
          <p class="mb-2"><strong>Keyboard Test:</strong> Use arrow keys to navigate, Space/Enter to select</p>
          <RadioYesNo
            id="toolbar-question"
            v-model="value"
            label="Do you agree?"
            :is-in-toolbar="true"
          />
        </div>
        <div class="mt-3 p-2 bg-light rounded">
          <small class="text-muted">Value: {{ value ?? 'undefined' }}</small>
        </div>
        <div class="mt-2 p-2 bg-info-subtle rounded">
          <small><strong>Try it:</strong> Tab to focus, use arrow keys (↑↓←→) to navigate, press Space or Enter to check</small>
        </div>
      </div>
    \`
  })
}`,...(me=(ce=R.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var pe,ve,fe;k.parameters={...k.parameters,docs:{...(pe=k.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'Comparison: Toolbar vs Standard',
  parameters: {
    docs: {
      description: {
        story: \`Side-by-side comparison of keyboard behaviors:

**Standard Mode (top):**
- Arrow keys navigate AND check automatically

**Toolbar Mode (bottom):**
- Arrow keys navigate only
- Space/Enter required to check\`
      }
    }
  },
  render: () => ({
    components: {
      RadioYesNo
    },
    setup() {
      const standardValue = ref<'Y' | 'N'>();
      const toolbarValue = ref<'Y' | 'N'>();
      return {
        standardValue,
        toolbarValue
      };
    },
    template: \`
      <div style="min-width: 500px;">
        <div class="mb-4 p-3 border rounded">
          <h5 class="mb-3">Standard Mode (default)</h5>
          <RadioYesNo
            id="standard-comparison"
            v-model="standardValue"
            label="Arrow keys navigate AND check"
            help-text="Try: Use any arrow key to move and auto-select"
          />
          <div class="mt-2 p-2 bg-light rounded">
            <small class="text-muted">Value: {{ standardValue ?? 'undefined' }}</small>
          </div>
        </div>

        <div class="p-3 border rounded" style="background: #f8f9fa;">
          <h5 class="mb-3">Toolbar Mode</h5>
          <div role="toolbar" aria-label="Comparison toolbar">
            <RadioYesNo
              id="toolbar-comparison"
              v-model="toolbarValue"
              label="Arrow keys navigate only"
              help-text="Try: Use arrow keys to navigate, then press Space/Enter to select"
              :is-in-toolbar="true"
            />
          </div>
          <div class="mt-2 p-2 bg-light rounded">
            <small class="text-muted">Value: {{ toolbarValue ?? 'undefined' }}</small>
          </div>
        </div>
      </div>
    \`
  })
}`,...(fe=(ve=k.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var be,he,ye;V.parameters={...V.parameters,docs:{...(be=V.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: 'Complete Form Example',
  render: () => ({
    components: {
      RadioYesNo
    },
    setup() {
      const form = ref({
        citizen: undefined as 'Y' | 'N' | undefined,
        veteran: undefined as 'Y' | 'N' | undefined,
        disability: undefined as 'Y' | 'N' | undefined
      });
      const errors = ref({
        citizen: false,
        veteran: false
      });
      const validate = () => {
        errors.value.citizen = !form.value.citizen;
        errors.value.veteran = !form.value.veteran;
        // disability is optional
      };
      return {
        form,
        errors,
        validate
      };
    },
    template: \`
      <form class="p-4 border rounded" style="min-width: 500px;">
        <h4 class="mb-4">Demographic Information</h4>

        <RadioYesNo
          id="form-citizen"
          v-model="form.citizen"
          label="Are you a U.S. citizen?"
          :required="true"
          :invalid="errors.citizen"
          error-text="This field is required."
          @change="errors.citizen = false"
          class="mb-4"
        />

        <RadioYesNo
          id="form-veteran"
          v-model="form.veteran"
          label="Are you a veteran?"
          help-text="Include active duty and reserve service."
          :required="true"
          :invalid="errors.veteran"
          error-text="This field is required."
          @change="errors.veteran = false"
          class="mb-4"
        />

        <RadioYesNo
          id="form-disability"
          v-model="form.disability"
          label="Do you have a disability?"
          :optional="true"
          help-text="This information is used for statistical purposes only."
          class="mb-4"
        />

        <button type="button" class="btn btn-primary" @click="validate">Submit</button>

        <div class="mt-3 p-2 bg-light rounded">
          <small class="text-muted">
            Form values: citizen={{ form.citizen ?? 'undefined' }},
            veteran={{ form.veteran ?? 'undefined' }},
            disability={{ form.disability ?? 'undefined' }}
          </small>
        </div>
      </form>
    \`
  })
}`,...(ye=(he=V.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};const je=["Default","WithOptionalLabel","WithHelpText","WithError","WithPreselectedValue","CustomLabels","WithTooltip","Disabled","Required","ToolbarMode","ToolbarVsStandard","FormExample"];export{Y as CustomLabels,h as Default,T as Disabled,V as FormExample,q as Required,R as ToolbarMode,k as ToolbarVsStandard,x as WithError,g as WithHelpText,y as WithOptionalLabel,N as WithPreselectedValue,w as WithTooltip,je as __namedExportsOrder,Ge as default};
