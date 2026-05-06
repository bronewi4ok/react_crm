// import { useDeleteProjectMutation } from '@entities/project'

// export const useDeleteProject = () => {
//   const [deleteProjectMutation, { ...states }] = useDeleteProjectMutation()
//   const deleteProject = async (id: string) => await deleteProjectMutation(id).unwrap()

//   return { deleteProject, ...states }
// }

import { useDeleteProjectMutation } from '@entities/project'
import { toast } from 'sonner'

export const useDeleteProject = () => {
  const [deleteProjectMutation, states] = useDeleteProjectMutation()

  const deleteProject = async (id: string, projectName?: string) => {
    try {
      await deleteProjectMutation(id).unwrap()
      toast.success(
        projectName ? `Проєкт "${projectName}" успішно видалено` : 'Проєкт успішно видалено',
      )
    } catch (error) {
      toast.error('Не вдалося видалити проєкт')
      throw error
    }
  }

  return { deleteProject, ...states }
}
