import type { QueryParamsTypes, QueryResponseTypes } from '@/shared/types'
import type { taskStatus } from './configs'

export type TaskStatusTypes = (typeof taskStatus)[number]

export type TaskTypes = {
  id: string
  creator: string
  title: string
  description?: string
  subTasks: string[]
  assigned?: string
  taskers?: string
  createdAt?: string
  updatedAt?: string
  startDate?: string
  endDate?: string
  status?: TaskStatusTypes
  priority?: string
}

export type TasksListResponse = QueryResponseTypes<TaskTypes>

export type TaskCardTypes = { task: TaskTypes; className?: string; onClick?: () => void }

export type TasksQueryArgs<TSortKey extends string = string> = QueryParamsTypes<TSortKey>
