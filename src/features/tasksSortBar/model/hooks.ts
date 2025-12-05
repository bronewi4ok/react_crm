import { useListQuery } from '@/shared/hooks/useListQuery'
import type { TasksSortTypes } from './types'

export function useTasksQueryParams() {
  return useListQuery<TasksSortTypes>(5)
}
