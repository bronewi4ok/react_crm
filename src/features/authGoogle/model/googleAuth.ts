import { useAppDispatch } from '@/app/store'
import { useGoogleLoginMutation } from '@/features/auth/api/authApi'
import { setCredentials } from '@/features/auth/api/authSlice'
import { mainRoutes } from '@/shared/config/router'
import { useNavigate } from 'react-router-dom'

export const useHandleGoogleAuth = () => {
  const [googleLogin] = useGoogleLoginMutation()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  return async (response: { credential?: string }) => {
    if (!response.credential) return

    try {
      const res = await googleLogin({ token: response.credential }).unwrap()
      dispatch(setCredentials(res))

      // If login successful, navigate to home (immediate redirect after social login)
      if (res?.user) {
        navigate(mainRoutes.home.navPath)
      }
    } catch (error: unknown) {
      const err = error as { status?: unknown; error?: unknown }

      // RTK Query wraps fetch/network failures as { status: 'FETCH_ERROR', error: 'TypeError: Failed to fetch' }
      const fetchError =
        err.status === 'FETCH_ERROR' ||
        (typeof err.error === 'string' && err.error.includes('Failed to fetch'))

      if (fetchError) {
        // Connection refused / CORS / network problem
        // Show actionable message for developer/user
        alert(
          "Не вдалося зв'язатися з бекендом. Перевірте, чи запущений сервер і чи VITE_API_URL вказаний в .env (.env.local).",
        )
        return
      }

      // Authentication error returned by backend (401, 403, etc.)
      if (err.status === 401) {
        alert(
          'Неавторизований: бекенд відхилив Google токен (401). Перевірте налаштування OAuth на бекенді.',
        )
        return
      }

      // Fallback: generic message and dev hint
      alert('Помилка входу через Google. Деталі в консолі браузера.')
    }
  }
}
