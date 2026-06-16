import type { VariantProps } from '@/lib/util'
import { cva } from '@/lib/util'

export const radioVariants = cva('radio-base', {
  variants: {
    variant: {
      primary: 'radio-primary',
      danger: 'radio-danger',
      'rds-dark-1': 'radio-rds-dark-1',
      'rds-dark-2': 'radio-rds-dark-2',
      'rds-dark-3': 'radio-rds-dark-3',
    },
    size: {
      sm: 'radio-sm',
      md: 'radio-md',
      lg: 'radio-lg',
    },
  },
  defaultVariants: {
    variant: 'rds-dark-3',
    size: 'md',
  },
})

export type RadioVariants = VariantProps<typeof radioVariants>

export { default as RadioGroup } from './RadioGroup.vue'
export { default as RadioPrimitive } from './RadioPrimitive.vue'
