import { frontRoutes } from '@/shared/config/routes'
import { Input } from '@/shared/ui/formUI'
import { MyDatePicker } from '@/shared/ui/formUI/dataPicker'
import { Form } from '@/shared/ui/formUI/form'
import clsx from 'clsx'
import type { ComponentProps } from 'react'
import { Controller } from 'react-hook-form'
import { generatePath, useNavigate } from 'react-router-dom'
import { useAddProject } from '../model/useAddProject'
import { useAddProjectRegister } from '../model/useAddProjectRegister'
import type { addProjectTypes } from '../model/validation'

export type AddProjectRootTypes = ComponentProps<'div'>

export function AddProjectRoot({ children, className }: AddProjectRootTypes) {
  const { addProject, isLoading, error } = useAddProject()
  const navigate = useNavigate()

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useAddProjectRegister()

  const onSubmit = async (data: addProjectTypes) => {
    const result = await addProject(data)
    if (result.id) navigate(generatePath(frontRoutes.main.ProjectDetailsPage.navPath, { id: result.id }))
  }

  const isDisabled = isLoading || isSubmitting
  console.log(isDisabled)

  return (
    <Form className={clsx('space-y-3', className)} onSubmit={handleSubmit(onSubmit)}>
      {/* NAME */}
      <Form.Field>
        <Input error={errors.name?.message}>
          <Input.Label>Project title</Input.Label>

          <Input.Wrap>
            <Input.Control {...register('name')} type="text" placeholder="Start typing…" />
            <Input.Icon name="common-user" />
          </Input.Wrap>
        </Input>

        <Form.Message message={errors.name?.message} />
      </Form.Field>

      {/* DESCRIPTION */}
      <Form.Field>
        <Input error={errors.description?.message}>
          <Input.Label>Project description</Input.Label>

          <Input.Wrap>
            <Input.Control {...register('description')} type="text" placeholder="Start typing…" />
            <Input.Icon name="common-envelop" />
          </Input.Wrap>
        </Input>

        <Form.Message message={errors.description?.message} />
      </Form.Field>

      {/* BUDGET */}
      <Form.Field>
        <Input error={errors.budget?.message}>
          <Input.Label>Project budget</Input.Label>

          <Input.Wrap>
            <Input.Control {...register('budget')} type="number" placeholder="Start typing…" />
            <Input.Icon name="common-invoices" />
          </Input.Wrap>
        </Input>

        <Form.Message message={errors.budget?.message} />
      </Form.Field>

      {/* START DATE */}
      <Form.Field>
        <Input error={errors.startDate?.message}>
          <Input.Label>Project start date</Input.Label>

          <Input.Wrap>
            <Input.Control {...register('startDate')} type="date" placeholder="Start typing…" />
            <Input.Icon name="common-calendar" />
          </Input.Wrap>
        </Input>

        <Form.Message message={errors.startDate?.message} />
      </Form.Field>

      {/* END DATE */}
      <Form.Field>
        <Input error={errors.endDate?.message}>
          <Input.Label>Project end date</Input.Label>

          <Input.Wrap>
            <Input.Control {...register('endDate')} type="date" placeholder="Start typing…" />
            <Input.Icon name="common-calendar" />
          </Input.Wrap>
        </Input>

        <Form.Message message={errors.endDate?.message} />
      </Form.Field>

      <Controller
        name="startDate"
        control={control}
        render={({ field }) => (
          <MyDatePicker
            value={field.value ? new Date(field.value) : undefined}
            onChange={(date) => field.onChange(date ? date.toISOString().slice(0, 10) : '')}
          />
        )}
      />

      {children}
      {/* GLOBAL ERROR */}
      <Form.Error error={error} className="col-span-12" title="Сталася невідома помилка" />
    </Form>
  )
}
