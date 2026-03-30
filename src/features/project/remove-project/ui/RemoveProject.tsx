import { Button, type ButtonProps } from '@/shared/ui/baseUI/button'

type RemoveProjectProps = ButtonProps

export const RemoveProject = (props: RemoveProjectProps) => {
  const { children, ...rest } = props
  return (
    <Button variant="danger" size='sm' {...rest}>
      {children}
    </Button>
  )
}
