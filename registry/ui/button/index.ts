import type { VariantProps } from '@/lib/util'
import { cva } from '@/lib/util'

export { default as Button } from './Button.vue'
export { default as ButtonCloseIcon } from './ButtonCloseIcon.vue'

export const buttonVariants = cva('rds-button-reset', {
  variants: {
    variant: {
      gray: 'rds-button btn btn-light-3',
      black: 'rds-button btn btn-dark',
      white: 'rds-button rds-button--pill rds-button--white',
      complete: 'rds-button rds-button--status rds-button--complete',
      incomplete: 'rds-button rds-button--status rds-button--incomplete',
      edit: 'rds-button rds-button--status rds-button--edit',
      signout: 'rds-button rds-button--pill rds-button--signout',
      exit: 'rds-button rds-button--icon-only rds-button--exit',
      close: 'rds-button rds-button--icon-only rds-button--close',
      tag: 'rds-button rds-button--tag',
      'tag-mobile': 'rds-button rds-button--tag-mobile',
      'feedback-maroon': 'rds-button rds-button--feedback rds-button--feedback-maroon',
      'feedback-gold': 'rds-button rds-button--feedback rds-button--feedback-gold',
      'help-footer': 'rds-button rds-button--help-footer',
      'help-footer-mobile': 'rds-button rds-button--help-footer',
      'outline-pill': 'rds-button rds-button--pill rds-button--outline-pill',
      primary: 'rds-button btn btn-primary text-white',
      secondary: 'rds-button btn btn-secondary',
      success: 'btn btn-success text-white',
      danger: 'btn btn-danger text-white',
      warning: 'btn btn-warning text-white',
      info: 'btn btn-info text-white',
      light: 'btn btn-light text-dark',
      dark: 'btn btn-dark text-white',
      'outline-primary': 'btn btn-outline-primary',
      'outline-secondary': 'btn btn-outline-secondary',
      'outline-success': 'btn btn-outline-success',
      'outline-danger': 'btn btn-outline-danger',
      'outline-warning': 'btn btn-outline-warning',
      'outline-info': 'btn btn-outline-info',
      'outline-light': 'btn btn-outline-light text-dark',
      'outline-dark': 'btn btn-outline-dark',
      link: 'btn btn-link',
    },
    size: {
      sm: 'btn-sm rds-button--size-sm',
      md: '',
      lg: 'btn-lg rds-button--size-lg',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export type ButtonVariants = VariantProps<typeof buttonVariants>
