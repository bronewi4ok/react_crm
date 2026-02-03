import { Loader } from '@/shared/ui/baseUI/loader'
import { Overlay } from '@/shared/ui/baseUI/overlay'

export const AppLoader = () => {
  return (
    <Overlay fullscreen>
      <Loader />
    </Overlay>
  )
}
