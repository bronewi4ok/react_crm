import { SignupForm } from '@/features/auth'
import { GoogleAuthButton } from '@/features/authGoogle'
import signupImage from '@/shared/assets/images/auth/signup.svg'
import { AuthForm } from '@/shared/ui/formUI/authForm'

const SignUpPage = () => {
  return (
    <AuthForm
      title="Welcome to our CRM. Sign Up to getting started."
      subtitle="Enter your details to proceed further"
      image={signupImage}>
      <h1>Реєстрація</h1>
      <SignupForm />
      <GoogleAuthButton />
    </AuthForm>
  )
}

export default SignUpPage
