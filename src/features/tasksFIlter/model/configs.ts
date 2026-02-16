import type { TasksSortTypes } from '@/features/tasksSortBar'

export const tasksFilterConfigs = [
  {
    key: 'all',
    label: 'All',
    icon: 'common-list',
    column: 'flex-1',
  },
  {
    key: 'pending',
    label: 'Pending',
    icon: 'common-pending',
    column: 'flex-1',
  },
  // {
  //   key: 'inProgress',
  //   label: 'In progress',
  //   icon: 'common-',
  //   column: 'flex-1',
  // },
  {
    key: 'done',
    label: 'Done',
    icon: 'common-done',
    column: 'flex-1',
  },
  // {
  //   key: 'paused',
  //   label: 'Paused',
  //   icon: { asc: 'common-sortNumbAsc', desc: 'common-sortNumbDesc' },
  //   column: 'flex-1',
  // },
  // {
  //   key: 'cancelled',
  //   label: 'Cancelled',
  //   icon: { asc: 'common-sortNumbAsc', desc: 'common-sortNumbDesc' },
  //   column: 'flex-1',
  // },
] as const

export const tasksFilterKeys = tasksFilterConfigs.map((cfg) => cfg.key) as TasksSortTypes[]
