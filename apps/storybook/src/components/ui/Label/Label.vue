<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { LabelVariants } from '.'
import { Label as RekaLabel } from 'reka-ui'
import { FontAwesomeIcon } from '@/components/ui/icon'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/Tooltip'
import { cn } from '@/lib/util'
import { labelVariants } from '.'

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

    <span v-if="optional" class="optional-badge badge rounded-0 fw-normal bg-light-3 text-dark-2 fs-xs" aria-hidden="true">
      {{ optionalText }}
    </span>
    <span v-if="optional" class="visually-hidden">({{ optionalText }})</span>

    <TooltipProvider v-if="tooltip">
      <Tooltip :delay-duration="300">
        <TooltipTrigger as-child>
          <button
            type="button"
            class="btn btn-link p-0 tooltip-trigger lh-1 align-middle"
            aria-label="More information about this field"
            :aria-describedby="`tooltip-${props.for}`"
          >
            <FontAwesomeIcon
              :icon="['fal', 'circle-info']"
              class="info-icon text-dark-1 align-middle"
              aria-hidden="true"
              focusable="false"
            />
          </button>
        </TooltipTrigger>
        <TooltipContent :id="`tooltip-${props.for}`" :side="tooltipPosition" role="tooltip">
          {{ tooltip }}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </RekaLabel>
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
