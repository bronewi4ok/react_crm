import { cn } from '@/shared/libs'
import { type ElementType } from 'react'
import {
  animationStyles,
  baseStyles,
  sizeSquareStyles,
  sizeStyles,
  variantStyles,
} from '../model/configs'
import type { ButtonTypes } from '../model/types'

export const Button = <E extends ElementType = 'button'>(props: ButtonTypes<E>) => {
  const { children, square, size = 'md', variant = 'primary', className, as, ...rest } = props

  const classes = cn(
    square ? sizeSquareStyles[size] : sizeStyles[size],
    baseStyles,
    animationStyles,
    variantStyles[variant],

    className,
  )

  const Component: ElementType = as || 'button'

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  )
}
