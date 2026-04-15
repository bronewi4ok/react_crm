import { useMemo } from 'react'

type DateFormat = 'short' | 'medium' | 'long' | 'relative'

type FormatDateOptions = {
  format?: DateFormat
  locale?: string
  fallback?: string
}

const defaultOptions: FormatDateOptions = {
  format: 'short',
  locale: 'uk-UA',
  fallback: '—',
}

export function useFormatDate(
  date: string | Date | null | undefined,
  options: FormatDateOptions = {},
): string {
  const { format, locale, fallback } = { ...defaultOptions, ...options }

  return useMemo(() => {
    if (!date) return fallback!

    try {
      const dateObj = typeof date === 'string' ? new Date(date) : date

      if (isNaN(dateObj.getTime())) {
        return fallback!
      }

      switch (format) {
        case 'short':
          return dateObj.toLocaleDateString(locale, {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          })
        case 'medium':
          return dateObj.toLocaleDateString(locale, {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })
        case 'long':
          return dateObj.toLocaleDateString(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })
        case 'relative': {
          const now = new Date()
          const diffInMs = dateObj.getTime() - now.getTime()
          const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))

          if (diffInDays === 0) return 'Сьогодні'
          if (diffInDays === 1) return 'Завтра'
          if (diffInDays === -1) return 'Вчора'
          if (diffInDays > 0) return `Через ${diffInDays} дн.`
          return `${Math.abs(diffInDays)} дн. тому`
        }
        default:
          return dateObj.toLocaleDateString(locale)
      }
    } catch {
      return fallback!
    }
  }, [date, format, locale, fallback])
}

// Утилітарна функція для прямого використання без React
export function formatDate(
  date: string | Date | null | undefined,
  options: FormatDateOptions = {},
): string {
  const { format = 'short', locale = 'uk-UA', fallback = '—' } = options

  if (!date) return fallback

  try {
    const dateObj = typeof date === 'string' ? new Date(date) : date

    if (isNaN(dateObj.getTime())) {
      return fallback
    }

    switch (format) {
      case 'short':
        return dateObj.toLocaleDateString(locale, {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })
      case 'medium':
        return dateObj.toLocaleDateString(locale, {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        })
      case 'long':
        return dateObj.toLocaleDateString(locale, {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })
      case 'relative': {
        const now = new Date()
        const diffInMs = dateObj.getTime() - now.getTime()
        const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))

        if (diffInDays === 0) return 'Сьогодні'
        if (diffInDays === 1) return 'Завтра'
        if (diffInDays === -1) return 'Вчора'
        if (diffInDays > 0) return `Через ${diffInDays} дн.`
        return `${Math.abs(diffInDays)} дн. тому`
      }
      default:
        return dateObj.toLocaleDateString(locale)
    }
  } catch {
    return fallback
  }
}
