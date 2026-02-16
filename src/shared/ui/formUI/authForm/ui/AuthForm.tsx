import type { AuthFormTypes } from '../model/types'
import blob1 from './images/blob1.svg'

export function AuthForm({ children, title, image, subtitle }: AuthFormTypes) {
  return (
    <div className="grid grid-cols-20 h-full">
      <div className="col-span-11 pt-27 pb-27 rounded-r-2xl">
        <div className="max-w-93 mx-auto">
          <div className="space-y-3 mb-16">
            <h1 className="text-h1 text-dark mb-3">{title}</h1>
            <p className="text-p1 text-secondary-500">{subtitle}</p>
            {children}
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-primary-500 flex items-center justify-center col-span-9 relative overflow-hidden">
        <img
          className="z-10 absolute w-[100%] rotate-[-60deg] "
          src={blob1}
          alt="blob"
          aria-hidden="true"
        />
        <img
          className="z-20 w-[100%] rotate-[126deg] scale-140 translate-x-1/4 -translate-y-1/18 absolute left-0 bottom-[20%]"
          src={blob1}
          alt="blob"
          aria-hidden="true"
        />

        {image && (
          <img
            className="z-30 ml-[10%] w-[67%]"
            src={image}
            alt="login to BetaCRM"
          />
        )}
      </div>
    </div>
  )
}
