import { isRejectedWithValue, type Middleware } from '@reduxjs/toolkit'
import { toast } from 'sonner'
import { createProjectApi } from './create-project.api'
import { deleteProjectApi } from './delete-project.api'
import { updateProjectApi } from './update-project.api'

export const projectToastMiddleware: Middleware = () => (next) => (action) => {
  const result = next(action)

  if (createProjectApi.endpoints.createProject.matchFulfilled(action))
    toast.success('Проект успішно створено')

  if (updateProjectApi.endpoints.updateProject.matchFulfilled(action))
    toast.success('Проект успішно оновлено')

  if (deleteProjectApi.endpoints.deleteProject.matchFulfilled(action))
    toast.success('Проект успішно видалено')

  if (isRejectedWithValue(action)) {
    const isProjectAction = action.type.startsWith('projectApi')

    if (isProjectAction) {
      const errorData = action.payload as { data?: { message?: string } }
      toast.error(errorData?.data?.message || 'Помилка виконання операції')
    }
  }

  return result
}
