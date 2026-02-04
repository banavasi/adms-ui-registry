import type { VariantProps } from '@/lib/util'
import { cva } from '@/lib/util'

export { default as Highlight } from './Highlight.vue'

export const highlightVariants = cva('d-inline px-1', {
  variants: {
    variant: {
      primary: 'bg-primary text-white',
      secondary: 'bg-secondary text-dark',
      gold: 'bg-warning text-dark',
      success: 'bg-success text-white',
      danger: 'bg-danger text-white',
      info: 'bg-info text-white',
      light: 'bg-light text-dark',
      dark: 'bg-dark text-white',
    },
  },
  defaultVariants: {
    variant: 'gold',
  },
})

export type HighlightVariants = VariantProps<typeof highlightVariants>
