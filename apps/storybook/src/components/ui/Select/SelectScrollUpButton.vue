<script setup lang="ts">
import type { SelectScrollUpButtonProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { SelectScrollUpButton } from 'reka-ui'
import { FontAwesomeIcon } from '@/components/ui/icon'
import { cn } from '@/lib/util'

interface Props extends SelectScrollUpButtonProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <SelectScrollUpButton
    data-slot="select-scroll-up-button"
    :class="cn('select-scroll-button d-flex align-items-center justify-content-center p-space-xxxs text-dark-1', props.class)"
  >
    <slot>
      <FontAwesomeIcon
        :icon="['fal', 'chevron-up']"
        aria-hidden="true"
      />
    </slot>
  </SelectScrollUpButton>
</template>
