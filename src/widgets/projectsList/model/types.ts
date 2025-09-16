import type { Project } from '@/entities/project'

export type ProjectListProps = {
  projects: Project[]
  isLoading: boolean
  isError: boolean
  isFetching?: boolean
  isSuccess?: boolean
}
