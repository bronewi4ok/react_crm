import { useLoginMutation } from '@entities/auth'
import type { LoginCredentialsTypes } from '@shared/auth'

export function useLogin() {
  const [loginMutation, { isLoading, error }] = useLoginMutation()

  async function handleLogin(credentials: LoginCredentialsTypes) {
    const result = await loginMutation(credentials).unwrap()
    return result
  }

  return { login: handleLogin, isLoading, error }
}
