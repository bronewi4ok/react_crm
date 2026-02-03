import { mainRoutes } from '@/shared/config/router'
import { Button } from '@/shared/ui/baseUI/button'
import { Input } from '@/shared/ui/formUI'
import { Form } from '@/shared/ui/formUI/form'
import { type SubmitHandler } from 'react-hook-form'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'

import { useRecoverConfirm } from '../model/useRecoverConfirm'
import { useRecoverConfirmRegister } from '../model/useRecoverConfirmRegister'
import type { RecoverConfirmFormTypes } from '../model/validation'

export function RecoverConfirmForm() {
  const { recoverConfirm, isLoading, error } = useRecoverConfirm()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token') ?? ''

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useRecoverConfirmRegister()

  const onSubmit: SubmitHandler<RecoverConfirmFormTypes> = async (data) => {
    if (!token) return

    const payload = {
      token,
      newPassword: data.newPassword,
      confirmNewPassword: data.confirmNewPassword,
    }

    const result = await recoverConfirm(payload)
    if (result.success) navigate(mainRoutes.home.navPath)
  }

  const isDisabled = isLoading || isSubmitting

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-12 gap-4">
      {/* PASSWORD */}
      <Form.Field className="col-span-12">
        <Input error={errors.newPassword?.message}>
          <Input.Label>New password</Input.Label>

          <Input.Wrap>
            <Input.Control
              {...register('newPassword')}
              type="password"
              placeholder="Start typing…"
              autoComplete="new-password"
            />
            <Input.Icon name="common-lock" />
          </Input.Wrap>
        </Input>

        <Form.Message message={errors.newPassword?.message} />
      </Form.Field>

      {/* CONFIRM PASSWORD */}
      <Form.Field className="col-span-12">
        <Input error={errors.confirmNewPassword?.message}>
          <Input.Label>Confirm new password</Input.Label>

          <Input.Wrap>
            <Input.Control
              {...register('newPassword')}
              type="password"
              placeholder="Start typing…"
              autoComplete="new-password"
            />
            <Input.Icon name="common-lock" />
          </Input.Wrap>
        </Input>
        <Form.Message message={errors.confirmNewPassword?.message} />
      </Form.Field>

      {/* SUBMIT */}
      <Button className="col-span-6" variant="success" type="submit" disabled={isDisabled}>
        Confirm
      </Button>

      <Button className="col-span-6" variant="primary" as={Link} to={mainRoutes.home.navPath}>
        Home
      </Button>

      {/* GLOBAL ERROR */}
      <Form.Error error={error} className="col-span-12" title="Сталася невідома помилка" />
    </Form>
  )
}
