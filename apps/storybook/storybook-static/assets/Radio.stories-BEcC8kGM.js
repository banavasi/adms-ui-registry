import{d as M,o as t,a as u,b as n,e as V,u as r,E as U,s as p,q as K,O as Q,w as W,v as T,c as z,f as k,x as R,y as v,z as q,B as w,H as X,I as Y,r as m}from"./vue.esm-bundler-DQ1Hw63L.js";import{a as Z,R as ee}from"./RadioGroupItem-CZMthMKr.js";import{a as ae,b as oe,_ as re}from"./InputHelp-D5FNCJnW.js";import{a as x}from"./Primitive-Rd18uyw-.js";import{L as se}from"./index-DGB1qItb.js";import{R as le}from"./RadioGroupIndicator-B6uzeZY9.js";import{c as te}from"./index-DY-ezr3f.js";import"./TooltipTrigger-Dg6AGGiz.js";import"./RovingFocusItem-B9dzhp3Z.js";import"./VisuallyHiddenInput-fuKssHsY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const L=M({__name:"RadioPrimitive",props:{value:{},disabled:{type:Boolean,default:!1},variant:{default:"rds-dark-3"},size:{default:"md"},class:{}},setup(s){const o=s;return(e,c)=>(t(),u(r(Z),{value:String(o.value),disabled:o.disabled,"data-slot":"radio",class:p(r(x)(r(ne)({variant:o.variant,size:o.size}),o.disabled&&"opacity-50 cursor-not-allowed",o.class))},{default:n(()=>[V(r(le),{"as-child":""},{default:n(()=>[...c[0]||(c[0]=[U("span",{class:"radio-indicator"},null,-1)])]),_:1})]),_:1},8,["value","disabled","class"]))}});L.__docgenInfo={exportName:"default",displayName:"RadioPrimitive",description:"",tags:{},props:[{name:"value",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"variant",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'rds-dark-3'"}},{name:"size",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'md'"}},{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],sourceFiles:["/Users/shashankshandilya/Documents/adms-ui-registry/apps/storybook/src/components/ui/radio/RadioPrimitive.vue"]};const i=M({__name:"RadioGroup",props:T({id:{},label:{},options:{},modelValue:{default:void 0},spacing:{default:"sm"},variant:{default:"rds-dark-3"},size:{default:"md"},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},optional:{type:Boolean,default:!1},tooltip:{},invalid:{type:Boolean,default:!1},helpText:{},errorText:{},class:{}},{modelValue:{default:void 0},modelModifiers:{}}),emits:T(["change"],["update:modelValue"]),setup(s,{emit:o}){const e=s,c=o,d=K(s,"modelValue"),_=m(void 0);Q(()=>{_.value=d.value!==void 0?String(d.value):void 0}),W(()=>d.value,a=>c("change",a));function j(a){if(a===void 0){d.value=void 0;return}const S=e.options.find(l=>String(l.value)===a);d.value=S?S.value:a}function f(a){return e.disabled||!!a.disabled}const J=z(()=>({xs:"gap-space-xxs",sm:"gap-space-xs",md:"gap-space-sm",lg:"gap-space-md",xl:"gap-space-lg"})[e.spacing]),G=z(()=>e.invalid||!!e.errorText);return(a,S)=>(t(),u(r(re),{id:e.id,invalid:G.value,disabled:e.disabled,required:e.required,class:p(e.class)},{default:n(()=>[e.label||a.$slots.label?(t(),u(r(se),{key:0,for:e.id,tooltip:e.tooltip,optional:e.optional},{default:n(()=>[k(a.$slots,"label",{},()=>[R(v(e.label),1)])]),_:3},8,["for","tooltip","optional"])):q("",!0),V(r(ee),{id:e.id,"model-value":_.value,disabled:e.disabled,"data-slot":"radio-group",class:p(r(x)("d-flex flex-column",J.value)),"onUpdate:modelValue":j},{default:n(()=>[(t(!0),w(X,null,Y(e.options,l=>(t(),w("label",{key:String(l.value),"data-slot":"radio-group-item",class:p(r(x)("radio-option-row d-flex align-items-center gap-space-xxs user-select-none",!f(l)&&"cursor-pointer",f(l)&&"radio-option-disabled"))},[V(L,{value:l.value,disabled:f(l),variant:e.variant,size:e.size},null,8,["value","disabled","variant","size"]),U("span",{class:p(r(x)("radio-option-label",G.value&&!f(l)&&"text-danger"))},v(l.label),3)],2))),128))]),_:1},8,["id","model-value","disabled","class"]),e.helpText||a.$slots.help?(t(),u(r(ae),{key:1},{default:n(()=>[k(a.$slots,"help",{},()=>[R(v(e.helpText),1)])]),_:3})):q("",!0),e.errorText||a.$slots.error?(t(),u(r(oe),{key:2},{default:n(()=>[k(a.$slots,"error",{},()=>[R(v(e.errorText),1)])]),_:3})):q("",!0)]),_:3},8,["id","invalid","disabled","required","class"]))}});i.__docgenInfo={exportName:"default",displayName:"RadioGroup",description:"",tags:{},props:[{name:"id",required:!0,type:{name:"string"}},{name:"label",required:!0,type:{name:"string"}},{name:"options",required:!0,type:{name:"Array",elements:[{name:"RadioOption"}]}},{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]},defaultValue:{func:!1,value:"undefined"}},{name:"spacing",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'}]},defaultValue:{func:!1,value:"'sm'"}},{name:"variant",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'rds-dark-3'"}},{name:"size",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'md'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"optional",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"tooltip",required:!1,type:{name:"string"}},{name:"invalid",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"helpText",required:!1,type:{name:"string"}},{name:"errorText",required:!1,type:{name:"string"}},{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],events:[{name:"change",type:{names:["union"],elements:[{name:"string"},{name:"number"},{name:"undefined"}]}}],slots:[{name:"label"},{name:"help"},{name:"error"}],sourceFiles:["/Users/shashankshandilya/Documents/adms-ui-registry/apps/storybook/src/components/ui/radio/RadioGroup.vue"]};const ne=te("radio-base",{variants:{variant:{primary:"radio-primary",danger:"radio-danger","rds-dark-1":"radio-rds-dark-1","rds-dark-2":"radio-rds-dark-2","rds-dark-3":"radio-rds-dark-3"},size:{sm:"radio-sm",md:"radio-md",lg:"radio-lg"}},defaultVariants:{variant:"rds-dark-3",size:"md"}}),he={title:"Components/Radio",component:i,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Single-select radio group using InputRoot/Label/Help/Error and Reka UI keyboard semantics."}}}},g={render:()=>({components:{RadioGroup:i},setup(){const s=m("degree");return{options:[{value:"degree",label:"Pursue a degree"},{value:"nondegree",label:"Take classes as a nondegree student"},{value:"certificate",label:"Complete a certificate program"}],plan:s}},template:`
      <div style="width: 560px">
        <RadioGroup
          id="intent-radio-group"
          v-model="plan"
          label="I want to..."
          :options="options"
          size="md"
          variant="rds-dark-3"
          help-text="Choose one option."
        />

        <p class="mt-2" style="font-size: 0.875rem; color: var(--rds-dark-2, #484848)">
          Selected: {{ plan ?? 'None' }}
        </p>
      </div>
    `})},b={render:()=>({components:{RadioGroup:i},setup(){return{education:m(void 0),options:[{value:"high-school",label:"High school diploma or GED"},{value:"college",label:"Some college coursework"},{value:"bachelors",label:"Bachelor's degree"}]}},template:`
      <div style="width: 620px">
        <RadioGroup
          id="education-radio-group"
          v-model="education"
          label="Highest level of education"
          :options="options"
          invalid
          error-text="Please select one option."
          required
        />
      </div>
    `})},y={render:()=>({components:{RadioGroup:i},setup(){return{enrollment:m("fall"),options:[{value:"fall",label:"Fall 2026"},{value:"spring",label:"Spring 2027"},{value:"summer",label:"Summer 2027",disabled:!0}]}},template:`
      <div style="width: 520px">
        <RadioGroup
          id="term-radio-group"
          v-model="enrollment"
          label="Preferred start term"
          :options="options"
          optional
        />
      </div>
    `})},h={render:()=>({components:{RadioGroup:i},setup(){const s=m("spring-b");return{options:[{value:"spring-a",label:"2023 Spring (Session C)"},{value:"spring-b",label:"2023 Spring (Session C)"},{value:"spring-c",label:"2023 Spring (Session C)",disabled:!0}],term:s}},template:`
      <div style="width: 420px">
        <RadioGroup
          id="figma-radio-reference"
          v-model="term"
          label="Field - radio button"
          :options="options"
          size="md"
          variant="rds-dark-3"
        />
      </div>
    `})};var C,I,B;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => ({
    components: {
      RadioGroup
    },
    setup() {
      const plan = ref<string | number | undefined>('degree');
      const options = [{
        value: 'degree',
        label: 'Pursue a degree'
      }, {
        value: 'nondegree',
        label: 'Take classes as a nondegree student'
      }, {
        value: 'certificate',
        label: 'Complete a certificate program'
      }];
      return {
        options,
        plan
      };
    },
    template: \`
      <div style="width: 560px">
        <RadioGroup
          id="intent-radio-group"
          v-model="plan"
          label="I want to..."
          :options="options"
          size="md"
          variant="rds-dark-3"
          help-text="Choose one option."
        />

        <p class="mt-2" style="font-size: 0.875rem; color: var(--rds-dark-2, #484848)">
          Selected: {{ plan ?? 'None' }}
        </p>
      </div>
    \`
  })
}`,...(B=(I=g.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var D,N,$;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => ({
    components: {
      RadioGroup
    },
    setup() {
      const education = ref<string | number | undefined>(undefined);
      const options = [{
        value: 'high-school',
        label: 'High school diploma or GED'
      }, {
        value: 'college',
        label: 'Some college coursework'
      }, {
        value: 'bachelors',
        label: "Bachelor's degree"
      }];
      return {
        education,
        options
      };
    },
    template: \`
      <div style="width: 620px">
        <RadioGroup
          id="education-radio-group"
          v-model="education"
          label="Highest level of education"
          :options="options"
          invalid
          error-text="Please select one option."
          required
        />
      </div>
    \`
  })
}`,...($=(N=b.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var F,P,A;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => ({
    components: {
      RadioGroup
    },
    setup() {
      const enrollment = ref<string | number | undefined>('fall');
      const options = [{
        value: 'fall',
        label: 'Fall 2026'
      }, {
        value: 'spring',
        label: 'Spring 2027'
      }, {
        value: 'summer',
        label: 'Summer 2027',
        disabled: true
      }];
      return {
        enrollment,
        options
      };
    },
    template: \`
      <div style="width: 520px">
        <RadioGroup
          id="term-radio-group"
          v-model="enrollment"
          label="Preferred start term"
          :options="options"
          optional
        />
      </div>
    \`
  })
}`,...(A=(P=y.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var E,H,O;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => ({
    components: {
      RadioGroup
    },
    setup() {
      const term = ref<string | number | undefined>('spring-b');
      const options = [{
        value: 'spring-a',
        label: '2023 Spring (Session C)'
      }, {
        value: 'spring-b',
        label: '2023 Spring (Session C)'
      }, {
        value: 'spring-c',
        label: '2023 Spring (Session C)',
        disabled: true
      }];
      return {
        options,
        term
      };
    },
    template: \`
      <div style="width: 420px">
        <RadioGroup
          id="figma-radio-reference"
          v-model="term"
          label="Field - radio button"
          :options="options"
          size="md"
          variant="rds-dark-3"
        />
      </div>
    \`
  })
}`,...(O=(H=h.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};const xe=["Default","ValidationState","DisabledOption","FigmaReference"];export{g as Default,y as DisabledOption,h as FigmaReference,b as ValidationState,xe as __namedExportsOrder,he as default};
