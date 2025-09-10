import { useCurrentPageTitle } from '@/app/router/model/helpers'
import { AppHeader } from '@/widgets/AppHeader'
import MainMenu from '@/widgets/Sidebar/ui/MainMenu'
import { Outlet } from 'react-router-dom'

export function MainLayout() {
  const title = useCurrentPageTitle()

  return (
    <div className="flex flex-wrap items-stretch min-h-dvh w-dvw bg-back-500 text-dark break-all">
      <aside className="felx-none bg-light">
        <MainMenu />
      </aside>

      <main className="flex-1 bg-light flex flex-col min-h-dvh">
        <AppHeader title={title} />
        <div className="flex-1">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
