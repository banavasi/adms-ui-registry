import type { VariantProps } from '@/lib/util'
import { cva } from '@/lib/util'

export const checkboxVariants = cva('checkbox-base', {
  variants: {
    variant: {
      primary: 'checkbox-primary',
      danger: 'checkbox-danger',
      'rds-dark-1': 'checkbox-rds-dark-1',
      'rds-dark-2': 'checkbox-rds-dark-2',
      'rds-dark-3': 'checkbox-rds-dark-3',
    },
    size: {
      sm: 'checkbox-sm',
      md: 'checkbox-md',
      lg: 'checkbox-lg',
    },
  },
  defaultVariants: {
    variant: 'rds-dark-3',
    size: 'md',
  },
})

export type CheckboxVariants = VariantProps<typeof checkboxVariants>

export { default as Checkbox } from './Checkbox.vue'
export { default as CheckboxGroup } from './CheckboxGroup.vue'
export { default as CheckboxPrimitive } from './CheckboxPrimitive.vue'
