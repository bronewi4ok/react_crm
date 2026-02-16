import type { TasksSortTypes } from './types'

export const tasksSortConfigs = [
  {
    key: 'all',
    label: 'All',
    icon: { asc: 'common-sortNumbAsc', desc: 'common-sortNumbDesc' },
    column: 'flex-1',
  },
  {
    key: 'pending',
    label: 'Pending',
    icon: { asc: 'common-sortNumbAsc', desc: 'common-sortNumbDesc' },
    column: 'flex-1',
  },
  {
    key: 'inProgress',
    label: 'In progress',
    icon: { asc: 'common-sortNumbAsc', desc: 'common-sortNumbDesc' },
    column: 'flex-1',
  },
  {
    key: 'done',
    label: 'Done',
    icon: { asc: 'common-sortNumbAsc', desc: 'common-sortNumbDesc' },
    column: 'flex-1',
  },
  {
    key: 'paused',
    label: 'Paused',
    icon: { asc: 'common-sortNumbAsc', desc: 'common-sortNumbDesc' },
    column: 'flex-1',
  },
  {
    key: 'cancelled',
    label: 'Cancelled',
    icon: { asc: 'common-sortNumbAsc', desc: 'common-sortNumbDesc' },
    column: 'flex-1',
  },
] as const
// export const tasksSortConfigs = [
//   { key: 'all', label: 'All', icon: 'common-list', column: 'flex-1' },
//   { key: 'pending', label: 'Pending', icon: 'common-pending', column: 'flex-1' },
//   { key: 'inProgress', label: 'In progress', icon: 'common-progress', column: 'flex-1' },
//   { key: 'done', label: 'Done', icon: 'common-done', column: 'flex-1' },
//   { key: 'paused', label: 'Paused', icon: 'common-pause', column: 'flex-1' },
//   { key: 'cancelled', label: 'Cancelled', icon: 'common-cancele', column: 'flex-1' },
// ] as const

export const tasksSortKeys = tasksSortConfigs.map((cfg) => cfg.key) as TasksSortTypes[]
