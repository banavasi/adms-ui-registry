---
"@banavasi/adms-rds-ui-cli": patch
---

Rewrite ListBox to use Select primitives and fix install dependencies:

- rewrite ListBoxSelect, ListBoxMultiSelect, and ListBoxSelectIcon from Combobox to Reka UI Select primitives, fixing the two-press Escape key bug
- add new Select component primitives to the registry (Select, SelectTrigger, SelectValue, SelectContent, SelectItem, and scroll/group/label/separator helpers)
- fix combobox missing registryDependencies (input-root, input-error, input-help, label) that caused broken installs via CLI
- fix .gitignore pattern for storybook-static build output
