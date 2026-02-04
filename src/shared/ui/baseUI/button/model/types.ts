import type { ComponentPropsWithoutRef } from 'react'
import type { BUTTON_DEFAULT_ELEMENT, sizeStyles, variantStyles } from './configs'

type ButtonVariantProps = keyof typeof variantStyles
type ButtonSizeProps = keyof typeof sizeStyles
type ButtonBaseComponentProps = typeof BUTTON_DEFAULT_ELEMENT
type ButtonBaseProps = {
  variant?: ButtonVariantProps
  size?: ButtonSizeProps
  square?: boolean
  asChild?: boolean
}

export type ButtonProps = ButtonBaseProps & ComponentPropsWithoutRef<ButtonBaseComponentProps>
