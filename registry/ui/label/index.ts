import type { VariantProps } from '@/lib/util'
import { cva } from '@/lib/util'

export { default as Label } from './Label.vue'

export const labelVariants = cva(
  'd-flex align-items-start gap-space-sm form-label fw-bold mb-space-xs',
  {
    variants: {
      size: {
        sm: 'fs-small',
        md: 'fs-medium',
        lg: 'fs-large',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

export type LabelVariants = VariantProps<typeof labelVariants>
