/// <reference types="vite/client" />
interface ImportMetaEnv {
	VITE_MI_CLIENT_ID: string;
	VITE_MI_CLIENT_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
