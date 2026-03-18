import{d as le,q as ae,w as L,r as n,B as k,y as z,z as A,a as N,b as P,s as T,u as _,v as K,c as f,o as v,f as Q}from"./vue.esm-bundler-DQ1Hw63L.js";import{C as oe,a as re}from"./ComboboxSeparator-sPDkIAg0.js";import{_ as se}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./TooltipTrigger-Dg6AGGiz.js";import"./Primitive-Rd18uyw-.js";import"./InputHelp-D5FNCJnW.js";import"./index-DGB1qItb.js";import"./index-DY-ezr3f.js";import"./VisuallyHiddenInput-fuKssHsY.js";const ne=["id"],ie=["for"],ue={key:3,class:"invalid-feedback d-block"},W=le({__name:"BaseSelect",props:K({id:{},label:{},labelLevel:{default:"h3"},labelSize:{default:"small"},placeholder:{default:"Choose one..."},options:{},isLabelVisible:{type:Boolean,default:!0},isMultiSelect:{type:Boolean,default:!1},isDisabled:{type:Boolean,default:!1},isOptional:{type:Boolean,default:!1},tooltipText:{},required:{type:Boolean,default:!1},errors:{default:()=>[]},customDropDownClass:{},error:{},hasError:{type:Boolean},isTypeable:{type:Boolean,default:!0},isDeselectOptionVisible:{type:Boolean,default:!0},noOptionsText:{default:"Nothing found. Check your spelling"},optionLabelKey:{default:"text"},optionValueKey:{default:"value"}},{modelValue:{type:[Object,String,Number,Boolean,Array,null]},modelModifiers:{}}),emits:K(["change","remove","search"],["update:modelValue"]),setup(r,{emit:u}){const t=r,d=u,b=f(()=>t.errors.length>0||!!t.error||!!t.hasError),w=f(()=>t.errors[0]||t.error||""),E=f(()=>t.noOptionsText||"Nothing found. Check your spelling"),s=ae(r,"modelValue"),c=n("");L(c,e=>{d("search",e)});function B(e){if(e==null||typeof e!="object")return e;const l=e;return l[t.optionValueKey]??l.value??l.stateCode??l.code??l.id??e}function y(e){return B(e)}function m(e,l){return Object.is(y(e),y(l))}function g(e){if(e==null)return null;const l=t.options.find(a=>m(a,e));return l!==void 0?l:typeof e=="object"?e:null}function h(e){return g(e)}function S(e){if(!Array.isArray(e))return[];const l=[];return e.forEach(a=>{const o=g(a);o&&(l.some(i=>m(i,o))||l.push(o))}),l}function X(e){if(e==null||Array.isArray(e))return null;const l=g(e);return l!==null?B(l):y(e)}function Y(e){if(!Array.isArray(e))return[];const l=[];return e.forEach(a=>{const o=g(a),i=o!==null?B(o):y(a);i!=null&&(l.some(te=>m(te,i))||l.push(i))}),l}const D=f({get:()=>X(s.value),set:e=>{s.value=h(e)}}),M=f({get:()=>Y(s.value),set:e=>{s.value=S(e)}}),p=n(h(s.value)),C=n(S(s.value));L(()=>s.value,e=>{if(t.isMultiSelect){C.value=S(e);return}p.value=h(e)},{deep:!0,flush:"post"});function Z(e){const l=h(e);p.value!==null&&(l===null||!m(p.value,l))&&d("remove",p.value),p.value=l,d("change",l)}function ee(e){const l=S(e);C.value.filter(a=>!l.some(o=>m(o,a))).forEach(a=>d("remove",a)),C.value=l,d("change",l)}return(e,l)=>(v(),k("div",{id:`base_select_${r.id}`,class:T(["base-select position-relative",[{"is-invalid":b.value},{"is-disabled":t.isDisabled},t.isMultiSelect?"multi-select":"single-select"]])},[t.label?(v(),k("label",{key:0,for:t.id,class:"base-select-legacy-label d-none"},z(t.label),9,ie)):A("",!0),t.isMultiSelect?(v(),N(_(re),{key:2,id:t.id,modelValue:M.value,"onUpdate:modelValue":l[2]||(l[2]=a=>M.value=a),"search-term":c.value,"onUpdate:searchTerm":l[3]||(l[3]=a=>c.value=a),label:t.isLabelVisible?t.label:void 0,placeholder:t.placeholder,options:t.options,disabled:t.isDisabled,optional:t.isOptional,tooltip:t.tooltipText,required:t.required,invalid:b.value,clearable:t.isDeselectOptionVisible,"empty-text":E.value,class:T(t.customDropDownClass),"option-label-key":t.optionLabelKey,"option-value-key":t.optionValueKey,onChange:ee},{belowLabel:P(()=>[Q(e.$slots,"belowLabel",{},void 0,!0)]),_:3},8,["id","modelValue","search-term","label","placeholder","options","disabled","optional","tooltip","required","invalid","clearable","empty-text","class","option-label-key","option-value-key"])):(v(),N(_(oe),{key:1,id:t.id,modelValue:D.value,"onUpdate:modelValue":l[0]||(l[0]=a=>D.value=a),"search-term":c.value,"onUpdate:searchTerm":l[1]||(l[1]=a=>c.value=a),label:t.isLabelVisible?t.label:void 0,placeholder:t.placeholder,options:t.options,disabled:t.isDisabled,optional:t.isOptional,tooltip:t.tooltipText,required:t.required,invalid:b.value,clearable:t.isDeselectOptionVisible,"empty-text":E.value,class:T(t.customDropDownClass),"option-label-key":t.optionLabelKey,"option-value-key":t.optionValueKey,onChange:Z},{belowLabel:P(()=>[Q(e.$slots,"belowLabel",{},void 0,!0)]),_:3},8,["id","modelValue","search-term","label","placeholder","options","disabled","optional","tooltip","required","invalid","clearable","empty-text","class","option-label-key","option-value-key"])),b.value&&w.value?(v(),k("span",ue,z(w.value),1)):A("",!0)],10,ne))}}),q=se(W,[["__scopeId","data-v-03fed95e"]]);W.__docgenInfo={exportName:"default",displayName:"BaseSelect",description:"",tags:{},props:[{name:"id",required:!0,type:{name:"string"}},{name:"label",required:!1,type:{name:"string"}},{name:"labelLevel",required:!1,type:{name:"BaseSelectLabelLevel"},defaultValue:{func:!1,value:"'h3'"}},{name:"labelSize",required:!1,type:{name:"BaseSelectLabelSize"},defaultValue:{func:!1,value:"'small'"}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Choose one...'"}},{name:"options",required:!0,type:{name:"Array",elements:[{name:"SelectOption"}]}},{name:"isLabelVisible",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"isMultiSelect",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isDisabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isOptional",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"tooltipText",required:!1,type:{name:"string"}},{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"errors",required:!1,type:{name:"Array",elements:[{name:"string"}]},defaultValue:{func:!1,value:"() => []"}},{name:"customDropDownClass",required:!1,type:{name:"string"}},{name:"error",required:!1,type:{name:"string"}},{name:"hasError",required:!1,type:{name:"boolean"}},{name:"isTypeable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"isDeselectOptionVisible",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"noOptionsText",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"'Nothing found. Check your spelling'"}},{name:"optionLabelKey",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'text'"}},{name:"optionValueKey",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'value'"}}],events:[{name:"change",type:{names:["BaseModelValue"]}},{name:"remove",type:{names:["unknown"]}},{name:"search",type:{names:["string"]}}],slots:[{name:"belowLabel"}],sourceFiles:["/Users/shashankshandilya/Documents/adms-ui-registry/apps/storybook/src/components/ui/base-select/BaseSelect.vue"]};const Se={title:"Components/BaseSelect",component:q,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Reusable select wrapper with a single API for single and multi-select scenarios, built on top of ComboboxSelect and ComboboxMultiSelect."}}}},de=[{text:"First-time Student",value:"first-time"},{text:"Transfer Student",value:"transfer"},{text:"Graduate Student",value:"graduate"},{text:"Non-degree Student",value:"non-degree"}],V={render:()=>({components:{BaseSelect:q},setup(){const r=n(null),u=n("");return{selectedEnrollment:r,searchQuery:u,enrollmentOptions:de}},template:`
      <div style="width: 440px; display: grid; gap: 1rem;">
        <BaseSelect
          id="base-select-single"
          v-model="selectedEnrollment"
          label="Enrollment Type"
          :options="enrollmentOptions"
          placeholder="Choose one..."
          @search="value => searchQuery = value"
        />

        <p style="font-size: 0.875rem; color: var(--rds-dark-2, #484848); margin: 0;">
          Selected: {{ selectedEnrollment?.text ?? 'None' }}
        </p>

        <p style="font-size: 0.875rem; color: var(--rds-dark-2, #484848); margin: 0;">
          Search term: {{ searchQuery || '—' }}
        </p>
      </div>
    `})},x={render:()=>({components:{BaseSelect:q},setup(){return{selectedPrograms:n([]),programOptions:[{text:"Business Administration",value:"business-administration"},{text:"Computer Science",value:"computer-science"},{text:"Data Science",value:"data-science"},{text:"Mechanical Engineering",value:"mechanical-engineering"}]}},template:`
      <div style="width: 540px; display: grid; gap: 1rem;">
        <BaseSelect
          id="base-select-multi"
          v-model="selectedPrograms"
          label="Programs of Interest"
          :options="programOptions"
          :is-multi-select="true"
          placeholder="Choose one or more..."
        />

        <p style="font-size: 0.875rem; color: var(--rds-dark-2, #484848); margin: 0;">
          Selected values:
          {{ selectedPrograms.map(option => option.value).join(', ') || 'None' }}
        </p>
      </div>
    `})},O={render:()=>({components:{BaseSelect:q},setup(){return{selectedTerm:n(null),termOptions:[{text:"Spring 2026",value:"spring-2026"},{text:"Summer 2026",value:"summer-2026"},{text:"Fall 2026",value:"fall-2026"}]}},template:`
      <div style="width: 440px;">
        <BaseSelect
          id="base-select-validation"
          v-model="selectedTerm"
          label="Entry Term"
          :options="termOptions"
          required
          :errors="selectedTerm ? [] : ['Entry term is required.']"
        />
      </div>
    `})};var j,I,U;V.parameters={...V.parameters,docs:{...(j=V.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BaseSelect
    },
    setup() {
      const selectedEnrollment = ref<Record<string, unknown> | null>(null);
      const searchQuery = ref('');
      return {
        selectedEnrollment,
        searchQuery,
        enrollmentOptions
      };
    },
    template: \`
      <div style="width: 440px; display: grid; gap: 1rem;">
        <BaseSelect
          id="base-select-single"
          v-model="selectedEnrollment"
          label="Enrollment Type"
          :options="enrollmentOptions"
          placeholder="Choose one..."
          @search="value => searchQuery = value"
        />

        <p style="font-size: 0.875rem; color: var(--rds-dark-2, #484848); margin: 0;">
          Selected: {{ selectedEnrollment?.text ?? 'None' }}
        </p>

        <p style="font-size: 0.875rem; color: var(--rds-dark-2, #484848); margin: 0;">
          Search term: {{ searchQuery || '—' }}
        </p>
      </div>
    \`
  })
}`,...(U=(I=V.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};var F,R,$;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BaseSelect
    },
    setup() {
      const selectedPrograms = ref<Record<string, unknown>[]>([]);
      const programOptions = [{
        text: 'Business Administration',
        value: 'business-administration'
      }, {
        text: 'Computer Science',
        value: 'computer-science'
      }, {
        text: 'Data Science',
        value: 'data-science'
      }, {
        text: 'Mechanical Engineering',
        value: 'mechanical-engineering'
      }];
      return {
        selectedPrograms,
        programOptions
      };
    },
    template: \`
      <div style="width: 540px; display: grid; gap: 1rem;">
        <BaseSelect
          id="base-select-multi"
          v-model="selectedPrograms"
          label="Programs of Interest"
          :options="programOptions"
          :is-multi-select="true"
          placeholder="Choose one or more..."
        />

        <p style="font-size: 0.875rem; color: var(--rds-dark-2, #484848); margin: 0;">
          Selected values:
          {{ selectedPrograms.map(option => option.value).join(', ') || 'None' }}
        </p>
      </div>
    \`
  })
}`,...($=(R=x.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var G,H,J;O.parameters={...O.parameters,docs:{...(G=O.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BaseSelect
    },
    setup() {
      const selectedTerm = ref<Record<string, unknown> | null>(null);
      const termOptions = [{
        text: 'Spring 2026',
        value: 'spring-2026'
      }, {
        text: 'Summer 2026',
        value: 'summer-2026'
      }, {
        text: 'Fall 2026',
        value: 'fall-2026'
      }];
      return {
        selectedTerm,
        termOptions
      };
    },
    template: \`
      <div style="width: 440px;">
        <BaseSelect
          id="base-select-validation"
          v-model="selectedTerm"
          label="Entry Term"
          :options="termOptions"
          required
          :errors="selectedTerm ? [] : ['Entry term is required.']"
        />
      </div>
    \`
  })
}`,...(J=(H=O.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const Ve=["SingleSelect","MultiSelect","ValidationState"];export{x as MultiSelect,V as SingleSelect,O as ValidationState,Ve as __namedExportsOrder,Se as default};
