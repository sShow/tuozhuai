/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AJAX_URL_PREFIX: string
  readonly DEV_DOMAIN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.js' {
  const css: string;
  export default js;
}

declare interface Window {

}

declare module 'js-cookie'

interface URLSearchParams {
  keys(): string[];
}


