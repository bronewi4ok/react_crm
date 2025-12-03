import { LoginForm } from '@/features/auth'
import { GoogleAuthButton } from '@/features/authGoogle'
import loginImage from '@/shared/assets/images/auth/login.svg'
import { authRoutes } from '@/shared/config/router'
import { AuthForm } from '@/shared/ui/formUI/authForm'
import { Link } from 'react-router-dom'

function LoginPage() {
  return (
    <AuthForm
      title="Welcome to our CRM. Sign Up to getting started."
      subtitle="Enter your details to proceed further"
      image={loginImage}>
      <LoginForm />
      <GoogleAuthButton />
      <Link
        className="text-base text-secondary-500 hover:text-attention-500 transition-colors duration-200"
        to={authRoutes.recover.navPath}>
        Forgot password?
      </Link>
    </AuthForm>
  )
}

export default LoginPage
