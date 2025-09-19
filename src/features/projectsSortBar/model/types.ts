export const sortOptions = [
  { key: 'name', label: 'Name', icon: 'common-sortName', column: 'flex-2' },
  { key: 'tasks', label: 'Tasks', icon: 'common-sortNumber', column: 'flex-1' },
  {
    key: 'budget',
    label: 'Budget',
    icon: 'common-sortNumber',
    column: 'flex-1',
  },
  {
    key: 'dueDate',
    label: 'Due date',
    icon: 'common-sortNumber',
    column: 'flex-1',
  },
  {
    key: 'members',
    label: 'Members',
    icon: 'common-sortName',
    column: 'flex-1',
  },
] as const

export type SortKey = (typeof sortOptions)[number]['key']
export type SortValue = '' | 'asc' | 'desc'
export type ProjectsSortState = Record<SortKey, SortValue>
