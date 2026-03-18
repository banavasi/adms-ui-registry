import{r as t}from"./vue.esm-bundler-DQ1Hw63L.js";import{L as c,a as C,b as k}from"./ListBoxSelectIcon-BOQCjFgI.js";import"./Primitive-Rd18uyw-.js";import"./index-Dbne2AHe.js";import"./index-DY-ezr3f.js";import"./InputHelp-D5FNCJnW.js";import"./index-DGB1qItb.js";import"./TooltipTrigger-Dg6AGGiz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VisuallyHiddenInput-fuKssHsY.js";import"./RovingFocusItem-B9dzhp3Z.js";import"./ComboboxSeparator-sPDkIAg0.js";const G={title:"Components/ListBox",component:c,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Single-select listbox styled like the application dropdown pattern with click-first behavior and keyboard navigation."}}}},M=[{label:"United States",value:"us"},{label:"Afghanistan",value:"af"},{label:"Aland Islands",value:"ax"},{label:"Albania",value:"al"},{label:"Algeria",value:"dz"},{label:"American Samoa",value:"as"},{label:"Andorra",value:"ad"},{label:"Angola",value:"ao"},{label:"Anguilla",value:"ai"},{label:"Antarctica",value:"aq"},{label:"India",value:"in"}],s={render:()=>({components:{ListBoxSelect:c},setup(){return{country:t("in"),countries:M}},template:`
      <div style="width: 440px">
        <ListBoxSelect
          id="home-country"
          v-model="country"
          label="Home country"
          :options="countries"
          placeholder="Select your home country"
          help-text="Begin by selecting your home country."
          clearable
        />

        <p class="mt-2" style="font-size: 0.875rem; color: var(--rds-dark-2, #484848)">
          Selected: {{ country ?? 'None' }}
        </p>
      </div>
    `})},o={render:()=>({components:{ListBoxSelect:c},setup(){return{suffix:t(null),suffixOptions:[{label:"Mr.",value:"mr"},{label:"Ms.",value:"ms"},{label:"Mx.",value:"mx"},{label:"Dr.",value:"dr"}]}},template:`
      <div style="width: 440px">
        <ListBoxSelect
          id="suffix-listbox"
          v-model="suffix"
          label="Suffix"
          :options="suffixOptions"
          placeholder="Choose a suffix"
          invalid
          error-text="Suffix is required."
          required
        />
      </div>
    `})},i={render:()=>({components:{ListBoxSelect:c},setup(){return{source:t("salesforce"),sourceOptions:[{label:"PeopleSoft",value:"peoplesoft"},{label:"Salesforce",value:"salesforce"},{label:"Slate",value:"slate"}]}},template:`
      <div style="width: 440px">
        <ListBoxSelect
          id="source-system-listbox"
          v-model="source"
          label="Source system"
          :options="sourceOptions"
          disabled
          help-text="System is locked after submission."
        />
      </div>
    `})},a={render:()=>({components:{ListBoxMultiSelect:k},setup(){return{selectedEthnicities:t([]),ethnicityOptions:[{label:"American Indian/Alaska Native",value:"american-indian-alaska-native"},{label:"Asian",value:"asian"},{label:"Black or African American",value:"black-african-american"},{label:"Native Hawaiian/Pacific Islander",value:"native-hawaiian-pacific-islander"},{label:"White",value:"white"}]}},template:`
      <div style="width: 640px">
        <ListBoxMultiSelect
          id="ethnicity-listbox-multi"
          v-model="selectedEthnicities"
          label="Please choose all that apply:"
          :options="ethnicityOptions"
          placeholder="Choose one or more options"
          plural-label="selected options"
          help-text="If one option is selected, its label is shown. If multiple are selected, a total count is shown."
          clearable
        />

        <p class="mt-2" style="font-size: 0.875rem; color: var(--rds-dark-2, #484848)">
          Selected values: {{ selectedEthnicities.join(', ') || 'None' }}
        </p>
      </div>
    `})},n={render:()=>({components:{ListBoxSelectIcon:C},setup(){const e=t("degree");return{intentOptions:[{label:"take classes as a nondegree or visiting student",value:"nondegree",description:"Coursework without a degree track"},{label:"pursue a degree",value:"degree",description:"Undergraduate or graduate program"}],studyIntent:e}},template:`
      <div style="width: 560px">
        <ListBoxSelectIcon
          id="intent-listbox-icon"
          v-model="studyIntent"
          label="I want to.."
          :options="intentOptions"
          placeholder="Select an option"
        >
          <template #option-icon="{ option }">
            <span
              v-if="option.value === 'nondegree'"
              aria-hidden="true"
              style="font-size: 28px; line-height: 1;"
            >
              🧑‍🏫
            </span>
            <span
              v-else
              aria-hidden="true"
              style="font-size: 28px; line-height: 1;"
            >
              🎓
            </span>
          </template>
        </ListBoxSelectIcon>
      </div>
    `})},r={render:()=>({components:{ListBoxMultiSelect:k},setup(){const e=t(["ai","security","robotics"]),l=t(["engineering"]);return{collegeOptions:[{label:"Engineering",value:"engineering"},{label:"Liberal Arts",value:"liberal-arts"},{label:"Business",value:"business"}],interestAreaOptions:[{label:"Artificial Intelligence",value:"ai"},{label:"Cybersecurity",value:"security"},{label:"Robotics",value:"robotics"},{label:"Data Science",value:"data-science"}],selectedColleges:l,selectedInterestAreas:e}},template:`
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; width: 980px;">
        <ListBoxMultiSelect
          id="interest-area-custom-summary"
          v-model="selectedInterestAreas"
          :options="interestAreaOptions"
          placeholder="Choose one or more options"
          clearable
        >
          <template #summary="{ count }">
            Interest area: ({{ count }})
          </template>
        </ListBoxMultiSelect>

        <ListBoxMultiSelect
          id="college-custom-summary"
          v-model="selectedColleges"
          :options="collegeOptions"
          placeholder="Choose one or more options"
          clearable
        >
          <template #summary="{ count }">
            College: ({{ count }})
          </template>
        </ListBoxMultiSelect>
      </div>
    `})};var u,p,d;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ListBoxSelect
    },
    setup() {
      const country = ref<string | null>('in');
      return {
        country,
        countries
      };
    },
    template: \`
      <div style="width: 440px">
        <ListBoxSelect
          id="home-country"
          v-model="country"
          label="Home country"
          :options="countries"
          placeholder="Select your home country"
          help-text="Begin by selecting your home country."
          clearable
        />

        <p class="mt-2" style="font-size: 0.875rem; color: var(--rds-dark-2, #484848)">
          Selected: {{ country ?? 'None' }}
        </p>
      </div>
    \`
  })
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,v,b;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ListBoxSelect
    },
    setup() {
      const suffix = ref<string | null>(null);
      const suffixOptions = [{
        label: 'Mr.',
        value: 'mr'
      }, {
        label: 'Ms.',
        value: 'ms'
      }, {
        label: 'Mx.',
        value: 'mx'
      }, {
        label: 'Dr.',
        value: 'dr'
      }];
      return {
        suffix,
        suffixOptions
      };
    },
    template: \`
      <div style="width: 440px">
        <ListBoxSelect
          id="suffix-listbox"
          v-model="suffix"
          label="Suffix"
          :options="suffixOptions"
          placeholder="Choose a suffix"
          invalid
          error-text="Suffix is required."
          required
        />
      </div>
    \`
  })
}`,...(b=(v=o.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var f,h,x;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ListBoxSelect
    },
    setup() {
      const source = ref<string | null>('salesforce');
      const sourceOptions = [{
        label: 'PeopleSoft',
        value: 'peoplesoft'
      }, {
        label: 'Salesforce',
        value: 'salesforce'
      }, {
        label: 'Slate',
        value: 'slate'
      }];
      return {
        source,
        sourceOptions
      };
    },
    template: \`
      <div style="width: 440px">
        <ListBoxSelect
          id="source-system-listbox"
          v-model="source"
          label="Source system"
          :options="sourceOptions"
          disabled
          help-text="System is locked after submission."
        />
      </div>
    \`
  })
}`,...(x=(h=i.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var y,g,S;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ListBoxMultiSelect
    },
    setup() {
      const selectedEthnicities = ref<string[]>([]);
      const ethnicityOptions = [{
        label: 'American Indian/Alaska Native',
        value: 'american-indian-alaska-native'
      }, {
        label: 'Asian',
        value: 'asian'
      }, {
        label: 'Black or African American',
        value: 'black-african-american'
      }, {
        label: 'Native Hawaiian/Pacific Islander',
        value: 'native-hawaiian-pacific-islander'
      }, {
        label: 'White',
        value: 'white'
      }];
      return {
        selectedEthnicities,
        ethnicityOptions
      };
    },
    template: \`
      <div style="width: 640px">
        <ListBoxMultiSelect
          id="ethnicity-listbox-multi"
          v-model="selectedEthnicities"
          label="Please choose all that apply:"
          :options="ethnicityOptions"
          placeholder="Choose one or more options"
          plural-label="selected options"
          help-text="If one option is selected, its label is shown. If multiple are selected, a total count is shown."
          clearable
        />

        <p class="mt-2" style="font-size: 0.875rem; color: var(--rds-dark-2, #484848)">
          Selected values: {{ selectedEthnicities.join(', ') || 'None' }}
        </p>
      </div>
    \`
  })
}`,...(S=(g=a.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var O,B,L;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ListBoxSelectIcon
    },
    setup() {
      const studyIntent = ref<string | null>('degree');
      const intentOptions = [{
        label: 'take classes as a nondegree or visiting student',
        value: 'nondegree',
        description: 'Coursework without a degree track'
      }, {
        label: 'pursue a degree',
        value: 'degree',
        description: 'Undergraduate or graduate program'
      }];
      return {
        intentOptions,
        studyIntent
      };
    },
    template: \`
      <div style="width: 560px">
        <ListBoxSelectIcon
          id="intent-listbox-icon"
          v-model="studyIntent"
          label="I want to.."
          :options="intentOptions"
          placeholder="Select an option"
        >
          <template #option-icon="{ option }">
            <span
              v-if="option.value === 'nondegree'"
              aria-hidden="true"
              style="font-size: 28px; line-height: 1;"
            >
              🧑‍🏫
            </span>
            <span
              v-else
              aria-hidden="true"
              style="font-size: 28px; line-height: 1;"
            >
              🎓
            </span>
          </template>
        </ListBoxSelectIcon>
      </div>
    \`
  })
}`,...(L=(B=n.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var A,I,w;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ListBoxMultiSelect
    },
    setup() {
      const selectedInterestAreas = ref<string[]>(['ai', 'security', 'robotics']);
      const selectedColleges = ref<string[]>(['engineering']);
      const interestAreaOptions = [{
        label: 'Artificial Intelligence',
        value: 'ai'
      }, {
        label: 'Cybersecurity',
        value: 'security'
      }, {
        label: 'Robotics',
        value: 'robotics'
      }, {
        label: 'Data Science',
        value: 'data-science'
      }];
      const collegeOptions = [{
        label: 'Engineering',
        value: 'engineering'
      }, {
        label: 'Liberal Arts',
        value: 'liberal-arts'
      }, {
        label: 'Business',
        value: 'business'
      }];
      return {
        collegeOptions,
        interestAreaOptions,
        selectedColleges,
        selectedInterestAreas
      };
    },
    template: \`
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; width: 980px;">
        <ListBoxMultiSelect
          id="interest-area-custom-summary"
          v-model="selectedInterestAreas"
          :options="interestAreaOptions"
          placeholder="Choose one or more options"
          clearable
        >
          <template #summary="{ count }">
            Interest area: ({{ count }})
          </template>
        </ListBoxMultiSelect>

        <ListBoxMultiSelect
          id="college-custom-summary"
          v-model="selectedColleges"
          :options="collegeOptions"
          placeholder="Choose one or more options"
          clearable
        >
          <template #summary="{ count }">
            College: ({{ count }})
          </template>
        </ListBoxMultiSelect>
      </div>
    \`
  })
}`,...(w=(I=r.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};const J=["Default","ValidationState","Disabled","MultiSelectCheckbox","IconOptions","MultiSelectCustomSummaryLabel"];export{s as Default,i as Disabled,n as IconOptions,a as MultiSelectCheckbox,r as MultiSelectCustomSummaryLabel,o as ValidationState,J as __namedExportsOrder,G as default};
