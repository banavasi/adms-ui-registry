<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { RadioGroupIndicator, RadioGroupItem, RadioGroupRoot } from 'reka-ui'
import { computed } from 'vue'
import { InputError } from '@/components/ui/InputError'
import { InputHelp } from '@/components/ui/InputHelp'
import { InputRoot } from '@/components/ui/InputRoot'
import { Label } from '@/components/ui/Label'
import { cn } from '@/lib/util'

interface RadioOption {
  /** Unique value for this option */
  value: string
  /** Display label for this option */
  label: string
  /** Whether this option is disabled */
  disabled?: boolean
}

interface Props {
  /** Unique identifier for the radio group */
  id: string
  /** Array of radio options */
  options: RadioOption[]
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
  /** Additional CSS classes for the root element */
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  invalid: false,
  disabled: false,
  required: false,
  optional: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: string | undefined]
  blur: [event: FocusEvent]
  focus: [event: FocusEvent]
  change: [value: string | undefined]
}>()

const model = defineModel<string>()

const handleValueChange = (value: string) => {
  model.value = value
  emit('change', value)
}

/** Check if an option is currently selected */
const isSelected = (value: string): boolean => {
  return model.value === value
}
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
      :disabled="props.disabled"
      :required="props.required"
      data-slot="radio-group"
      :class="cn('radio-group', { 'is-invalid': props.invalid })"
      :aria-required="props.required"
      :aria-invalid="props.invalid ? 'true' : undefined"
      orientation="vertical"
      @update:model-value="handleValueChange"
      @focusin="emit('focus', $event)"
      @focusout="emit('blur', $event)"
    >
      <div
        v-for="option in options"
        :key="option.value"
        :class="
          cn('radio-group-option', {
            'radio-group-option-selected': isSelected(option.value),
            'radio-group-option-disabled': option.disabled || props.disabled,
          })
        "
      >
        <RadioGroupItem
          :value="option.value"
          :disabled="option.disabled || props.disabled"
          :class="cn('radio-group-item', { 'is-invalid': props.invalid })"
        >
          <RadioGroupIndicator class="radio-group-indicator" />
        </RadioGroupItem>
        <label
          :for="`${props.id}-${option.value}`"
          class="radio-group-label"
        >
          {{ option.label }}
        </label>
      </div>
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
.radio-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.radio-group-option {
  display: flex;
  align-items: center;
  gap: 12px;
}

.radio-group-item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  border: 2px solid var(--rds-dark-1, #747474);
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;
  transition: border-color 0.2s ease;
}

.radio-group-item:hover:not([data-disabled]) {
  border-color: var(--rds-dark-2, #484848);
}

.radio-group-item:focus-visible {
  outline: 2px solid #000;
  outline-offset: 2px;
}

.radio-group-item[data-state='checked'] {
  border-color: var(--rds-maroon, #8c1d40);
}

.radio-group-item.is-invalid[data-state='checked'] {
  border-color: var(--rds-danger, #cc2f2f);
}

.radio-group-item[data-disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}

.radio-group-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--rds-maroon, #8c1d40);
  transform: scale(0);
  transition: transform 0.2s ease;
}

.radio-group-item[data-state='checked'] .radio-group-indicator {
  transform: scale(1);
}

.radio-group-item.is-invalid .radio-group-indicator {
  background-color: var(--rds-danger, #cc2f2f);
}

.radio-group-label {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: var(--rds-dark-3, #191919);
  cursor: pointer;
  user-select: none;
}

.radio-group-option-disabled .radio-group-label {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
