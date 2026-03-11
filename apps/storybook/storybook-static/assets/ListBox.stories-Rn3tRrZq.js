import{r as t}from"./vue.esm-bundler-DIwgUAuo.js";import{L as u,a as j,b as v}from"./ListBoxSelectIcon-C3FMHP59.js";import"./Primitive-DEAM-xiZ.js";import"./index-ClWIXl7b.js";import"./index-DSxA2iZ_.js";import"./InputHelp-CgoVujsi.js";import"./index-CGkXqMRd.js";import"./TooltipContent-814Cu58g.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VisuallyHiddenInput-BC-QcxJ9.js";import"./RovingFocusItem-DEglRN0X.js";import"./useNonce-nuqjDfwi.js";const $={title:"Components/ListBox",component:u,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Single-select listbox styled like the application dropdown pattern with click-first behavior and keyboard navigation."}}}},J=[{label:"United States",value:"us"},{label:"Afghanistan",value:"af"},{label:"Aland Islands",value:"ax"},{label:"Albania",value:"al"},{label:"Algeria",value:"dz"},{label:"American Samoa",value:"as"},{label:"Andorra",value:"ad"},{label:"Angola",value:"ao"},{label:"Anguilla",value:"ai"},{label:"Antarctica",value:"aq"},{label:"India",value:"in"}],a={render:()=>({components:{ListBoxSelect:u},setup(){return{country:t("in"),countries:J}},template:`
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
    `})},s={render:()=>({components:{ListBoxSelect:u},setup(){return{suffix:t(null),suffixOptions:[{label:"Mr.",value:"mr"},{label:"Ms.",value:"ms"},{label:"Mx.",value:"mx"},{label:"Dr.",value:"dr"}]}},template:`
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
    `})},o={render:()=>({components:{ListBoxSelect:u},setup(){return{source:t("salesforce"),sourceOptions:[{label:"PeopleSoft",value:"peoplesoft"},{label:"Salesforce",value:"salesforce"},{label:"Slate",value:"slate"}]}},template:`
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
    `})},i={render:()=>({components:{ListBoxMultiSelect:v},setup(){return{selectedEthnicities:t([]),ethnicityOptions:[{label:"American Indian/Alaska Native",value:"american-indian-alaska-native"},{label:"Asian",value:"asian"},{label:"Black or African American",value:"black-african-american"},{label:"Native Hawaiian/Pacific Islander",value:"native-hawaiian-pacific-islander"},{label:"White",value:"white"}]}},template:`
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
    `})},r={render:()=>({components:{ListBoxSelectIcon:j},setup(){const e=t("degree");return{intentOptions:[{label:"take classes as a nondegree or visiting student",value:"nondegree",description:"Coursework without a degree track"},{label:"pursue a degree",value:"degree",description:"Undergraduate or graduate program"}],studyIntent:e}},template:`
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
    `})},n={render:()=>({components:{ListBoxMultiSelect:v},setup(){const e=t([]),l=t([]),d=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Cherry",value:"cherry"},{label:"Dragonfruit",value:"dragonfruit"},{label:"Elderberry",value:"elderberry"}];function b(H){l.value=H.map(p=>{const m=d.find(U=>U.value===p);return{label:(m==null?void 0:m.label)??p,value:p}})}return{selected:e,fruitOptions:d,emittedLog:l,handleChange:b}},template:`
      <div style="width: 540px">
        <ListBoxMultiSelect
          id="fruit-emit-demo"
          v-model="selected"
          label="Pick your fruits"
          :options="fruitOptions"
          placeholder="Select one or more fruits"
          plural-label="fruits"
          clearable
          @change="handleChange"
        />

        <div
          class="mt-3"
          style="
            padding: 1rem;
            background: var(--rds-light-1, #fafafa);
            border: 1px solid var(--rds-light-4, #d0d0d0);
            border-radius: 4px;
            font-size: 0.875rem;
          "
        >
          <strong>Emitted array (label + value):</strong>
          <pre v-if="emittedLog.length" style="margin: 0.5rem 0 0; white-space: pre-wrap;">{{ JSON.stringify(emittedLog, null, 2) }}</pre>
          <p v-else style="margin: 0.5rem 0 0; color: var(--rds-dark-1, #747474);">
            No items selected yet. Click menu items to see the emitted array.
          </p>
        </div>
      </div>
    `})},c={render:()=>({components:{ListBoxMultiSelect:v},setup(){const e=t(["ai","security","robotics"]),l=t(["engineering"]);return{collegeOptions:[{label:"Engineering",value:"engineering"},{label:"Liberal Arts",value:"liberal-arts"},{label:"Business",value:"business"}],interestAreaOptions:[{label:"Artificial Intelligence",value:"ai"},{label:"Cybersecurity",value:"security"},{label:"Robotics",value:"robotics"},{label:"Data Science",value:"data-science"}],selectedColleges:l,selectedInterestAreas:e}},template:`
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
    `})};var f,g,h;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,x,S;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(S=(x=s.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var O,L,B;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(B=(L=o.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var A,w,I;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(w=i.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var k,C,M;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(M=(C=r.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var E,N,z;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ListBoxMultiSelect
    },
    setup() {
      const selected = ref<string[]>([]);
      const emittedLog = ref<Array<{
        label: string;
        value: string;
      }>>([]);
      const fruitOptions = [{
        label: 'Apple',
        value: 'apple'
      }, {
        label: 'Banana',
        value: 'banana'
      }, {
        label: 'Cherry',
        value: 'cherry'
      }, {
        label: 'Dragonfruit',
        value: 'dragonfruit'
      }, {
        label: 'Elderberry',
        value: 'elderberry'
      }];
      function handleChange(values: string[]) {
        emittedLog.value = values.map(val => {
          const match = fruitOptions.find(o => o.value === val);
          return {
            label: match?.label ?? val,
            value: val
          };
        });
      }
      return {
        selected,
        fruitOptions,
        emittedLog,
        handleChange
      };
    },
    template: \`
      <div style="width: 540px">
        <ListBoxMultiSelect
          id="fruit-emit-demo"
          v-model="selected"
          label="Pick your fruits"
          :options="fruitOptions"
          placeholder="Select one or more fruits"
          plural-label="fruits"
          clearable
          @change="handleChange"
        />

        <div
          class="mt-3"
          style="
            padding: 1rem;
            background: var(--rds-light-1, #fafafa);
            border: 1px solid var(--rds-light-4, #d0d0d0);
            border-radius: 4px;
            font-size: 0.875rem;
          "
        >
          <strong>Emitted array (label + value):</strong>
          <pre v-if="emittedLog.length" style="margin: 0.5rem 0 0; white-space: pre-wrap;">{{ JSON.stringify(emittedLog, null, 2) }}</pre>
          <p v-else style="margin: 0.5rem 0 0; color: var(--rds-dark-1, #747474);">
            No items selected yet. Click menu items to see the emitted array.
          </p>
        </div>
      </div>
    \`
  })
}`,...(z=(N=n.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var D,P,q;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(q=(P=c.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};const ee=["Default","ValidationState","Disabled","MultiSelectCheckbox","IconOptions","MultiSelectEmitArray","MultiSelectCustomSummaryLabel"];export{a as Default,o as Disabled,r as IconOptions,i as MultiSelectCheckbox,c as MultiSelectCustomSummaryLabel,n as MultiSelectEmitArray,s as ValidationState,ee as __namedExportsOrder,$ as default};
