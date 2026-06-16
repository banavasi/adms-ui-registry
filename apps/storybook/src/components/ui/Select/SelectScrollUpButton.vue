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
    :class="cn('select-scroll-button', props.class)"
  >
    <slot>
      <FontAwesomeIcon
        :icon="['fal', 'chevron-up']"
        aria-hidden="true"
      />
    </slot>
  </SelectScrollUpButton>
</template>

<style scoped>
.select-scroll-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  cursor: default;
  color: var(--rds-dark-1, #747474);
}
</style>
