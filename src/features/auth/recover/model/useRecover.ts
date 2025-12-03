import type { RecoverTypes } from '@/shared/types'
import { useRecoverMutation } from '../../api/authApi'

export function useRecover() {
  const [recoverMutation, { isLoading, error }] = useRecoverMutation()

  async function recover(credentials: RecoverTypes) {
    const result = await recoverMutation(credentials).unwrap()
    return result
  }

  return { recover, isLoading, error }
}
