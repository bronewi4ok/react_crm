export const tasksSortConfigs = [
  { key: 'all', label: 'All', icon: 'common-list', column: 'flex-1' },
  { key: 'done', label: 'Done', icon: 'common-done', column: 'flex-1' },
  {
    key: 'pending',
    label: 'Pending',
    icon: 'common-pending',
    column: 'flex-1',
  },
] as const
