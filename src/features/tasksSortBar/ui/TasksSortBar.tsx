import { SortBar } from '@/shared/ui/customUI/sortBar'
import { tasksSortConfigs } from '../model/configs'
import { useTasksQueryParams } from '../model/hooks'
import type { TasksSortTypes } from '../model/types'

export function TasksSortBar() {
  const { sort, setSort, order } = useTasksQueryParams()
  const handleSort = (key: TasksSortTypes) => setSort(key)

  return (
    <SortBar<TasksSortTypes>
      options={tasksSortConfigs}
      value={{ key: sort ?? null, order: order ?? null }}
      onSort={handleSort}
    />
  )
}
