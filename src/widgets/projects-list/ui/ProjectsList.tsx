import { ProjectsSortBar } from '@features/project/sort-projects'
import { ProjectsListContent } from './ProjectsListContent'
import { ProjectsListItems } from './ProjectsListItems'
import { ProjectsListPagination } from './ProjectsListPagination'
import { ProjectsListRoot } from './ProjectsListRoot'

export const ProjectsList = () => {
  return (
    <ProjectsListRoot>
      <ProjectsListContent>
        <ProjectsSortBar />
        <ProjectsListItems />
        <ProjectsListPagination />
      </ProjectsListContent>
    </ProjectsListRoot>
  )
}
