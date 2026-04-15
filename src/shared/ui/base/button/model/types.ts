import type { ComponentPropsWithoutRef } from 'react'
import type { BUTTON_DEFAULT_ELEMENT } from './configs'
import type { sizeStyles, variantStyles } from './variants'

type ButtonVariantTypes = keyof typeof variantStyles
type ButtonSizeTypes = keyof typeof sizeStyles
type ButtonBaseComponentTypes = typeof BUTTON_DEFAULT_ELEMENT

type ButtonBaseProps = {
  variant?: ButtonVariantTypes
  size?: ButtonSizeTypes
  square?: boolean
  asChild?: boolean
}

export type ButtonProps = ButtonBaseProps & ComponentPropsWithoutRef<ButtonBaseComponentTypes>
