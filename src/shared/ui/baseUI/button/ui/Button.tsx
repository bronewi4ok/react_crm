import { cn } from '@/shared/lib'
import { SlotWrap } from '@/shared/ui/baseUI/slot'
import {
  BUTTON_DEFAULT_ELEMENT,
  BUTTON_DEFAULT_SIZE,
  BUTTON_DEFAULT_VARIANT,
} from '../config/defaults'
import {
  animationStyles,
  baseStyles,
  sizeSquareStyles,
  sizeStyles,
  variantStyles,
} from '../config/variants'
import type { ButtonProps } from '../model/types'

export const Button = (props: ButtonProps) => {
  const {
    children,
    square,
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
  )

  return (
    <SlotWrap
      asChild={asChild}
      defaultElement={BUTTON_DEFAULT_ELEMENT}
      className={classes}
      {...rest}>
      {children}
    </SlotWrap>
  )
}
