# @adms-rds-ui/cli

## 3.2.7

### Patch Changes

- [#43](https://github.com/banavasi/adms-ui-registry/pull/43) [`ac026cf`](https://github.com/banavasi/adms-ui-registry/commit/ac026cf295e5cf76c7ef77a148691fe5303527ac) Thanks [@banavasi](https://github.com/banavasi)! - Update the Button component in the registry to support link-style rendering with `to` (router-link) and `href` (anchor), while preserving disabled behavior for both button and link variants.

  Add explicit native event forwarding from Button (`click`, mouse, focus/blur, keyboard, input/change/submit) and include Storybook stories to validate link behavior and emitted events.

## 3.2.6

### Patch Changes

- [#40](https://github.com/banavasi/adms-ui-registry/pull/40) [`904898a`](https://github.com/banavasi/adms-ui-registry/commit/904898a863d0ce6fd679439a47b13db3910d887b) Thanks [@banavasi](https://github.com/banavasi)! - Polish combobox and listbox trigger UI per design feedback:

  - **Chevron sized to match the clear icon.** All combobox and listbox chevrons render at 16×16 to visually pair with the 16×16 clear "X" icon, replacing the previous 20px / 14px variants.
  - **Larger touch target + hover and focus states on the clear button.** The clear "X" is now a 28×28 circular hit area with a light-gray hover background (`--rds-light-3`) and a darker keyboard-focus background (`--rds-light-5`). The previous 2px black focus outline is removed.
  - **Standardized 24px spacing between the clear icon and chevron** across all single and multi variants.
  - **Clear "X" always sits before the chevron.** The chevron remains the rightmost element so the primary expand action lives at the trigger edge and accidental clears are avoided.
  - **Native scrollbar in the listbox dropdown.** Removed the up/down chevron scroll buttons inside `SelectContent`; the dropdown now uses a thin native scrollbar with a `--rds-light-5` thumb. Reka UI's `SelectViewport` injects styles that hide the scrollbar by default, so `SelectContent` now overrides `scrollbar-width` and `::-webkit-scrollbar { display }` with `!important` to keep it visible.
  - **Fix listbox clear button on multi-select and icon-select variants.** The clear "X" was rendered inside `SelectTrigger`, producing invalid nested `<button>` elements — clicks toggled the dropdown instead of clearing the value. The clear button and chevron now sit as siblings of `SelectTrigger` inside a `position: relative` shell, matching the working single-select pattern.
  - **Selected value renders at normal weight.** Combobox triggers no longer double-render the selected text (the underlying input's text is now hidden so only the labeled overlay is visible), and the selected option in the dropdown list is no longer bolded.
  - **Trigger font-family pinned to the RDS stack.** Combobox and listbox triggers explicitly set `font-family: var(--rds-font-family, Arial, ...)` so consumer apps that nest them inside heavier-weighted typefaces (e.g. Storybook's Nunito Sans context) render selected text at the correct visual weight.

## 3.2.5

### Patch Changes

- [#38](https://github.com/banavasi/adms-ui-registry/pull/38) [`ab487e5`](https://github.com/banavasi/adms-ui-registry/commit/ab487e57dd4469fb83ec019c31f4cf7ebfdf3a0a) Thanks [@banavasi](https://github.com/banavasi)! - Refresh the combobox and base-select registry components with the new summary-trigger design, in-panel search behavior, and improved open-state focus handling.

## 3.2.4

### Patch Changes

- [#34](https://github.com/banavasi/adms-ui-registry/pull/34) [`58c25c8`](https://github.com/banavasi/adms-ui-registry/commit/58c25c8abe89ce89444e8a2f8b03bc3bcb54af38) Thanks [@banavasi](https://github.com/banavasi)! - Rewrite ListBox to use Select primitives and fix install dependencies:

  - rewrite ListBoxSelect, ListBoxMultiSelect, and ListBoxSelectIcon from Combobox to Reka UI Select primitives, fixing the two-press Escape key bug
  - add new Select component primitives to the registry (Select, SelectTrigger, SelectValue, SelectContent, SelectItem, and scroll/group/label/separator helpers)
  - fix combobox missing registryDependencies (input-root, input-error, input-help, label) that caused broken installs via CLI
  - fix .gitignore pattern for storybook-static build output

## 3.2.3

### Patch Changes

- [#31](https://github.com/banavasi/adms-ui-registry/pull/31) [`1e5431f`](https://github.com/banavasi/adms-ui-registry/commit/1e5431f50c0d095c2d06f3e62e0238a5006fa906) Thanks [@banavasi](https://github.com/banavasi)! - Add a reusable `BaseSelect` component to the UI registry and Storybook.

  - support single and multi-select modes through one API
  - normalize option values for robust model binding across object/value forms
  - emit `change`, `remove`, and `search` events for parent integration
  - export `base-select` from registry and register it in `registry/index.json`
  - add Storybook stories for default, multi-select, and validation states

- Fix `adms-rds-ui init` for Vite and similar projects whose `tsconfig` files use JSONC comments or trailing commas.

## 3.2.2

### Patch Changes

- [#28](https://github.com/banavasi/adms-ui-registry/pull/28) [`f3e77c8`](https://github.com/banavasi/adms-ui-registry/commit/f3e77c854f4d4b6a258e7e175f686f11309931ab) Thanks [@banavasi](https://github.com/banavasi)! - Add new `combobox` and `listbox` components to the UI registry with Storybook stories and improved accessibility/keyboard behavior for business form dropdowns.

- [#30](https://github.com/banavasi/adms-ui-registry/pull/30) [`fe82397`](https://github.com/banavasi/adms-ui-registry/commit/fe82397c67c6865859ef6004a447fed17b1d78e2) Thanks [@banavasi](https://github.com/banavasi)! - Polish form controls and button system to align with Figma:

  - add expanded button variants (core color buttons, status chips, feedback, tag, help footer, sign-out)
  - improve combobox and listbox error treatment consistency
  - add radio and checkbox error text styling updates
  - enhance listbox variants and stories for icon and custom summary patterns

## 3.2.1

### Patch Changes

- [#26](https://github.com/banavasi/adms-ui-registry/pull/26) [`cd7911d`](https://github.com/banavasi/adms-ui-registry/commit/cd7911d7736b9a8b3182ea4bc07232f17d780ec7) Thanks [@banavasi](https://github.com/banavasi)! - Fixed keyboard naviagation for radio buttons and added scoped for all the styles

## 3.2.0

### Minor Changes

- [#25](https://github.com/banavasi/adms-ui-registry/pull/25) [`9dc4ef7`](https://github.com/banavasi/adms-ui-registry/commit/9dc4ef7f9fdbd413129b7a71180b1fcb4503b165) Thanks [@banavasi](https://github.com/banavasi)! - feat: add RadioSegment component with comprehensive documentation and stories

  - Introduced the RadioSegment component, a card-style horizontal radio group for selecting options.
  - Added detailed documentation covering installation, usage, props, and events.
  - Created multiple stories demonstrating various configurations, including prefill values, case-insensitive matching, and error states.
  - Updated registry and CLI to include the new RadioSegment component

- [#25](https://github.com/banavasi/adms-ui-registry/pull/25) [`1df9928`](https://github.com/banavasi/adms-ui-registry/commit/1df9928816d17f4e80557cd505530894acc9f158) Thanks [@banavasi](https://github.com/banavasi)! - added radio card component

### Patch Changes

- [#23](https://github.com/banavasi/adms-ui-registry/pull/23) [`b8a8937`](https://github.com/banavasi/adms-ui-registry/commit/b8a8937c2a3ff1fa476f9d3eda83867cdb8fc4f5) Thanks [@banavasi](https://github.com/banavasi)! - added class changes

## 3.1.0

### Minor Changes

- [#20](https://github.com/banavasi/adms-ui-registry/pull/20) [`7050cab`](https://github.com/banavasi/adms-ui-registry/commit/7050cab386f2edf2961b92d5d3c40e36269e699d) Thanks [@banavasi](https://github.com/banavasi)! - fixed the issues on the library add

## 3.0.0

### Major Changes

- [#16](https://github.com/banavasi/adms-ui-registry/pull/16) [`41839c0`](https://github.com/banavasi/adms-ui-registry/commit/41839c0b0269247c352e6ec00e530187245e8657) Thanks [@banavasi](https://github.com/banavasi)! - released input ssn, input range

## 2.0.0

### Major Changes

- [#14](https://github.com/banavasi/adms-ui-registry/pull/14) [`ca1ad64`](https://github.com/banavasi/adms-ui-registry/commit/ca1ad640143f1d3b61612de87ab12ffadcb7f581) Thanks [@banavasi](https://github.com/banavasi)! - added text input and text password with all the preimitives

## 1.1.0

### Minor Changes

- [#12](https://github.com/banavasi/adms-ui-registry/pull/12) [`5735d5f`](https://github.com/banavasi/adms-ui-registry/commit/5735d5fdc99f948cf189fc7f66b884395a00cdc3) Thanks [@banavasi](https://github.com/banavasi)! - Add Heading, Highlight, and Label components with documentation and stories

## 1.0.0

### Major Changes

- [#8](https://github.com/banavasi/adms-ui-registry/pull/8) [`a114837`](https://github.com/banavasi/adms-ui-registry/commit/a114837a9a7687b0c095caa489d123b46e7f63c5) Thanks [@banavasi](https://github.com/banavasi)! - added tooltip component and releasing eslint-config

## 0.2.0

### Minor Changes

- [`4e62a66`](https://github.com/banavasi/adms-ui-registry/commit/4e62a66d0d5d364635d7630defa5620959369ed7) Thanks [@banavasi](https://github.com/banavasi)! - Initial release of ADMS RDS UI CLI

  - CLI with `init` and `add` commands
  - Button component with 17 variants and 3 sizes
  - ASU brand design tokens (colors, spacing, typography)
  - Bootstrap 5 integration with SCSS customization

## 0.1.0

### Minor Changes

- [`4e96d72`](https://github.com/banavasi/adms-ui-registry/commit/4e96d7293733070495682998a7baa8e39d6d3109) Thanks [@banavasi](https://github.com/banavasi)! - Initial release of ADMS RDS UI

  - CLI with `init` and `add` commands
  - Button component with 17 variants and 3 sizes
  - ASU brand design tokens (colors, spacing, typography)
  - Bootstrap 5 integration with SCSS customization
