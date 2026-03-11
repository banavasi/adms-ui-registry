import{d as xe,F as Ee,q as ke,w as Ce,o as N,B as ge,E as Ne,u as m,s as H,v as _,r as u,c as A,a as I,b as E,f as C,x as U,y as R,z}from"./vue.esm-bundler-DIwgUAuo.js";import{I as Be,a as Fe,b as De,_ as We}from"./InputHelp-CgoVujsi.js";import{a as Pe}from"./Primitive-DEAM-xiZ.js";import{_ as Te}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{L as Le}from"./index-CGkXqMRd.js";import"./index-DSxA2iZ_.js";import"./TooltipContent-814Cu58g.js";const $e={class:"input-wrapper"},Ke=["id","value","placeholder","required","disabled","readonly","autocomplete","aria-required","aria-invalid","aria-describedby"],we=xe({__name:"InputMasked",props:_({mask:{},tokens:{default:()=>({"#":{pattern:/\d/},"%":{pattern:/[a-z]/i},"@":{pattern:/[a-z0-9]/i},"*":{pattern:/./}})},placeholder:{},readonly:{type:Boolean},autocomplete:{},class:{}},{modelValue:{},modelModifiers:{}}),emits:_(["blur","focus","input","change","keydown","keyup"],["update:modelValue"]),setup(s,{emit:y}){const e=s,i=y,r=Ee(Be);if(!r)throw new Error("InputMasked must be used within InputRoot");const T=ke(s,"modelValue"),w=u(),b=u(""),x=A(()=>{if(!e.mask)return b.value;let a="";for(let t=0;t<b.value.length;t++){const l=e.mask[t],n=b.value[t];l&&e.tokens[l]&&(a+=n)}return a}),V=a=>{if(!e.mask)return a;let t="",l=0;for(let n=0;n<e.mask.length&&l<a.length;n++){const d=e.mask[n],v=e.tokens[d];if(v){const f=a[l];v.pattern.test(f)?(t+=v.transform?v.transform(f):f,l++):(l++,n--)}else t+=d,a[l]===d&&l++}return t},o=()=>{if(!e.mask)return 1/0;let a=0;for(let t=0;t<e.mask.length;t++){const l=e.mask[t];e.tokens[l]&&a++}return a},p=(a,t)=>{if(!e.mask)return!0;let l=t;for(;l<e.mask.length;){const n=e.mask[l],d=e.tokens[n];if(d)return d.pattern.test(a);l++}return!1},c=a=>{if(!e.mask||!a.data)return;const t=o();if(x.value.length>=t){a.preventDefault();return}const n=a.data;let d=!1;for(let v=0;v<n.length;v++)if(p(n[v],x.value.length)){d=!0;break}d||a.preventDefault()},Ie=a=>{const t=a.target,l=t.selectionStart||0,n=t.value;let d="";if(e.mask)for(let f=0;f<n.length;f++){const k=n[f];let g=!1;for(const q in e.tokens)if(e.tokens[q].pattern.test(k)){g=!0,d+=k;break}!g&&(e.mask.includes(k)&&e.tokens[k])}else d=n;const v=V(d);b.value=v,T.value=x.value,i("input",a),requestAnimationFrame(()=>{var f;if(w.value){let k=0;for(let S=0;S<Math.min(l,n.length);S++){const M=n[S];for(const Me in e.tokens)if(e.tokens[Me].pattern.test(M)){k++;break}}let g=0,q=0;for(let S=0;S<v.length;S++){if(q>=k){g=S;break}const M=(f=e.mask)==null?void 0:f[S];M&&e.tokens[M]&&q++,g=S+1}w.value.setSelectionRange(g,g)}})};Ce(()=>T.value,a=>{a!==x.value&&(b.value=V(a||""))},{immediate:!0});const Ve=A(()=>{const a=[];return r.invalid.value||a.push(r.helpId.value),r.invalid.value&&a.push(r.errorId.value),a.length>0?a.join(" "):void 0});return(a,t)=>(N(),ge("div",$e,[Ne("input",{id:m(r).id.value,ref_key:"inputRef",ref:w,value:b.value,"data-slot":"input-masked",type:"text",class:H(m(Pe)("form-control col-12 p-space-xs",{"is-invalid":m(r).invalid.value},e.class)),placeholder:s.placeholder,required:m(r).required.value,disabled:m(r).disabled.value,readonly:s.readonly,autocomplete:s.autocomplete,"aria-required":m(r).required.value,"aria-invalid":m(r).invalid.value?"true":void 0,"aria-describedby":Ve.value,onBeforeinput:c,onInput:Ie,onBlur:t[0]||(t[0]=l=>i("blur",l)),onFocus:t[1]||(t[1]=l=>i("focus",l)),onChange:t[2]||(t[2]=l=>i("change",l)),onKeydown:t[3]||(t[3]=l=>i("keydown",l)),onKeyup:t[4]||(t[4]=l=>i("keyup",l))},null,42,Ke)]))}}),Oe=Te(we,[["__scopeId","data-v-9f0e600c"]]);we.__docgenInfo={exportName:"default",displayName:"InputMasked",description:"",tags:{},props:[{name:"mask",description:'Mask pattern (e.g., "###-##-####" for SSN)',required:!1,type:{name:"string"}},{name:"tokens",description:"Token definitions - defaults: # (digit), % (letter), @ (alphanumeric), * (any)",required:!1,type:{name:"Record",elements:[{name:"string"},{name:"MaskToken"}]},defaultValue:{func:!1,value:`() => ({
  '#': { pattern: /\\d/ },
  '%': { pattern: /[a-z]/i },
  '@': { pattern: /[a-z0-9]/i },
  '*': { pattern: /./ },
})`}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"readonly",required:!1,type:{name:"boolean"}},{name:"autocomplete",required:!1,type:{name:"string"}},{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],events:[{name:"blur",type:{names:["FocusEvent"]}},{name:"focus",type:{names:["FocusEvent"]}},{name:"input",type:{names:["Event"]}},{name:"change",type:{names:["Event"]}},{name:"keydown",type:{names:["KeyboardEvent"]}},{name:"keyup",type:{names:["KeyboardEvent"]}}],sourceFiles:["/Users/shashankshandilya/Documents/adms-ui-registry/apps/storybook/src/components/ui/InputMasked/InputMasked.vue"]};const _e={key:1,class:"input-wrapper"},Ae=["id","value","disabled"],Ue="###-##-####",qe=xe({__name:"TextSSN",props:_({id:{},modelValue:{},label:{},tooltip:{},optional:{type:Boolean,default:!1},placeholder:{default:"###-##-####"},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},helpText:{},errorText:{},class:{}},{modelValue:{},modelModifiers:{}}),emits:_(["blur","focus","input","change","keydown","keyup"],["update:modelValue"]),setup(s,{emit:y}){const e=s,i=y,r=ke(s,"modelValue"),T=u(!1),w=A(()=>!r.value||r.value.length<4?"":`###-##-${r.value.slice(-4)}`),b=A(()=>!T.value&&r.value&&r.value.length>=4);function x(o){T.value=!0,i("focus",o)}function V(o){T.value=!1,i("blur",o)}return(o,p)=>(N(),I(m(We),{id:e.id,invalid:e.invalid,disabled:e.disabled,required:e.required,class:H(e.class)},{default:E(()=>[e.label||o.$slots.label?(N(),I(m(Le),{key:0,for:e.id,tooltip:e.tooltip,optional:e.optional},{default:E(()=>[C(o.$slots,"label",{},()=>[U(R(e.label),1)],!0)]),_:3},8,["for","tooltip","optional"])):z("",!0),b.value?(N(),ge("div",_e,[Ne("input",{id:e.id,type:"text",class:H(["form-control col-12 p-space-xs",{"is-invalid":e.invalid}]),value:w.value,disabled:e.disabled,readonly:"",onFocus:x},null,42,Ae)])):(N(),I(m(Oe),{key:2,modelValue:r.value,"onUpdate:modelValue":p[0]||(p[0]=c=>r.value=c),mask:Ue,placeholder:e.placeholder,autocomplete:"off",onBlur:V,onFocus:x,onInput:p[1]||(p[1]=c=>i("input",c)),onChange:p[2]||(p[2]=c=>i("change",c)),onKeydown:p[3]||(p[3]=c=>i("keydown",c)),onKeyup:p[4]||(p[4]=c=>i("keyup",c))},null,8,["modelValue","placeholder"])),e.helpText||o.$slots.help?(N(),I(m(Fe),{key:3},{default:E(()=>[C(o.$slots,"help",{},()=>[U(R(e.helpText),1)],!0)]),_:3})):z("",!0),e.errorText||o.$slots.error?(N(),I(m(De),{key:4},{default:E(()=>[C(o.$slots,"error",{},()=>[U(R(e.errorText),1)],!0)]),_:3})):z("",!0),C(o.$slots,"footer",{},void 0,!0)]),_:3},8,["id","invalid","disabled","required","class"]))}}),h=Te(qe,[["__scopeId","data-v-b3e41497"]]);qe.__docgenInfo={exportName:"default",displayName:"TextSSN",description:"",tags:{},props:[{name:"id",description:"Unique identifier for the input",required:!0,type:{name:"string"}},{name:"modelValue",description:"Input value (v-model) - stores unmasked SSN (9 digits)",required:!1,type:{name:"string"}},{name:"label",description:"Label text",required:!1,type:{name:"string"}},{name:"tooltip",description:"Tooltip text for label",required:!1,type:{name:"string"}},{name:"optional",description:"Show optional badge on label",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"placeholder",description:"Placeholder text",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'###-##-####'"}},{name:"invalid",description:"Whether the input is in an invalid state",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",description:"Whether the input is disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",description:"Whether the input is required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"helpText",description:"Help text shown when not invalid",required:!1,type:{name:"string"}},{name:"errorText",description:"Error text shown when invalid",required:!1,type:{name:"string"}},{name:"class",description:"Additional class for the root element",required:!1,type:{name:"TSIndexedAccessType"}}],events:[{name:"blur",type:{names:["FocusEvent"]}},{name:"focus",type:{names:["FocusEvent"]}},{name:"input",type:{names:["Event"]}},{name:"change",type:{names:["Event"]}},{name:"keydown",type:{names:["KeyboardEvent"]}},{name:"keyup",type:{names:["KeyboardEvent"]}}],slots:[{name:"label"},{name:"help"},{name:"error"},{name:"footer"}],sourceFiles:["/Users/shashankshandilya/Documents/adms-ui-registry/apps/storybook/src/components/ui/TextSSN/TextSSN.vue"]};const Ge={title:"Components/TextSSN",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A masked input for Social Security Numbers. Automatically formats input as ###-##-####.

## Installation

\`\`\`bash
adms-rds-ui add text-ssn
\`\`\`

This will also install: input-root, input-masked, input-error, input-help, and label.

## Usage

\`\`\`vue
<script setup lang="ts">
import { TextSSN } from '@/components/ui/TextSSN'
import { ref } from 'vue'

const ssn = ref('')
<\/script>

<template>
  <TextSSN
    id="ssn"
    v-model="ssn"
    label="Social Security Number"
    help-text="Format: ###-##-####"
  />
</template>
\`\`\`

## Props

- **id** - Unique identifier (required)
- **v-model** - Two-way binding for SSN value (stores unmasked 9 digits)
- **label** - Label text
- **tooltip** - Tooltip text for label
- **optional** - Show "Optional" badge on label
- **placeholder** - Placeholder text (default: "###-##-####")
- **invalid** - Error state
- **disabled** - Disabled state
- **required** - Required field
- **helpText** - Help text (shown when not invalid)
- **errorText** - Error text (shown when invalid)

## Masked Input Primitive

For custom masks, use the InputMasked primitive:

\`\`\`bash
adms-rds-ui add input-masked
\`\`\`

### Mask Tokens

| Token | Description | Example |
|-------|-------------|---------|
| \`#\` | Digit (0-9) | Phone: \`###-###-####\` |
| \`%\` | Letter (a-z, A-Z) | Code: \`%%%-###\` |
| \`@\` | Alphanumeric | ID: \`@@@-####\` |
| \`*\` | Any character | Custom: \`***-***\` |
`}}}},B={name:"Basic SSN",render:()=>({components:{TextSSN:h},setup(){return{value:u("")}},template:`
      <div style="min-width: 300px;">
        <TextSSN
          id="ssn"
          v-model="value"
          label="Social Security Number"
        />
        <p class="mt-2 text-muted fs-small">Unmasked value: {{ value || '(empty)' }}</p>
      </div>
    `})},F={name:"With Help Text",render:()=>({components:{TextSSN:h},setup(){return{value:u("")}},template:`
      <div style="min-width: 300px;">
        <TextSSN
          id="ssn-help"
          v-model="value"
          label="Social Security Number"
          help-text="Your SSN is required for tax purposes and will be kept secure."
        />
      </div>
    `})},D={name:"With Error State",render:()=>({components:{TextSSN:h},setup(){return{value:u("12345")}},template:`
      <div style="min-width: 300px;">
        <TextSSN
          id="ssn-error"
          v-model="value"
          label="Social Security Number"
          error-text="Please enter a valid 9-digit SSN."
          :invalid="true"
        />
      </div>
    `})},W={name:"With Label Tooltip",render:()=>({components:{TextSSN:h},setup(){return{value:u("")}},template:`
      <div style="min-width: 300px;">
        <TextSSN
          id="ssn-tooltip"
          v-model="value"
          label="Social Security Number"
          tooltip="Your SSN is encrypted and stored securely. We never share this information."
          help-text="Required for identity verification."
        />
      </div>
    `})},P={name:"Optional Field",render:()=>({components:{TextSSN:h},setup(){return{value:u("")}},template:`
      <div style="min-width: 300px;">
        <TextSSN
          id="ssn-optional"
          v-model="value"
          label="Social Security Number"
          :optional="true"
          help-text="Providing your SSN helps speed up verification."
        />
      </div>
    `})},L={name:"Disabled Field",render:()=>({components:{TextSSN:h},setup(){return{value:u("123456789")}},template:`
      <div style="min-width: 300px;">
        <TextSSN
          id="ssn-disabled"
          v-model="value"
          label="Social Security Number"
          :disabled="true"
        />
      </div>
    `})},$={name:"With Validation",render:()=>({components:{TextSSN:h},setup(){const s=u(""),y=u(!1),e=u("");function i(){s.value?s.value.length!==9?(y.value=!0,e.value="SSN must be exactly 9 digits."):(y.value=!1,e.value=""):(y.value=!0,e.value="SSN is required.")}return{value:s,isInvalid:y,errorMessage:e,validate:i}},template:`
      <div style="min-width: 300px;">
        <TextSSN
          id="ssn-validation"
          v-model="value"
          label="Social Security Number"
          :required="true"
          help-text="Enter your 9-digit SSN."
          :error-text="errorMessage"
          :invalid="isInvalid"
          @blur="validate"
        />
        <p class="mt-2 text-muted fs-small">
          Length: {{ value.length }}/9 digits
        </p>
      </div>
    `})},K={name:"Prefilled Value",render:()=>({components:{TextSSN:h},setup(){return{value:u("123456789")}},template:`
      <div style="min-width: 300px;">
        <TextSSN
          id="ssn-prefilled"
          v-model="value"
          label="Social Security Number"
          help-text="Click to edit. Shows ###-##-6789 when blurred."
        />
        <p class="mt-2 text-muted fs-small">Stored value: {{ value }}</p>
      </div>
    `})},O={name:"Masked on Blur (Security)",render:()=>({components:{TextSSN:h},setup(){return{value:u("")}},template:`
      <div style="min-width: 300px;">
        <TextSSN
          id="ssn-masked-blur"
          v-model="value"
          label="Social Security Number"
          help-text="Type an SSN, then click outside. Only last 4 digits shown."
        />
        <p class="mt-2 text-muted fs-small">
          Stored: {{ value || '(empty)' }}<br/>
          Display on blur: {{ value && value.length >= 4 ? '###-##-' + value.slice(-4) : '(type at least 4 digits)' }}
        </p>
      </div>
    `})};var Y,j,J;B.parameters={...B.parameters,docs:{...(Y=B.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Basic SSN',
  render: () => ({
    components: {
      TextSSN
    },
    setup() {
      const value = ref('');
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 300px;">
        <TextSSN
          id="ssn"
          v-model="value"
          label="Social Security Number"
        />
        <p class="mt-2 text-muted fs-small">Unmasked value: {{ value || '(empty)' }}</p>
      </div>
    \`
  })
}`,...(J=(j=B.parameters)==null?void 0:j.docs)==null?void 0:J.source}}};var Z,G,Q;F.parameters={...F.parameters,docs:{...(Z=F.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'With Help Text',
  render: () => ({
    components: {
      TextSSN
    },
    setup() {
      const value = ref('');
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 300px;">
        <TextSSN
          id="ssn-help"
          v-model="value"
          label="Social Security Number"
          help-text="Your SSN is required for tax purposes and will be kept secure."
        />
      </div>
    \`
  })
}`,...(Q=(G=F.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var X,ee,te;D.parameters={...D.parameters,docs:{...(X=D.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'With Error State',
  render: () => ({
    components: {
      TextSSN
    },
    setup() {
      const value = ref('12345');
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 300px;">
        <TextSSN
          id="ssn-error"
          v-model="value"
          label="Social Security Number"
          error-text="Please enter a valid 9-digit SSN."
          :invalid="true"
        />
      </div>
    \`
  })
}`,...(te=(ee=D.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,le,se;W.parameters={...W.parameters,docs:{...(ae=W.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'With Label Tooltip',
  render: () => ({
    components: {
      TextSSN
    },
    setup() {
      const value = ref('');
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 300px;">
        <TextSSN
          id="ssn-tooltip"
          v-model="value"
          label="Social Security Number"
          tooltip="Your SSN is encrypted and stored securely. We never share this information."
          help-text="Required for identity verification."
        />
      </div>
    \`
  })
}`,...(se=(le=W.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var re,ne,ie;P.parameters={...P.parameters,docs:{...(re=P.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Optional Field',
  render: () => ({
    components: {
      TextSSN
    },
    setup() {
      const value = ref('');
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 300px;">
        <TextSSN
          id="ssn-optional"
          v-model="value"
          label="Social Security Number"
          :optional="true"
          help-text="Providing your SSN helps speed up verification."
        />
      </div>
    \`
  })
}`,...(ie=(ne=P.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var oe,ue,de;L.parameters={...L.parameters,docs:{...(oe=L.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Disabled Field',
  render: () => ({
    components: {
      TextSSN
    },
    setup() {
      const value = ref('123456789');
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 300px;">
        <TextSSN
          id="ssn-disabled"
          v-model="value"
          label="Social Security Number"
          :disabled="true"
        />
      </div>
    \`
  })
}`,...(de=(ue=L.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var pe,me,ce;$.parameters={...$.parameters,docs:{...(pe=$.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'With Validation',
  render: () => ({
    components: {
      TextSSN
    },
    setup() {
      const value = ref('');
      const isInvalid = ref(false);
      const errorMessage = ref('');
      function validate() {
        if (!value.value) {
          isInvalid.value = true;
          errorMessage.value = 'SSN is required.';
        } else if (value.value.length !== 9) {
          isInvalid.value = true;
          errorMessage.value = 'SSN must be exactly 9 digits.';
        } else {
          isInvalid.value = false;
          errorMessage.value = '';
        }
      }
      return {
        value,
        isInvalid,
        errorMessage,
        validate
      };
    },
    template: \`
      <div style="min-width: 300px;">
        <TextSSN
          id="ssn-validation"
          v-model="value"
          label="Social Security Number"
          :required="true"
          help-text="Enter your 9-digit SSN."
          :error-text="errorMessage"
          :invalid="isInvalid"
          @blur="validate"
        />
        <p class="mt-2 text-muted fs-small">
          Length: {{ value.length }}/9 digits
        </p>
      </div>
    \`
  })
}`,...(ce=(me=$.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var ve,fe,Se;K.parameters={...K.parameters,docs:{...(ve=K.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  name: 'Prefilled Value',
  render: () => ({
    components: {
      TextSSN
    },
    setup() {
      const value = ref('123456789');
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 300px;">
        <TextSSN
          id="ssn-prefilled"
          v-model="value"
          label="Social Security Number"
          help-text="Click to edit. Shows ###-##-6789 when blurred."
        />
        <p class="mt-2 text-muted fs-small">Stored value: {{ value }}</p>
      </div>
    \`
  })
}`,...(Se=(fe=K.parameters)==null?void 0:fe.docs)==null?void 0:Se.source}}};var he,ye,be;O.parameters={...O.parameters,docs:{...(he=O.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'Masked on Blur (Security)',
  render: () => ({
    components: {
      TextSSN
    },
    setup() {
      const value = ref('');
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 300px;">
        <TextSSN
          id="ssn-masked-blur"
          v-model="value"
          label="Social Security Number"
          help-text="Type an SSN, then click outside. Only last 4 digits shown."
        />
        <p class="mt-2 text-muted fs-small">
          Stored: {{ value || '(empty)' }}<br/>
          Display on blur: {{ value && value.length >= 4 ? '###-##-' + value.slice(-4) : '(type at least 4 digits)' }}
        </p>
      </div>
    \`
  })
}`,...(be=(ye=O.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};const Qe=["Default","WithHelp","WithError","WithTooltip","Optional","Disabled","ValidationExample","PrefilledValue","MaskedOnBlur"];export{B as Default,L as Disabled,O as MaskedOnBlur,P as Optional,K as PrefilledValue,$ as ValidationExample,D as WithError,F as WithHelp,W as WithTooltip,Qe as __namedExportsOrder,Ge as default};
