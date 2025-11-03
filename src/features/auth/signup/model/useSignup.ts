// import { useSignupMutation } from '@/features/auth/api/authApi'
// import { useCallback } from 'react'

// export function useSignup() {
//   const [signupMutation, { isLoading, error }] = useSignupMutation()

//   const signup = useCallback(
//     async (credentials: SignupCredentials) => {
//       try {
//         const result = await signupMutation(credentials).unwrap()
//         return result
//       } catch (error) {
//         throw error
//       }
//     },
//     [signupMutation],
//   )

//   return { signup, isLoading, error }
// }

import type { SignupCredentials } from '@/shared/types'
import { useSignupMutation } from '../../api/authApi'

export function useSignUp() {
  const [signup, { isLoading, error }] = useSignupMutation()

  const handleSignup = async (credentials: SignupCredentials) => {
    const result = await signup(credentials).unwrap()
    return result
  }

  return { signup: handleSignup, isLoading, error }
}
