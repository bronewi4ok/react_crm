import clsx from 'clsx'
import { Switch } from 'radix-ui'
import type { TogglerTypes } from './types'

export function Toggler({ checked, onChange }: TogglerTypes) {
  return (
    <Switch.Root
      checked={checked}
      onCheckedChange={onChange}
      className={clsx(
        'theme-toggler relative inline-flex h-7 w-13 cursor-pointer rounded-2xl p-1',
        'data-[state=checked]:bg-secondary-50',
        'data-[state=unchecked]:bg-warning-400',
      )}>
      <Switch.Thumb
        className={clsx(
          'absolute top-1 block size-5 rounded-full transition-transform duration-200 will-change-transform',
          'data-[state=checked]:bg-secondary-700 data-[state=checked]:translate-x-6',
          'data-[state=unchecked]:bg-warning-300 data-[state=unchecked]:translate-x-0',
        )}></Switch.Thumb>
    </Switch.Root>
  )
}
