import { SortBar } from '@/shared/ui/sortBar'
import { tasksSortConfigs } from '../model/configs'
import { useTasksQueryParams } from '../model/hooks'
import type { TaskSortOrderTypes, TasksSortTypes } from '../model/types'

export function TasksSortBar() {
  const { sortParams, setSortParams } = useTasksQueryParams()

  const handleSort = (field: TasksSortTypes, order: TaskSortOrderTypes) => {
    setSortParams({ sort: field, order, page: 1 })
  }

  return (
    <SortBar<TasksSortTypes>
      options={tasksSortConfigs}
      value={{
        field: sortParams.sort || null,
        order: sortParams.order || null,
      }}
      onSort={handleSort}
    />
  )
}
