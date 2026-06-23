<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { HeadingVariants } from '.'
import { computed } from 'vue'
import { FontAwesomeIcon } from '@/components/ui/icon'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/Tooltip'
import { cn } from '@/lib/util'
import { headingVariants, optionalBadgeVariants } from '.'

interface Props {
  level?: HeadingVariants['level']
  optional?: boolean
  optionalText?: string
  tooltip?: string
  tooltipPosition?: 'top' | 'bottom' | 'left' | 'right'
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  level: 'h3',
  optional: false,
  optionalText: 'Optional',
  tooltipPosition: 'top',
})

const HeadingTag = computed(() => props.level || 'h3')
</script>

<template>
  <component
    :is="HeadingTag"
    data-slot="heading"
    :class="cn(headingVariants({ level: props.level }), props.class)"
  >
    <span class="heading-text fw-bold">
      <slot />
    </span>

    <span
      v-if="optional"
      :class="cn(optionalBadgeVariants())"
      class="optional-badge bg-light-3 text-dark-2 fs-xs"
    >
      {{ optionalText }}
    </span>

    <TooltipProvider v-if="tooltip">
      <Tooltip :delay-duration="300">
        <TooltipTrigger as-child>
          <button
            type="button"
            class="btn btn-link p-0 ms-1 tooltip-trigger lh-1 align-middle"
            aria-label="More information"
          >
            <FontAwesomeIcon
              :icon="['fal', 'circle-info']"
              class="info-icon text-dark-1 align-middle"
              aria-hidden="true"
              focusable="false"
            />
          </button>
        </TooltipTrigger>
        <TooltipContent :side="tooltipPosition">
          {{ tooltip }}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </component>
</template>

<style scoped>
.optional-badge {
  padding: 0.25em 0.6em;
}

.tooltip-trigger:focus-visible {
  outline: 2px solid #000;
  outline-offset: 2px;
  box-shadow: none;
}
</style>
