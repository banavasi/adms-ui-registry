# Button Figma Variant Extension Design

## Goal

Extend the existing shared `Button` component so it can represent three additional Figma-aligned button sections from the ASU NAA App Library without introducing a second button component:

- `40:269` — gold button default and hover/toggle state
- `232:4259` — exit button icon treatments
- `94:1167` — close icon button default and toggle state

The work should preserve the current `Button` API shape and keep the implementation inside the existing button family.

## Current Context

The repo already models multiple Figma-derived button styles through a single `Button` component and a `variant` prop:

- Variant mapping lives in `apps/storybook/src/components/ui/Button/index.ts`
- Shared rendering and scoped styling live in `apps/storybook/src/components/ui/Button/Button.vue`
- Figma-aligned documentation and examples live in `apps/storybook/src/Button.stories.ts`

This is already the established pattern for mixing standard pill buttons, status chips, feedback buttons, and help-footer buttons under one component surface. The new work should continue that pattern instead of creating an `IconButton` split.

## Scope

### In scope

- Extend the existing `variant` model to cover the three target Figma sections
- Refine the current gold button styling so its visual states better match the Figma gold button frame
- Add icon-only button variants for exit and close treatments inside the existing `Button`
- Add or update Storybook stories so the three Figma sections are visible in button documentation
- Keep the existing slot-based icon composition model where practical

### Out of scope

- Creating a separate icon button component
- Reworking unrelated button variants
- Changing the generic Bootstrap-backed variants
- Adding new behavior props unless implementation proves the existing `variant` plus slots model is insufficient
- Registry-wide code movement or refactors outside the button family needed for this feature

## Recommended Approach

Keep one shared `Button` component and extend it with focused, Figma-specific variants.

This approach matches the current codebase structure, keeps the public API simple, and avoids fragmenting button usage into multiple component families. The component already supports multiple visual forms through `variant` classes and icon slots, so the new designs fit the established architecture.

## Component Design

### Variant model

Add new button variants in `apps/storybook/src/components/ui/Button/index.ts` for the two icon-oriented sections and refine the existing `gold` variant styling rather than introducing a separate gold-specific API.

Expected direction:

- keep `gold` as the single gold pill variant, but align its default and hover/open state styling with Figma `40:269`
- add a dedicated exit-style variant for `232:4259`
- add a dedicated close-style variant for `94:1167`

The exact variant names should be concise and literal, for example `exit` and `close`, unless implementation reveals a stronger naming convention already used nearby.

### Rendering model

Keep rendering in `Button.vue` slot-driven:

- use the default slot for text labels when present
- continue using `leading`, `trailing`, or `close` slots for icon content
- allow icon-only variants to render cleanly when no label text is passed

If the current markup slightly favors text-bearing buttons, adjust it locally so icon-only variants stay centered and do not inherit unnecessary spacing.

### Styling model

Add scoped CSS in `apps/storybook/src/components/ui/Button/Button.vue` for:

- gold button state polish to reflect the Figma gold button section
- exit variant dimensions, background, foreground, border radius, and interactive states
- close variant dimensions, minimal chrome, icon sizing, and toggle/hover state

The new styles should follow the same local class pattern already used by the file, such as `rds-button--<variant-name>`.

## Interaction and State Design

### Gold button

The existing gold button already exists, so this work is a visual correction rather than a new behavioral branch.

Required behavior:

- retain normal button semantics
- preserve disabled handling already provided by `Button.vue`
- add or refine hover/focus-visible styling to match the Figma hover/toggle state more closely

### Exit and close buttons

Both icon-oriented variants remain normal buttons, not decorative icons.

Required behavior:

- keyboard focusable through native button semantics
- support disabled state through the existing `disabled` prop
- maintain visible focus treatment
- support icon-only usage with accessible naming supplied by consumers through `aria-label`

No custom pressed-state state machine is required. If the Figma “toggle” naming is purely visual, we represent it through hover/active/focus styling and Storybook examples rather than adding a boolean toggle prop.

## Storybook Design

Update `apps/storybook/src/Button.stories.ts` so the new work is documented alongside existing button variants.

Recommended story coverage:

- a focused story for gold button states that mirrors Figma `40:269`
- a focused story for exit icon button states matching `232:4259`
- a focused story for close icon button states matching `94:1167`

If the current top-level matrix is the clearest place to show the gold variant, it can be updated there as well, but the icon-oriented sections should still get explicit stories so consumers can find copyable examples quickly.

## Accessibility

The implementation must preserve native button accessibility:

- icon-only buttons require accessible names from the caller, typically `aria-label`
- focus-visible treatment must remain clearly visible
- disabled buttons must remain non-interactive
- decorative icon SVGs should stay `aria-hidden="true"`

No custom keyboard handling is needed.

## Testing and Verification

Verification should stay focused and visual:

- run Storybook checks relevant to the modified button stories
- verify the new variants render without layout issues
- confirm hover, focus-visible, and disabled states for gold, exit, and close variants
- compare Storybook renderings against the provided Figma screenshots for the three target sections

If there is an existing lightweight test command already used for Storybook component verification in this repo, prefer that over inventing a new test path.

## File-Level Plan

### `apps/storybook/src/components/ui/Button/index.ts`

- add the new variant mappings
- keep `ButtonVariants` as the source of truth for the public API

### `apps/storybook/src/components/ui/Button/Button.vue`

- refine gold button styling
- add scoped classes for the exit and close variants
- make any minimal template adjustments needed for icon-only alignment

### `apps/storybook/src/Button.stories.ts`

- add or update stories for the three Figma sections
- keep examples copyable and aligned with current docs style

## Risks and Mitigations

### Risk: icon-only variants inherit text-button spacing

Mitigation:
use dedicated variant classes and minimal template-safe CSS adjustments so icon-only buttons do not depend on label spacing.

### Risk: over-modeling Figma “toggle state” as component logic

Mitigation:
treat the provided toggle states as visual interaction references first. Only add a prop if an actual product requirement appears that cannot be expressed through CSS states and Storybook examples.

### Risk: gold button tuning changes existing stories unexpectedly

Mitigation:
verify the existing color matrix after the styling adjustment and keep the gold work scoped to the gold variant only.

## Acceptance Criteria

- one shared `Button` component remains the only button primitive for this work
- gold button visuals are updated to match the target Figma section more closely
- exit and close treatments are available as `Button` variants
- icon-only button variants render correctly without requiring a separate component
- Storybook documents all three Figma sections with clear examples
- native accessibility and disabled behavior continue to work
