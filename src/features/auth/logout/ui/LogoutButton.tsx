import { authRoutes } from '@/shared/config/router'
import { Button } from '@/shared/ui/baseUI/button'
import { useNavigate } from 'react-router-dom'
import { useLogout } from '../model/useLogout'

export function LogoutButton() {
  const { logoutUser } = useLogout()
  const navigate = useNavigate()
  const handleClick = async () => {
    await logoutUser()
    navigate(authRoutes.login.navPath)
  }
  return <Button onClick={handleClick}>Logout</Button>
}
