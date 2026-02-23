<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { RadioVariants } from '.'
import { RadioGroupIndicator, RadioGroupItem } from 'reka-ui'
import { cn } from '@/lib/util'
import { radioVariants } from '.'
import './radio.scss'

interface Props {
  value: string | number
  disabled?: boolean
  variant?: RadioVariants['variant']
  size?: RadioVariants['size']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  variant: 'rds-dark-3',
  size: 'md',
})
</script>

<template>
  <RadioGroupItem
    :value="String(props.value)"
    :disabled="props.disabled"
    data-slot="radio"
    :class="
      cn(
        radioVariants({ variant: props.variant, size: props.size }),
        props.disabled && 'opacity-50 cursor-not-allowed',
        props.class,
      )
    "
  >
    <RadioGroupIndicator as-child>
      <span class="radio-indicator" />
    </RadioGroupIndicator>
  </RadioGroupItem>
</template>
