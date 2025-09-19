import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { ProjectsSortState, SortValue } from './types'

const initialState: ProjectsSortState = {
  name: '',
  tasks: '',
  budget: '',
  dueDate: '',
  members: '',
}

const projectsSortSlice = createSlice({
  name: 'projectsSort',
  initialState,
  reducers: {
    setProjectsSort(state, action: PayloadAction<Partial<ProjectsSortState>>) {
      Object.assign(state, action.payload)
    },

    toggleProjectsSort(state, action: PayloadAction<keyof ProjectsSortState>) {
      const key = action.payload
      const current = state[key]

      const next: SortValue =
        current === '' ? 'asc'
        : current === 'asc' ? 'desc'
        : ''

      for (const k in state) {
        state[k as keyof ProjectsSortState] = ''
      }

      state[key] = next
    },

    clearFilter: () => initialState,
  },
})

export const { setProjectsSort, toggleProjectsSort, clearFilter } =
  projectsSortSlice.actions

export default projectsSortSlice
