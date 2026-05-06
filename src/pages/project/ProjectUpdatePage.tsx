import {
  UpdateProjectFields,
  UpdateProjectRoot,
  UpdateProjectSubmit,
} from '@features/project/update-project'
import { FRONT_ROUTES } from '@shared/routes'
import { Button } from '@ui/base/button'
import { generatePath, Link, useLocation, useNavigate, useParams } from 'react-router-dom'

function ProjectUpdatePage() {
  const { id } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const projectId = id ?? ''

  return (
    <div>
      <h1>Edit Project</h1>

      <div>
        <UpdateProjectRoot
          id={projectId}
          onSuccess={() =>
            navigate(
              generatePath(FRONT_ROUTES.main.ProjectDetailsPage.navPath, { id: projectId }),
              { replace: true, state: { fromSearch: location.state?.fromSearch } },
            )
          }>
          <UpdateProjectFields />

          <div className="flex flex-wrap gap-3 py-4">
            <UpdateProjectSubmit className="w-64">Save</UpdateProjectSubmit>

            <Button
              asChild
              size="md"
              variant="danger"
              className="max-w-64 min-w-fit flex-1 whitespace-nowrap">
              <Link
                replace
                state={{ fromSearch: location.state?.fromSearch }}
                to={generatePath(FRONT_ROUTES.main.ProjectDetailsPage.navPath, { id: projectId })}>
                Cancel
              </Link>
            </Button>
          </div>
        </UpdateProjectRoot>
      </div>
    </div>
  )
}

export default ProjectUpdatePage
