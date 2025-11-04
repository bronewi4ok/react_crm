/// <reference types="vite/client" />

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module 'virtual:svg-icons-register'
declare module 'virtual:svg-icons-names' {
  const ids: string[]
  export default ids
}

type ImportMetaEnv = {
  readonly VITE_API_URL: string
  readonly VITE_APP_NAME: string
  readonly VITE_DEBUG: string
  readonly VITE_APP_VERSION: string
}

type ImportMeta = { readonly env: ImportMetaEnv }
