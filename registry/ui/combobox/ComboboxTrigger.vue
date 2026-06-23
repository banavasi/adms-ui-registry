<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { ComboboxTrigger } from 'reka-ui'
import { useAttrs } from 'vue'
import { FontAwesomeIcon } from '@/components/ui/icon'
import { cn } from '@/lib/util'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
defineOptions({ inheritAttrs: false })
const attrs = useAttrs()
</script>

<template>
  <ComboboxTrigger
    data-slot="combobox-trigger"
    v-bind="attrs"
    :class="cn('combobox-trigger position-absolute top-50 translate-middle-y d-flex align-items-center justify-content-center text-dark-1 bg-transparent border-0 p-space-xxxs', props.class)"
  >
    <slot>
      <FontAwesomeIcon
        :icon="['fal', 'chevron-down']"
        class="combobox-chevron d-block flex-shrink-0"
        aria-hidden="true"
      />
    </slot>
  </ComboboxTrigger>
</template>

<style scoped>
.combobox-trigger {
  right: 1rem;
  cursor: pointer;
  transition: transform 0.2s ease, color 0.15s ease;
  line-height: 1;
}

.combobox-trigger:hover {
  color: var(--rds-dark-3, #191919);
}

.combobox-trigger[data-state='open'] .combobox-chevron,
.combobox-trigger[data-state='open'].combobox-chevron {
  transform: rotate(180deg);
}

.combobox-trigger:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.combobox-chevron {
  forced-color-adjust: auto;
  width: 20px;
  height: 20px;
  flex-basis: 20px;
  transform-origin: center;
  transition: transform 0.2s ease;
}
</style>
