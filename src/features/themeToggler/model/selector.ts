import type { RootState } from '@/shared/types'

export const selectTheme = (state: RootState) => state.theme.current
