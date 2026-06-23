# Upgrade notes: combobox & listbox interaction polish

**Affected CLI version:** `@banavasi/adms-rds-ui-cli` **3.3.2**
**Affected components:** `Combobox` (single + multi), `ListBox` (single, multi, icon)

This is a patch release — no prop/API changes and no required consumer code
changes. Re-running `adms-rds-ui add combobox` or `adms-rds-ui add listbox`
will update copied registry components so their interaction behavior matches the
RDS Storybook reference.

## What changed

### 1. Combobox chevrons now invert reliably when open

The combobox chevron now rotates on the icon itself when the dropdown opens.
This avoids transform conflicts with the absolutely positioned trigger wrapper
and Bootstrap transform utilities.

`ComboboxTrigger.vue` also now renders its default slot. This matters for the
single and multi combobox components because they compose the trigger with
`as-child`; without the slot, the custom trigger button/chevron could be dropped
or fail to reflect open state correctly.

### 2. ListBox placeholder text now appears correctly

`reka-ui`'s `SelectValue` only renders its `placeholder` when the slot is empty.
Previously, ListBox always rendered an empty value `<span>`, so the placeholder
could be suppressed even when no value was selected.

The value/summary spans now render only when `hasValue` is true:

```vue
<SelectValue :placeholder="props.placeholder">
  <span v-if="hasValue" class="listbox-select-value-text">
    {{ selectedLabel }}
  </span>
</SelectValue>
```

This preserves the existing public API while letting Reka display the placeholder
and apply the existing muted placeholder color state.

### 3. ListBox hover, highlighted, and selected states now match Combobox

ListBox options now use the same RDS gold interaction state as Combobox options:

```css
background: var(--rds-secondary, #ffc627);
color: var(--rds-dark-3, #191919);
```

This applies to:

- pointer hover,
- keyboard-highlighted options,
- selected options.

The ListBox selected state no longer adds the older black top/bottom border in
the single-select listbox. It now visually matches Combobox selected options.

### 4. ListBox styles override Bootstrap utilities correctly

The base `SelectItem` includes Bootstrap utility classes such as `bg-white` and
text-color utilities. These can use `!important`, so ListBox option interaction
rules now use unique global selectors with enough specificity to win reliably:

```css
:global(.select-item.listbox-select-option:hover:not([data-disabled])),
:global(.select-item.listbox-select-option[data-highlighted]) {
  background: var(--rds-secondary, #ffc627) !important;
  color: var(--rds-dark-3, #191919) !important;
  outline: none;
}
```

This is intentionally scoped to the unique ListBox option classes and does not
change generic `SelectItem` styling.

## What you may need to do

Most apps do not need any code changes. Update the copied components via the CLI
and rebuild your app:

```bash
adms-rds-ui add combobox
adms-rds-ui add listbox
```

If you only use one of the two component families, you only need to re-add that
family.

## Visual QA checklist

After updating, verify the following in Storybook or your app:

- [ ] Opening a single combobox rotates the chevron upward.
- [ ] Opening a multi combobox rotates the chevron upward.
- [ ] Closing either combobox rotates the chevron back down.
- [ ] An empty `ListBoxSelect` shows its placeholder text.
- [ ] An empty `ListBoxMultiSelect` shows its placeholder text.
- [ ] An empty `ListBoxSelectIcon` shows its placeholder text.
- [ ] Hovering a ListBox option turns it RDS gold (`--rds-secondary`).
- [ ] Keyboard-highlighted ListBox options use the same gold state.
- [ ] Selected ListBox options use the same gold state as Combobox options.
- [ ] Disabled options do not pick up the hover state.

## Backward compatibility

This release is backward-compatible:

- no new props,
- no removed props,
- no emitted event changes,
- no data-shape changes for options,
- no required app-level configuration changes.
