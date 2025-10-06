export const THEME_TYPES = { LIGHT: 'light', DARK: 'dark' } as const
export type ThemeTypes = (typeof THEME_TYPES)[keyof typeof THEME_TYPES]
export type ThemeStateTypes = { current: ThemeTypes }
