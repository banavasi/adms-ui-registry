---
"@banavasi/adms-rds-ui-cli": patch
---

Update the Button component in the registry to support link-style rendering with `to` (router-link) and `href` (anchor), while preserving disabled behavior for both button and link variants.

Add explicit native event forwarding from Button (`click`, mouse, focus/blur, keyboard, input/change/submit) and include Storybook stories to validate link behavior and emitted events.
