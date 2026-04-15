import { AuthForm } from '@entities/auth'
import recoverImage from '@shared/assets/images/auth/recover.svg'

const LoginPage = () => {
  return (
    <AuthForm
      title="We’ve sent you an email with a recovery link."
      subtitle="Please check your inbox."
      image={recoverImage}></AuthForm>
  )
}

export default LoginPage
