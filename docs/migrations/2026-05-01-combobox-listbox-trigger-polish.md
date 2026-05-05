# Upgrade notes: combobox & listbox trigger polish

**Affected CLI version:** `@banavasi/adms-rds-ui-cli` **3.2.6**
**Affected components:** `Combobox` (single + multi), `ListBox` (single, multi, icon), `Select`

This is a patch release — no public API changes, no breaking props. Pulling the new
components via `adms-rds-ui add combobox` (or `listbox`/`select`) will repaint
any existing screen that uses them. The visible changes are:

## What you'll see

- **Chevron is now 16×16** to match the clear "X" icon. Previously 20×20 (combobox)
  and 14×14 (listbox).
- **Clear "X" has a 28×28 circular hit area** with a light-gray hover background
  (`--rds-light-3`) and a darker keyboard-focus background (`--rds-light-5`). The
  black 2px focus outline is gone.
- **Clear icon and chevron sit 24px apart**; the chevron is always pinned to the
  right edge so the primary expand action is at the trigger boundary.
- **Selected value renders at weight 400** (regular). The dropdown's selected
  option no longer bumps to weight 600 when active.
- **Dropdown uses a native scrollbar** instead of up/down chevron buttons inside
  `SelectContent`.

## What you may need to do

### 1. If you composed `SelectContent` manually

`SelectContent.vue` no longer renders `<SelectScrollUpButton />` / `<SelectScrollDownButton />`
automatically. The two button components are still exported from
`@/components/ui/Select`, so if you want them back, compose your own content:

```vue
<script setup lang="ts">
import {
  SelectContent,
  SelectScrollUpButton,
  SelectScrollDownButton,
  SelectViewport,
} from '@/components/ui/Select'
</script>

<template>
  <SelectContent>
    <SelectScrollUpButton />
    <SelectViewport>
      <slot />
    </SelectViewport>
    <SelectScrollDownButton />
  </SelectContent>
</template>
```

Most apps will not need to do this — the default native scrollbar behavior is
the new recommended pattern.

### 2. If your app uses a non-RDS font on form fields

The trigger now explicitly sets:

```css
font-family: var(--rds-font-family, Arial, Helvetica, ...);
```

If your app previously inherited a different font on the trigger and you want to
keep that font, set the `--rds-font-family` CSS variable on a wrapping element:

```css
.my-app-shell {
  --rds-font-family: 'My Custom Font', sans-serif;
}
```

This was added because heavier-weighted fonts (e.g. Storybook's Nunito Sans
context, which only ships heavy weights) were causing 400-weight text to render
visually bold — pinning the font stack ensures the weight value matches the
visual.

### 3. If your own Storybook embeds these components

If you build your own Storybook around the registry, add the equivalent of this
file to your `.storybook/preview-head.html` so the docs canvas font matches the
registry font stack:

```html
<style>
  html, body, .sb-show-main, .sbdocs, .sbdocs-content, .docs-story, .innerZoomElementWrapper {
    font-family: var(--rds-font-family, Arial, Helvetica, "Nimbus Sans L", "Liberation Sans", FreeSans, sans-serif) !important;
  }
</style>
```

Without this, Storybook's docs blocks inherit Storybook's UI font (Nunito Sans),
which only loads heavy weights — that makes any 400-weight text in your stories
render bold.

## Visual regression checklist

For QA after pulling the new components, verify:

- [ ] Triggers in the new "Clear button states" Storybook story show the light
      gray hover circle and the darker focus circle on the X.
- [ ] The "Trigger comparison" story shows the combobox and listbox triggers
      visually paired (same chevron size, same spacing, same font weight).
- [ ] The "Scrollable long list" story shows a thin native scrollbar in the
      dropdown — no chevron buttons at the top or bottom of the list.
- [ ] In your own app, no consumer screens rely on the old fixed 20px / 14px
      chevron alignment for surrounding layout.
