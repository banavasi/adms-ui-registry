<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { ComboboxTrigger } from 'reka-ui'
import { useAttrs } from 'vue'
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
    <svg
      width="20"
      height="20"
      viewBox="41 169 430 238"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="combobox-chevron"
      aria-hidden="true"
    >
      <path
        d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
        fill="currentColor"
      />
    </svg>
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
