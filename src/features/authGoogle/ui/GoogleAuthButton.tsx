import { GoogleLogin } from '@react-oauth/google'
import { useHandleGoogleAuth } from '../model/googleAuth'

export const GoogleAuthButton = () => {
  const handleGoogleLogin = useHandleGoogleAuth()

  return (
    <GoogleLogin
      onSuccess={handleGoogleLogin}
      onError={() => console.log('Google login failed')}
    />
  )
}
