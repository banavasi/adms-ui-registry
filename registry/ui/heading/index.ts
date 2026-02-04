import type { VariantProps } from '@/lib/util'
import { cva } from '@/lib/util'

export { default as Heading } from './Heading.vue'

export const headingVariants = cva('d-flex align-items-start gap-space-sm mb-0', {
  variants: {
    level: {
      h1: '',
      h2: '',
      h3: '',
      h4: '',
      h5: '',
      h6: '',
    },
  },
  defaultVariants: {
    level: 'h3',
  },
})

export const optionalBadgeVariants = cva('badge rounded-pill fw-normal', {
  variants: {
    variant: {
      default: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export type HeadingVariants = VariantProps<typeof headingVariants>
