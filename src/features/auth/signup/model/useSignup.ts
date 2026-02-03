import type { SignupCredentialsTypes } from '@/shared/types'
import { useSignupMutation } from '../../api/authApi'

export function useSignup() {
  const [signup, { isLoading, error }] = useSignupMutation()

  const handleSignup = async (credentials: SignupCredentialsTypes) => {
    const result = await signup(credentials).unwrap()
    return result
  }

  return { signup: handleSignup, isLoading, error }
}
