import { createSafeContext } from '@/shared/hooks'
import type { SerializedError } from '@reduxjs/toolkit'
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import type { FieldErrors, UseFormRegister } from 'react-hook-form'
import type { addProjectTypes } from './validation'

export type AddProjectContextTypes = {
  register: UseFormRegister<addProjectTypes>
  errors: FieldErrors<addProjectTypes>
  isDisabled: boolean
  error: FetchBaseQueryError | SerializedError | undefined
}

export const [useAddProjectsContext, AddProjectsContextProvider] =
  createSafeContext<AddProjectContextTypes>('AddProjectsContext')
