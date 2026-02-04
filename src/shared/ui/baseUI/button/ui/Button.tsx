import { cn } from '@/shared/libs'
import { SlotWrap } from '@/shared/ui/baseUI/slot'
import {
  animationStyles,
  baseStyles,
  BUTTON_DEFAULT_ELEMENT,
  sizeSquareStyles,
  sizeStyles,
  variantStyles,
} from '../model/configs'
import type { ButtonProps } from '../model/types'

export const Button = (props: ButtonProps) => {
  const { children, square, size = 'md', variant = 'primary', className, asChild, ...rest } = props

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
