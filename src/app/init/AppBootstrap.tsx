import { AuthInit } from './auth/AuthInit'
import { ThemeInit } from './theme/ThemeInit'

export const AppBootstrap = () => {
  return (
    <>
      <ThemeInit />
      <AuthInit />
    </>
  )
}
