import { AuthForm } from '@entities/auth'
// import { OAuthButton } from '@features/auth/oauth'
import { SignupForm } from '@features/auth/signup'
import signupImage from '@shared/assets/images/auth/signup.svg'

const SignUpPage = () => {
  return (
    <AuthForm
      title="Welcome to our CRM. Sign Up to getting started."
      subtitle="Enter your details to proceed further"
      image={signupImage}>
      <h1>Реєстрація</h1>
      <SignupForm />
      {/* <OAuthButton /> */}
    </AuthForm>
  )
}

export default SignUpPage
