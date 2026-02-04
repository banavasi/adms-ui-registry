<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { HighlightVariants } from '.'
import { Primitive } from 'reka-ui'
import { cn } from '@/lib/util'
import { highlightVariants } from '.'

interface Props extends PrimitiveProps {
  variant?: HighlightVariants['variant']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  as: 'span',
  asChild: false,
})
</script>

<template>
  <Primitive
    data-slot="highlight"
    :as-child="props.asChild"
    :as="props.as"
    :class="cn(highlightVariants({ variant: props.variant }), props.class)"
  >
    <slot />
  </Primitive>
</template>
