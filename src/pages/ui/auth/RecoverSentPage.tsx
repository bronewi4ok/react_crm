import recoverImage from '@/shared/assets/images/recover.svg'
import { AuthForm } from '@/shared/ui/formUI/authForm'

function LoginPage() {
  return (
    <AuthForm
      title="We’ve sent you an email with a recovery link."
      subtitle="Please check your inbox."
      image={recoverImage}></AuthForm>
  )
}

export default LoginPage
