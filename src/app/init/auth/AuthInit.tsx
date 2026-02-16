import { store, useAppDispatch, useAppSelector } from '@/app/store'
import { logout, useRefreshMutation } from '@/features/auth'
import { refreshMutex } from '@/shared/lib'
import { useEffect } from 'react'

export const AuthInit = () => {
  const [refresh] = useRefreshMutation()
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.auth.user)

  useEffect(() => {
    if (user) return
    if (window.location.pathname.startsWith('/auth')) return

    const init = async () => {
      if (refreshMutex.isLocked()) {
        await refreshMutex.waitForUnlock()
        const currentUser = store.getState().auth.user
        if (!currentUser) {
          const release = await refreshMutex.acquire()
          try {
            await refresh().unwrap()
          } catch {
            dispatch(logout())
          } finally {
            release()
          }
        }
        return
      }

      const release = await refreshMutex.acquire()
      try {
        await refresh().unwrap()
      } catch {
        dispatch(logout())
      } finally {
        release()
      }
    }

    init()
  }, [refresh, user, dispatch])

  return null
}
