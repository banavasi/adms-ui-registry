<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { CheckboxVariants } from '.'
import { computed, watch } from 'vue'
import { InputError } from '@/components/ui/InputError'
import { InputHelp } from '@/components/ui/InputHelp'
import { InputRoot } from '@/components/ui/InputRoot'
import { Label } from '@/components/ui/Label'
import CheckboxPrimitive from './CheckboxPrimitive.vue'

interface Props {
  id: string
  label: string
  modelValue?: 'Y' | 'N' | null
  variant?: CheckboxVariants['variant']
  size?: CheckboxVariants['size']
  required?: boolean
  disabled?: boolean
  optional?: boolean
  tooltip?: string
  invalid?: boolean
  helpText?: string
  errorText?: string
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  variant: 'rds-dark-3',
  size: 'lg',
  required: false,
  disabled: false,
  optional: false,
  invalid: false,
})

const emit = defineEmits<{
  change: [value: 'Y' | 'N' | null]
}>()

const model = defineModel<'Y' | 'N' | null>({ default: null })

watch(
  () => model.value,
  (value) => emit('change', value)
)

const resolvedInvalid = computed(() => props.invalid || Boolean(props.errorText))
</script>

<template>
  <InputRoot
    :id="props.id"
    :invalid="resolvedInvalid"
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

    <label
      :for="props.id"
      class="d-flex align-items-center gap-space-xxs user-select-none"
      :class="{ 'cursor-pointer': !props.disabled }"
    >
      <CheckboxPrimitive
        :id="props.id"
        v-model="model"
        :variant="props.variant"
        :size="props.size"
        :disabled="props.disabled"
      />
      <span class="checkbox-label-text" :class="{ 'text-danger': resolvedInvalid }">
        <slot>{{ props.label }}</slot>
      </span>
    </label>

    <InputHelp v-if="props.helpText || $slots.help">
      <slot name="help">{{ props.helpText }}</slot>
    </InputHelp>

    <InputError v-if="props.errorText || $slots.error">
      <slot name="error">{{ props.errorText }}</slot>
    </InputError>
  </InputRoot>
</template>
