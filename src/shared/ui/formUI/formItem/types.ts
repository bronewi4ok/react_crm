import type { ReactNode } from 'react'

export type FormItemTypes = {
  title?: string
  className?: string
  icon?: string
  error?: string
  hint?: string
  children: ReactNode
  border?: boolean
}
