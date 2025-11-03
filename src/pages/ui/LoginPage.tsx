import { LoginForm } from '@/features/auth'
import { authRoutes } from '@/shared/config/router'
import { Link } from 'react-router-dom'

function LoginPage() {
  return (
    <div>
      <h1>Вхід</h1>
      <LoginForm />
      <p>
        Немає акаунту?
        <Link to={authRoutes.signup.navPath}>Зареєструватись</Link>
      </p>
    </div>
  )
}

export default LoginPage
