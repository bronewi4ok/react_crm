import type { IconTypes } from '@/shared/ui/baseUI/icon'
import type { ComponentProps, ComponentPropsWithoutRef } from 'react'

export type ItemRootTypes = { error?: string; id?: string } & ComponentProps<'div'>

export type InputStateTypes = Pick<ItemRootTypes, 'error' | 'id'>
export type InputWrapAsTypes = 'div' | 'span'

export type InputWrapTypes<E extends InputWrapAsTypes> = {
  as?: E
  border?: boolean
} & ComponentPropsWithoutRef<E>

export type InputControlTypes = {
  error?: string
  icon?: string
} & ComponentProps<'input'>

export type InputLabelTypes = ComponentPropsWithoutRef<'label'>
export type InputIconTypes = IconTypes
