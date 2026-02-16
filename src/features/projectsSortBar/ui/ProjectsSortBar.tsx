import { SortBar } from '@/shared/ui/customUI/sortBar'
import { projectsSortConfigs } from '../model/configs'
import { useProjectsQueryParams } from '../model/hooks'
import type { ProjectsSortTypes } from '../model/types'

export function ProjectsSortBar() {
  const { sort, setSort, order } = useProjectsQueryParams()
  const handleSort = (field: ProjectsSortTypes) => setSort(field)

  return (
    <SortBar<ProjectsSortTypes>
      options={projectsSortConfigs}
      value={{ field: sort ?? null, order: order ?? null }}
      onSort={handleSort}
    />
  )
}
