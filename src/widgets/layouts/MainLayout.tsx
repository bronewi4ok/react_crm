import { Wrap } from '@/shared/ui/wrap'

import { Outlet } from 'react-router-dom'
import { Header } from '../header'
import { MainMenu } from '../sidebar'

export function MainLayout() {
  return (
    <Wrap className="flex flex-wrap items-stretch">
      <aside className="felx-none bg-light">
        <MainMenu />
      </aside>

      <main className="flex-1 flex flex-col min-h-dvh ">
        <Header />
        <div className="flex-1 px-7 pb-7">
          <Outlet />
        </div>
      </main>
    </Wrap>
  )
}
