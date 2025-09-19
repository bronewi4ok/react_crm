import { useCurrentPageTitle } from '@/app/router/model/helpers'
import { AppHeader } from '@/widgets/appHeader'
import { MainMenu } from '@/widgets/sidebar'
import { Outlet } from 'react-router-dom'

export function MainLayout() {
  const title = useCurrentPageTitle()

  return (
    <div className="flex flex-wrap items-stretch min-h-dvh w-dvw bg-back-500 text-dark break-all">
      <aside className="felx-none bg-light">
        <MainMenu />
      </aside>

      <main className="flex-1 flex flex-col min-h-dvh bg-back-500">
        <AppHeader title={title} />

        <div className="flex-1 px-7 pb-7">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
