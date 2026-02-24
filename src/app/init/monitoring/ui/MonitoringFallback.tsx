import type { MonitoringFallbackPropsTypes } from '../model/types'

export const MonitoringFallback = ({ error, resetErrorBoundary }: MonitoringFallbackPropsTypes) => {
  const errorMessage = error instanceof Error ? error.message : String(error)

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Щось пішло не так</h1>
      <p className="mt-2 text-sm opacity-80">Спробуй перезавантажити сторінку або натисни Reset.</p>

      <button
        className="mt-4 rounded bg-black px-4 py-2 text-white"
        onClick={resetErrorBoundary}
        type="button">
        Reset
      </button>

      {/* В проді не показуй error; у деві можна */}
      {import.meta.env.DEV && (
        <pre className="mt-4 overflow-auto rounded bg-gray-100 p-3 text-xs">{errorMessage}</pre>
      )}
    </div>
  )
}
