import { AppBootstrap } from './init/AppBootstrap'
import { AppProvider } from './provider/AppProvider'
import { AppRouter } from './router/AppRouter'

export const App = () => {
  return (
    <AppProvider>
      <AppBootstrap />
      <AppRouter />
    </AppProvider>
  )
}
