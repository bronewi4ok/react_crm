import { createSafeContext } from '@/shared/hooks'
import type { PaginationActionProps, PaginationStateProps } from './types'

export const [usePaginationState, PaginationStateProvider] =
  createSafeContext<PaginationStateProps>('pagination')

export const [usePaginationAction, PaginationActionProvider] =
  createSafeContext<PaginationActionProps>('pagination')
