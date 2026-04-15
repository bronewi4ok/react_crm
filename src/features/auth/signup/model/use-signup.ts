import type { SignupCredentialsTypes } from '@shared/auth'
import { useSignupMutation } from '../../../../entities/auth/api/auth.api'

export function useSignup() {
  const [signup, { isLoading, error }] = useSignupMutation()

  const handleSignup = async (credentials: SignupCredentialsTypes) => {
    const result = await signup(credentials).unwrap()
    return result
  }

  return { signup: handleSignup, isLoading, error }
}
