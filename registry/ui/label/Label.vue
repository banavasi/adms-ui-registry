<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { LabelVariants } from '.'
import { Label as RekaLabel } from 'reka-ui'
import { cn } from '@/lib/util'
import { labelVariants } from '.'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/Tooltip'

interface Props {
  for: string
  size?: LabelVariants['size']
  optional?: boolean
  optionalText?: string
  tooltip?: string
  tooltipPosition?: 'top' | 'bottom' | 'left' | 'right'
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  optional: false,
  optionalText: 'Optional',
  tooltipPosition: 'top',
})
</script>

<template>
  <RekaLabel
    data-slot="label"
    :for="props.for"
    :class="cn(labelVariants({ size: props.size }), props.class)"
  >
    <span class="label-text">
      <slot />
    </span>

    <span v-if="optional" class="optional-badge badge rounded-pill fw-normal">
      {{ optionalText }}
    </span>

    <TooltipProvider v-if="tooltip">
      <Tooltip :delay-duration="300">
        <TooltipTrigger as-child>
          <button
            type="button"
            class="btn btn-link p-0 tooltip-trigger"
            aria-label="More information"
          >
            <svg
              width="16"
              height="16"
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
  </RekaLabel>
</template>

<style>
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
