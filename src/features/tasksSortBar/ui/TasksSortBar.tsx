import { SortBar } from '@/shared/ui/customUI/sortBar'
import { tasksSortConfigs } from '../model/configs'
import { useTasksQueryParams } from '../model/hooks'
import type { TasksSortTypes } from '../model/types'

export function TasksSortBar() {
  const { sort, setSort, order } = useTasksQueryParams()
  const handleSort = (field: TasksSortTypes) => setSort(field)

  return (
    <SortBar<TasksSortTypes>
      options={tasksSortConfigs}
      value={{ field: sort ?? null, order: order ?? null }}
      onSort={handleSort}
    />
  )
}
