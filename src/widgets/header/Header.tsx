import { useCurrentPageMeta } from '@/app/router/model/utils'
import { Button } from '@/shared/ui/button'
import { Icon } from '@/shared/ui/icon'
import type { AppHeaderProps } from './types'
import { ThemeToggler } from '@/features/themeToggler/ui/ThemeToggler'

export const Header = ({ children }: AppHeaderProps) => {
  const meta = useCurrentPageMeta()

  return (
    <header className="flex items-center px-7 py-6 min-h-21 bg-back-500">
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
        {meta?.title ?? 'App'}
      </h1>

      <div className="ml-auto flex items-center gap-4">
        <ThemeToggler/>
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
