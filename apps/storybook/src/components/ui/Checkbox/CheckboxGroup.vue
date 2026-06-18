<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { CheckboxVariants } from '.'
import { computed, watch } from 'vue'
import { InputError } from '@/components/ui/InputError'
import { InputHelp } from '@/components/ui/InputHelp'
import { InputRoot } from '@/components/ui/InputRoot'
import { Label } from '@/components/ui/Label'
import { cn } from '@/lib/util'
import CheckboxPrimitive from './CheckboxPrimitive.vue'

export interface CheckboxOption {
  value: string | number
  label: string
  disabled?: boolean
}

interface Props {
  id: string
  label: string
  options: CheckboxOption[]
  modelValue?: Array<string | number>
  required?: boolean
  spacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant?: CheckboxVariants['variant']
  size?: CheckboxVariants['size']
  disabled?: boolean
  optional?: boolean
  tooltip?: string
  invalid?: boolean
  helpText?: string
  errorText?: string
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => [],
  spacing: 'sm',
  variant: 'rds-dark-3',
  size: 'lg',
  disabled: false,
  required: false,
  optional: false,
  invalid: false,
})

const emit = defineEmits<{
  change: [value: Array<string | number>]
}>()

const model = defineModel<Array<string | number>>({ default: () => [] })

watch(
  () => model.value,
  (value) => emit('change', value)
)

function handleChange(optionValue: string | number, checked: 'Y' | 'N' | null) {
  const currentValues = [...model.value]

  if (checked === 'Y') {
    if (!currentValues.includes(optionValue)) {
      model.value = [...currentValues, optionValue]
    }
    return
  }

  model.value = currentValues.filter((value) => value !== optionValue)
}

function isChecked(optionValue: string | number): 'Y' | 'N' {
  return model.value.includes(optionValue) ? 'Y' : 'N'
}

function isOptionDisabled(option: CheckboxOption) {
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

    <div
      data-slot="checkbox-group"
      role="group"
      :aria-labelledby="props.id"
      :class="cn('d-flex flex-column', spacingClass)"
    >
      <label
        v-for="option in props.options"
        :key="String(option.value)"
        data-slot="checkbox-group-item"
        :class="
          cn(
            'd-flex align-items-center gap-space-xxs user-select-none',
            !isOptionDisabled(option) && 'cursor-pointer',
            isOptionDisabled(option) && 'opacity-50',
          )
        "
      >
        <CheckboxPrimitive
          :model-value="isChecked(option.value)"
          :variant="props.variant"
          :size="props.size"
          :disabled="isOptionDisabled(option)"
          @update:model-value="(val) => handleChange(option.value, val)"
        />
        <span :class="{ 'text-danger': resolvedInvalid && !isOptionDisabled(option) }">
          {{ option.label }}
        </span>
      </label>
    </div>

    <InputHelp v-if="props.helpText || $slots.help">
      <slot name="help">{{ props.helpText }}</slot>
    </InputHelp>

    <InputError v-if="props.errorText || $slots.error">
      <slot name="error">{{ props.errorText }}</slot>
    </InputError>
  </InputRoot>
</template>
