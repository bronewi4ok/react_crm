import { store, useAppDispatch, useAppSelector } from '@/app/store'
import { logout, useRefreshMutation } from '@/features/auth'
import { applyTheme, getInitialTheme, setTheme } from '@/features/themeToggler'
import { refreshMutex } from '@/shared/libs'
import { useEffect } from 'react'

export function AppInit() {
  const [refresh] = useRefreshMutation()
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.auth.user)

  // Ініціалізація теми
  useEffect(() => {
    const theme = getInitialTheme()
    dispatch(setTheme(theme))
    applyTheme(theme)
  }, [dispatch])

  // Ініціалізація авторизації
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
