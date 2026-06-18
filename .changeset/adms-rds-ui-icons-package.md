---
"@banavasi/adms-rds-ui-icons": minor
"@banavasi/adms-rds-ui-cli": minor
---

Add `@banavasi/adms-rds-ui-icons` — a published package with a Vite plugin to configure which Font Awesome Pro packages and icons are registered. `init` now installs the package (plus the `@fortawesome/pro-light-svg-icons` peer), wires `rdsIcons({ packages: ["light"] })` into `vite.config.ts`, and prints the `main.ts` registration step — instead of copying a `fontawesome.ts`. The `icon` registry component re-exports `FontAwesomeIcon` from the package. See `docs/migrations/2026-06-18-icons-package.md` for consumer upgrade steps.
