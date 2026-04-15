import type { RecoverConfirmTypes } from '@shared/auth'
import { useRecoverConfirmMutation } from '../../../../entities/auth/api/auth.api'

export function useRecoverConfirm() {
  const [recoverConfirmMutation, { isLoading, error }] = useRecoverConfirmMutation()

  async function recoverConfirm(credentials: RecoverConfirmTypes) {
    const result = await recoverConfirmMutation(credentials).unwrap()
    return result
  }

  return { recoverConfirm, isLoading, error }
}
