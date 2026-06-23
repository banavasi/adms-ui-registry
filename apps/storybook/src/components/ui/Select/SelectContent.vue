<script setup lang="ts">
import type { SelectContentProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { SelectContent, SelectPortal, SelectViewport } from 'reka-ui'
import { cn } from '@/lib/util'

interface Props extends SelectContentProps {
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  position: 'popper',
  side: 'bottom',
  sideOffset: 0,
  align: 'start',
  alignOffset: 0,
  avoidCollisions: true,
  collisionBoundary: () => [],
  collisionPadding: 0,
  sticky: 'partial',
})
</script>

<template>
  <SelectPortal>
    <SelectContent
      data-slot="select-content"
      :class="cn('select-content bg-white border border-light-4 rounded-0 shadow-sm', props.class)"
      :position="position"
      :side="side"
      :side-offset="sideOffset"
      :align="align"
      :align-offset="alignOffset"
      :avoid-collisions="avoidCollisions"
      :collision-boundary="collisionBoundary"
      :collision-padding="collisionPadding"
      :sticky="sticky"
    >
      <SelectViewport class="select-viewport p-0">
        <slot />
      </SelectViewport>
    </SelectContent>
  </SelectPortal>
</template>

<style>
.select-content {
  z-index: 1000;
  min-width: var(--reka-select-trigger-width, 300px);
  width: var(--reka-select-trigger-width, 300px);
}

.select-content[data-state='open'] {
  animation: selectSlideDownAndFade 0.2s ease-out;
}

.select-content[data-state='closed'] {
  animation: selectSlideUpAndFade 0.15s ease-in;
}

.select-viewport {
  max-height: 300px;
  overflow-y: auto;
  /* Override Reka UI's injected styles that hide the scrollbar */
  scrollbar-width: thin !important;
  scrollbar-color: var(--rds-light-5, #bfbfbf) var(--rds-light-2, #f1f1f1);
  -ms-overflow-style: auto !important;
}

/* WebKit / Chromium — override Reka UI's display:none on scrollbar */
.select-viewport::-webkit-scrollbar {
  display: block !important;
  width: 8px;
}

.select-viewport::-webkit-scrollbar-track {
  background: var(--rds-light-2, #f1f1f1);
}

.select-viewport::-webkit-scrollbar-thumb {
  background: var(--rds-light-5, #bfbfbf);
  border-radius: 4px;
}

.select-viewport::-webkit-scrollbar-thumb:hover {
  background: var(--rds-dark-1, #747474);
}

@keyframes selectSlideDownAndFade {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes selectSlideUpAndFade {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-8px);
  }
}
</style>
