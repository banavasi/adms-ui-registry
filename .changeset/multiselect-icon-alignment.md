---
"@banavasi/adms-rds-ui-cli": patch
---

Fix the multiselect combobox (`ComboboxMultiSelect`) so its clear (×) and chevron icons align with the single-select combobox. The icons were wrapped in an absolutely positioned flex container that became the chevron's containing block, collapsing the two icons on top of each other in reversed order. The clear button now positions against the field anchor at the same offset as `ComboboxSelect`, rendering a properly spaced × then chevron.
