import { cn } from '@shared/lib'
import { SlotWrap } from '@ui/base/slot'

import { BUTTON_DEFAULT_SIZE, BUTTON_DEFAULT_VARIANT } from '../model/configs'
import type { ButtonProps } from '../model/types'
import {
  animationStyles,
  baseStyles,
  disabledStyles,
  sizeSquareStyles,
  sizeStyles,
  variantStyles,
} from '../model/variants'

export const Button = (props: ButtonProps) => {
  const {
    children,
    square = false,
    size = BUTTON_DEFAULT_SIZE,
    variant = BUTTON_DEFAULT_VARIANT,
    className,
    asChild,
    ...rest
  } = props

  const classes = cn(
    square ? sizeSquareStyles[size] : sizeStyles[size],
    baseStyles,
    animationStyles,
    variantStyles[variant],
    className,
    disabledStyles,
  )

  return (
    <SlotWrap asChild={asChild} defaultElement="button" className={classes} {...rest}>
      {children}
    </SlotWrap>
  )
}
