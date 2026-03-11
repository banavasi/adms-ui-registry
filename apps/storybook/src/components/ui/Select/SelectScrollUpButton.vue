<script setup lang="ts">
import type {SelectScrollUpButtonProps} from 'reka-ui';
import type { HTMLAttributes } from 'vue'
import { SelectScrollUpButton  } from 'reka-ui'
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
      <svg
        width="16"
        height="16"
        viewBox="41 169 430 238"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style="transform: rotate(180deg)"
      >
        <path
          d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
          fill="currentColor"
        />
      </svg>
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
