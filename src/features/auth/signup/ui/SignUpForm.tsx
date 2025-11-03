import { mainRoutes } from '@/shared/config/router'
import { useState, type ChangeEvent, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSignUp } from '../model/useSignup'

export function SignUpForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signup, isLoading, error } = useSignUp()
  const navigate = useNavigate()

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = await signup({ email, password, name })
    if (result.user) navigate(mainRoutes.home.navPath)
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Ім'я"
        value={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        required
      />
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
        minLength={6}
      />
      <button
        type="submit"
        disabled={isLoading}>
        Зареєструватись
      </button>
      {error && (
        <div style={{ color: 'red' }}>
          {'message' in error ? error.message : 'Помилка реєстрації'}
        </div>
      )}
    </form>
  )
}
