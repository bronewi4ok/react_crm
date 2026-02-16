import { Icon } from '@/shared/ui/baseUI/icon'
import clsx from 'clsx'
import { useInput } from '../model/hooks'
import type { InputIconTypes } from '../model/types'

export function InputIcon({ name, size = 'md' }: InputIconTypes) {
  const { isError } = useInput()
  return <Icon name={name} size={size} className={clsx(isError && 'fill-danger-500')} />
}
