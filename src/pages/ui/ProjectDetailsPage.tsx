import { useGetProjectByIdQuery } from '@/entities/project'
import { useFormatDate } from '@/shared/hooks/useFormatDate'
import { useParams } from 'react-router-dom'

function ProjectDetailsPage() {
  const { id } = useParams()
  const {
    data: project,
    isLoading,
    isError,
  } = useGetProjectByIdQuery(id ?? '', { skip: !id })

  const dueDate = useFormatDate(project?.plannedEndDate, { format: 'medium' })

  if (!id) {
    return <div className="p-4 text-sm text-danger-700">No project id</div>
  }
  if (isLoading) {
    return <div className="p-4 text-sm text-support-700">Loading…</div>
  }
  if (isError || !project) {
    return <div className="p-4 text-sm text-danger-700">Project not found</div>
  }

  return (
    <div className="bg-light rounded-2xl p-6">
      <h1 className="text-2xl text-dark mb-4">{project.name}</h1>
      <div className="text-sm text-secondary-700 mb-2">
        Specialization: {project.specialization}
      </div>
      {project.description && (
        <p className="text-sm text-secondary-700 mb-2">{project.description}</p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        <div>
          <div className="text-xs text-secondary-500">Tasks</div>
          <div className="font-medium">{project.tasks.length}</div>
        </div>
        <div>
          <div className="text-xs text-secondary-500">Budget</div>
          <div className="font-medium">{project.budget ?? '—'}</div>
        </div>
        <div>
          <div className="text-xs text-secondary-500">Due date</div>
          <div className="font-medium">{dueDate}</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailsPage
