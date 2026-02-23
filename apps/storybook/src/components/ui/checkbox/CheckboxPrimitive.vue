<script setup lang="ts">
import type { CheckboxCheckedState } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { CheckboxVariants } from '.'
import { CheckboxIndicator, CheckboxRoot } from 'reka-ui'
import { ref, watchEffect } from 'vue'
import { cn } from '@/lib/util'
import { checkboxVariants } from '.'
import './checkbox.scss'

interface Props {
  modelValue?: 'Y' | 'N' | null
  variant?: CheckboxVariants['variant']
  size?: CheckboxVariants['size']
  disabled?: boolean
  readonlyVisual?: boolean
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  variant: 'rds-dark-3',
  size: 'md',
  disabled: false,
  readonlyVisual: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: 'Y' | 'N' | null]
}>()

const checked = ref<CheckboxCheckedState>(false)

watchEffect(() => {
  const nextValue = props.modelValue === 'Y'
  if (checked.value !== nextValue) {
    checked.value = nextValue
  }
})

function handleCheckedChange(value: CheckboxCheckedState) {
  emit('update:modelValue', value === true ? 'Y' : 'N')
}
</script>

<template>
  <CheckboxRoot
    v-model="checked"
    data-slot="checkbox"
    :disabled="props.disabled"
    :tabindex="props.readonlyVisual ? -1 : undefined"
    :class="
      cn(
        checkboxVariants({ variant: props.variant, size: props.size }),
        {
          'checkbox-readonly': props.readonlyVisual,
          'opacity-50 cursor-not-allowed': props.disabled,
        },
        props.class,
      )
    "
    @update:model-value="handleCheckedChange"
  >
    <CheckboxIndicator class="d-flex align-items-center justify-content-center h-100 w-100 text-white" />
  </CheckboxRoot>
</template>
