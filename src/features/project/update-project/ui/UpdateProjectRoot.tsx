import { cn } from '@shared/lib'
import { Form } from '@ui/controls/form'
import type { HTMLAttributes } from 'react'
import { UpdateProjectsProvider } from '../model/context'
import { useUpdateProject, type UpdateProjectOnSuccessTypes } from '../model/use-update-project'

// ======================================
type Props = UpdateProjectOnSuccessTypes & HTMLAttributes<HTMLElement>

// ======================================
export const UpdateProjectRoot = (props: Props) => {
  const { children, className, onSuccess, id } = props
  const { form, onSubmit, isDisabled, error } = useUpdateProject({ onSuccess, id })

  const value = {
    error: error,
    errors: form.formState.errors,
    register: form.register,
    isDisabled,
  }

  return (
    <UpdateProjectsProvider value={value}>
      <Form className={cn(className)} onSubmit={onSubmit}>
        {children}
      </Form>
    </UpdateProjectsProvider>
  )
}
