<script setup lang="ts">
import type { SelectScrollDownButtonProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { faChevronDown } from '@fortawesome/pro-light-svg-icons'
import { SelectScrollDownButton } from 'reka-ui'
import { FontAwesomeIcon } from '@/components/ui/icon'
import { cn } from '@/lib/util'

interface Props extends SelectScrollDownButtonProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <SelectScrollDownButton
    data-slot="select-scroll-down-button"
    :class="cn('select-scroll-button', props.class)"
  >
    <slot>
      <FontAwesomeIcon
        :icon="faChevronDown"
        aria-hidden="true"
      />
    </slot>
  </SelectScrollDownButton>
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
