<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { InputError } from '@/components/ui/InputError'
import { InputField } from '@/components/ui/InputField'
import { InputHelp } from '@/components/ui/InputHelp'
import { InputRoot } from '@/components/ui/InputRoot'
import { Label } from '@/components/ui/Label'

interface Props {
  /** Unique identifier for the input */
  id: string
  /** Input value (v-model) */
  modelValue?: string | number
  /** Label text */
  label?: string
  /** Tooltip text for label */
  tooltip?: string
  /** Show optional badge on label */
  optional?: boolean
  /** Input type */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'
  /** Placeholder text */
  placeholder?: string
  /** Whether the input is in an invalid state */
  invalid?: boolean
  /** Whether the input is disabled */
  disabled?: boolean
  /** Whether the input is required */
  required?: boolean
  /** Help text shown when not invalid */
  helpText?: string
  /** Error text shown when invalid */
  errorText?: string
  /** Whether input has a prefix slot */
  hasPrefix?: boolean
  /** Whether input has a suffix slot */
  hasSuffix?: boolean
  /** Additional class for the root element */
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  invalid: false,
  disabled: false,
  required: false,
  optional: false,
  hasPrefix: false,
  hasSuffix: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  blur: [event: FocusEvent]
  focus: [event: FocusEvent]
  input: [event: Event]
  change: [event: Event]
  keydown: [event: KeyboardEvent]
  keyup: [event: KeyboardEvent]
}>()

const model = defineModel<string | number>()
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

    <InputField
      v-model="model"
      :type="props.type"
      :placeholder="props.placeholder"
      :has-prefix="props.hasPrefix || !!$slots.prefix"
      :has-suffix="props.hasSuffix || !!$slots.suffix"
      @blur="emit('blur', $event)"
      @focus="emit('focus', $event)"
      @input="emit('input', $event)"
      @change="emit('change', $event)"
      @keydown="emit('keydown', $event)"
      @keyup="emit('keyup', $event)"
    >
      <template v-if="$slots.prefix" #prefix>
        <slot name="prefix" />
      </template>
      <template v-if="$slots.suffix" #suffix>
        <slot name="suffix" />
      </template>
    </InputField>

    <InputHelp v-if="props.helpText || $slots.help">
      <slot name="help">{{ props.helpText }}</slot>
    </InputHelp>

    <InputError v-if="props.errorText || $slots.error">
      <slot name="error">{{ props.errorText }}</slot>
    </InputError>

    <slot name="footer" />
  </InputRoot>
</template>
