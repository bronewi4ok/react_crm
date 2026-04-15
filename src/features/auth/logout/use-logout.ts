import { useDispatch } from 'react-redux'
import { useLogoutMutation } from '../../../entities/auth/api/auth.api'
import { logout } from '../../../entities/auth/api/auth.slice'

export function useLogout() {
  const [logoutMutation] = useLogoutMutation()
  const dispatch = useDispatch()

  const logoutUser = async () => {
    try {
      await logoutMutation().unwrap()
    } catch (error) {
      console.error('Logout failed:', error)
    } finally {
      dispatch(logout())
    }
  }

  return { logoutUser }
}
