import { cn } from '@shared/lib'
import { Form } from '@ui/controls/form'
import type { HTMLAttributes } from 'react'
import { CreateProjectsContextProvider } from '../model/context'
import { useCreateProject, type CreateProjectOnSuccessTypes } from '../model/use-create-project'

type CreateProjectRootProps = CreateProjectOnSuccessTypes & HTMLAttributes<HTMLElement>

export const CreateProjectRoot = ({ children, className, onSuccess }: CreateProjectRootProps) => {
  const { form, onSubmit, isDisabled, apiError } = useCreateProject({ onSuccess })

  const value = {
    error: apiError,
    errors: form.formState.errors,
    register: form.register,
    isDisabled,
  }

  return (
    <CreateProjectsContextProvider value={value}>
      <Form className={cn(className)} onSubmit={onSubmit}>
        {children}
      </Form>
    </CreateProjectsContextProvider>
  )
}
