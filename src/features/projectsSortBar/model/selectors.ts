import type { RootState } from '@/app/store'
import { createSelector } from '@reduxjs/toolkit'
import type { ProjectsSortState, SortKey, SortValue } from './types'
import { sortOptions } from './types'

type SortDir = Exclude<SortValue, ''>

// 🔹 Базовий селектор
export const selectProjectsSort = (state: RootState): ProjectsSortState =>
  state.projectsSort

// 🔹 Чи є активне сортування
export const selectHasSort = createSelector([selectProjectsSort], (sortState) =>
  sortOptions.some(({ key }) => sortState[key] !== ''),
)

// 🔹 Пара сортування або null
export const selectSortPairOrNull = createSelector(
  [selectProjectsSort],
  (sortState): { sortBy: SortKey; sortDir: SortDir } | null => {
    for (const { key } of sortOptions) {
      const dir = sortState[key]
      if (dir) return { sortBy: key, sortDir: dir as SortDir }
    }
    return null
  },
)

// 🔹 Пара сортування як query-обʼєкт
export const selectSortQuery = createSelector(
  [selectSortPairOrNull],
  (pair): Partial<{ sortBy: SortKey; sortDir: SortDir }> => pair ?? {},
)
