import { useAppSelector } from '@/shared/hooks/store'
import { LogoutButton, selectAuthUser } from '@/features/auth'
import { ThemeToggler } from '@/features/themeToggler'
import { usePageMeta } from '@/pages/model/utils'
import { Button } from '@/shared/ui/baseUI/button'
import { Icon } from '@/shared/ui/baseUI/icon'
import type { AppHeaderProps } from '../model/types'
import { HeaderAddMenu } from './HeaderAddMenu'

export const Header = ({ children }: AppHeaderProps) => {
  const meta = usePageMeta()
  const user = useAppSelector(selectAuthUser)

  return (
    <header className="flex min-h-21 items-center px-7 py-6">
      <Button square variant="support" className="mr-5" aria-label="wider sidebar">
        <Icon name="common-burger" size="xs" className="fill-secondary-500" />
      </Button>

      <h1 className="text-dark text-xl font-bold tracking-tight select-none">
        {meta?.title ?? 'App'}
      </h1>

      <div className="ml-auto flex items-center gap-4">
        {user && <LogoutButton />}
        <ThemeToggler />
        <Button square variant="support" aria-label="open search">
          <Icon name="common-search" size="xs" className="fill-secondary-500" />
        </Button>

        <HeaderAddMenu />
        {children}
      </div>
    </header>
  )
}
