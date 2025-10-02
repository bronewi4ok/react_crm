import { useListQuery } from '@/shared/hooks/useListQuery'
import type { ProjectsSortTypes } from './types'

export function useProjectsQueryParams() {
  return useListQuery<ProjectsSortTypes>(3)
}
