# Button Figma Variants Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Extend the existing shared `Button` component to cover the Figma gold, exit, and close button sections without introducing a separate button component.

**Architecture:** Keep the work inside the existing Storybook `Button` surface by extending the `variant` map, refining scoped button styles, and adding dedicated Storybook stories for the three Figma sections. Treat Figma toggle states as visual CSS states, not as a new behavioral prop or state machine.

**Tech Stack:** Vue 3, TypeScript, Storybook, scoped CSS, `cva`

---

## File Structure

- `apps/storybook/src/components/ui/Button/index.ts`
  - Owns the `variant` class map for the shared button API.
- `apps/storybook/src/components/ui/Button/Button.vue`
  - Owns the render structure and scoped styles for all button variants.
- `apps/storybook/src/Button.stories.ts`
  - Owns Storybook documentation and visual regression surface for the button family.

## Task 1: Extend the Button Variant Map

**Files:**
- Modify: `apps/storybook/src/components/ui/Button/index.ts`
- Verify: `apps/storybook/src/components/ui/Button/Button.vue`

- [ ] **Step 1: Inspect the current variant map before editing**

Run:

```bash
sed -n '1,220p' apps/storybook/src/components/ui/Button/index.ts
```

Expected: the file exports `buttonVariants` with existing entries like `maroon`, `gold`, `signout`, `help-footer`, and `outline-pill`.

- [ ] **Step 2: Add the new Figma-facing variants to the `variant` map**

Update the `variant` section in `apps/storybook/src/components/ui/Button/index.ts` so it includes dedicated classes for the new icon-button treatments:

```ts
      gold: 'rds-button rds-button--pill rds-button--gold',
      exit: 'rds-button rds-button--icon-only rds-button--exit',
      close: 'rds-button rds-button--icon-only rds-button--close',
```

Keep the existing `gold` key instead of inventing a second gold-specific variant. Place `exit` and `close` near the other Figma-driven variants so the public API remains easy to scan.

- [ ] **Step 3: Run a narrow diff to confirm only the intended variant API changed**

Run:

```bash
git diff -- apps/storybook/src/components/ui/Button/index.ts
```

Expected: a small diff showing `exit` and `close` added to the `variant` map, with no unrelated variant removals.

- [ ] **Step 4: Verify the variant names are available to consumers through the existing type export**

Run:

```bash
sed -n '1,220p' apps/storybook/src/components/ui/Button/index.ts
```

Expected: `export type ButtonVariants = VariantProps<typeof buttonVariants>` remains unchanged, so the new keys automatically flow into the `variant` prop type.

- [ ] **Step 5: Commit the variant-map change**

```bash
git add apps/storybook/src/components/ui/Button/index.ts
git commit -m "feat: add button exit and close variants"
```

## Task 2: Implement Gold, Exit, and Close Styling in `Button.vue`

**Files:**
- Modify: `apps/storybook/src/components/ui/Button/Button.vue`
- Verify: `apps/storybook/src/components/ui/Button/index.ts`

- [ ] **Step 1: Review the existing render structure and scoped button styles**

Run:

```bash
sed -n '1,260p' apps/storybook/src/components/ui/Button/Button.vue
```

Expected: the template renders `leading`, `trailing`, and `close` slots, and the style block already contains classes such as `.rds-button--gold`, `.rds-button--signout`, and `.rds-button__close-icon`.

- [ ] **Step 2: Add a reusable icon-only base class for icon button variants**

Extend the style block in `apps/storybook/src/components/ui/Button/Button.vue` with a base class that neutralizes text-button spacing for icon-only variants:

```css
.rds-button--icon-only {
  min-width: auto;
  min-height: auto;
  padding: 0;
  gap: 0;
}

.rds-button--icon-only .rds-button__label {
  display: none;
}

.rds-button--icon-only .rds-button__icon,
.rds-button--icon-only .rds-button__close-icon {
  position: static;
  width: auto;
  height: auto;
}
```

Keep this local to the file so the icon-only behavior is explicit and does not bleed into text-bearing variants.

- [ ] **Step 3: Refine the gold button visual states to match Figma `40:269` more closely**

Update `.rds-button--gold` and add a hover/focus state in `apps/storybook/src/components/ui/Button/Button.vue`:

```css
.rds-button--gold {
  background: #ffc627;
  color: #191919;
}

.rds-button--gold:hover:not(:disabled),
.rds-button--gold:focus-visible:not(:disabled) {
  background: #f0b400;
  color: #191919;
}
```

If the Figma screenshot shows a slightly different hover shade once rendered in Storybook, adjust the hover token during verification but keep the implementation scoped to the gold variant only.

- [ ] **Step 4: Add the exit button styling for Figma `232:4259`**

Add a dedicated exit variant style block:

```css
.rds-button--exit {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: transparent;
  color: #191919;
}

.rds-button--exit:hover:not(:disabled),
.rds-button--exit:focus-visible:not(:disabled) {
  background: rgba(25, 25, 25, 0.08);
}

.rds-button--exit.rds-button--black,
.rds-button--exit[data-color='black'] {
  color: #191919;
}
```

If the chosen implementation uses separate `exit` and `exit-inverse` variants instead of a color attribute, keep the public API literal and document it in Storybook. Do not add a general-purpose color prop just for this Figma section.

- [ ] **Step 5: Add the close button styling for Figma `94:1167`**

Add a dedicated close variant style block:

```css
.rds-button--close {
  width: 16px;
  height: 16px;
  border-radius: 2px;
  background: transparent;
  color: #191919;
}

.rds-button--close:hover:not(:disabled),
.rds-button--close:focus-visible:not(:disabled) {
  background: rgba(25, 25, 25, 0.08);
}
```

If the icon needs to stay optically centered, make the adjustment in the variant class rather than by altering the shared slot structure for every button.

- [ ] **Step 6: Verify the file still reads as one shared button implementation**

Run:

```bash
git diff -- apps/storybook/src/components/ui/Button/Button.vue
```

Expected: the diff shows local additions for `gold`, `icon-only`, `exit`, and `close` styling, with no unrelated template refactor.

- [ ] **Step 7: Commit the button-style change**

```bash
git add apps/storybook/src/components/ui/Button/Button.vue
git commit -m "feat: style figma button variants"
```

## Task 3: Add Storybook Coverage for the Three Figma Sections

**Files:**
- Modify: `apps/storybook/src/Button.stories.ts`
- Verify: `apps/storybook/src/components/ui/Button/index.ts`
- Verify: `apps/storybook/src/components/ui/Button/Button.vue`

- [ ] **Step 1: Review the current button stories and icon helpers**

Run:

```bash
sed -n '1,420p' apps/storybook/src/Button.stories.ts
```

Expected: the file already includes icon SVG constants and stories like `ColorMatrix`, `FeedbackButtons`, `OutlinePillButtons`, and `HelpFooterButtons`.

- [ ] **Step 2: Add icon SVG helpers for the exit and close stories if the current file does not already include the right shapes**

Insert or refine story-local SVG constants such as:

```ts
const ExitIconWhite = `
  <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M3 3L11 11M11 3L3 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>
`

const ExitIconBlack = ExitIconWhite
```

Reuse existing `CloseIcon` when it visually matches the target Figma close treatment. Avoid adding a new icon constant if the existing one is already correct.

- [ ] **Step 3: Add a story for the Figma gold button state pair**

Add a focused story block such as:

```ts
export const GoldButtonStates: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 20px;">
        <Button variant="gold">Default Button</Button>
        <Button variant="gold">Default Button</Button>
      </div>
    `,
  }),
}
```

Use Storybook pseudo-state support if the repo already has it configured; otherwise keep the second render as the visual target for the hover/toggle reference and verify it interactively in the browser.

- [ ] **Step 4: Add a story for the exit button section**

Add a story that demonstrates both color treatments from Figma `232:4259`:

```ts
export const ExitButtons: Story = {
  render: () => ({
    components: { Button },
    data() {
      return { ExitIconWhite, ExitIconBlack }
    },
    template: `
      <div style="display: flex; align-items: center; gap: 16px;">
        <Button variant="exit" aria-label="Exit">
          <template #leading><span v-html="ExitIconWhite" /></template>
        </Button>
        <Button variant="exit" aria-label="Exit" class="rds-button--exit-inverse">
          <template #leading><span v-html="ExitIconBlack" /></template>
        </Button>
      </div>
    `,
  }),
}
```

If the final implementation chooses two explicit variants instead of an extra utility class, update the story to match that API and keep the examples literal.

- [ ] **Step 5: Add a story for the close button default and toggle treatment**

Add a dedicated close story:

```ts
export const CloseButtons: Story = {
  render: () => ({
    components: { Button },
    data() {
      return { CloseIcon }
    },
    template: `
      <div style="display: flex; align-items: center; gap: 16px;">
        <Button variant="close" aria-label="Close">
          <template #leading><span v-html="CloseIcon" /></template>
        </Button>
        <Button variant="close" aria-label="Close">
          <template #leading><span v-html="CloseIcon" /></template>
        </Button>
      </div>
    `,
  }),
}
```

As with the gold state pair, use the second render as the visual reference for the Figma toggle/hover state if the file does not support pseudo-state decorators.

- [ ] **Step 6: Make the new variants discoverable in the controls**

Update `argTypes.variant.options` in `apps/storybook/src/Button.stories.ts` to include:

```ts
        'gold',
        'exit',
        'close',
```

Keep the list consistent with the actual `variant` map so Storybook controls do not advertise variants the component cannot render.

- [ ] **Step 7: Run Storybook-focused verification for the button stories**

Run:

```bash
pnpm --filter storybook lint
pnpm --filter storybook storybook dev --host 0.0.0.0
```

Expected:
- the lint command completes without TypeScript or story errors for `Button.stories.ts`
- Storybook starts successfully and exposes a local URL

If `pnpm --filter storybook lint` is not a valid script in this repo, replace it with the nearest existing verification command from `apps/storybook/package.json` before continuing.

- [ ] **Step 8: Compare the rendered stories against the three Figma screenshots**

In the running Storybook instance, verify:

- the gold button matches the default and hover/toggle visual treatment from `40:269`
- the exit buttons match the white and black icon-button treatments from `232:4259`
- the close button matches the default and toggle treatment from `94:1167`
- focus-visible and disabled states still look intentional

If the rendered spacing or icon optical centering is off, fix the CSS in `Button.vue` and re-run the same Storybook verification before moving on.

- [ ] **Step 9: Commit the Storybook documentation change**

```bash
git add apps/storybook/src/Button.stories.ts
git commit -m "docs: add figma button stories"
```

## Task 4: Final Verification and Delivery

**Files:**
- Verify: `apps/storybook/src/components/ui/Button/index.ts`
- Verify: `apps/storybook/src/components/ui/Button/Button.vue`
- Verify: `apps/storybook/src/Button.stories.ts`

- [ ] **Step 1: Review the final combined diff for the three target files**

Run:

```bash
git diff -- apps/storybook/src/components/ui/Button/index.ts apps/storybook/src/components/ui/Button/Button.vue apps/storybook/src/Button.stories.ts
```

Expected: the diff is limited to variant additions, scoped button styling, and matching Storybook stories for the approved Figma sections.

- [ ] **Step 2: Run one final repo-safe verification pass**

Run:

```bash
pnpm --filter storybook lint
```

Expected: PASS with no errors in the changed button files.

If the repo uses a different safe verification command for Storybook, substitute the exact working command and record it in the implementation notes or commit message.

- [ ] **Step 3: Create the final implementation commit**

```bash
git add apps/storybook/src/components/ui/Button/index.ts apps/storybook/src/components/ui/Button/Button.vue apps/storybook/src/Button.stories.ts
git commit -m "feat: add figma-aligned button variants"
```

- [ ] **Step 4: Summarize what shipped**

Capture in the handoff summary:

- which `Button` variants were added or refined
- whether exit color treatments landed as separate variants or a variant-plus-class pattern
- which Storybook stories now correspond to Figma `40:269`, `232:4259`, and `94:1167`
- what verification command actually passed in this repo
