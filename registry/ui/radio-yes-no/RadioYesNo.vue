<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { RadioGroupRoot, RadioGroupItem, RadioGroupIndicator } from 'reka-ui'
import { InputRoot } from '@/components/ui/InputRoot'
import { InputError } from '@/components/ui/InputError'
import { InputHelp } from '@/components/ui/InputHelp'
import { Label } from '@/components/ui/Label'
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
      @update:model-value="handleValueChange"
      @focusin="emit('focus', $event)"
      @focusout="emit('blur', $event)"
    >
      <RadioGroupItem
        value="Y"
        :class="cn('radio-card', { 'radio-card-selected': model === 'Y', 'radio-card-invalid': props.invalid })"
      >
        <span class="radio-label">{{ yesLabel }}</span>
        <span class="radio-indicator-wrapper">
          <RadioGroupIndicator class="radio-indicator" />
        </span>
      </RadioGroupItem>

      <RadioGroupItem
        value="N"
        :class="cn('radio-card', { 'radio-card-selected': model === 'N', 'radio-card-invalid': props.invalid })"
      >
        <span class="radio-label">{{ noLabel }}</span>
        <span class="radio-indicator-wrapper">
          <RadioGroupIndicator class="radio-indicator" />
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
  gap: 48px;
}

.radio-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background-color: #fff;
  border: 1px solid var(--rds-light-4, #d0d0d0);
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.radio-card:hover:not([data-disabled]) {
  border-color: var(--rds-dark-1, #747474);
}

.radio-card:focus-visible {
  outline: 2px solid #000;
  outline-offset: 2px;
  box-shadow: none;
}

.radio-card[data-disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}

.radio-card-selected {
  border-color: var(--rds-maroon, #8c1d40);
  box-shadow: 0 2px 4px rgba(140, 29, 64, 0.2);
}

.radio-card-invalid {
  border-bottom-width: 5px !important;
  border-color: var(--rds-danger, #cc2f2f);
}

.radio-card-invalid.radio-card-selected {
  border-color: var(--rds-danger, #cc2f2f);
  box-shadow: 0 2px 4px rgba(204, 47, 47, 0.2);
}

.radio-indicator-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 2px solid var(--rds-dark-1, #747474);
  border-radius: 50%;
  background-color: #fff;
  flex-shrink: 0;
}

.radio-card-selected .radio-indicator-wrapper {
  border-color: var(--rds-maroon, #8c1d40);
}

.radio-card-invalid .radio-indicator-wrapper {
  border-color: var(--rds-danger, #cc2f2f);
}

.radio-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--rds-maroon, #8c1d40);
}

.radio-card-invalid .radio-indicator {
  background-color: var(--rds-danger, #cc2f2f);
}

.radio-label {
  font-size: 16px;
  font-weight: 700;
  color: var(--rds-dark-1, #747474);
}
</style>
