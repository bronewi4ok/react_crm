import * as RadixCheckbox from '@radix-ui/react-checkbox'
import clsx from 'clsx'
import { Icon } from '../../baseUI/icon'
import type { CheckboxTypes } from './types'

export function Checkbox({ title, className, checked, onCheckedChange }: CheckboxTypes) {
  return (
    <label
      className={clsx(
        'text-dark hover:text-secondary-500 inline-flex cursor-pointer items-center gap-3',
        className,
      )}>
      <RadixCheckbox.Root
        checked={checked}
        onCheckedChange={onCheckedChange}
        className="shadow-dark bg-support-500 data-[state=checked]:bg-primary-500 flex size-5 appearance-none items-center justify-center rounded p-0 outline-none">
        <RadixCheckbox.Indicator asChild className="text-white">
          <Icon name="common-check" size="2xs" />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>

      {title && <span className="diration-200 transition-colors">{title}</span>}
    </label>
  )
}
