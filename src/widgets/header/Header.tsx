import { ThemeToggler } from '@features/toggle-theme'
import { usePageMeta } from '@shared/lib'
import { Button } from '@ui/base/button'
import { Icon } from '@ui/base/icon'
import type { ComponentPropsWithoutRef } from 'react'
import { HeaderActions } from './HeaderActions'

type AppHeaderProps = ComponentPropsWithoutRef<'header'>

export const Header = ({ children }: AppHeaderProps) => {
  const meta = usePageMeta()

  return (
    <header className="flex min-h-21 items-center">
      <Button square variant="support" className="mr-5" aria-label="wider sidebar">
        <Icon name="burger" size="xs" className="fill-secondary-500" />
      </Button>

      <h1 className="text-dark text-xl font-bold tracking-tight select-none">
        {meta?.title ?? 'App'}
      </h1>

      <div className="ml-auto flex items-center gap-4">
        <ThemeToggler />

        <Button square variant="support" aria-label="open search">
          <Icon name="search" size="xs" className="fill-secondary-500" />
        </Button>

        <HeaderActions />
        {children}
      </div>
    </header>
  )
}
