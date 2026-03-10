---
"@banavasi/adms-rds-ui-cli": patch
---

Add a reusable `BaseSelect` component to the UI registry and Storybook.

- support single and multi-select modes through one API
- normalize option values for robust model binding across object/value forms
- emit `change`, `remove`, and `search` events for parent integration
- export `base-select` from registry and register it in `registry/index.json`
- add Storybook stories for default, multi-select, and validation states
