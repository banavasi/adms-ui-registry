# @banavasi/adms-rds-ui-icons

## 0.2.0

### Minor Changes

- [#48](https://github.com/banavasi/adms-ui-registry/pull/48) [`d372123`](https://github.com/banavasi/adms-ui-registry/commit/d372123d4beefa03c52cfaf0f5130c7e4aef1249) Thanks [@banavasi](https://github.com/banavasi)! - Add `@banavasi/adms-rds-ui-icons` — a published package with a Vite plugin to configure which Font Awesome Pro packages and icons are registered. `init` now installs the package (plus the `@fortawesome/pro-light-svg-icons` peer), wires `rdsIcons({ packages: ["light"] })` into `vite.config.ts`, and prints the `main.ts` registration step — instead of copying a `fontawesome.ts`. The `icon` registry component re-exports `FontAwesomeIcon` from the package. See `docs/migrations/2026-06-18-icons-package.md` for consumer upgrade steps.
