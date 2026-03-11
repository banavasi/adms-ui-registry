import{d as le,F as pe,o as i,B as C,E as M,u as p,q as ue,a as v,b as c,s as me,v as S,f as w,x as k,y as I,z as f,e as W,r}from"./vue.esm-bundler-DIwgUAuo.js";import{I as ce,a as we,b as ve,_ as fe}from"./InputHelp-CgoVujsi.js";import{I as he}from"./InputField-NfyCHnYm.js";import{_ as de}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{L as be}from"./index-CGkXqMRd.js";import"./Primitive-DEAM-xiZ.js";import"./index-DSxA2iZ_.js";import"./TooltipContent-814Cu58g.js";const xe=["aria-label","aria-pressed","disabled"],Pe={key:0,xmlns:"http://www.w3.org/2000/svg",width:"18",height:"16",viewBox:"0 0 576 512",fill:"currentColor","aria-hidden":"true"},ge={key:1,xmlns:"http://www.w3.org/2000/svg",width:"18",height:"16",viewBox:"0 0 640 512",fill:"currentColor","aria-hidden":"true"},ne=le({__name:"InputPasswordToggle",props:{visible:{type:Boolean,default:!1}},emits:["toggle"],setup(s,{emit:d}){const e=s,l=d,u=pe(ce);if(!u)throw new Error("InputPasswordToggle must be used within InputRoot");function m(){l("toggle",!e.visible)}return(V,a)=>(i(),C("button",{type:"button","aria-label":e.visible?"Hide password":"Show password","aria-pressed":e.visible,disabled:p(u).disabled.value,class:"input-password-toggle btn btn-link p-0 border-0 text-muted",onClick:m},[e.visible?(i(),C("svg",ge,[...a[1]||(a[1]=[M("path",{d:"M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C256.5 121.1 288 104 320 104c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"},null,-1)])])):(i(),C("svg",Pe,[...a[0]||(a[0]=[M("path",{d:"M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"},null,-1)])]))],8,xe))}}),ye=de(ne,[["__scopeId","data-v-72383e97"]]);ne.__docgenInfo={exportName:"default",displayName:"InputPasswordToggle",description:"",tags:{},props:[{name:"visible",description:"Whether password is currently visible",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"toggle",type:{names:["boolean"]}}],sourceFiles:["/Users/shashankshandilya/Documents/adms-ui-registry/apps/storybook/src/components/ui/InputPasswordToggle/InputPasswordToggle.vue"]};const Te={key:1,class:"password-requirements"},ie=le({__name:"TextPassword",props:S({id:{},modelValue:{},label:{},tooltip:{},optional:{type:Boolean,default:!1},placeholder:{},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},helpText:{},errorText:{},class:{}},{modelValue:{},modelModifiers:{}}),emits:S(["blur","focus","input","change","keydown","keyup"],["update:modelValue"]),setup(s,{emit:d}){const e=s,l=d,u=ue(s,"modelValue"),m=r(!1);function V(a){m.value=a}return(a,t)=>(i(),v(p(fe),{id:e.id,invalid:e.invalid,disabled:e.disabled,required:e.required,class:me(e.class)},{default:c(()=>[e.label||a.$slots.label?(i(),v(p(be),{key:0,for:e.id,tooltip:e.tooltip,optional:e.optional},{default:c(()=>[w(a.$slots,"label",{},()=>[k(I(e.label),1)],!0)]),_:3},8,["for","tooltip","optional"])):f("",!0),a.$slots.requirements?(i(),C("div",Te,[w(a.$slots,"requirements",{},void 0,!0)])):f("",!0),W(p(he),{modelValue:u.value,"onUpdate:modelValue":t[0]||(t[0]=o=>u.value=o),type:m.value?"text":"password",placeholder:e.placeholder,"has-suffix":!0,onBlur:t[1]||(t[1]=o=>l("blur",o)),onFocus:t[2]||(t[2]=o=>l("focus",o)),onInput:t[3]||(t[3]=o=>l("input",o)),onChange:t[4]||(t[4]=o=>l("change",o)),onKeydown:t[5]||(t[5]=o=>l("keydown",o)),onKeyup:t[6]||(t[6]=o=>l("keyup",o))},{suffix:c(()=>[W(p(ye),{visible:m.value,onToggle:V},null,8,["visible"])]),_:1},8,["modelValue","type","placeholder"]),e.helpText||a.$slots.help?(i(),v(p(we),{key:2},{default:c(()=>[w(a.$slots,"help",{},()=>[k(I(e.helpText),1)],!0)]),_:3})):f("",!0),e.errorText||a.$slots.error?(i(),v(p(ve),{key:3},{default:c(()=>[w(a.$slots,"error",{},()=>[k(I(e.errorText),1)],!0)]),_:3})):f("",!0),w(a.$slots,"footer",{},void 0,!0)]),_:3},8,["id","invalid","disabled","required","class"]))}}),n=de(ie,[["__scopeId","data-v-946670f6"]]);ie.__docgenInfo={exportName:"default",displayName:"TextPassword",description:"",tags:{},props:[{name:"id",description:"Unique identifier for the input",required:!0,type:{name:"string"}},{name:"modelValue",description:"Input value (v-model)",required:!1,type:{name:"string"}},{name:"label",description:"Label text",required:!1,type:{name:"string"}},{name:"tooltip",description:"Tooltip text for label",required:!1,type:{name:"string"}},{name:"optional",description:"Show optional badge on label",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"placeholder",description:"Placeholder text",required:!1,type:{name:"string"}},{name:"invalid",description:"Whether the input is in an invalid state",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",description:"Whether the input is disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",description:"Whether the input is required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"helpText",description:"Help text shown when not invalid",required:!1,type:{name:"string"}},{name:"errorText",description:"Error text shown when invalid",required:!1,type:{name:"string"}},{name:"class",description:"Additional class for the root element",required:!1,type:{name:"TSIndexedAccessType"}}],events:[{name:"blur",type:{names:["FocusEvent"]}},{name:"focus",type:{names:["FocusEvent"]}},{name:"input",type:{names:["Event"]}},{name:"change",type:{names:["Event"]}},{name:"keydown",type:{names:["KeyboardEvent"]}},{name:"keyup",type:{names:["KeyboardEvent"]}}],slots:[{name:"label"},{name:"requirements"},{name:"help"},{name:"error"},{name:"footer"}],sourceFiles:["/Users/shashankshandilya/Documents/adms-ui-registry/apps/storybook/src/components/ui/TextPassword/TextPassword.vue"]};const We={title:"Components/TextPassword",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A password input component with visibility toggle. Click the eye icon to show/hide the password.

## Installation

\`\`\`bash
adms-rds-ui add text-password
\`\`\`

This will also install: input-root, input-field, input-error, input-help, input-password-toggle, and label.

## Usage

\`\`\`vue
<script setup lang="ts">
import { TextPassword } from '@/components/ui/TextPassword'
import { ref } from 'vue'

const password = ref('')
<\/script>

<template>
  <TextPassword
    id="password"
    v-model="password"
    label="Password"
    placeholder="Enter password"
    help-text="Must be at least 8 characters."
  />
</template>
\`\`\`

## Props

- **id** - Unique identifier (required)
- **v-model** - Two-way binding for password value
- **label** - Label text
- **tooltip** - Tooltip text for label
- **optional** - Show "Optional" badge on label
- **placeholder** - Placeholder text
- **invalid** - Error state
- **disabled** - Disabled state
- **required** - Required field
- **helpText** - Help text (shown when not invalid)
- **errorText** - Error text (shown when invalid)

## Primitives

The password toggle is available as a standalone primitive:

\`\`\`bash
adms-rds-ui add input-password-toggle
\`\`\`
`}}}},h={name:"Basic Password",render:()=>({components:{TextPassword:n},setup(){return{value:r("")}},template:`
      <div style="min-width: 300px;">
        <TextPassword
          id="password"
          v-model="value"
          label="Password"
          placeholder="Enter password"
        />
        <p class="mt-2 text-muted fs-small">Value: {{ value ? '•'.repeat(value.length) : '(empty)' }}</p>
      </div>
    `})},b={name:"With Help Text",render:()=>({components:{TextPassword:n},setup(){return{value:r("")}},template:`
      <div style="min-width: 300px;">
        <TextPassword
          id="password-help"
          v-model="value"
          label="Password"
          placeholder="Enter password"
          help-text="Must be at least 8 characters with one uppercase letter."
        />
      </div>
    `})},x={name:"With Requirements",render:()=>({components:{TextPassword:n},setup(){return{value:r("")}},template:`
      <div style="min-width: 400px;">
        <TextPassword
          id="password-requirements"
          v-model="value"
          label="Password"
          placeholder="Enter password"
        >
          <template #requirements>
            <p class="mb-0">Passwords must be at least 10 characters long and must include the following requirements:</p>
            <ul>
              <li>Contains at least 1 number (0-9)</li>
              <li>Contains at least 1 uppercase letter (A-Z)</li>
              <li>Contains at least 1 lowercase letter (a-z)</li>
            </ul>
          </template>
        </TextPassword>
      </div>
    `})},P={name:"With Error State",render:()=>({components:{TextPassword:n},setup(){return{value:r("weak")}},template:`
      <div style="min-width: 300px;">
        <TextPassword
          id="password-error"
          v-model="value"
          label="Password"
          placeholder="Enter password"
          error-text="Password is too weak. Add numbers and special characters."
          :invalid="true"
        />
      </div>
    `})},g={name:"With Label Tooltip",render:()=>({components:{TextPassword:n},setup(){return{value:r("")}},template:`
      <div style="min-width: 300px;">
        <TextPassword
          id="password-tooltip"
          v-model="value"
          label="Master Password"
          tooltip="This password encrypts all your data. Make sure it's strong and memorable."
          placeholder="Enter master password"
          help-text="This cannot be recovered if forgotten."
        />
      </div>
    `})},y={name:"Required Field",render:()=>({components:{TextPassword:n},setup(){return{value:r("")}},template:`
      <div style="min-width: 300px;">
        <TextPassword
          id="password-required"
          v-model="value"
          label="Password"
          :required="true"
          placeholder="Enter password"
          help-text="This field is required."
        />
      </div>
    `})},T={name:"Disabled Field",render:()=>({components:{TextPassword:n},setup(){return{value:r("secretpassword")}},template:`
      <div style="min-width: 300px;">
        <TextPassword
          id="password-disabled"
          v-model="value"
          label="Password"
          :disabled="true"
        />
      </div>
    `})},q={name:"Password Validation",render:()=>({components:{TextPassword:n},setup(){const s=r(""),d=r(!1),e=r("");function l(){s.value.length<8?(d.value=!0,e.value="Password must be at least 8 characters."):/[A-Z]/.test(s.value)?/\d/.test(s.value)?(d.value=!1,e.value=""):(d.value=!0,e.value="Password must contain at least one number."):(d.value=!0,e.value="Password must contain at least one uppercase letter.")}return{value:s,isInvalid:d,errorMessage:e,validate:l}},template:`
      <div style="min-width: 300px;">
        <TextPassword
          id="password-validation"
          v-model="value"
          label="Create Password"
          placeholder="Enter a strong password"
          help-text="Use 8+ characters with uppercase letters and numbers."
          :error-text="errorMessage"
          :invalid="isInvalid"
          @blur="validate"
        />
        <button class="btn btn-sm btn-outline-secondary mt-3" @click="validate">
          Validate
        </button>
      </div>
    `})},E={name:"Confirm Password Form",render:()=>({components:{TextPassword:n},setup(){const s=r(""),d=r(""),e=r(!1),l=r(!1);return{password:s,confirmPassword:d,passwordError:e,confirmError:l}},template:`
      <form class="p-4 border rounded" style="min-width: 350px;">
        <h4 class="mb-4">Set Password</h4>

        <TextPassword
          id="new-password"
          v-model="password"
          label="New Password"
          :required="true"
          placeholder="Enter password"
          help-text="Must be at least 8 characters."
          error-text="Password is required."
          :invalid="passwordError"
          class="mb-3"
        />

        <TextPassword
          id="confirm-password"
          v-model="confirmPassword"
          label="Confirm Password"
          :required="true"
          placeholder="Re-enter password"
          error-text="Passwords do not match."
          :invalid="confirmError || (confirmPassword && password !== confirmPassword)"
          class="mb-3"
        />

        <button type="submit" class="btn btn-primary">Set Password</button>
      </form>
    `})};var _,B,$;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Basic Password',
  render: () => ({
    components: {
      TextPassword
    },
    setup() {
      const value = ref('');
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 300px;">
        <TextPassword
          id="password"
          v-model="value"
          label="Password"
          placeholder="Enter password"
        />
        <p class="mt-2 text-muted fs-small">Value: {{ value ? '•'.repeat(value.length) : '(empty)' }}</p>
      </div>
    \`
  })
}`,...($=(B=h.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var F,N,R;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'With Help Text',
  render: () => ({
    components: {
      TextPassword
    },
    setup() {
      const value = ref('');
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 300px;">
        <TextPassword
          id="password-help"
          v-model="value"
          label="Password"
          placeholder="Enter password"
          help-text="Must be at least 8 characters with one uppercase letter."
        />
      </div>
    \`
  })
}`,...(R=(N=b.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var L,z,D;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'With Requirements',
  render: () => ({
    components: {
      TextPassword
    },
    setup() {
      const value = ref('');
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 400px;">
        <TextPassword
          id="password-requirements"
          v-model="value"
          label="Password"
          placeholder="Enter password"
        >
          <template #requirements>
            <p class="mb-0">Passwords must be at least 10 characters long and must include the following requirements:</p>
            <ul>
              <li>Contains at least 1 number (0-9)</li>
              <li>Contains at least 1 uppercase letter (A-Z)</li>
              <li>Contains at least 1 lowercase letter (a-z)</li>
            </ul>
          </template>
        </TextPassword>
      </div>
    \`
  })
}`,...(D=(z=x.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var A,U,H;P.parameters={...P.parameters,docs:{...(A=P.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'With Error State',
  render: () => ({
    components: {
      TextPassword
    },
    setup() {
      const value = ref('weak');
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 300px;">
        <TextPassword
          id="password-error"
          v-model="value"
          label="Password"
          placeholder="Enter password"
          error-text="Password is too weak. Add numbers and special characters."
          :invalid="true"
        />
      </div>
    \`
  })
}`,...(H=(U=P.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var K,Z,O;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'With Label Tooltip',
  render: () => ({
    components: {
      TextPassword
    },
    setup() {
      const value = ref('');
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 300px;">
        <TextPassword
          id="password-tooltip"
          v-model="value"
          label="Master Password"
          tooltip="This password encrypts all your data. Make sure it's strong and memorable."
          placeholder="Enter master password"
          help-text="This cannot be recovered if forgotten."
        />
      </div>
    \`
  })
}`,...(O=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:O.source}}};var j,J,Y;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Required Field',
  render: () => ({
    components: {
      TextPassword
    },
    setup() {
      const value = ref('');
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 300px;">
        <TextPassword
          id="password-required"
          v-model="value"
          label="Password"
          :required="true"
          placeholder="Enter password"
          help-text="This field is required."
        />
      </div>
    \`
  })
}`,...(Y=(J=y.parameters)==null?void 0:J.docs)==null?void 0:Y.source}}};var G,Q,X;T.parameters={...T.parameters,docs:{...(G=T.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Disabled Field',
  render: () => ({
    components: {
      TextPassword
    },
    setup() {
      const value = ref('secretpassword');
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 300px;">
        <TextPassword
          id="password-disabled"
          v-model="value"
          label="Password"
          :disabled="true"
        />
      </div>
    \`
  })
}`,...(X=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var ee,se,ae;q.parameters={...q.parameters,docs:{...(ee=q.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Password Validation',
  render: () => ({
    components: {
      TextPassword
    },
    setup() {
      const value = ref('');
      const isInvalid = ref(false);
      const errorMessage = ref('');
      function validate() {
        if (value.value.length < 8) {
          isInvalid.value = true;
          errorMessage.value = 'Password must be at least 8 characters.';
        } else if (!/[A-Z]/.test(value.value)) {
          isInvalid.value = true;
          errorMessage.value = 'Password must contain at least one uppercase letter.';
        } else if (!/\\d/.test(value.value)) {
          isInvalid.value = true;
          errorMessage.value = 'Password must contain at least one number.';
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
        <TextPassword
          id="password-validation"
          v-model="value"
          label="Create Password"
          placeholder="Enter a strong password"
          help-text="Use 8+ characters with uppercase letters and numbers."
          :error-text="errorMessage"
          :invalid="isInvalid"
          @blur="validate"
        />
        <button class="btn btn-sm btn-outline-secondary mt-3" @click="validate">
          Validate
        </button>
      </div>
    \`
  })
}`,...(ae=(se=q.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var re,te,oe;E.parameters={...E.parameters,docs:{...(re=E.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Confirm Password Form',
  render: () => ({
    components: {
      TextPassword
    },
    setup() {
      const password = ref('');
      const confirmPassword = ref('');
      const passwordError = ref(false);
      const confirmError = ref(false);
      return {
        password,
        confirmPassword,
        passwordError,
        confirmError
      };
    },
    template: \`
      <form class="p-4 border rounded" style="min-width: 350px;">
        <h4 class="mb-4">Set Password</h4>

        <TextPassword
          id="new-password"
          v-model="password"
          label="New Password"
          :required="true"
          placeholder="Enter password"
          help-text="Must be at least 8 characters."
          error-text="Password is required."
          :invalid="passwordError"
          class="mb-3"
        />

        <TextPassword
          id="confirm-password"
          v-model="confirmPassword"
          label="Confirm Password"
          :required="true"
          placeholder="Re-enter password"
          error-text="Passwords do not match."
          :invalid="confirmError || (confirmPassword && password !== confirmPassword)"
          class="mb-3"
        />

        <button type="submit" class="btn btn-primary">Set Password</button>
      </form>
    \`
  })
}`,...(oe=(te=E.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};const _e=["Default","WithHelp","WithRequirements","WithError","WithTooltip","Required","Disabled","ValidationExample","ConfirmPassword"];export{E as ConfirmPassword,h as Default,T as Disabled,y as Required,q as ValidationExample,P as WithError,b as WithHelp,x as WithRequirements,g as WithTooltip,_e as __namedExportsOrder,We as default};
