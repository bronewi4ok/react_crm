import type { InputHTMLAttributes } from 'react'

export type InputTypes = {
  error?: string
  icon?: string
} & InputHTMLAttributes<HTMLInputElement>
