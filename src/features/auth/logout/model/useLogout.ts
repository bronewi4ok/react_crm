import { useAppDispatch } from '@/app/store'
import { useLogoutMutation } from '../../api/authApi'
import { logout } from '../../api/authSlice'

export function useLogout() {
  const [logoutMutation] = useLogoutMutation()
  const dispatch = useAppDispatch()

  const logoutUser = async () => {
    try {
      await logoutMutation().unwrap()
    } finally {
      dispatch(logout())
    }
  }

  return { logoutUser }
}
