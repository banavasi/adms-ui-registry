# Combobox and ListBox Accessibility Bugfix Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Preserve the current combobox interaction model while adding a keyboard `Tab` handoff from search to options, and align listbox chevron open/close behavior with combobox.

**Architecture:** Keep the changes local to the concrete single-select components instead of changing shared primitives. The combobox fix lives in the panel search key handler, and the listbox fix lives in the trigger markup and state-driven classes so the select primitive can continue managing selection and open state.

**Tech Stack:** Vue 3, Reka UI, Storybook, TypeScript, scoped component CSS

---

### Task 1: Patch the combobox search-to-options keyboard handoff

**Files:**
- Modify: `registry/ui/combobox/ComboboxSelect.vue`

- [ ] **Step 1: Define the expected behavior**

When the combobox popup is open and focus is on the panel search input:
- `ArrowDown` and `ArrowUp` keep their current behavior
- `Escape` keeps its current behavior
- `Tab` moves focus to the first enabled option if one exists

- [ ] **Step 2: Implement the minimal key handling**

Update the existing `handleSearchInputKeydown` path to intercept `Tab` and reuse the existing option-focus helper instead of changing any root combobox behavior.

- [ ] **Step 3: Keep focus visibility intact**

Do not remove existing focus styles. Any new focus target must continue to rely on the current visible focus styles for the search input and highlighted option.

### Task 2: Align listbox chevron state with combobox

**Files:**
- Modify: `registry/ui/listbox/ListBoxSelect.vue`

- [ ] **Step 1: Drive the chevron from open state**

Use the component's tracked `isOpen` state to expose an explicit expanded state on the trigger and a matching class/state on the chevron wrapper.

- [ ] **Step 2: Normalize the chevron styling contract**

Make the listbox chevron rotation and hover/focus treatment match the combobox approach closely without adding listbox search or changing the underlying select behavior.

### Task 3: Verify the focused bugfix

**Files:**
- Verify: `registry/ui/combobox/ComboboxSelect.vue`
- Verify: `registry/ui/listbox/ListBoxSelect.vue`

- [ ] **Step 1: Run a fresh Storybook build**

Run: `pnpm --filter storybook build`

Expected: build completes successfully

- [ ] **Step 2: Review the final diff**

Confirm the changes stay scoped to the two target components plus this documentation.
