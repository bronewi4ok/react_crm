import { GoogleLogin } from '@react-oauth/google'
import { useOAuth } from './use-oauth'

export const OAuthButton = () => {
  const handleGoogleLogin = useOAuth()

  return (
    <GoogleLogin onSuccess={handleGoogleLogin} onError={() => console.log('Google login failed')} />
  )
}
