/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_DEFAULT_LANGUAGE_CODE: string
    readonly VITE_API_URL: string
    readonly VITE_BASE_URL: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}