<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { RadioGroupRoot } from 'reka-ui'
import { provide, computed, toRef } from 'vue'
import { InputRoot } from '@/components/ui/InputRoot'
import { InputError } from '@/components/ui/InputError'
import { InputHelp } from '@/components/ui/InputHelp'
import { Label } from '@/components/ui/Label'
import { cn } from '@/lib/util'
import { useRadioKeyboard } from '@/lib/useRadioKeyboard'

interface Props {
  /** Unique identifier for the radio group */
  id: string
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
  /** Card variant: 'default' (with icon support) or 'simple' (text only) */
  variant?: 'default' | 'simple'
  /** Internal card content layout: 'vertical' (icon on top, centered) or 'horizontal' (icon on left) */
  cardLayout?: 'vertical' | 'horizontal'
  /** Whether cards are stacked vertically. If false, cards are side-by-side (stacks on mobile via CSS) */
  stacked?: boolean
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
  variant: 'default',
  cardLayout: 'horizontal',
  stacked: true,
  isInToolbar: false,
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

// Use the keyboard navigation composable with dynamic orientation
const { handleKeyDown } = useRadioKeyboard({
  isInToolbar: toRef(props, 'isInToolbar'),
  orientation: computed(() => (props.stacked ? 'vertical' : 'horizontal')).value as
    | 'vertical'
    | 'horizontal',
})

// Provide context to child RadioCard components
provide('radioCardContext', {
  modelValue: computed(() => model.value),
  disabled: computed(() => props.disabled),
  invalid: computed(() => props.invalid),
  variant: computed(() => props.variant),
  cardLayout: computed(() => props.cardLayout),
  stacked: computed(() => props.stacked),
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
      :disabled="props.disabled"
      :required="props.required"
      data-slot="radio-card-group"
      :class="
        cn('radio-card-group', {
          'radio-card-group-stacked': props.stacked,
          'radio-card-group-horizontal': !props.stacked,
          'is-invalid': props.invalid,
        })
      "
      :aria-required="props.required"
      :aria-invalid="props.invalid ? 'true' : undefined"
      :orientation="props.stacked ? 'vertical' : 'horizontal'"
      @keydown.capture="handleKeyDown"
      @update:model-value="handleValueChange"
      @focusin="emit('focus', $event)"
      @focusout="emit('blur', $event)"
    >
      <slot />
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
.radio-card-group {
  display: flex;
  gap: 16px;
}

.radio-card-group-stacked {
  flex-direction: column;
}

.radio-card-group-horizontal {
  flex-direction: row;
  flex-wrap: wrap;
  gap: 48px;
}

@media (max-width: 768px) {
  .radio-card-group-horizontal {
    flex-direction: column;
    gap: 16px;
  }
}
</style>
