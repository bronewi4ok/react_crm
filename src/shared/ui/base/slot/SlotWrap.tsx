import { Slot } from '@radix-ui/react-slot'
import { type ComponentPropsWithoutRef, type ElementType } from 'react'

export type SlotWrapProps<E extends ElementType> = {
  asChild?: boolean
  defaultElement: ElementType
} & ComponentPropsWithoutRef<E>

export const SlotWrap = <E extends ElementType>(props: SlotWrapProps<E>) => {
  const { asChild, defaultElement, children, ...rest } = props

  const Component: ElementType = asChild ? Slot : defaultElement
  return <Component {...rest}>{children}</Component>
}
