import { useGetProjectByIdQuery } from '@entities/project'
import { DeleteProjectButton } from '@features/project/delete-project'
import { skipToken } from '@reduxjs/toolkit/query'
import { useFormatDate } from '@shared/lib'
import { FRONT_ROUTES } from '@shared/routes'
import { Button } from '@ui/base/button'
import { Icon } from '@ui/base/icon'
import { generatePath, Link, useLocation, useNavigate, useParams } from 'react-router-dom'

// ======================================
function ProjectDetailsPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { id } = useParams()
  console.log(id)

  const { data: project, isLoading, isError } = useGetProjectByIdQuery(id ?? skipToken)
  const endDate = useFormatDate(project?.endDate, { format: 'medium' })

  if (isLoading) return <div className="text-support-700 p-4 text-sm">Loading…</div>
  if (isError || !project)
    return <div className="text-danger-700 p-4 text-sm">Project not found</div>

  const backSearch = location.state?.fromSearch || ''
  const backPath = { pathname: FRONT_ROUTES.main.ProjectsPage.navPath, search: backSearch }
  const updatePath = generatePath(FRONT_ROUTES.main.ProjectUpdatePage.navPath, { id: id! })

  return (
    <div className="bg-light rounded-2xl p-6">
      <div className="mb-4 flex items-center gap-3">
        <Button asChild size="sm" variant="support">
          <Link to={backPath}>
            <Icon size="lg" name="arrowLeft" />
            Projects
          </Link>
        </Button>

        <div className="ml-auto flex items-center gap-3">
          <Button asChild square variant="support" size="sm">
            <Link replace to={updatePath} state={{ fromSearch: location.state?.fromSearch }}>
              <Icon name="edit" size="xs" />
            </Link>
          </Button>

          <DeleteProjectButton
            square
            projectId={project?.id}
            projectName={project?.name}
            onSuccess={() => navigate(backPath)}>
            <Icon size="sm" name="trash" />
          </DeleteProjectButton>
        </div>
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
