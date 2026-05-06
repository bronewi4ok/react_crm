import { useOAuthMutation } from '@entities/auth/api/auth.api'
import { setCredentials } from '@entities/auth/api/auth.slice'
import { FRONT_ROUTES } from '@shared/routes'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const useOAuth = () => {
  const [oauth] = useOAuthMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return async (response: { credential?: string }) => {
    if (!response.credential) return

    try {
      const res = await oauth({ token: response.credential }).unwrap()
      dispatch(setCredentials(res))

      if (res?.user) {
        navigate(FRONT_ROUTES.main.HomePage.navPath)
      }
    } catch (error: unknown) {
      const err = error as { status?: unknown; error?: unknown }

      const fetchError =
        err.status === 'FETCH_ERROR' ||
        (typeof err.error === 'string' && err.error.includes('Failed to fetch'))

      if (fetchError) {
        alert(
          "Не вдалося зв'язатися з бекендом. Перевірте, чи запущений сервер і чи VITE_API_URL вказаний в .env (.env.local).",
        )
        return
      }

      if (err.status === 401) {
        alert(
          'Неавторизований: бекенд відхилив Google токен (401). Перевірте налаштування OAuth на бекенді.',
        )
        return
      }

      alert('Помилка входу через Google. Деталі в консолі браузера.')
    }
  }
}
