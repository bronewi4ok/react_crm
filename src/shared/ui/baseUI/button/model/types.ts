import type { ComponentPropsWithoutRef, ElementType } from 'react'
import type { sizeStyles, variantStyles } from './configs'

export type ButtonVariantTypes = keyof typeof variantStyles
export type ButtonSizeTypes = keyof typeof sizeStyles

type ButtonBaseTypes = {
  variant?: ButtonVariantTypes
  size?: ButtonSizeTypes
  square?: boolean
}

export type ButtonTypes<E extends ElementType> = { as?: E } & ComponentPropsWithoutRef<E> &
  ButtonBaseTypes
