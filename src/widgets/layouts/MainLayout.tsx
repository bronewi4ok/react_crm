import { Wrap } from '@/shared/ui/wrap'
import { Header } from '@/widgets/header'
import { MainMenu } from '@/widgets/sidebar'
import { Outlet } from 'react-router-dom'

export function MainLayout() {
  return (
    <Wrap className="flex flex-wrap items-stretch">
      <aside className="felx-none bg-light">
        <MainMenu />
      </aside>

      <main className="flex-1 flex flex-col min-h-dvh bg-back-500">
        <Header />
        <div className="flex-1 px-7 pb-7">
          <Outlet />
        </div>
      </main>
    </Wrap>
  )
}
