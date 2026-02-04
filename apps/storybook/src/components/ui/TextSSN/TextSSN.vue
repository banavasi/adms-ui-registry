<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed, ref } from 'vue'
import { InputError } from '@/components/ui/InputError'
import { InputHelp } from '@/components/ui/InputHelp'
import { InputMasked } from '@/components/ui/InputMasked'
import { InputRoot } from '@/components/ui/InputRoot'
import { Label } from '@/components/ui/Label'

interface Props {
  /** Unique identifier for the input */
  id: string
  /** Input value (v-model) - stores unmasked SSN (9 digits) */
  modelValue?: string
  /** Label text */
  label?: string
  /** Tooltip text for label */
  tooltip?: string
  /** Show optional badge on label */
  optional?: boolean
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
  /** Additional class for the root element */
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '###-##-####',
  invalid: false,
  disabled: false,
  required: false,
  optional: false,
})

const emit = defineEmits<{
  blur: [event: FocusEvent]
  focus: [event: FocusEvent]
  input: [event: Event]
  change: [event: Event]
  keydown: [event: KeyboardEvent]
  keyup: [event: KeyboardEvent]
}>()

const model = defineModel<string>()

// SSN mask: ###-##-####
const SSN_MASK = '###-##-####'

// Track focus state
const isFocused = ref(false)

// Masked display value for blur state (###-##-1234)
const maskedDisplayValue = computed(() => {
  if (!model.value || model.value.length < 4) {
    return ''
  }
  const last4 = model.value.slice(-4)
  return `###-##-${last4}`
})

// Show masked display when blurred and has value
const showMaskedDisplay = computed(() => {
  return !isFocused.value && model.value && model.value.length >= 4
})

function handleFocus(event: FocusEvent) {
  isFocused.value = true
  emit('focus', event)
}

function handleBlur(event: FocusEvent) {
  isFocused.value = false
  emit('blur', event)
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

    <!-- Masked display input (shown on blur with value) -->
    <div v-if="showMaskedDisplay" class="input-wrapper">
      <input
        :id="props.id"
        type="text"
        class="form-control col-12 p-space-xs"
        :class="{ 'is-invalid': props.invalid }"
        :value="maskedDisplayValue"
        :disabled="props.disabled"
        readonly
        @focus="handleFocus"
      />
    </div>

    <!-- Actual masked input (shown on focus or empty) -->
    <InputMasked
      v-else
      v-model="model"
      :mask="SSN_MASK"
      :placeholder="props.placeholder"
      autocomplete="off"
      @blur="handleBlur"
      @focus="handleFocus"
      @input="emit('input', $event)"
      @change="emit('change', $event)"
      @keydown="emit('keydown', $event)"
      @keyup="emit('keyup', $event)"
    />

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
