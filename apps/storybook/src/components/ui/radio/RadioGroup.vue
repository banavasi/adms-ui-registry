<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { RadioVariants } from '.'
import { RadioGroupRoot } from 'reka-ui'
import { computed, ref, watch, watchEffect } from 'vue'
import { InputError } from '@/components/ui/InputError'
import { InputHelp } from '@/components/ui/InputHelp'
import { InputRoot } from '@/components/ui/InputRoot'
import { Label } from '@/components/ui/Label'
import { cn } from '@/lib/util'
import RadioPrimitive from './RadioPrimitive.vue'

export interface RadioOption {
  value: string | number
  label: string
  disabled?: boolean
}

interface Props {
  id: string
  label: string
  options: RadioOption[]
  modelValue?: string | number
  spacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant?: RadioVariants['variant']
  size?: RadioVariants['size']
  disabled?: boolean
  required?: boolean
  optional?: boolean
  tooltip?: string
  invalid?: boolean
  helpText?: string
  errorText?: string
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: undefined,
  spacing: 'sm',
  variant: 'rds-dark-3',
  size: 'md',
  disabled: false,
  required: false,
  optional: false,
  invalid: false,
})

const emit = defineEmits<{
  change: [value: string | number | undefined]
}>()

const model = defineModel<string | number | undefined>({ default: undefined })
const internalValue = ref<string | undefined>(undefined)

watchEffect(() => {
  internalValue.value = model.value !== undefined ? String(model.value) : undefined
})

watch(
  () => model.value,
  (value) => emit('change', value)
)

function handleUpdate(value: string | undefined) {
  if (value === undefined) {
    model.value = undefined
    return
  }

  const option = props.options.find((item) => String(item.value) === value)
  model.value = option ? option.value : value
}

function isOptionDisabled(option: RadioOption) {
  return props.disabled || Boolean(option.disabled)
}

const spacingClass = computed(() => {
  const spacingMap = {
    xs: 'gap-space-xxs',
    sm: 'gap-space-xs',
    md: 'gap-space-sm',
    lg: 'gap-space-md',
    xl: 'gap-space-lg',
  }

  return spacingMap[props.spacing]
})

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

    <RadioGroupRoot
      :id="props.id"
      :model-value="internalValue"
      :disabled="props.disabled"
      data-slot="radio-group"
      :class="cn('d-flex flex-column', spacingClass)"
      @update:model-value="handleUpdate"
    >
      <label
        v-for="option in props.options"
        :key="String(option.value)"
        data-slot="radio-group-item"
        :class="
          cn(
            'radio-option-row d-flex align-items-center gap-space-xxs user-select-none',
            !isOptionDisabled(option) && 'cursor-pointer',
            isOptionDisabled(option) && 'radio-option-disabled',
          )
        "
      >
        <RadioPrimitive
          :value="option.value"
          :disabled="isOptionDisabled(option)"
          :variant="props.variant"
          :size="props.size"
        />
        <span :class="cn('radio-option-label', resolvedInvalid && !isOptionDisabled(option) && 'text-danger')">
          {{ option.label }}
        </span>
      </label>
    </RadioGroupRoot>

    <InputHelp v-if="props.helpText || $slots.help">
      <slot name="help">{{ props.helpText }}</slot>
    </InputHelp>

    <InputError v-if="props.errorText || $slots.error">
      <slot name="error">{{ props.errorText }}</slot>
    </InputError>
  </InputRoot>
</template>
