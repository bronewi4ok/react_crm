import { Button } from '@/shared/ui/baseUI/button'
import { Icon } from '@/shared/ui/baseUI/icon'
import type { ButtonProps } from 'react-day-picker'
import { toast } from 'sonner'
import { useDeleteProject } from '../model/useDeleteProject'

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
      <Icon name="common-trash" size="xs" />
    </Button>
  )
}
