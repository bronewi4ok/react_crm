import { cn } from '@shared/lib'
import { SortBarProvider } from '../model/context'
import type { SortBarRootProps } from '../model/types'

export const SortBarRoot = (props: SortBarRootProps) => {
  const { children, className, value, onValueChange, ...rest } = props

  return (
    <SortBarProvider value={{ value, onValueChange }}>
      <ul className={cn('bg-back-50 flex items-center gap-4 px-6.5 py-4', className)} {...rest}>
        {children}
      </ul>
    </SortBarProvider>
  )
}
