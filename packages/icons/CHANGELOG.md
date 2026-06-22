# @banavasi/adms-rds-ui-icons

## 0.3.0

### Minor Changes

- [#52](https://github.com/banavasi/adms-ui-registry/pull/52) [`87f7f6c`](https://github.com/banavasi/adms-ui-registry/commit/87f7f6c1c34be6d81f91b6a7dc57baf32a7f44dd) Thanks [@banavasi](https://github.com/banavasi)! - Add Sharp (`sharp-solid` → `fass`, `sharp-regular` → `fasr`) and Brands (`brands` → `fab`) support to the `rdsIcons()` Vite plugin. Extends the `FaPackage` type, the `FA_PREFIX` and `FA_PACKAGE_MODULE` maps; the three new packages are declared as optional peer dependencies, so consumers only install the weights they actually enable.

### Patch Changes

- [#52](https://github.com/banavasi/adms-ui-registry/pull/52) [`87f7f6c`](https://github.com/banavasi/adms-ui-registry/commit/87f7f6c1c34be6d81f91b6a7dc57baf32a7f44dd) Thanks [@banavasi](https://github.com/banavasi)! - Fix `Identifier faX has already been declared` crash in the generated icon setup when the same icon is enabled in multiple weights (e.g. `chevron-down` in both `light` and `solid`). Per-package imports are now aliased with a sanitized package suffix before `library.add`, which keys by the definition's prefix+name so the local identifier is irrelevant.

## 0.2.0

### Minor Changes

- [#48](https://github.com/banavasi/adms-ui-registry/pull/48) [`d372123`](https://github.com/banavasi/adms-ui-registry/commit/d372123d4beefa03c52cfaf0f5130c7e4aef1249) Thanks [@banavasi](https://github.com/banavasi)! - Add `@banavasi/adms-rds-ui-icons` — a published package with a Vite plugin to configure which Font Awesome Pro packages and icons are registered. `init` now installs the package (plus the `@fortawesome/pro-light-svg-icons` peer), wires `rdsIcons({ packages: ["light"] })` into `vite.config.ts`, and prints the `main.ts` registration step — instead of copying a `fontawesome.ts`. The `icon` registry component re-exports `FontAwesomeIcon` from the package. See `docs/migrations/2026-06-18-icons-package.md` for consumer upgrade steps.
