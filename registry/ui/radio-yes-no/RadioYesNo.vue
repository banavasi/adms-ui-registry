<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { faCheck } from '@fortawesome/pro-light-svg-icons'
import { RadioGroupIndicator, RadioGroupItem, RadioGroupRoot } from 'reka-ui'
import { toRef } from 'vue'
import { FontAwesomeIcon } from '@/components/ui/icon'
import { InputError } from '@/components/ui/InputError'
import { InputHelp } from '@/components/ui/InputHelp'
import { InputRoot } from '@/components/ui/InputRoot'
import { Label } from '@/components/ui/Label'
import { useRadioKeyboard } from '@/lib/useRadioKeyboard'
import { cn } from '@/lib/util'

interface Props {
  /** Unique identifier for the radio group */
  id: string
  /** Label text */
  label?: string
  /** Tooltip text for label */
  tooltip?: string
  /** Show optional badge on label */
  optional?: boolean
  /** Label for "Yes" option */
  yesLabel?: string
  /** Label for "No" option */
  noLabel?: string
  /** Whether the radio group is in an invalid state */
  invalid?: boolean
  /** Whether the radio group is disabled */
  disabled?: boolean
  /** Whether the radio group is required */
  required?: boolean
  /** Help text shown when not invalid */
  helpText?: string
  /** Error text shown when invalid */
  errorText?: string
  /** Make the radio group read-only */
  readonly?: boolean
  /**
   * Whether this radiogroup is inside a toolbar.
   * - false (default): Arrow keys navigate AND check
   * - true: Arrow keys only navigate; Space/Enter check
   */
  isInToolbar?: boolean
  /** Additional CSS classes for the root element */
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  yesLabel: 'Yes',
  noLabel: 'No',
  invalid: false,
  disabled: false,
  required: false,
  optional: false,
  readonly: false,
  isInToolbar: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: 'Y' | 'N' | undefined]
  blur: [event: FocusEvent]
  focus: [event: FocusEvent]
  change: [value: 'Y' | 'N' | undefined]
}>()

const model = defineModel<'Y' | 'N'>()

const handleValueChange = (value: string) => {
  const typedValue = value as 'Y' | 'N'
  model.value = typedValue
  emit('change', typedValue)
}

// Use the keyboard navigation composable
const { handleKeyDown } = useRadioKeyboard({
  isInToolbar: toRef(props, 'isInToolbar'),
  orientation: 'horizontal',
})
</script>

<template>
  <InputRoot
    :id="props.id"
    :invalid="props.invalid"
    :disabled="props.disabled"
    :required="props.required"
    :class="props.class"
  >
    <Label
      v-if="props.label || $slots.label"
      :for="props.id"
      :tooltip="props.tooltip"
      :optional="props.optional"
    >
      <slot name="label">{{ props.label }}</slot>
    </Label>

    <RadioGroupRoot
      :id="props.id"
      :model-value="model"
      :disabled="props.disabled || props.readonly"
      :required="props.required"
      data-slot="radio-yes-no"
      :class="cn('radio-yes-no-group', { 'is-invalid': props.invalid })"
      :aria-required="props.required"
      :aria-invalid="props.invalid ? 'true' : undefined"
      orientation="horizontal"
      @keydown.capture="handleKeyDown"
      @update:model-value="handleValueChange"
      @focusin="emit('focus', $event)"
      @focusout="emit('blur', $event)"
    >
      <RadioGroupItem
        value="Y"
        :class="cn('radio-card', { 'radio-card-selected': model === 'Y', 'radio-card-invalid': props.invalid })"
      >
        <span class="radio-label">{{ yesLabel }}</span>
        <span class="radio-indicator-wrapper" aria-hidden="true">
          <RadioGroupIndicator class="radio-indicator">
            <FontAwesomeIcon
              :icon="faCheck"
              class="radio-indicator-check"
              aria-hidden="true"
            />
          </RadioGroupIndicator>
        </span>
      </RadioGroupItem>

      <RadioGroupItem
        value="N"
        :class="cn('radio-card', { 'radio-card-selected': model === 'N', 'radio-card-invalid': props.invalid })"
      >
        <span class="radio-label">{{ noLabel }}</span>
        <span class="radio-indicator-wrapper" aria-hidden="true">
          <RadioGroupIndicator class="radio-indicator">
            <FontAwesomeIcon
              :icon="faCheck"
              class="radio-indicator-check"
              aria-hidden="true"
            />
          </RadioGroupIndicator>
        </span>
      </RadioGroupItem>
    </RadioGroupRoot>

    <InputHelp v-if="props.helpText || $slots.help">
      <slot name="help">{{ props.helpText }}</slot>
    </InputHelp>

    <InputError v-if="props.errorText || $slots.error">
      <slot name="error">{{ props.errorText }}</slot>
    </InputError>

    <slot name="footer" />
  </InputRoot>
</template>

<style scoped>
.radio-yes-no-group {
  display: flex;
  flex-direction: row;
  gap: 24px;
}

/* ─── Card chrome (sized by content + 16px padding) ───────────── */
.radio-card {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 16px;
  background-color: #fff;
  border: 1px solid var(--rds-light-4, #d0d0d0);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(25, 25, 25, 0.12);
  cursor: pointer;
  font-family: var(--rds-font-family, Arial, Helvetica, "Nimbus Sans L", "Liberation Sans", FreeSans, sans-serif);
  transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease, box-shadow 0.15s ease;
}

.radio-card:hover:not([data-disabled]):not(.radio-card-selected) {
  border-color: var(--rds-dark-1, #747474);
}

.radio-card:focus-visible {
  outline: 2px solid #000;
  outline-offset: 2px;
}

.radio-card[data-disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}

/* ─── Selected (solid maroon) ─────────────────────────────────── */
.radio-card-selected {
  background-color: var(--rds-maroon, #8c1d40);
  border-color: var(--rds-maroon, #8c1d40);
  box-shadow: 0 4px 8px rgba(140, 29, 64, 0.25);
}

.radio-card-selected .radio-label {
  color: #fff;
}

/* ─── Invalid ─────────────────────────────────────────────────── */
.radio-card-invalid {
  border-bottom-width: 5px !important;
  border-color: var(--rds-danger, #cc2f2f);
}

.radio-card-invalid.radio-card-selected {
  background-color: var(--rds-danger, #cc2f2f);
  border-color: var(--rds-danger, #cc2f2f);
  box-shadow: 0 4px 8px rgba(204, 47, 47, 0.25);
}

/* ─── Label ───────────────────────────────────────────────────── */
.radio-label {
  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;
  color: var(--rds-dark-1, #747474);
  transition: color 0.15s ease;
}

/* ─── Indicator (right side) ──────────────────────────────────── */
.radio-indicator-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border: 1.5px solid var(--rds-dark-1, #747474);
  border-radius: 50%;
  background-color: #fff;
  flex-shrink: 0;
  transition: background-color 0.15s ease, border-color 0.15s ease;
}

/* When selected, the wrapper becomes a solid white disc on the maroon card,
   and the indicator paints a maroon checkmark inside it. */
.radio-card-selected .radio-indicator-wrapper {
  border-color: #fff;
  background-color: #fff;
}

.radio-card-invalid:not(.radio-card-selected) .radio-indicator-wrapper {
  border-color: var(--rds-danger, #cc2f2f);
}

/* RadioGroupIndicator only renders when the item is checked, so this rule
   only applies in the selected state. Color drives the SVG checkmark via
   currentColor. */
.radio-indicator,
.radio-card-selected .radio-indicator {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--rds-maroon, #8c1d40);
  line-height: 0;
}

.radio-card-invalid.radio-card-selected .radio-indicator {
  color: var(--rds-danger, #cc2f2f);
}

.radio-indicator-check {
  display: block;
  width: 12px;
  height: 12px;
  color: inherit;
}

.radio-indicator-check path {
  stroke: currentColor;
}
</style>
