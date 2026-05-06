import type { UpdateProjectTypes } from '@entities/project'
import type { SerializedError } from '@reduxjs/toolkit'
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { createSafeContext } from '@shared/lib'
import type { FieldErrors, UseFormRegister } from 'react-hook-form'

export type UpdateProjectContextTypes = {
  register: UseFormRegister<UpdateProjectTypes>
  errors: FieldErrors<UpdateProjectTypes>
  isDisabled: boolean
  error: FetchBaseQueryError | SerializedError | undefined
}

export const [useUpdateProjectsContext, UpdateProjectsProvider] =
  createSafeContext<UpdateProjectContextTypes>('UpdateProjectsContext')
