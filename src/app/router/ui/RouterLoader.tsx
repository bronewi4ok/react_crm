import { Loader } from '@/shared/ui/baseUI/loader'
import { Overlay } from '@/shared/ui/baseUI/overlay'

export const RouterLoader = () => {
  return (
    <Overlay fullscreen>
      <Loader />
    </Overlay>
  )
}
