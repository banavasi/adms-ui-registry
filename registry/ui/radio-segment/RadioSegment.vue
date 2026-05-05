<script setup lang="ts" generic="T extends Record<string, unknown>">
import type { HTMLAttributes } from 'vue'
import { RadioGroupIndicator, RadioGroupItem, RadioGroupRoot } from 'reka-ui'
import { computed, onMounted, toRef, watch } from 'vue'
import { InputError } from '@/components/ui/InputError'
import { InputHelp } from '@/components/ui/InputHelp'
import { InputRoot } from '@/components/ui/InputRoot'
import { Label } from '@/components/ui/Label'
import { cn } from '@/lib/util'
import { useRadioKeyboard } from '@/lib/useRadioKeyboard'

interface Props {
  /** Unique identifier for the radio group */
  id: string
  /** Array of option objects */
  options: T[]
  /** Key in option object to use as display label */
  labelKey: keyof T & string
  /** Key in option object to use as value for matching */
  valueKey: keyof T & string
  /** Value to prefill/preselect (matches against valueKey, case-insensitive) */
  prefillValue?: string | number
  /** Label text */
  label?: string
  /** Tooltip text for label */
  tooltip?: string
  /** Show optional badge on label */
  optional?: boolean
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
  invalid: false,
  disabled: false,
  required: false,
  optional: false,
  readonly: false,
  isInToolbar: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: T | undefined]
  blur: [event: FocusEvent]
  focus: [event: FocusEvent]
  change: [value: T | undefined]
}>()

const model = defineModel<T>()

/** Get the value string for an option (used for RadioGroupItem value) */
const getOptionValue = (option: T): string => {
  const val = option[props.valueKey]
  return String(val)
}

/** Get the label string for an option */
const getOptionLabel = (option: T): string => {
  const label = option[props.labelKey]
  return String(label)
}

/** Find option by value (case-insensitive matching) */
const findOptionByValue = (value: string | number | undefined): T | undefined => {
  if (value === undefined || value === null) return undefined
  const searchValue = String(value).toLowerCase()
  return props.options.find((opt) => {
    const optValue = String(opt[props.valueKey]).toLowerCase()
    return optValue === searchValue
  })
}

/** Current selected value string (for RadioGroupRoot) */
const selectedValue = computed(() => {
  if (!model.value) return undefined
  return getOptionValue(model.value)
})

/** Handle value change from RadioGroup */
const handleValueChange = (value: string) => {
  const selectedOption = props.options.find((opt) => getOptionValue(opt) === value)
  model.value = selectedOption
  emit('change', selectedOption)
}

// Use the keyboard navigation composable
const { handleKeyDown } = useRadioKeyboard({
  isInToolbar: toRef(props, 'isInToolbar'),
  orientation: 'horizontal',
})

/** Check if an option is currently selected */
const isSelected = (option: T): boolean => {
  if (!model.value) return false
  return getOptionValue(model.value) === getOptionValue(option)
}

/** Initialize with prefillValue on mount */
onMounted(() => {
  if (props.prefillValue !== undefined && !model.value) {
    const prefillOption = findOptionByValue(props.prefillValue)
    if (prefillOption) {
      model.value = prefillOption
    }
  }
})

/** Watch for prefillValue changes */
watch(
  () => props.prefillValue,
  (newValue) => {
    if (newValue !== undefined) {
      const prefillOption = findOptionByValue(newValue)
      if (prefillOption) {
        model.value = prefillOption
      }
    }
  }
)
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
      :model-value="selectedValue"
      :disabled="props.disabled || props.readonly"
      :required="props.required"
      data-slot="radio-segment"
      :class="cn('radio-segment-group', { 'is-invalid': props.invalid })"
      :aria-required="props.required"
      :aria-invalid="props.invalid ? 'true' : undefined"
      orientation="horizontal"
      @keydown.capture="handleKeyDown"
      @update:model-value="handleValueChange"
      @focusin="emit('focus', $event)"
      @focusout="emit('blur', $event)"
    >
      <RadioGroupItem
        v-for="option in options"
        :key="getOptionValue(option)"
        :value="getOptionValue(option)"
        :class="
          cn('radio-segment-card', {
            'radio-segment-card-selected': isSelected(option),
            'radio-segment-card-invalid': props.invalid,
          })
        "
      >
        <span class="radio-segment-label">{{ getOptionLabel(option) }}</span>
        <span class="radio-segment-indicator-wrapper" aria-hidden="true">
          <RadioGroupIndicator class="radio-segment-indicator">
            <svg
              class="radio-segment-indicator-check"
              width="12"
              height="12"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M3 8.5 L6.5 12 L13 5" />
            </svg>
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

<style>
.radio-segment-group {
  display: flex;
  flex-direction: row;
  gap: 24px;
  flex-wrap: wrap;
}

/* ─── Card chrome (sized by content + 16px padding) ───────────── */
.radio-segment-card {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px;
  background-color: #fff;
  border: 1px solid var(--rds-light-4, #d0d0d0);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(25, 25, 25, 0.12);
  cursor: pointer;
  font-family: var(--rds-font-family, Arial, Helvetica, "Nimbus Sans L", "Liberation Sans", FreeSans, sans-serif);
  transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease, box-shadow 0.15s ease;
}

.radio-segment-card:hover:not([data-disabled]):not(.radio-segment-card-selected) {
  border-color: var(--rds-dark-1, #747474);
}

.radio-segment-card:focus-visible {
  outline: 2px solid #000;
  outline-offset: 2px;
}

.radio-segment-card[data-disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}

/* ─── Selected (solid maroon) ─────────────────────────────────── */
.radio-segment-card-selected {
  background-color: var(--rds-maroon, #8c1d40);
  border-color: var(--rds-maroon, #8c1d40);
  box-shadow: 0 4px 8px rgba(140, 29, 64, 0.25);
}

.radio-segment-card-selected .radio-segment-label {
  color: #fff;
}

/* ─── Invalid ─────────────────────────────────────────────────── */
.radio-segment-card-invalid {
  border-bottom-width: 5px !important;
  border-color: var(--rds-danger, #cc2f2f);
}

.radio-segment-card-invalid.radio-segment-card-selected {
  background-color: var(--rds-danger, #cc2f2f);
  border-color: var(--rds-danger, #cc2f2f);
  box-shadow: 0 4px 8px rgba(204, 47, 47, 0.25);
}

/* ─── Label ───────────────────────────────────────────────────── */
.radio-segment-label {
  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;
  color: var(--rds-dark-1, #747474);
  transition: color 0.15s ease;
}

/* ─── Indicator (right side) ──────────────────────────────────── */
.radio-segment-indicator-wrapper {
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

.radio-segment-card-selected .radio-segment-indicator-wrapper {
  border-color: #fff;
  background-color: #fff;
}

.radio-segment-card-invalid:not(.radio-segment-card-selected) .radio-segment-indicator-wrapper {
  border-color: var(--rds-danger, #cc2f2f);
}

.radio-segment-indicator,
.radio-segment-card-selected .radio-segment-indicator {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--rds-maroon, #8c1d40);
  line-height: 0;
}

.radio-segment-card-invalid.radio-segment-card-selected .radio-segment-indicator {
  color: var(--rds-danger, #cc2f2f);
}

.radio-segment-indicator-check {
  display: block;
  width: 12px;
  height: 12px;
  color: inherit;
}

.radio-segment-indicator-check path {
  stroke: currentColor;
}
</style>
