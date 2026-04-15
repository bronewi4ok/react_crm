import type { TasksSortTypes } from './types'

export const tasksSortConfigs = [
  {
    key: 'all',
    label: 'All',
    icon: { asc: 'sortNumbAsc', desc: 'sortNumbDesc' },
    column: 'flex-1',
  },
  {
    key: 'pending',
    label: 'Pending',
    icon: { asc: 'sortNumbAsc', desc: 'sortNumbDesc' },
    column: 'flex-1',
  },
  {
    key: 'inProgress',
    label: 'In progress',
    icon: { asc: 'sortNumbAsc', desc: 'sortNumbDesc' },
    column: 'flex-1',
  },
  {
    key: 'done',
    label: 'Done',
    icon: { asc: 'sortNumbAsc', desc: 'sortNumbDesc' },
    column: 'flex-1',
  },
  {
    key: 'paused',
    label: 'Paused',
    icon: { asc: 'sortNumbAsc', desc: 'sortNumbDesc' },
    column: 'flex-1',
  },
  {
    key: 'cancelled',
    label: 'Cancelled',
    icon: { asc: 'sortNumbAsc', desc: 'sortNumbDesc' },
    column: 'flex-1',
  },
] as const
// export const tasksSortConfigs = [
//   { key: 'all', label: 'All', icon: 'list', column: 'flex-1' },
//   { key: 'pending', label: 'Pending', icon: 'pending', column: 'flex-1' },
//   { key: 'inProgress', label: 'In progress', icon: 'progress', column: 'flex-1' },
//   { key: 'done', label: 'Done', icon: 'done', column: 'flex-1' },
//   { key: 'paused', label: 'Paused', icon: 'pause', column: 'flex-1' },
//   { key: 'cancelled', label: 'Cancelled', icon: 'cancele', column: 'flex-1' },
// ] as const

export const tasksSortKeys = tasksSortConfigs.map((cfg) => cfg.key) as TasksSortTypes[]
