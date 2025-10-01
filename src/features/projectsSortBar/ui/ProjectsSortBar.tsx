import { SortBar } from '@/shared/ui/sortBar'
import { projectsSortConfigs } from '../model/configs'
import { useProjectsQueryParams } from '../model/hooks'
import type { ProjectSortOrderTypes, ProjectsSortTypes } from '../model/types'

export function ProjectsSortBar() {
  const { sortParams, setSortParams } = useProjectsQueryParams()

  const handleSort = (
    field: ProjectsSortTypes,
    order: ProjectSortOrderTypes,
  ) => {
    setSortParams({ sort: field, order, page: 1 })
  }

  return (
    <SortBar<ProjectsSortTypes>
      options={projectsSortConfigs}
      value={{
        field: sortParams.sort || null,
        order: sortParams.order || null,
      }}
      onSort={handleSort}
    />
  )
}
