import{r as e}from"./vue.esm-bundler-DIwgUAuo.js";import{_ as a}from"./TextInput-XNFQWKTg.js";import"./InputHelp-CgoVujsi.js";import"./InputField-NfyCHnYm.js";import"./Primitive-DEAM-xiZ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-CGkXqMRd.js";import"./index-DSxA2iZ_.js";import"./TooltipContent-814Cu58g.js";const de={title:"Components/TextInput",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A composed text input component that bundles InputRoot, InputField, Label, InputHelp, and InputError into a single convenient component.

## Installation

\`\`\`bash
adms-rds-ui add text-input
\`\`\`

This will also install the required dependencies: input-root, input-field, input-error, input-help, and label.

## Usage

\`\`\`vue
<script setup lang="ts">
import { TextInput } from '@/components/ui/TextInput'
import { ref } from 'vue'

const email = ref('')
const hasError = ref(false)
<\/script>

<template>
  <TextInput
    id="email"
    v-model="email"
    label="Email Address"
    type="email"
    placeholder="you@example.com"
    help-text="We'll never share your email."
    error-text="Please enter a valid email."
    :invalid="hasError"
  />
</template>
\`\`\`

## Props

- **id** - Unique identifier (required)
- **v-model** - Two-way binding for input value
- **label** - Label text
- **tooltip** - Tooltip text for label
- **optional** - Show "Optional" badge on label
- **type** - Input type (text, email, password, etc.)
- **placeholder** - Placeholder text
- **invalid** - Error state
- **disabled** - Disabled state
- **required** - Required field
- **helpText** - Help text (shown when not invalid)
- **errorText** - Error text (shown when invalid)
- **hasPrefix** / **hasSuffix** - Enable prefix/suffix slots
`}}}},l={name:"Basic Input",render:()=>({components:{TextInput:a},setup(){return{value:e("")}},template:`
      <div style="min-width: 300px;">
        <TextInput
          id="username"
          v-model="value"
          label="Username"
          placeholder="Enter username"
        />
        <p class="mt-2 text-muted fs-small">Value: {{ value }}</p>
      </div>
    `})},i={name:"With Help Text",render:()=>({components:{TextInput:a},setup(){return{value:e("")}},template:`
      <div style="min-width: 300px;">
        <TextInput
          id="email"
          v-model="value"
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          help-text="We'll never share your email with anyone."
        />
      </div>
    `})},o={name:"With Error State",render:()=>({components:{TextInput:a},setup(){return{value:e("invalid-email")}},template:`
      <div style="min-width: 300px;">
        <TextInput
          id="email-error"
          v-model="value"
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          error-text="Please enter a valid email address."
          :invalid="true"
        />
      </div>
    `})},s={name:"Help and Error (toggles)",render:()=>({components:{TextInput:a},setup(){const t=e(""),r=e(!1);return{value:t,isInvalid:r}},template:`
      <div style="min-width: 300px;">
        <TextInput
          id="email-toggle"
          v-model="value"
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          help-text="Enter your email to receive updates."
          error-text="Please enter a valid email address."
          :invalid="isInvalid"
        />
        <button class="btn btn-sm btn-outline-secondary mt-3" @click="isInvalid = !isInvalid">
          Toggle Invalid: {{ isInvalid }}
        </button>
      </div>
    `})},n={name:"With Label Tooltip",render:()=>({components:{TextInput:a},setup(){return{value:e("")}},template:`
      <div style="min-width: 300px;">
        <TextInput
          id="api-key"
          v-model="value"
          label="API Key"
          tooltip="Your API key can be found in your account settings under Developer Options."
          placeholder="sk-xxxxxxxxxxxx"
          help-text="Keep your API key secure."
        />
      </div>
    `})},p={name:"Optional Field",render:()=>({components:{TextInput:a},setup(){return{value:e("")}},template:`
      <div style="min-width: 300px;">
        <TextInput
          id="nickname"
          v-model="value"
          label="Nickname"
          :optional="true"
          placeholder="What should we call you?"
          help-text="This is optional but helps personalize your experience."
        />
      </div>
    `})},m={name:"Required Field",render:()=>({components:{TextInput:a},setup(){return{value:e("")}},template:`
      <div style="min-width: 300px;">
        <TextInput
          id="full-name"
          v-model="value"
          label="Full Name"
          :required="true"
          placeholder="John Doe"
          help-text="This field is required."
        />
      </div>
    `})},d={name:"Disabled Field",render:()=>({components:{TextInput:a},setup(){return{value:e("Cannot edit this")}},template:`
      <div style="min-width: 300px;">
        <TextInput
          id="locked"
          v-model="value"
          label="Locked Field"
          :disabled="true"
        />
      </div>
    `})},u={name:"With Prefix",render:()=>({components:{TextInput:a},setup(){return{value:e("")}},template:`
      <div style="min-width: 300px;">
        <TextInput
          id="price"
          v-model="value"
          label="Price"
          type="number"
          placeholder="0.00"
        >
          <template #prefix>$</template>
        </TextInput>
      </div>
    `})},c={name:"With Suffix",render:()=>({components:{TextInput:a},setup(){return{value:e("")}},template:`
      <div style="min-width: 300px;">
        <TextInput
          id="website"
          v-model="value"
          label="Website"
          placeholder="example"
        >
          <template #suffix>.com</template>
        </TextInput>
      </div>
    `})},v={name:"With Prefix and Suffix",render:()=>({components:{TextInput:a},setup(){return{value:e("")}},template:`
      <div style="min-width: 300px;">
        <TextInput
          id="subdomain"
          v-model="value"
          label="Subdomain"
          placeholder="mysite"
        >
          <template #prefix>https://</template>
          <template #suffix>.asu.edu</template>
        </TextInput>
      </div>
    `})},x={name:"All Features Combined",render:()=>({components:{TextInput:a},setup(){const t=e(""),r=e(!1);return{value:t,isInvalid:r}},template:`
      <div style="min-width: 350px;">
        <TextInput
          id="asurite"
          v-model="value"
          label="ASURITE ID"
          tooltip="Your ASURITE ID is your unique ASU username"
          :optional="true"
          placeholder="jdoe1"
          help-text="This is used for ASU system access."
          error-text="ASURITE ID must be alphanumeric."
          :invalid="isInvalid"
        >
          <template #suffix>@asu.edu</template>
        </TextInput>
        <button class="btn btn-sm btn-outline-secondary mt-3" @click="isInvalid = !isInvalid">
          Toggle Invalid: {{ isInvalid }}
        </button>
      </div>
    `})},h={name:"Complete Form Example",render:()=>({components:{TextInput:a},setup(){const t=e({firstName:"",lastName:"",email:"",phone:""}),r=e({firstName:!1,lastName:!1,email:!1,phone:!1});return{form:t,errors:r}},template:`
      <form class="p-4 border rounded" style="min-width: 400px;">
        <h4 class="mb-4">Contact Information</h4>

        <TextInput
          id="form-firstName"
          v-model="form.firstName"
          label="First Name"
          :required="true"
          placeholder="John"
          error-text="First name is required."
          :invalid="errors.firstName"
          class="mb-3"
        />

        <TextInput
          id="form-lastName"
          v-model="form.lastName"
          label="Last Name"
          :required="true"
          placeholder="Doe"
          error-text="Last name is required."
          :invalid="errors.lastName"
          class="mb-3"
        />

        <TextInput
          id="form-email"
          v-model="form.email"
          label="Email"
          tooltip="We'll send a confirmation email"
          :required="true"
          type="email"
          placeholder="john.doe@asu.edu"
          help-text="Use your ASU email if available."
          error-text="Please enter a valid email address."
          :invalid="errors.email"
          class="mb-3"
        />

        <TextInput
          id="form-phone"
          v-model="form.phone"
          label="Phone Number"
          :optional="true"
          type="tel"
          placeholder="(555) 123-4567"
          help-text="We'll only call if there's an issue."
          error-text="Please enter a valid phone number."
          :invalid="errors.phone"
          class="mb-3"
        />

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    `})};var f,I,b;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Basic Input',
  render: () => ({
    components: {
      TextInput
    },
    setup() {
      const value = ref('');
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 300px;">
        <TextInput
          id="username"
          v-model="value"
          label="Username"
          placeholder="Enter username"
        />
        <p class="mt-2 text-muted fs-small">Value: {{ value }}</p>
      </div>
    \`
  })
}`,...(b=(I=l.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var T,y,w;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'With Help Text',
  render: () => ({
    components: {
      TextInput
    },
    setup() {
      const value = ref('');
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 300px;">
        <TextInput
          id="email"
          v-model="value"
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          help-text="We'll never share your email with anyone."
        />
      </div>
    \`
  })
}`,...(w=(y=i.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var S,E,g;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'With Error State',
  render: () => ({
    components: {
      TextInput
    },
    setup() {
      const value = ref('invalid-email');
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 300px;">
        <TextInput
          id="email-error"
          v-model="value"
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          error-text="Please enter a valid email address."
          :invalid="true"
        />
      </div>
    \`
  })
}`,...(g=(E=o.parameters)==null?void 0:E.docs)==null?void 0:g.source}}};var W,A,N;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Help and Error (toggles)',
  render: () => ({
    components: {
      TextInput
    },
    setup() {
      const value = ref('');
      const isInvalid = ref(false);
      return {
        value,
        isInvalid
      };
    },
    template: \`
      <div style="min-width: 300px;">
        <TextInput
          id="email-toggle"
          v-model="value"
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          help-text="Enter your email to receive updates."
          error-text="Please enter a valid email address."
          :invalid="isInvalid"
        />
        <button class="btn btn-sm btn-outline-secondary mt-3" @click="isInvalid = !isInvalid">
          Toggle Invalid: {{ isInvalid }}
        </button>
      </div>
    \`
  })
}`,...(N=(A=s.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var P,q,F;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'With Label Tooltip',
  render: () => ({
    components: {
      TextInput
    },
    setup() {
      const value = ref('');
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 300px;">
        <TextInput
          id="api-key"
          v-model="value"
          label="API Key"
          tooltip="Your API key can be found in your account settings under Developer Options."
          placeholder="sk-xxxxxxxxxxxx"
          help-text="Keep your API key secure."
        />
      </div>
    \`
  })
}`,...(F=(q=n.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var k,D,U;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Optional Field',
  render: () => ({
    components: {
      TextInput
    },
    setup() {
      const value = ref('');
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 300px;">
        <TextInput
          id="nickname"
          v-model="value"
          label="Nickname"
          :optional="true"
          placeholder="What should we call you?"
          help-text="This is optional but helps personalize your experience."
        />
      </div>
    \`
  })
}`,...(U=(D=p.parameters)==null?void 0:D.docs)==null?void 0:U.source}}};var R,H,L;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Required Field',
  render: () => ({
    components: {
      TextInput
    },
    setup() {
      const value = ref('');
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 300px;">
        <TextInput
          id="full-name"
          v-model="value"
          label="Full Name"
          :required="true"
          placeholder="John Doe"
          help-text="This field is required."
        />
      </div>
    \`
  })
}`,...(L=(H=m.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var C,O,_;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Disabled Field',
  render: () => ({
    components: {
      TextInput
    },
    setup() {
      const value = ref('Cannot edit this');
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 300px;">
        <TextInput
          id="locked"
          v-model="value"
          label="Locked Field"
          :disabled="true"
        />
      </div>
    \`
  })
}`,...(_=(O=d.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var j,J,K;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'With Prefix',
  render: () => ({
    components: {
      TextInput
    },
    setup() {
      const value = ref('');
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 300px;">
        <TextInput
          id="price"
          v-model="value"
          label="Price"
          type="number"
          placeholder="0.00"
        >
          <template #prefix>$</template>
        </TextInput>
      </div>
    \`
  })
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Y,z,B;c.parameters={...c.parameters,docs:{...(Y=c.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'With Suffix',
  render: () => ({
    components: {
      TextInput
    },
    setup() {
      const value = ref('');
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 300px;">
        <TextInput
          id="website"
          v-model="value"
          label="Website"
          placeholder="example"
        >
          <template #suffix>.com</template>
        </TextInput>
      </div>
    \`
  })
}`,...(B=(z=c.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var V,$,G;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'With Prefix and Suffix',
  render: () => ({
    components: {
      TextInput
    },
    setup() {
      const value = ref('');
      return {
        value
      };
    },
    template: \`
      <div style="min-width: 300px;">
        <TextInput
          id="subdomain"
          v-model="value"
          label="Subdomain"
          placeholder="mysite"
        >
          <template #prefix>https://</template>
          <template #suffix>.asu.edu</template>
        </TextInput>
      </div>
    \`
  })
}`,...(G=($=v.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var M,Q,X;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'All Features Combined',
  render: () => ({
    components: {
      TextInput
    },
    setup() {
      const value = ref('');
      const isInvalid = ref(false);
      return {
        value,
        isInvalid
      };
    },
    template: \`
      <div style="min-width: 350px;">
        <TextInput
          id="asurite"
          v-model="value"
          label="ASURITE ID"
          tooltip="Your ASURITE ID is your unique ASU username"
          :optional="true"
          placeholder="jdoe1"
          help-text="This is used for ASU system access."
          error-text="ASURITE ID must be alphanumeric."
          :invalid="isInvalid"
        >
          <template #suffix>@asu.edu</template>
        </TextInput>
        <button class="btn btn-sm btn-outline-secondary mt-3" @click="isInvalid = !isInvalid">
          Toggle Invalid: {{ isInvalid }}
        </button>
      </div>
    \`
  })
}`,...(X=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,te;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Complete Form Example',
  render: () => ({
    components: {
      TextInput
    },
    setup() {
      const form = ref({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
      });
      const errors = ref({
        firstName: false,
        lastName: false,
        email: false,
        phone: false
      });
      return {
        form,
        errors
      };
    },
    template: \`
      <form class="p-4 border rounded" style="min-width: 400px;">
        <h4 class="mb-4">Contact Information</h4>

        <TextInput
          id="form-firstName"
          v-model="form.firstName"
          label="First Name"
          :required="true"
          placeholder="John"
          error-text="First name is required."
          :invalid="errors.firstName"
          class="mb-3"
        />

        <TextInput
          id="form-lastName"
          v-model="form.lastName"
          label="Last Name"
          :required="true"
          placeholder="Doe"
          error-text="Last name is required."
          :invalid="errors.lastName"
          class="mb-3"
        />

        <TextInput
          id="form-email"
          v-model="form.email"
          label="Email"
          tooltip="We'll send a confirmation email"
          :required="true"
          type="email"
          placeholder="john.doe@asu.edu"
          help-text="Use your ASU email if available."
          error-text="Please enter a valid email address."
          :invalid="errors.email"
          class="mb-3"
        />

        <TextInput
          id="form-phone"
          v-model="form.phone"
          label="Phone Number"
          :optional="true"
          type="tel"
          placeholder="(555) 123-4567"
          help-text="We'll only call if there's an issue."
          error-text="Please enter a valid phone number."
          :invalid="errors.phone"
          class="mb-3"
        />

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    \`
  })
}`,...(te=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const ue=["Default","WithHelp","WithError","WithHelpAndError","WithTooltip","Optional","Required","Disabled","WithPrefix","WithSuffix","WithPrefixAndSuffix","AllFeatures","FormExample"];export{x as AllFeatures,l as Default,d as Disabled,h as FormExample,p as Optional,m as Required,o as WithError,i as WithHelp,s as WithHelpAndError,u as WithPrefix,v as WithPrefixAndSuffix,c as WithSuffix,n as WithTooltip,ue as __namedExportsOrder,de as default};
