import { Button } from '@ui/base/button'
import { Icon } from '@ui/base/icon'
import type { ButtonProps } from 'react-day-picker'
import { toast } from 'sonner'
import { useDeleteProject } from '../model/use-delete-project'

type handleRemoveProjectProps = {
  projectId: string
  projectName?: string
  onSuccess?: () => void
} & ButtonProps

export const DeleteProjectMenuItem = (props: handleRemoveProjectProps) => {
  const { projectId, projectName, onSuccess, ...rest } = props
  const { deleteProject } = useDeleteProject()

  const handleRemoveProject = () => {
    deleteProject(projectId)
    toast.success(`Project ${projectName} was removed`, { className: 'bg-red' })
    onSuccess?.()
  }

  return (
    <Button variant="danger" size="sm" square onClick={() => handleRemoveProject()} {...rest}>
      <Icon name="trash" size="xs" />
    </Button>
  )
}
