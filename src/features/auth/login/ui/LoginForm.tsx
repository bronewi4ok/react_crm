import { authRoutes, mainRoutes } from '@/shared/config/router'
import { Button } from '@/shared/ui/baseUI/button'
import { Checkbox, Input } from '@/shared/ui/formUI'
import { Form } from '@/shared/ui/formUI/form'
import { Controller } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useLogin } from '../model/useLogin'
import { useLoginRegister } from '../model/useLoginRegister'
import { type LoginFormTypes } from '../model/validation'

export function LoginForm() {
  const { login, isLoading, error } = useLogin()
  const navigate = useNavigate()

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useLoginRegister()

  const onSubmit = async (data: LoginFormTypes) => {
    const result = await login(data)
    if (result?.user) navigate(mainRoutes.home.navPath)
  }
  const isDisabled = isLoading || isSubmitting

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-12 gap-4">
      {/* EMAIL */}
      <Form.Field className="col-span-12">
        <Input error={errors.email?.message}>
          <Input.Label>Email</Input.Label>

          <Input.Wrap>
            <Input.Control
              {...register('email')}
              type="email"
              placeholder="Start typing…"
              autoComplete="email"
            />
            <Input.Icon name="common-envelop" />
          </Input.Wrap>
        </Input>

        <Form.Message message={errors.email?.message} />
      </Form.Field>

      {/* PASSWORD */}
      <Form.Field className="col-span-12">
        <Input error={errors.password?.message}>
          <Input.Label>Password</Input.Label>

          <Input.Wrap>
            <Input.Control
              {...register('password')}
              type="password"
              placeholder="Start typing…"
              autoComplete="email"
            />
            <Input.Icon name="common-lock" />
          </Input.Wrap>
        </Input>

        <Form.Message message={errors.password?.message} />
      </Form.Field>

      {/* REMEMBER ME */}
      <Form.Field className="col-span-12">
        <Controller
          name="rememberMe"
          control={control}
          render={({ field }) => (
            <Checkbox
              title="Remember Me"
              className="col-span-12"
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          )}
        />

        <Form.Message message={errors.rememberMe?.message} />
      </Form.Field>

      {/* Link */}
      <Button asChild className="col-span-6" variant="primary">
        <Link to={authRoutes.signup.navPath}>Sign Up</Link>
      </Button>

      {/* SUBMIT */}
      <Button className="col-span-6" variant="success" type="submit" disabled={isDisabled}>
        Log in
      </Button>

      {/* GLOBAL ERROR */}
      <Form.Error error={error} className="col-span-12" title="Сталася невідома помилка" />
    </Form>
  )
}
