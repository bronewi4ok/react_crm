import type { SortValueTypes } from '@/shared/config'
import type { ComponentPropsWithoutRef } from 'react'

export type SortBarRootProps = {
  value: SortValueTypes<string>
  onValueChange: (field: string) => void
} & ComponentPropsWithoutRef<'ul'>

type SortBarItemIcon = {
  asc: string
  desc: string
}

export type SortBarItemProps = {
  field: string
  icon?: SortBarItemIcon
} & ComponentPropsWithoutRef<'button'>

export type SortBarContextTypes = {
  value: SortValueTypes<string>
  onValueChange: (field: string) => void
}
