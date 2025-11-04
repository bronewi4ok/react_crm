import { logout, useRefreshMutation } from '@/features/auth'
import { refreshMutex } from '@/shared/utils/refreshMutex'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../store'
import { store } from '../store/store'

export function AppInit() {
  const [refresh] = useRefreshMutation()
  const dispatch = useAppDispatch()
  const currentTheme = useAppSelector((state) => state.theme.current)
  const user = useAppSelector((state) => state.auth.user)

  // Тема
  useEffect(() => {
    document.documentElement.dataset.theme = currentTheme
  }, [currentTheme])

  // Refresh при старті
  useEffect(() => {
    if (user) return
    if (window.location.pathname.startsWith('/auth')) return

    const init = async () => {
      if (refreshMutex.isLocked()) {
        await refreshMutex.waitForUnlock()
        // Після очікування перевіряємо стан зі store (може змінитися під час очікування)
        const currentUser = store.getState().auth.user
        if (!currentUser) {
          // Якщо після очікування user все ще немає, викликаємо refresh з mutex
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
    // 👇 refresh тільки при монтуванні або зміні user
  }, [refresh, user, dispatch])

  return null
}
