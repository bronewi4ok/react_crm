import type { ListQueryParams, ListResponse } from '@/shared/hooks'
type TaskStatusTypes = 'done' | 'pending' | 'hold'

export type TaskTypes = {
  id: string
  creator: string
  title: string
  description?: string
  subTasks: string[]
  asigned?: string
  taskers?: string
  createdAt?: string
  updatedAt?: string
  startDate?: string
  plannedEndDate?: string
  status?: TaskStatusTypes
  priority?: string
}

export type TasksListResponse = ListResponse<TaskTypes>

export type TaskCardTypes = {
  task: TaskTypes
  className?: string
  onClick?: () => void
}

export type TasksQueryArgs<TSortKey extends string = string> =
  ListQueryParams<TSortKey>
