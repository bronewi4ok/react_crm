import { Button } from '@/shared/ui/Button'
import { Icon } from '@/shared/ui/Icon'
import type { AppHeaderProps } from './AppHeader.types'

export const AppHeader = ({ title, children }: AppHeaderProps) => {
  return (
    <header className="flex items-center px-8 h-20 bg-back-500 ">
      <Button
        variant="support"
        className="mr-5"
        aria-label="wider sidebar">
        <Icon
          name="common-burger"
          size="xs"
          className="fill-secondary-500"
        />
      </Button>

      <h1 className="text-xl font-bold text-dark tracking-tight select-none">
        {title}
      </h1>

      <div className="ml-auto flex items-center gap-4">
        <Button
          variant="support"
          aria-label="open search">
          <Icon
            name="common-search"
            size="xs"
            className="fill-secondary-500"
          />
        </Button>

        <Button
          variant="support"
          aria-label="open search">
          <Icon
            name="common-add"
            size="xs"
            className="fill-secondary-500"
          />
        </Button>
        {children}
      </div>
    </header>
  )
}
