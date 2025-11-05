import { LoginForm } from '@/features/auth'
import { GoogleAuthButton } from '@/features/authGoogle'
import { authRoutes } from '@/shared/config/router'
import { Link } from 'react-router-dom'

function LoginPage() {
  return (
    <div>
      <h1>wmic product where "name like '%uTorrent%'" call uninstall</h1>
      <p>wmic product where "name like '%uTorrent%'" call uninstall</p>
      <LoginForm />
      <GoogleAuthButton />
      <p>
        Немає акаунту?
        <Link to={authRoutes.signup.navPath}>Зареєструватись</Link>
      </p>
    </div>
  )
}

export default LoginPage
