/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** https://web3forms.com — optional; if unset, FormSubmit is used for email delivery */
  readonly VITE_WEB3FORMS_ACCESS_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
