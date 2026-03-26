import { cn } from '@/shared/lib'
import { Form } from '@/shared/ui/formUI/form'
import type { HTMLAttributes } from 'react'
import { AddProjectsContextProvider } from '../model/context'
import { useAddProject, type AddProjectOnSuccessTypes } from '../model/useAddProject'

type AddProjectRootProps = AddProjectOnSuccessTypes & HTMLAttributes<HTMLElement>

export const AddProjectRoot = ({ children, className, onSuccess }: AddProjectRootProps) => {
  const { form, onSubmit, isDisabled, apiError } = useAddProject({ onSuccess })

  const value = {
    error: apiError,
    errors: form.formState.errors,
    register: form.register,
    isDisabled,
  }

  return (
    <AddProjectsContextProvider value={value}>
      <Form className={cn(className)} onSubmit={onSubmit}>
        {children}
      </Form>
    </AddProjectsContextProvider>
  )
}
