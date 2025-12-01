import { RecoverForm } from '@/features/auth'
// import { GoogleAuthButton } from '@/features/authGoogle'
import recoverImage from '@/shared/assets/images/auth/recover.svg'
import { AuthForm } from '@/shared/ui/formUI/authForm'

function RecoverConfirmPage() {
  return (
    <AuthForm
      title="Lost your password? Enter your details to recover."
      subtitle="Enter your details to proceed further"
      image={recoverImage}>
      <RecoverForm />
      {/* <GoogleAuthButton /> */}
    </AuthForm>
  )
}

export default RecoverConfirmPage
