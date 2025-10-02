import { Header } from '@/widgets/Header'
import { MainMenu } from '@/widgets/sidebar'
import { Outlet } from 'react-router-dom'

export function MainLayout() {
  return (
    <div className="flex flex-wrap items-stretch min-h-dvh w-dvw bg-back-500 text-dark break-all">
      <aside className="felx-none bg-light">
        <MainMenu />
      </aside>

      <main className="flex-1 flex flex-col min-h-dvh bg-back-500">
        <Header />

        <div className="flex-1 px-7 pb-7">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
