import type { RecoverConfirmTypes } from '@/shared/types'
import { useRecoverConfirmMutation } from '../../api/authApi'

export function useRecoverConfirm() {
  const [recoverConfirmMutation, { isLoading, error }] =
    useRecoverConfirmMutation()

  async function recoverConfirm(credentials: RecoverConfirmTypes) {
    const result = await recoverConfirmMutation(credentials).unwrap()
    return result
  }

  return { recoverConfirm, isLoading, error }
}
