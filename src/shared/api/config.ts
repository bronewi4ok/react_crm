export const API_TAGS = {
  USER: 'User',
  PROJECT: 'Project',
  TASK: 'Task',
} as const

export const API_LIST = 'LIST'
export type TagTypes = (typeof API_TAGS)[keyof typeof API_TAGS]
