import { AuthForm } from '@entities/auth'
import { OAuthButton } from '@features/auth/oauth'
import { RecoverForm } from '@features/auth/recover'
import recoverImage from '@shared/assets/images/auth/recover.svg'

const RecoverPage = () => {
  return (
    <AuthForm
      title="Lost your password? Enter your details to recover."
      subtitle="Enter your details to proceed further"
      image={recoverImage}>
      <RecoverForm />
      <OAuthButton />
    </AuthForm>
  )
}

export default RecoverPage
