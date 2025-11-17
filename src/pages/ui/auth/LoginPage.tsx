import { LoginForm } from '@/features/auth'
import { GoogleAuthButton } from '@/features/authGoogle'
import loginImage from '@/shared/assets/images/login.svg'
import { AuthForm } from '@/shared/ui/formUI/authForm'

function LoginPage() {
  return (
    <AuthForm
      title="Welcome to our CRM. Sign Up to getting started."
      subtitle="Enter your details to proceed further"
      image={loginImage}>
      <LoginForm />
      <GoogleAuthButton />
    </AuthForm>
  )
}

export default LoginPage
