import { createSafeContext } from '@/shared/lib'
import type { PaginationActionProps, PaginationStateProps } from './types'

export const [usePaginationState, PaginationStateProvider] =
  createSafeContext<PaginationStateProps>('pagination')

export const [usePaginationAction, PaginationActionProvider] =
  createSafeContext<PaginationActionProps>('pagination')
