import { Outlet } from 'react-router-dom'
import { ThemeInit } from './theme/ThemeInit'

export const AppInit = () => {
  return (
    <>
      <ThemeInit />
      <Outlet />
    </>
  )
}
