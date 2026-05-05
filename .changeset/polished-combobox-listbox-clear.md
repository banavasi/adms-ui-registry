---
'@banavasi/adms-rds-ui-cli': patch
---

Polish combobox and listbox trigger UI per design feedback:

- **Chevron sized to match the clear icon.** All combobox and listbox chevrons render at 16×16 to visually pair with the 16×16 clear "X" icon, replacing the previous 20px / 14px variants.
- **Larger touch target + hover and focus states on the clear button.** The clear "X" is now a 28×28 circular hit area with a light-gray hover background (`--rds-light-3`) and a darker keyboard-focus background (`--rds-light-5`). The previous 2px black focus outline is removed.
- **Standardized 24px spacing between the clear icon and chevron** across all single and multi variants.
- **Clear "X" always sits before the chevron.** The chevron remains the rightmost element so the primary expand action lives at the trigger edge and accidental clears are avoided.
- **Native scrollbar in the listbox dropdown.** Removed the up/down chevron scroll buttons inside `SelectContent`; the dropdown now uses a thin native scrollbar with a `--rds-light-5` thumb. Reka UI's `SelectViewport` injects styles that hide the scrollbar by default, so `SelectContent` now overrides `scrollbar-width` and `::-webkit-scrollbar { display }` with `!important` to keep it visible.
- **Fix listbox clear button on multi-select and icon-select variants.** The clear "X" was rendered inside `SelectTrigger`, producing invalid nested `<button>` elements — clicks toggled the dropdown instead of clearing the value. The clear button and chevron now sit as siblings of `SelectTrigger` inside a `position: relative` shell, matching the working single-select pattern.
- **Selected value renders at normal weight.** Combobox triggers no longer double-render the selected text (the underlying input's text is now hidden so only the labeled overlay is visible), and the selected option in the dropdown list is no longer bolded.
- **Trigger font-family pinned to the RDS stack.** Combobox and listbox triggers explicitly set `font-family: var(--rds-font-family, Arial, ...)` so consumer apps that nest them inside heavier-weighted typefaces (e.g. Storybook's Nunito Sans context) render selected text at the correct visual weight.
