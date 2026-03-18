import{r as i}from"./vue.esm-bundler-DQ1Hw63L.js";import{_ as h,a as s}from"./index-Dbne2AHe.js";import"./index-DY-ezr3f.js";import"./Primitive-Rd18uyw-.js";import"./InputHelp-D5FNCJnW.js";import"./index-DGB1qItb.js";import"./TooltipTrigger-Dg6AGGiz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VisuallyHiddenInput-fuKssHsY.js";import"./RovingFocusItem-B9dzhp3Z.js";const w={title:"Components/Checkbox",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Checkbox primitives and composed checkbox fields with InputRoot/Label/Help/Error integration."}}}},e={render:()=>({components:{Checkbox:s},setup(){return{consent:i("N")}},template:`
      <div style="width: 520px">
        <Checkbox
          id="consent-checkbox"
          v-model="consent"
          label="I agree to receive SMS notifications about my application"
          size="lg"
          variant="rds-dark-3"
          help-text="Standard message and data rates may apply."
        />

        <p class="mt-2" style="font-size: 0.875rem; color: var(--rds-dark-2, #484848)">
          Value: {{ consent }}
        </p>
      </div>
    `})},a={render:()=>({components:{CheckboxGroup:h},setup(){return{selected:i(["email"]),options:[{value:"email",label:"Email notifications"},{value:"sms",label:"SMS notifications"},{value:"push",label:"Push notifications"},{value:"mail",label:"Postal mail updates"}]}},template:`
      <div style="width: 520px">
        <CheckboxGroup
          id="notification-preferences"
          v-model="selected"
          label="Notification preferences"
          :options="options"
          spacing="sm"
          size="md"
          variant="rds-dark-3"
          help-text="Choose one or more channels."
        />

        <p class="mt-2" style="font-size: 0.875rem; color: var(--rds-dark-2, #484848)">
          Selected: {{ selected.join(', ') || 'None' }}
        </p>
      </div>
    `})},t={render:()=>({components:{Checkbox:s,CheckboxGroup:h},setup(){const o=i("N"),n=i([]);return{accepted:o,identities:n,identityOptions:[{value:"american-indian-alaska-native",label:"American Indian/Alaska Native"},{value:"asian",label:"Asian"},{value:"black-african-american",label:"Black or African American"},{value:"native-hawaiian-pacific-islander",label:"Native Hawaiian/Pacific Islander"}]}},template:`
      <div style="width: 760px; display: grid; gap: 1.5rem;">
        <Checkbox
          id="example-single"
          v-model="accepted"
          label="I confirm the above information is accurate"
          size="lg"
          variant="rds-dark-3"
        />

        <CheckboxGroup
          id="example-group"
          v-model="identities"
          label="Please choose all that apply:"
          :options="identityOptions"
          spacing="sm"
          size="sm"
          variant="rds-dark-3"
        />
      </div>
    `})};var r,l,c;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Checkbox
    },
    setup() {
      const consent = ref<'Y' | 'N' | null>('N');
      return {
        consent
      };
    },
    template: \`
      <div style="width: 520px">
        <Checkbox
          id="consent-checkbox"
          v-model="consent"
          label="I agree to receive SMS notifications about my application"
          size="lg"
          variant="rds-dark-3"
          help-text="Standard message and data rates may apply."
        />

        <p class="mt-2" style="font-size: 0.875rem; color: var(--rds-dark-2, #484848)">
          Value: {{ consent }}
        </p>
      </div>
    \`
  })
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,d,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CheckboxGroup
    },
    setup() {
      const selected = ref<Array<string | number>>(['email']);
      const options = [{
        value: 'email',
        label: 'Email notifications'
      }, {
        value: 'sms',
        label: 'SMS notifications'
      }, {
        value: 'push',
        label: 'Push notifications'
      }, {
        value: 'mail',
        label: 'Postal mail updates'
      }];
      return {
        selected,
        options
      };
    },
    template: \`
      <div style="width: 520px">
        <CheckboxGroup
          id="notification-preferences"
          v-model="selected"
          label="Notification preferences"
          :options="options"
          spacing="sm"
          size="md"
          variant="rds-dark-3"
          help-text="Choose one or more channels."
        />

        <p class="mt-2" style="font-size: 0.875rem; color: var(--rds-dark-2, #484848)">
          Selected: {{ selected.join(', ') || 'None' }}
        </p>
      </div>
    \`
  })
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,v,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Checkbox,
      CheckboxGroup
    },
    setup() {
      const accepted = ref<'Y' | 'N' | null>('N');
      const identities = ref<Array<string | number>>([]);
      const identityOptions = [{
        value: 'american-indian-alaska-native',
        label: 'American Indian/Alaska Native'
      }, {
        value: 'asian',
        label: 'Asian'
      }, {
        value: 'black-african-american',
        label: 'Black or African American'
      }, {
        value: 'native-hawaiian-pacific-islander',
        label: 'Native Hawaiian/Pacific Islander'
      }];
      return {
        accepted,
        identities,
        identityOptions
      };
    },
    template: \`
      <div style="width: 760px; display: grid; gap: 1.5rem;">
        <Checkbox
          id="example-single"
          v-model="accepted"
          label="I confirm the above information is accurate"
          size="lg"
          variant="rds-dark-3"
        />

        <CheckboxGroup
          id="example-group"
          v-model="identities"
          label="Please choose all that apply:"
          :options="identityOptions"
          spacing="sm"
          size="sm"
          variant="rds-dark-3"
        />
      </div>
    \`
  })
}`,...(b=(v=t.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const G=["SingleLarge","GroupListItem","ImplementationExamples"];export{a as GroupListItem,t as ImplementationExamples,e as SingleLarge,G as __namedExportsOrder,w as default};
