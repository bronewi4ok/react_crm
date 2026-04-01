import { cn } from '@/shared/lib'
import { SlotWrap } from '@/shared/ui/baseUI/slot'
import {
  BUTTON_DEFAULT_ELEMENT,
  BUTTON_DEFAULT_SIZE,
  BUTTON_DEFAULT_VARIANT,
} from '../model/defaults'
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
    <SlotWrap
      asChild={asChild}
      defaultElement={BUTTON_DEFAULT_ELEMENT}
      className={classes}
      {...rest}>
      {children}
    </SlotWrap>
  )
}
