---
"@banavasi/adms-rds-ui-icons": minor
"@banavasi/adms-rds-ui-cli": minor
---

Add `@banavasi/adms-rds-ui-icons` — a published package with a Vite plugin to configure which Font Awesome Pro packages and icons are registered. `init` wires `rdsIcons()` into `vite.config.ts` and installs the package instead of copying `fontawesome.ts`. The `icon` registry component now re-exports from the package.
