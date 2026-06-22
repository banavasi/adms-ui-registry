---
"@banavasi/adms-rds-ui-icons": patch
---

Fix `Identifier faX has already been declared` crash in the generated icon setup when the same icon is enabled in multiple weights (e.g. `chevron-down` in both `light` and `solid`). Per-package imports are now aliased with a sanitized package suffix before `library.add`, which keys by the definition's prefix+name so the local identifier is irrelevant.
