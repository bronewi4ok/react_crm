import { ProjectsSortBar } from '@/features/project/projectsSortBar'
import { ProjectsWidgetContent } from './ProjectsWidgetContent'
import { ProjectsWidgetList } from './ProjectsWidgetList'
import { ProjectWidgetPagination } from './ProjectsWidgetPagination'
import { ProjectsWidgetRoot } from './ProjectsWidgetRoot'

export const ProjectsWidget = () => {
  return (
    <ProjectsWidgetRoot>
      <ProjectsWidgetContent>
        <ProjectsSortBar />
        <ProjectsWidgetList />
        <ProjectWidgetPagination />
      </ProjectsWidgetContent>
    </ProjectsWidgetRoot>
  )
}
