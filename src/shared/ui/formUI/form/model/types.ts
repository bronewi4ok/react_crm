import type { ButtonTypes } from '@/shared/ui/baseUI/button'
import type { SerializedError } from '@reduxjs/toolkit'
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import type { ComponentProps, HTMLAttributes } from 'react'

export type FormRootTypes = ComponentProps<'form'>
export type FormMessageTypes = { message?: string } & HTMLAttributes<HTMLElement>
export type FormFieldTypes = HTMLAttributes<HTMLElement>
export type FormSubmitTypes = ButtonTypes<'button'>

export type FromGlobalErrorTypes = {
  error: FetchBaseQueryError | SerializedError | undefined
  title: string
} & HTMLAttributes<HTMLElement>

export type FormItemTypes = {
  error?: string
  border?: boolean
} & HTMLAttributes<HTMLElement>
