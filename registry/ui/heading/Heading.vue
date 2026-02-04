<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { HeadingVariants } from '.'
import { computed } from 'vue'
import { cn } from '@/lib/util'
import { headingVariants, optionalBadgeVariants } from '.'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/Tooltip'

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
    <span class="heading-text">
      <slot />
    </span>

    <span
      v-if="optional"
      :class="cn(optionalBadgeVariants())"
      class="optional-badge"
    >
      {{ optionalText }}
    </span>

    <TooltipProvider v-if="tooltip">
      <Tooltip :delay-duration="300">
        <TooltipTrigger as-child>
          <button
            type="button"
            class="btn btn-link p-0 ms-1 tooltip-trigger"
            aria-label="More information"
          >
            <svg
              width="24"
              height="24"
              class="info-icon"
              aria-hidden="true"
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
              />
            </svg>
          </button>
        </TooltipTrigger>
        <TooltipContent :side="tooltipPosition">
          {{ tooltip }}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </component>
</template>

<style>
.heading-text {
  font-weight: bold;
}

.optional-badge {
  background-color: var(--rds-light-3, #e8e8e8);
  color: var(--rds-dark-2, #484848);
  font-size: 0.75rem;
  padding: 0.25em 0.6em;
}

.tooltip-trigger {
  line-height: 1;
  vertical-align: middle;
}

.info-icon {
  color: var(--rds-dark-1, #747474);
  vertical-align: middle;
}

.tooltip-trigger:focus-visible {
  outline: 2px solid #000;
  outline-offset: 2px;
  box-shadow: none;
}
</style>
