import { FRONT_ROUTES } from '@shared/routes'
import { Button } from '@ui/base/button'
import { Form } from '@ui/controls/form'
import { Input } from '@ui/controls/input'
import { type SubmitHandler } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useRecover } from '../model/use-recover'
import { useRecoverRegister } from '../model/use-recover-register'
import type { RecoverFormTypes } from '../model/validation'

export function RecoverForm() {
  const navigate = useNavigate()
  const { recover, isLoading, error } = useRecover()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useRecoverRegister()

  const onSubmit: SubmitHandler<RecoverFormTypes> = async (data) => {
    const result = await recover(data)
    if (result.success) navigate(FRONT_ROUTES.auth.RecoverSentPage.navPath)
  }

  const isDisabled = isLoading || isSubmitting

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-12 gap-4">
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
            <Input.Icon name="envelop" />
          </Input.Wrap>
        </Input>

        <Form.Message message={errors.email?.message} />
      </Form.Field>

      {/* SUBMIT */}
      <Button className="col-span-6" variant="success" type="submit" disabled={isDisabled}>
        Log in
      </Button>

      <Button className="col-span-6" variant="primary" asChild>
        <Link to={FRONT_ROUTES.main.HomePage.navPath}>Home</Link>
      </Button>

      {/* GLOBAL ERROR */}
      <Form.Error error={error} className="col-span-12" title="Сталася невідома помилка" />
    </Form>
  )
}
