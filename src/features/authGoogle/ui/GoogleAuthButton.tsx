import { GoogleLogin } from '@react-oauth/google'
import { useHandleGoogleLogin } from '../model/googleAuth'

export const GoogleLoginButton = () => {
  const handleGoogleLogin = useHandleGoogleLogin()

  return (
    <GoogleLogin
      onSuccess={handleGoogleLogin}
      onError={() => console.log('Google login failed')}
    />
  )
}
