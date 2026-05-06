import { Header } from '@widgets/header'
import { Outlet } from 'react-router-dom'
import { MainMenu } from '../sidebar'

export function MainLayout() {
  return (
    <div className="bg-back-200 text-dark relative flex min-h-dvh w-full flex-wrap items-start break-all">
      <aside className="bg-light sticky top-0 row-span-2 flex h-dvh min-w-64 flex-none flex-col overflow-y-auto">
        <MainMenu />
      </aside>

      <main className="flex min-h-dvh flex-1 flex-col px-7 pb-7">
        <Header />

        <Outlet />
      </main>
    </div>
  )
}
