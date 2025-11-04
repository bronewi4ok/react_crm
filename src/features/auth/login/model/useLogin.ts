import type { LoginCredentials } from '@/shared/types'
import { useLoginMutation } from '../../api/authApi'

export function useLogin() {
  const [loginMutation, { isLoading, error }] = useLoginMutation()

  async function login(credentials: LoginCredentials) {
    const result = await loginMutation(credentials).unwrap()
    return result
  }

  return { login, isLoading, error }
}
