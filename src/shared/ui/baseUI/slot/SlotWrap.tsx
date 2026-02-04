import { Slot } from '@radix-ui/react-slot'
import { type ComponentPropsWithoutRef, type ElementType, type ReactNode } from 'react'

export type SlotWrapProps<E extends ElementType> = {
  asChild?: boolean
  defaultElement: ElementType
  children: ReactNode
} & ComponentPropsWithoutRef<E>

export const SlotWrap = <E extends ElementType>(props: SlotWrapProps<E>) => {
  const { asChild, defaultElement, children, ...rest } = props

  const Component: ElementType = asChild ? Slot : defaultElement
  return <Component {...rest}>{children}</Component>
}
