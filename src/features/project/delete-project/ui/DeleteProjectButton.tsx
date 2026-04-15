import { Button, type ButtonProps } from '@ui/base/button'
import { toast } from 'sonner'
import { useDeleteProject } from '../model/use-delete-project'

type DeleteProjectButtonProps = {
  projectId: string
  projectName?: string
  onSuccess?: () => void
} & ButtonProps

export const DeleteProjectButton = (props: DeleteProjectButtonProps) => {
  const { projectId, projectName, onSuccess, children, ...rest } = props
  const { deleteProject, isLoading } = useDeleteProject()

  const handleRemoveProject = async () => {
    toast.promise(deleteProject(projectId), {
      loading: 'Видалення проекту...',
      success: () => {
        onSuccess?.()
        return `Проект ${projectName} успішно видалено`
      },
      error: (err) => {
        return `Помилка: ${err?.data?.message || 'Не вдалося видалити проект'}`
      },
    })
  }

  return (
    <Button
      variant="danger"
      size="sm"
      disabled={isLoading}
      {...rest}
      onClick={() => handleRemoveProject()}>
      {children}
    </Button>
  )
}
