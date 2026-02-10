<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { ref } from 'vue'
import { InputError } from '@/components/ui/InputError'
import { InputField } from '@/components/ui/InputField'
import { InputHelp } from '@/components/ui/InputHelp'
import { InputPasswordToggle } from '@/components/ui/InputPasswordToggle'
import { InputRoot } from '@/components/ui/InputRoot'
import { Label } from '@/components/ui/Label'

interface Props {
  /** Unique identifier for the input */
  id: string
  /** Input value (v-model) */
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

const passwordVisible = ref(false)

function toggleVisibility(visible: boolean) {
  passwordVisible.value = visible
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

    <!-- Requirements slot for password rules (between label and input) -->
    <div v-if="$slots.requirements" class="password-requirements">
      <slot name="requirements" />
    </div>

    <InputField
      v-model="model"
      :type="passwordVisible ? 'text' : 'password'"
      :placeholder="props.placeholder"
      :has-suffix="true"
      @blur="emit('blur', $event)"
      @focus="emit('focus', $event)"
      @input="emit('input', $event)"
      @change="emit('change', $event)"
      @keydown="emit('keydown', $event)"
      @keyup="emit('keyup', $event)"
    >
      <template #suffix>
        <InputPasswordToggle
          :visible="passwordVisible"
          @toggle="toggleVisibility"
        />
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

<style scoped>
.password-requirements {
  color: var(--rds-dark-2, #484848);
  font-size: 0.875rem;
  line-height: 1.5;
}

.password-requirements ul {
  margin: 0.5rem 0 0 0;
  padding-left: 1.25rem;
}

.password-requirements li {
  margin-bottom: 0.25rem;
}
</style>
