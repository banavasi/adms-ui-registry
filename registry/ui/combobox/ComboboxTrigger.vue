<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { faChevronDown } from '@fortawesome/pro-light-svg-icons'
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
    :class="cn('combobox-trigger', props.class)"
  >
    <FontAwesomeIcon
      :icon="faChevronDown"
      class="combobox-chevron"
      aria-hidden="true"
    />
  </ComboboxTrigger>
</template>

<style scoped>
.combobox-trigger {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--rds-dark-1, #747474);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease, color 0.15s ease;
  padding: 0.25rem;
  line-height: 1;
}

.combobox-trigger:hover {
  color: var(--rds-dark-3, #191919);
}

.combobox-trigger[data-state='open'] {
  transform: translateY(-50%) rotate(180deg);
}

.combobox-trigger:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.combobox-chevron {
  forced-color-adjust: auto;
  display: block;
  width: 20px;
  height: 20px;
  flex: 0 0 20px;
}
</style>
