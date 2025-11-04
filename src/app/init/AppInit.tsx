// import { logout, useRefreshMutation } from '@/features/auth'
import { useEffect } from 'react'
import { useAppSelector } from '../store'
// import { useAppDispatch, useAppSelector } from '../store'

export function AppInit() {
  // const [refresh] = useRefreshMutation()
  // const dispatch = useAppDispatch()
  const currentTheme = useAppSelector((state) => state.theme.current)

  useEffect(() => {
    document.documentElement.dataset.theme = currentTheme
  }, [currentTheme])

  // useEffect(() => {
  //   // if (location.pathname.startsWith('/auth')) return
  //   const init = async () => {
  //     try {
  //       await refresh().unwrap()
  //     } catch {
  //       dispatch(logout())
  //     }
  //   }
  //   init()
  // }, [refresh, dispatch])

  return null
}
