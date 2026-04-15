import { AuthForm } from '@entities/auth'
import { LoginForm } from '@features/auth/login'
import { OAuthButton } from '@features/auth/oauth'
import loginImage from '@shared/assets/images/auth/login.svg'
import { frontRoutes } from '@shared/routes'

import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <AuthForm
      title="Welcome to our CRM. Sign Up to getting started."
      subtitle="Enter your details to proceed further"
      image={loginImage}>
      <LoginForm />
      <OAuthButton />
      <Link
        className="text-secondary-500 hover:text-attention-500 text-base transition-colors duration-200"
        to={frontRoutes.auth.RecoverPage.navPath}>
        Forgot password?
      </Link>
    </AuthForm>
  )
}

export default LoginPage
