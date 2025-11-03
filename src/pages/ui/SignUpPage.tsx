import { SignUpForm } from '@/features/auth/signup'
import { authRoutes } from '@/shared/config/router'
import { Link } from 'react-router-dom'

function SignUpPage() {
  return (
    <div>
      <h1>Реєстрація</h1>
      <SignUpForm />
      <p>
        Вже маєте акаунт? <Link to={authRoutes.login.navPath}>Увійти</Link>
      </p>
    </div>
  )
}
export default SignUpPage
