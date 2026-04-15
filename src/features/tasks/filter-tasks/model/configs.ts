import type { TasksSortTypes } from '@features/tasks/sort-tasks'

export const tasksFilterConfigs = [
  {
    key: 'all',
    label: 'All',
    icon: 'list',
    column: 'flex-1',
  },
  {
    key: 'pending',
    label: 'Pending',
    icon: 'pending',
    column: 'flex-1',
  },
  // {
  //   key: 'inProgress',
  //   label: 'In progress',
  //   icon: '',
  //   column: 'flex-1',
  // },
  {
    key: 'done',
    label: 'Done',
    icon: 'done',
    column: 'flex-1',
  },
  // {
  //   key: 'paused',
  //   label: 'Paused',
  //   icon: { asc: 'sortNumbAsc', desc: 'sortNumbDesc' },
  //   column: 'flex-1',
  // },
  // {
  //   key: 'cancelled',
  //   label: 'Cancelled',
  //   icon: { asc: 'sortNumbAsc', desc: 'sortNumbDesc' },
  //   column: 'flex-1',
  // },
] as const

export const tasksFilterKeys = tasksFilterConfigs.map((cfg) => cfg.key) as TasksSortTypes[]
