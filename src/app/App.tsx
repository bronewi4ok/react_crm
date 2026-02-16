import { AppBootstrap } from './init/AppBootstrap'
import { AppProvider } from './provider/AppProvider'
import { AppRouter } from './router'

export const App = () => {
  return (
    <AppProvider>
      <AppBootstrap />
      <AppRouter />
    </AppProvider>
  )
}
