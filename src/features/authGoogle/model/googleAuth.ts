import { useAppDispatch } from '@/app/store'
import { useGoogleLoginMutation } from '@/features/auth/api/authApi'
import { setCredentials } from '@/features/auth/api/authSlice'

export const useHandleGoogleLogin = () => {
  const [googleLogin] = useGoogleLoginMutation()
  const dispatch = useAppDispatch()

  return async (response: { credential?: string }) => {
    if (!response.credential) return

    try {
      const res = await googleLogin({ token: response.credential }).unwrap()
      dispatch(setCredentials(res))
    } catch (error) {
      console.error('Google login error:', error)
    }
  }
}
