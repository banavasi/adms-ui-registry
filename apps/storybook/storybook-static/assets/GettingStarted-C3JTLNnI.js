import{j as e,M as r}from"./index-MFqC3X_b.js";import{useMDXComponents as d}from"./index-BlGn-Ytd.js";import"./iframe--tpc6-cZ.js";import"./index-8_2S3kac.js";import"./index-DrFu-skq.js";function i(s){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Documentation/Getting Started"}),`
`,e.jsx(n.h1,{id:"getting-started",children:"Getting Started"}),`
`,e.jsx(n.p,{children:"ADMS RDS UI is a Vue 3 component library implementing the ASU Rocket Design System. Components are copied directly into your project, giving you full control to customize as needed."}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.h3,{id:"1-configure-github-packages-registry",children:"1. Configure GitHub Packages Registry"}),`
`,e.jsx(n.p,{children:"This package is hosted on GitHub Packages. You need to authenticate before installing."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Create a GitHub Personal Access Token:"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Go to ",e.jsx(n.a,{href:"https://github.com/settings/tokens",rel:"nofollow",children:"GitHub Settings → Developer settings → Personal access tokens"})]}),`
`,e.jsxs(n.li,{children:["Generate a new token (classic) with ",e.jsx(n.code,{children:"read:packages"})," scope"]}),`
`,e.jsx(n.li,{children:"Copy the token"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Configure npm to use GitHub Packages for global installs:"})}),`
`,e.jsxs(n.p,{children:["For global package installations, the ",e.jsx(n.code,{children:".npmrc"})," file ",e.jsx(n.strong,{children:"must"})," be in your home directory. Create or edit ",e.jsx(n.code,{children:"~/.npmrc"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# macOS/Linux
nano ~/.npmrc

# Windows (PowerShell)
notepad $HOME\\.npmrc
`})}),`
`,e.jsx(n.p,{children:"Add these lines to the file:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
@banavasi:registry=https://npm.pkg.github.com
`})}),`
`,e.jsxs(n.p,{children:["Replace ",e.jsx(n.code,{children:"YOUR_GITHUB_TOKEN"})," with your actual token."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Verify the configuration:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# Check that the file exists and has correct content
cat ~/.npmrc

# You should see your token and the registry setting
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," Project-level ",e.jsx(n.code,{children:".npmrc"})," files are ignored for global installs. The home directory ",e.jsx(n.code,{children:"~/.npmrc"})," is required."]}),`
`]}),`
`,e.jsx(n.h3,{id:"2-install-the-cli",children:"2. Install the CLI"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# npm
npm install -g @banavasi/adms-rds-ui-cli

# pnpm
pnpm add -g @banavasi/adms-rds-ui-cli

# yarn
yarn global add @banavasi/adms-rds-ui-cli

# bun
bun add -g @banavasi/adms-rds-ui-cli
`})}),`
`,e.jsx(n.h3,{id:"3-initialize-your-project",children:"3. Initialize Your Project"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`adms-rds-ui init
`})}),`
`,e.jsx(n.p,{children:"This creates the following structure:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`your-project/
├── src/
│   ├── components/ui/          # Component directory
│   ├── lib/
│   │   └── util.ts             # Utility functions (cn, cva)
│   └── styles/                 # ASU brand styles
│       ├── _colors.scss
│       ├── _variables.scss
│       ├── _spacing.scss
│       ├── _typography.scss
│       ├── _mixins.scss
│       ├── _index.scss
│       └── styles.scss
├── vite.config.ts              # Updated with aliases
├── tsconfig.json               # Updated with paths
└── rds-ui.json                 # CLI configuration
`})}),`
`,e.jsx(n.h3,{id:"4-import-styles",children:"4. Import Styles"}),`
`,e.jsxs(n.p,{children:["Add to your ",e.jsx(n.code,{children:"main.ts"})," or ",e.jsx(n.code,{children:"main.js"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import '@/styles/styles.scss'
`})}),`
`,e.jsx(n.h3,{id:"5-add-components",children:"5. Add Components"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# Add a single component
adms-rds-ui add button

# Add multiple components
adms-rds-ui add button tooltip card

# Skip confirmation prompts
adms-rds-ui add button -y
`})}),`
`,e.jsx(n.h2,{id:"cli-options",children:"CLI Options"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Command"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"adms-rds-ui init"})}),e.jsx("td",{children:"Initialize project with base files"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"adms-rds-ui add <component>"})}),e.jsx("td",{children:"Add component(s) to your project"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"--yes, -y"})}),e.jsx("td",{children:"Skip confirmation prompts"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"--overwrite, -o"})}),e.jsx("td",{children:"Overwrite existing files"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"--src <dir>"})}),e.jsx("td",{children:"Custom source directory"})]})]})]}),`
`,e.jsx(n.h2,{id:"available-components",children:"Available Components"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Component"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Dependencies"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"button"})}),e.jsx("td",{children:"Buttons with variants and sizes"}),e.jsx("td",{children:e.jsx("code",{children:"reka-ui"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"tooltip"})}),e.jsx("td",{children:"Accessible tooltips"}),e.jsx("td",{children:e.jsx("code",{children:"reka-ui"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"highlight"})}),e.jsx("td",{children:"Inline text highlighting"}),e.jsx("td",{children:e.jsx("code",{children:"reka-ui"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"heading"})}),e.jsx("td",{children:"Semantic headings with tooltip"}),e.jsx("td",{children:e.jsx("code",{children:"reka-ui"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"label"})}),e.jsx("td",{children:"Form labels with tooltip"}),e.jsx("td",{children:e.jsx("code",{children:"reka-ui"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"input-root"})}),e.jsx("td",{children:"Form input context provider"}),e.jsx("td",{children:"-"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"input-field"})}),e.jsx("td",{children:"Text input element with prefix/suffix"}),e.jsx("td",{children:e.jsx("code",{children:"input-root"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"input-error"})}),e.jsx("td",{children:"Error message display"}),e.jsx("td",{children:e.jsx("code",{children:"input-root"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"input-help"})}),e.jsx("td",{children:"Help text display"}),e.jsx("td",{children:e.jsx("code",{children:"input-root"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"text-input"})}),e.jsx("td",{children:"Complete text input with label and validation"}),e.jsxs("td",{children:[e.jsx("code",{children:"label"}),", ",e.jsx("code",{children:"input-*"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"input-password-toggle"})}),e.jsx("td",{children:"Password visibility toggle button"}),e.jsx("td",{children:e.jsx("code",{children:"input-root"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"text-password"})}),e.jsx("td",{children:"Password input with visibility toggle"}),e.jsxs("td",{children:[e.jsx("code",{children:"label"}),", ",e.jsx("code",{children:"input-*"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"input-masked"})}),e.jsx("td",{children:"Masked input primitive"}),e.jsx("td",{children:e.jsx("code",{children:"input-root"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"text-ssn"})}),e.jsx("td",{children:"Social Security Number input"}),e.jsxs("td",{children:[e.jsx("code",{children:"input-masked"}),", ",e.jsx("code",{children:"label"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"checkbox"})}),e.jsx("td",{children:"Single checkbox and checkbox group form controls"}),e.jsxs("td",{children:[e.jsx("code",{children:"reka-ui"}),", ",e.jsx("code",{children:"label"}),", ",e.jsx("code",{children:"input-*"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"input-numeric-range"})}),e.jsx("td",{children:"Numeric input with min/max range"}),e.jsx("td",{children:e.jsx("code",{children:"input-root"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"radio-yes-no"})}),e.jsx("td",{children:"Card-style yes/no radio buttons with label"}),e.jsxs("td",{children:[e.jsx("code",{children:"reka-ui"}),", ",e.jsx("code",{children:"label"}),", ",e.jsx("code",{children:"input-*"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"radio-segment"})}),e.jsx("td",{children:"Card-style horizontal radio group"}),e.jsxs("td",{children:[e.jsx("code",{children:"reka-ui"}),", ",e.jsx("code",{children:"label"}),", ",e.jsx("code",{children:"input-*"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"radio-card"})}),e.jsx("td",{children:"Card-based radio options with icons"}),e.jsxs("td",{children:[e.jsx("code",{children:"reka-ui"}),", ",e.jsx("code",{children:"label"}),", ",e.jsx("code",{children:"input-*"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"combobox"})}),e.jsx("td",{children:"Accessible dropdown selection with search and filtering capabilities"}),e.jsx("td",{children:e.jsx("code",{children:"reka-ui"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"listbox"})}),e.jsx("td",{children:"Accessible single-select dropdown using fixed options"}),e.jsxs("td",{children:[e.jsx("code",{children:"reka-ui"}),", ",e.jsx("code",{children:"combobox"}),", ",e.jsx("code",{children:"label"}),", ",e.jsx("code",{children:"input-*"})]})]})]})]}),`
`,e.jsx(n.h2,{id:"usage-example",children:"Usage Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<script setup lang="ts">
import { Button } from '@/components/ui/Button'
<\/script>

<template>
  <Button variant="primary">Click me</Button>
</template>
`})}),`
`,e.jsx(n.h2,{id:"configuration",children:"Configuration"}),`
`,e.jsxs(n.p,{children:["The CLI creates a ",e.jsx(n.code,{children:"rds-ui.json"})," file for project-specific settings:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "src": "src",
  "components": "@/components/ui",
  "lib": "@/lib",
  "styles": "@/styles",
  "aliases": {
    "@/components/ui": "src/components/ui",
    "@/lib": "src/lib",
    "@/styles": "src/styles"
  }
}
`})}),`
`,e.jsx(n.h2,{id:"design-tokens",children:"Design Tokens"}),`
`,e.jsx(n.p,{children:"Components use ASU brand colors defined in SCSS:"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Color"}),e.jsx("th",{children:"Variable"}),e.jsx("th",{children:"Value"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Maroon"}),e.jsx("td",{children:e.jsx("code",{children:"$asu-maroon"})}),e.jsx("td",{children:e.jsx("code",{children:"#8c1d40"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Gold"}),e.jsx("td",{children:e.jsx("code",{children:"$asu-gold"})}),e.jsx("td",{children:e.jsx("code",{children:"#ffc627"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Success"}),e.jsx("td",{children:e.jsx("code",{children:"$asu-success"})}),e.jsx("td",{children:e.jsx("code",{children:"#78be20"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Info"}),e.jsx("td",{children:e.jsx("code",{children:"$asu-info"})}),e.jsx("td",{children:e.jsx("code",{children:"#00a3e0"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Warning"}),e.jsx("td",{children:e.jsx("code",{children:"$asu-warning"})}),e.jsx("td",{children:e.jsx("code",{children:"#ff7f32"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Danger"}),e.jsx("td",{children:e.jsx("code",{children:"$asu-danger"})}),e.jsx("td",{children:e.jsx("code",{children:"#cc2f2f"})})]})]})]})]})}function x(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{x as default};
