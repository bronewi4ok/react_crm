import { CreateProject } from '@features/project/create-project'
import { FRONT_ROUTES } from '@shared/routes'
import { Button } from '@ui/base/button'
import { Icon } from '@ui/base/icon'
import { generatePath, Link, useLocation, useNavigate } from 'react-router-dom'

function ProjectCreatePage() {
  const navigate = useNavigate()
  const location = useLocation()

  const backSearch = location.state?.fromSearch || ''
  const backPath = { pathname: FRONT_ROUTES.main.ProjectsPage.navPath, search: backSearch }

  const handleSubmit = (projectId: string) => {
    navigate(generatePath(FRONT_ROUTES.main.ProjectDetailsPage.navPath, { id: projectId }))
  }

  return (
    <div>
      <h1>Create new project</h1>

      <div>
        <CreateProject onSuccess={handleSubmit}>
          <CreateProject.Fields />

          <div className="flex flex-wrap gap-3 py-4">
            <CreateProject.Submit className="max-w-64 min-w-fit flex-1 whitespace-nowrap">
              Create Project
            </CreateProject.Submit>

            <Button
              asChild
              size="md"
              variant="support"
              className="max-w-64 min-w-fit flex-1 whitespace-nowrap">
              <Link to={backPath} replace state={{ fromSearch: location.state?.fromSearch }}>
                <Icon size="lg" name="arrowLeft" />
                Projects
              </Link>
            </Button>
          </div>
        </CreateProject>
      </div>
    </div>
  )
}

export default ProjectCreatePage
