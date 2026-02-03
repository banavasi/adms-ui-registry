<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { ButtonVariants } from '.'
import { Primitive } from 'reka-ui'
import { cn } from '@/lib/util'
import { buttonVariants } from '.'

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
  loading?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  asChild: false,
  loading: false,
  disabled: false,
})
</script>

<template>
  <Primitive
    data-slot="button"
    :as-child="props.asChild"
    :as="props.as"
    :disabled="props.loading || props.disabled"
    :class="cn(buttonVariants({ variant: props.variant, size: props.size }), props.class)"
  >
    <span
      v-if="props.loading"
      class="spinner-border spinner-border-sm me-2"
      role="status"
      aria-hidden="true"
    />
    <slot />
  </Primitive>
</template>

<style>
.btn:focus-visible {
  outline: 2px solid #000;
  outline-offset: 2px;
  box-shadow: none;
}

.btn-secondary,
.btn-secondary:hover,
.btn-secondary:focus,
.btn-secondary:active {
  color: #191919;
}

.btn-warning,
.btn-warning:hover,
.btn-warning:focus,
.btn-warning:active {
  color: #191919;
}
</style>
