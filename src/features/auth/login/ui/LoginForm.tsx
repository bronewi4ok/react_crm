import { mainRoutes } from '@/shared/config/router'
import { useState, type ChangeEvent, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLogin } from '../model/useLogin'

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, isLoading, error } = useLogin()
  const navigate = useNavigate()

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = await login({ email, password })
    if (result.user) navigate(mainRoutes.home.navPath)
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
        required
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
        required
      />
      <button
        type="submit"
        disabled={isLoading}>
        Увійти
      </button>
      {error && (
        <div style={{ color: 'red' }}>
          {'message' in error ? error.message : 'Помилка входу'}
        </div>
      )}
    </form>
  )
}
