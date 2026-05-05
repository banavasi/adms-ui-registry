#!/usr/bin/env bash
# Release flow for the combobox/listbox trigger polish.
# Run from the repo root:  bash .changeset/RELEASE_COMMIT_PLAN.sh
#
# Steps this script performs:
#   1. Verifies you're on main and your tree is clean (apart from this release)
#   2. Clears any stale .git/index.lock left by the sandbox
#   3. Creates a feature branch off main
#   4. Creates 7 focused commits (one per fix area)
#   5. Pushes the branch to origin
#   6. (optional) Opens a PR via the gh CLI if available
#
# After the PR is merged, the changesets bot/action will:
#   - bump @banavasi/adms-rds-ui-cli from 3.2.5 -> 3.2.6
#   - lift the changeset body into packages/cli/CHANGELOG.md
#   - delete .changeset/polished-combobox-listbox-clear.md
#   - publish the new CLI version (per your existing release workflow)

set -euo pipefail

cd "$(git rev-parse --show-toplevel)"

BRANCH="fix/combobox-listbox-trigger-polish"
PR_TITLE="fix(combobox,listbox): polish trigger UI per design feedback"
PR_BODY_FILE="docs/migrations/2026-05-01-combobox-listbox-trigger-polish.md"

# --- 1. Sanity checks -------------------------------------------------------
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
  echo "Expected to be on main, found: $CURRENT_BRANCH"
  echo "Switch to main first: git switch main && git pull"
  exit 1
fi

# --- 2. Clear stale lock ----------------------------------------------------
rm -f .git/index.lock || true

# --- 3. Pull latest main, then branch --------------------------------------
git pull --ff-only origin main
git switch -c "$BRANCH"

# --- 4. Commit each fix area separately -------------------------------------

# 4.1  Imperative highlight methods on Combobox root (was already in working tree)
git add registry/ui/combobox/Combobox.vue \
        apps/storybook/src/components/ui/combobox/Combobox.vue
git commit -m "fix(combobox): expose imperative highlight methods on Combobox root

Forwards highlightFirstItem, highlightItem, highlightSelected, and
getHighlightedElement from the Reka ComboboxRoot via defineExpose so
ComboboxSelect can drive keyboard-search highlight programmatically."

# 4.2  Native scrollbar in dropdown (replaces SelectScrollUp/DownButton)
git add registry/ui/select/SelectContent.vue \
        apps/storybook/src/components/ui/Select/SelectContent.vue
git commit -m "fix(select): use native scrollbar in dropdown instead of chevron buttons

Removes <SelectScrollUpButton /> and <SelectScrollDownButton /> from the
default SelectContent render. The viewport now exposes a thin native
scrollbar (--rds-light-5 thumb, --rds-light-2 track, scrollbar-width: thin
for Firefox). The two button components remain exported for consumers who
want to opt back in by composing SelectContent themselves."

# 4.3  Big visual polish across all 5 trigger components
git add registry/ui/combobox/ComboboxSelect.vue \
        registry/ui/combobox/ComboboxMultiSelect.vue \
        registry/ui/listbox/ListBoxSelect.vue \
        registry/ui/listbox/ListBoxMultiSelect.vue \
        registry/ui/listbox/ListBoxSelectIcon.vue \
        apps/storybook/src/components/ui/combobox/ComboboxSelect.vue \
        apps/storybook/src/components/ui/combobox/ComboboxMultiSelect.vue \
        apps/storybook/src/components/ui/listbox/ListBoxSelect.vue \
        apps/storybook/src/components/ui/listbox/ListBoxMultiSelect.vue \
        apps/storybook/src/components/ui/listbox/ListBoxSelectIcon.vue
git commit -m "fix(combobox,listbox): polish trigger UI per design feedback

- Chevron sized to 16x16 to match the 16x16 clear icon (was 20px in
  combobox, 14px in listbox).
- Clear X is a 28x28 circular hit area with a light-gray hover
  background (--rds-light-3) and a darker keyboard-focus background
  (--rds-light-5). Removed the previous 2px black focus outline. Mouse
  click on the X no longer leaves the dark focus ring stuck (uses
  :focus-visible only).
- 24px spacing between the clear icon and chevron, standardized across
  single (absolute) and multi (flex) variants.
- Clear icon always sits before the chevron; chevron pinned to the
  trigger right edge.
- ComboboxSelect input text is hidden under the absolutely-positioned
  selected-value span (color: transparent !important) so the two text
  layers no longer double-render and read as bold.
- Removed leftover Bootstrap utility classes (ms-auto, me-space-sm,
  pe-space-xxs) on the clear button that were pushing the X glyph
  off-center inside its circle.
- Selected option in the dropdown list no longer bumps to font-weight
  600; renders at normal weight.
- Trigger value text and input pinned to font-family
  var(--rds-font-family, Arial, ...) so heavy-weighted parent fonts
  (e.g. Storybook Nunito Sans context) cannot make 400-weight text read
  bold.
- Added z-index: 2 to clear and chevron buttons to guarantee they paint
  above the input regardless of stacking context."

# 4.4  Storybook canvas font override
git add apps/storybook/.storybook/preview-head.html
git commit -m "fix(storybook): force RDS font stack in preview-head.html

Storybook's docs canvas inherits Storybook's UI font (Nunito Sans),
which only loads heavy weights. preview-head.html overrides html, body,
and the Storybook docs wrappers to use the RDS font stack via
--rds-font-family with !important so 400-weight text in stories
no longer renders visually bold."

# 4.5  New Storybook stories
git add apps/storybook/src/Combobox.stories.ts
git commit -m "docs(stories): add stories for clear-button states, scrollbar, and trigger comparison

- ClearButtonStates: pre-selects a value so reviewers can hover/focus
  the X and see the new circular hover (--rds-light-3) and focus
  (--rds-light-5) states.
- ScrollableLongList: 60-option list to show the new native scrollbar.
- TriggerComparisonAgainstListBox: side-by-side combobox + listbox so
  reviewers can verify the chevron sizing, font weight, and 24px
  spacing line up between the two component families."

# 4.6  Consumer migration / upgrade notes
git add docs/migrations/2026-05-01-combobox-listbox-trigger-polish.md
git commit -m "docs(migrations): add upgrade notes for combobox/listbox trigger polish

Documents what consumers will see after pulling v3.2.6, when they need
to opt back in to the SelectScrollUp/DownButton scroll buttons, how to
override the trigger font via --rds-font-family, and the equivalent
preview-head.html snippet for downstream Storybook setups."

# 4.7  Changeset (drives the next CLI version bump on merge)
git add .changeset/polished-combobox-listbox-clear.md
git commit -m "chore: add changeset for combobox/listbox trigger polish (v3.2.6)"

# --- 5. Push the branch -----------------------------------------------------
git push -u origin "$BRANCH"

# --- 6. Open a PR if gh is available ---------------------------------------
if command -v gh >/dev/null 2>&1; then
  gh pr create \
    --base main \
    --head "$BRANCH" \
    --title "$PR_TITLE" \
    --body-file "$PR_BODY_FILE"
  echo
  echo "PR opened. Review, get approval, then merge via the GitHub UI"
  echo "(squash or merge — your repo's standard merge strategy)."
else
  echo
  echo "gh CLI not installed — open the PR manually:"
  echo "  https://github.com/banavasi/adms-ui-registry/compare/main...$BRANCH"
  echo
  echo "Title: $PR_TITLE"
  echo "Body:  paste contents of $PR_BODY_FILE"
fi

echo
echo "After merge to main:"
echo "  - The changesets workflow should auto-open a 'Version Packages' PR"
echo "  - Merge that PR to bump @banavasi/adms-rds-ui-cli 3.2.5 -> 3.2.6"
echo "    and publish the new CLI version per your existing release workflow."
