export const projectsSortConfigs = [
  {
    key: 'name',
    label: 'Name',
    column: 'flex-2',
    icon: { asc: 'common-sortNameAsc', desc: 'common-sortNameDesc' },
  },
  {
    key: 'tasks',
    label: 'Tasks',
    column: 'flex-1',
    icon: { asc: 'common-sortNumbAsc', desc: 'common-sortNumbDesc' },
  },
  {
    key: 'budget',
    label: 'Budget',
    column: 'flex-1',
    icon: { asc: 'common-sortNumbAsc', desc: 'common-sortNumbDesc' },
  },
  {
    key: 'dueDate',
    label: 'Due date',
    column: 'flex-1',
    icon: { asc: 'common-sortNumbAsc', desc: 'common-sortNumbDesc' },
  },
  {
    key: 'members',
    label: 'Members',
    column: 'flex-1',
    icon: { asc: 'common-sortNameAsc', desc: 'common-sortNameDesc' },
  },
] as const
