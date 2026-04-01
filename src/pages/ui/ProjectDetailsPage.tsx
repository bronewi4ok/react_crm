import { useGetProjectByIdQuery } from '@/entities/project'
import { DeleteProjectButton } from '@/features/project/delete-project'
import { frontRoutes } from '@/shared/config/routes'
import { useBackNavigation } from '@/shared/hooks/useBackNavigation'
import { useFormatDate } from '@/shared/hooks/useFormatDate'
import { Button } from '@/shared/ui/baseUI/button'
import { Icon } from '@/shared/ui/baseUI/icon'
import { generatePath, useNavigate, useParams } from 'react-router-dom'

function ProjectDetailsPage() {
  const navigate = useNavigate()
  const { id } = useParams()
  const { data: project, isLoading, isError } = useGetProjectByIdQuery(id ?? '', { skip: !id })
  const endDate = useFormatDate(project?.endDate, { format: 'medium' })
  const handleBack = useBackNavigation()

  if (!id) return <div className="text-danger-700 p-4 text-sm">No project id</div>
  if (isLoading) return <div className="text-support-700 p-4 text-sm">Loading…</div>
  if (isError || !project)
    return <div className="text-danger-700 p-4 text-sm">Project not found</div>

  return (
    <div className="bg-light rounded-2xl p-6">
      <div className="mb-4 flex items-center gap-3">
        <Button size="sm" variant="support" onClick={() => handleBack()}>
          <Icon size="lg" name="common-arrowLeft" />
          Back
        </Button>

        <DeleteProjectButton
          square
          className="ml-auto"
          projectId={project?.id}
          projectName={project?.name}
          onSuccess={() => navigate(generatePath(frontRoutes.main.ProjectsPage.navPath))}>
          <Icon size="sm" name="common-trash" />
        </DeleteProjectButton>
      </div>

      <h1 className="text-dark text-2xl">{project.name}</h1>

      <p className="text-secondary-700 mb-2 text-sm">Specialization: {project.specialization}</p>

      {project.description && (
        <p className="text-secondary-700 mb-2 text-sm">{project.description}</p>
      )}

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div>
          <div className="text-secondary-500 text-xs">Tasks</div>
          <div className="font-medium">{project.tasks.length}</div>
        </div>

        <div>
          <div className="text-secondary-500 text-xs">Budget</div>
          <div className="font-medium">{project.budget ?? '—'}</div>
        </div>

        <div>
          <div className="text-secondary-500 text-xs">Due date</div>
          <div className="font-medium">{endDate}</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailsPage
