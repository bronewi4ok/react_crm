export const THEME = { LIGHT: 'light', DARK: 'dark' } as const
export type ThemeTypes = (typeof THEME)[keyof typeof THEME]
export type ThemeStateTypes = { current: ThemeTypes }
