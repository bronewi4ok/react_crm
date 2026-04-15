import type { RecoverTypes } from '@shared/auth'
import { useRecoverMutation } from '../../../../entities/auth/api/auth.api'

export function useRecover() {
  const [recoverMutation, { isLoading, error }] = useRecoverMutation()

  async function recover(credentials: RecoverTypes) {
    const result = await recoverMutation(credentials).unwrap()
    return result
  }

  return { recover, isLoading, error }
}
