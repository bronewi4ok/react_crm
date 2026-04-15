import { Loader } from '@ui/base/loader'
import { Overlay } from '@ui/base/overlay'

export const RouterLoader = () => {
  return (
    <Overlay fullscreen>
      <Loader />
    </Overlay>
  )
}
