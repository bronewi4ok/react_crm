import { Input } from '@/shared/ui/formUI'
import { Form } from '@/shared/ui/formUI/form'
import { useAddProjectsContext } from '../model/context'
// import { MyDatePicker } from '@/shared/ui/formUI/dataPicker'
// import { Controller } from 'react-hook-form'

export const AddProjectFields = () => {
  const { error, errors, register } = useAddProjectsContext()

  return (
    <>
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
            <Input.Control
              {...register('budget', { valueAsNumber: true })}
              type="number"
              placeholder="Start typing…"
            />
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

      {/* <Controller
        name="startDate"
        control={control}
        render={({ field }) => (
          <MyDatePicker
            value={field.value ? new Date(field.value) : undefined}
            onChange={(date) => field.onChange(date ? date.toISOString().slice(0, 10) : '')}
          />
        )}
      /> */}

      {/* GLOBAL ERROR */}
      <Form.Error error={error} className="col-span-12" title="Сталася невідома помилка" />
    </>
  )
}
