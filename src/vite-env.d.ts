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
