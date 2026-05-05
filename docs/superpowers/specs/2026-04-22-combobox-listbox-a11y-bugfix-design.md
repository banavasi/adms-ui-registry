# Combobox and ListBox Accessibility Bugfix Design

**Date:** 2026-04-22
**Status:** Approved

## Goal

Fix two focused dropdown accessibility issues without changing the established interaction model:
- preserve existing combobox open behavior where the popup opens with focus on the search field
- preserve existing arrow-key behavior in the combobox
- add a keyboard path where `Tab` from the combobox search field moves focus into the option list
- make the listbox chevron and open/close visual state behave consistently with the combobox

## Scope

### Combobox

Target file: `registry/ui/combobox/ComboboxSelect.vue`

The combobox already opens on the panel search field and already delegates arrow-key navigation to the existing behavior. That must stay unchanged. The only new keyboard behavior is:

- when focus is on the panel search field and the user presses `Tab`
- if there is an enabled option in the popup
- move focus to the first enabled option instead of allowing focus to leave the widget immediately

`Escape` should continue closing the popup and returning focus to the trigger input.

### ListBox

Target file: `registry/ui/listbox/ListBoxSelect.vue`

The listbox does not need search. The fix is visual and state-related:

- make the chevron use the same visual contract as the combobox chevron
- ensure the open and close state is driven from the actual component open state
- keep the current listbox selection model and keyboard behavior from the select primitive

## Accessibility Basis

- WAI-ARIA Combobox pattern: the combobox remains in the page tab sequence and arrow keys move focus into the popup.
- WAI-ARIA Listbox pattern: focus should move predictably within options and remain visibly tracked.
- WCAG 2.4.3 Focus Order: keyboard focus movement must preserve operability.
- WCAG 2.4.7 Focus Visible: every keyboard focus target must have a visible focus indicator.

## Non-Goals

- no new listbox search field
- no rewrite of the base combobox wrapper
- no custom listbox keyboard model beyond the primitive's existing behavior
- no visual redesign beyond chevron/state consistency and focus clarity
