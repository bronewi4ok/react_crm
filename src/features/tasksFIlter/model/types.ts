import type { TaskStatusTypes } from '@/entities/task'

export type TasksFilterStatusTypes = TaskStatusTypes | 'all'

export type TaskFilterParams<TSortKey extends string = string> = {
  status?: TSortKey
  page?: number
  per?: number
  q?: string
}
