import type { SerializedError } from '@reduxjs/toolkit'
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { createSafeContext } from '@shared/lib'
import type { FieldErrors, UseFormRegister } from 'react-hook-form'
import type { CreateProjectTypes } from './validation'

export type CreateProjectContextTypes = {
  register: UseFormRegister<CreateProjectTypes>
  errors: FieldErrors<CreateProjectTypes>
  isDisabled: boolean
  error: FetchBaseQueryError | SerializedError | undefined
}

export const [useCreateProjectsContext, CreateProjectsContextProvider] =
  createSafeContext<CreateProjectContextTypes>('CreateProjectsContext')
