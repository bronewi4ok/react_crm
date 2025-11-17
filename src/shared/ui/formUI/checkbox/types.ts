import type { InputHTMLAttributes } from 'react'

export type CheckboxTypes = {
  title?: string
  className?: string
} & InputHTMLAttributes<HTMLInputElement>
