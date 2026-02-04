<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed, ref, watch, inject } from 'vue'
import { cn } from '@/lib/util'
import { INPUT_INJECTION_KEY } from '@/components/ui/InputRoot'

interface Props {
  /** Minimum allowed value */
  min?: number
  /** Maximum allowed value */
  max?: number
  /** Default value when input is empty (applied on blur) */
  defaultValue?: number
  /** Allow decimal values */
  allowDecimal?: boolean
  /** Number of decimal places (only used when allowDecimal is true) */
  decimalPlaces?: number
  /** Suffix to display after the value (e.g., "%", "kg", "cm") */
  suffix?: string
  /** Prefix to display before the value (e.g., "$", "€") */
  prefix?: string
  /** Placeholder text */
  placeholder?: string
  /** Make the input read-only */
  readonly?: boolean
  /** Autocomplete attribute */
  autocomplete?: string
  /** Additional CSS classes */
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  min: undefined,
  max: undefined,
  defaultValue: undefined,
  allowDecimal: false,
  decimalPlaces: 2,
  suffix: undefined,
  prefix: undefined,
  placeholder: undefined,
  readonly: false,
  autocomplete: undefined,
})

const emit = defineEmits<{
  blur: [event: FocusEvent]
  focus: [event: FocusEvent]
  input: [event: Event]
  change: [event: Event]
  keydown: [event: KeyboardEvent]
  keyup: [event: KeyboardEvent]
}>()

const context = inject(INPUT_INJECTION_KEY)
if (!context) {
  throw new Error('InputNumericRange must be used within InputRoot')
}

const inputRef = ref<HTMLInputElement>()
const model = defineModel<number | null>()
const displayValue = ref('')

// Format number with decimal places
const formatNumber = (num: number): string => {
  if (props.allowDecimal && props.decimalPlaces !== undefined) {
    return num.toFixed(props.decimalPlaces)
  }
  return Math.floor(num).toString()
}

// Parse input string to number
const parseInput = (input: string): number | null => {
  let clean = input
  if (props.prefix) {
    clean = clean.replace(props.prefix, '')
  }
  if (props.suffix) {
    clean = clean.replace(props.suffix, '')
  }

  clean = clean.trim()

  if (clean === '' || clean === '-') return null

  const parsed = props.allowDecimal ? parseFloat(clean) : parseInt(clean, 10)

  if (isNaN(parsed)) return null

  return parsed
}

// Clamp value to min/max range
const clampValue = (value: number): number => {
  let clamped = value

  if (props.min !== undefined && clamped < props.min) {
    clamped = props.min
  }

  if (props.max !== undefined && clamped > props.max) {
    clamped = props.max
  }

  return clamped
}

// Update display value with prefix/suffix
const updateDisplayValue = (value: number | null) => {
  if (value === null) {
    displayValue.value = ''
    return
  }

  const formatted = formatNumber(value)
  const withPrefix = props.prefix ? `${props.prefix}${formatted}` : formatted
  const withSuffix = props.suffix ? `${withPrefix}${props.suffix}` : withPrefix

  displayValue.value = withSuffix
}

// Handle beforeinput to prevent invalid characters
const handleBeforeInput = (event: InputEvent) => {
  if (!event.data) return

  const char = event.data

  // Allow digits
  if (/\d/.test(char)) return

  // Allow decimal point only if decimals are allowed and not already present
  if (props.allowDecimal && char === '.') {
    const currentValue = displayValue.value || ''
    let clean = currentValue
    if (props.prefix) clean = clean.replace(props.prefix, '')
    if (props.suffix) clean = clean.replace(props.suffix, '')

    if (!clean.includes('.')) {
      return
    }
  }

  // Allow minus sign only at the start and if min allows negative
  if (char === '-' && (props.min === undefined || props.min < 0)) {
    const cursorPosition = (event.target as HTMLInputElement).selectionStart || 0
    if (cursorPosition === 0) {
      return
    }
  }

  // Block all other characters
  event.preventDefault()
}

// Handle input changes
const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  const inputValue = target.value

  const parsed = parseInput(inputValue)

  if (parsed === null) {
    displayValue.value = inputValue
    model.value = null
    emit('input', event)
    return
  }

  model.value = parsed
  displayValue.value = inputValue
  emit('input', event)
}

// Handle blur - apply clamping and formatting
const handleBlur = (event: FocusEvent) => {
  let finalValue: number | null = model.value ?? props.defaultValue ?? null

  if (finalValue !== null) {
    finalValue = clampValue(finalValue)
    model.value = finalValue
  }

  updateDisplayValue(finalValue)
  emit('blur', event)
}

// Handle focus - remove prefix/suffix for editing
const handleFocus = (event: FocusEvent) => {
  if (model.value !== null && model.value !== undefined) {
    const formatted = formatNumber(model.value)
    displayValue.value = formatted
  }

  emit('focus', event)
}

// Initialize display value from model
watch(
  () => model.value,
  (newValue) => {
    if (document.activeElement !== inputRef.value) {
      updateDisplayValue(newValue ?? null)
    }
  },
  { immediate: true },
)

const ariaDescribedBy = computed(() => {
  const ids: string[] = []
  if (!context.invalid.value) {
    ids.push(context.helpId.value)
  }
  if (context.invalid.value) {
    ids.push(context.errorId.value)
  }
  return ids.length > 0 ? ids.join(' ') : undefined
})
</script>

<template>
  <div class="input-wrapper">
    <input
      :id="context.id.value"
      ref="inputRef"
      :value="displayValue"
      data-slot="input-numeric-range"
      type="text"
      inputmode="decimal"
      :class="cn('form-control col-12 p-space-xs', { 'is-invalid': context.invalid.value }, props.class)"
      :placeholder="placeholder"
      :required="context.required.value"
      :disabled="context.disabled.value"
      :readonly="readonly"
      :autocomplete="autocomplete"
      :aria-required="context.required.value"
      :aria-invalid="context.invalid.value ? 'true' : undefined"
      :aria-describedby="ariaDescribedBy"
      @beforeinput="handleBeforeInput"
      @input="handleInput"
      @blur="handleBlur"
      @focus="handleFocus"
      @change="emit('change', $event)"
      @keydown="emit('keydown', $event)"
      @keyup="emit('keyup', $event)"
    />
  </div>
</template>

<style>
.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.form-control {
  border-radius: 0;
  width: 100%;
}

.form-control:focus {
  outline: 2px solid #000;
  outline-offset: 2px;
  box-shadow: none;
}

.is-invalid {
  border-bottom-width: 0.25rem;
  background-image: none !important;
}
</style>
