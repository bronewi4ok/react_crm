export const PROJECTS_SORT_CONFIGS = [
  {
    field: 'name',
    label: 'Name',
    column: 'flex-2',
    icon: { asc: 'common-sortNameAsc', desc: 'common-sortNameDesc' },
  },
  {
    field: 'tasks',
    label: 'Tasks',
    column: 'flex-1',
    icon: { asc: 'common-sortNumbAsc', desc: 'common-sortNumbDesc' },
  },
  {
    field: 'budget',
    label: 'Budget',
    column: 'flex-1',
    icon: { asc: 'common-sortNumbAsc', desc: 'common-sortNumbDesc' },
  },
  {
    field: 'endDate',
    label: 'Due date',
    column: 'flex-1',
    icon: { asc: 'common-sortNumbAsc', desc: 'common-sortNumbDesc' },
  },
  {
    field: 'members',
    label: 'Members',
    column: 'flex-1',
    icon: { asc: 'common-sortNameAsc', desc: 'common-sortNameDesc' },
  },
] as const

export const PROJECTS_SORT_KEYS = PROJECTS_SORT_CONFIGS.map((c) => c.field)
