import { useGetProjectByIdQuery } from '@/entities/project'
import { frontRoutes } from '@/shared/config/routes'
import { useFormatDate } from '@/shared/hooks/useFormatDate'
import { Button } from '@/shared/ui/baseUI/button'
import { Icon } from '@/shared/ui/baseUI/icon'
import { useNavigate, useParams } from 'react-router-dom'

function ProjectDetailsPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { data: project, isLoading, isError } = useGetProjectByIdQuery(id ?? '', { skip: !id })

  const dueDate = useFormatDate(project?.endDate, { format: 'medium' })
  const handleBack = () => {
    if (window.history?.state.idx > 0) return navigate(-1)
    navigate(frontRoutes.main.ProjectsPage.navPath, { replace: true })
  }

  if (!id) return <div className="text-danger-700 p-4 text-sm">No project id</div>
  if (isLoading) return <div className="text-support-700 p-4 text-sm">Loading…</div>
  if (isError || !project)
    return <div className="text-danger-700 p-4 text-sm">Project not found</div>

  return (
    <div className="bg-light rounded-2xl p-6">
      <div className="mb-4 flex items-center gap-3">
        <Button size="sm" variant="support" onClick={handleBack}>
          <Icon size="lg" name="common-arrowLeft" />
          Back
        </Button>
        <h1 className="text-dark text-2xl">{project.name}</h1>
      </div>

      <div className="text-secondary-700 mb-2 text-sm">
        Specialization: {project.specialization}
      </div>

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
          <div className="font-medium">{dueDate}</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailsPage
