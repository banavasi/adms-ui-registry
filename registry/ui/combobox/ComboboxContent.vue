<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import {
  ComboboxContent,
  ComboboxPortal,
  ComboboxViewport,
  type ComboboxContentProps,
} from 'reka-ui'
import { cn } from '@/lib/util'

interface Props extends ComboboxContentProps {
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  position: 'popper',
  side: 'bottom',
  sideOffset: 4,
  align: 'start',
  alignOffset: 0,
  avoidCollisions: true,
  collisionBoundary: () => [],
  collisionPadding: 0,
  sticky: 'partial',
})
</script>

<template>
  <ComboboxPortal>
    <ComboboxContent
      data-slot="combobox-content"
      :class="cn('combobox-content', props.class)"
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
      <ComboboxViewport class="combobox-viewport">
        <slot />
      </ComboboxViewport>
    </ComboboxContent>
  </ComboboxPortal>
</template>

<style>
.combobox-content {
  z-index: 1000;
  min-width: var(--reka-combobox-trigger-width, 300px);
  width: var(--reka-combobox-trigger-width, 300px);
  background: #fff;
  border: 1px solid var(--rds-light-4, #d0d0d0);
  border-radius: 0;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

.combobox-content[data-state='open'] {
  animation: slideDownAndFade 0.2s ease-out;
}

.combobox-content[data-state='closed'] {
  animation: slideUpAndFade 0.15s ease-in;
}

.combobox-viewport {
  padding: 0;
  max-height: 300px;
  overflow-y: auto;
}

/* Smooth scrollbar styling */
.combobox-viewport::-webkit-scrollbar {
  width: 8px;
}

.combobox-viewport::-webkit-scrollbar-track {
  background: var(--rds-light-1, #fafafa);
}

.combobox-viewport::-webkit-scrollbar-thumb {
  background: var(--rds-light-4, #d0d0d0);
  border-radius: 4px;
}

.combobox-viewport::-webkit-scrollbar-thumb:hover {
  background: var(--rds-light-5, #bfbfbf);
}

@keyframes slideDownAndFade {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUpAndFade {
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
