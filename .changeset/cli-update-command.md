---
"@banavasi/adms-rds-ui-cli": minor
---

Add an `update` command that refreshes already-installed components to the latest registry version. It auto-discovers installed components by scanning the configured components directory, fetches + import-transforms each registry file, and diffs it byte-for-byte against the local copy — applying changes with per-file confirmation. Flags: `--check` (dry-run list of outdated components), `--overwrite`/`--yes` (skip confirmations). Accepts explicit component names to scope the update; new files added to a component are picked up too.
