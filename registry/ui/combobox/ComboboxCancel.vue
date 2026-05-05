<script setup lang="ts">
import type { ComboboxCancelProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { faXmark } from '@fortawesome/pro-light-svg-icons'
import { ComboboxCancel } from 'reka-ui'
import { FontAwesomeIcon } from '@/components/ui/icon'
import { cn } from '@/lib/util'

interface Props extends ComboboxCancelProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ComboboxCancel
    data-slot="combobox-cancel"
    :class="cn('combobox-cancel', props.class)"
  >
    <FontAwesomeIcon
      :icon="faXmark"
      aria-hidden="true"
    />
  </ComboboxCancel>
</template>

<style scoped>
.combobox-cancel {
  position: absolute;
  right: 2.75rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--rds-dark-1, #747474);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.15s ease;
  padding: 0.25rem;
  line-height: 1;
}

.combobox-cancel:hover {
  color: var(--rds-danger, #cc2f2f);
}
</style>
