/**
 * @typedef {"en-US"} DefaultLocale
 * @typedef {DefaultLocale | "es-ES" } Locale
 */

/** @type {Readonly<Record<Locale, string>>} */
export const languageMap = {
  "en-US": "English",
  "es-ES": "Español",
};

/** @type {Readonly<Record<Locale, string>>} */
export const titleMap = {
  "en-US": "Beautiful and reusable React UI that work like magic ",
  "es-ES": "Suite para tu proyecto de React que funciona como magia",
};

/** @type {Readonly<Record<Locale, {lightweight:string;realtime?:string;suspense?:string;pagination?:string;backendAgnostic?:string;renderingStrategies?:string;typescript?:string;remoteLocal?:string;}>>} */
export const featuresMap = {
  "en-US": {
    lightweight: "Lightweight",
    realtime: "Realtime",
    suspense: "Suspense",
    pagination: "Pagination",
    backendAgnostic: "Backend Agnostic",
    renderingStrategies: "SSR / SSG Ready",

  },
  "es-ES": {
    lightweight: "Ligero",
    realtime: "Tiempo real",
    suspense: "Suspense",
    pagination: "Paginación",
    backendAgnostic: "Backend Agnóstico",
    renderingStrategies: "SSR / SSG Ready",

  },
};

/** @type {Readonly<Record<Locale, string>>} */
export const headDescriptionMap = {
  "en-US":
    "SWR is a React Hooks library for data fetching. SWR first returns the data from cache (stale), then sends the fetch request (revalidate), and finally comes with the up-to-date data again.",
  "es-ES":
    "SWR es una biblioteca de React Hooks para la obtención de datos. SWR devuelve primero los datos de la caché (stale), luego envía la solicitud de obtención (revalidate) y finalmente devuelve los datos actualizados de nuevo.",
};

/** @type {Readonly<Record<Locale, string>>} */
export const feedbackLinkMap = {
  "en-US": "Question? Give us feedback →",
  "es-ES": "¿Dudas? Danos tu feedback →",
};

/** @type {Readonly<Record<Locale, string>>} */
export const editTextMap = {
  "en-US": "Edit this page on GitHub →",
  "es-ES": "Edite esta página en GitHub →",
};

/** @type {Readonly<Record<Locale, { utmSource: string; text: string; suffix?: string | undefined }>>} */
export const footerTextMap = {
  "en-US": { utmSource: "swr", text: "Powered by" },
  "es-ES": { utmSource: "swr_es-es", text: "Desarrollado por" },
};

/** @type {Readonly<Record<Locale, string>>} */
export const tableOfContentsTitleMap = {
  "en-US": "On This Page",
  "es-ES": "En esta página",
};

/** @type {Readonly<Record<Locale, string>>} */
export const searchPlaceholderMap = {
  "en-US": "Search documentation...",
  "es-ES": "Buscar documento...",
};

/** @type {Readonly<Record<Locale, string>>} */
export const gitTimestampMap = {
  "en-US": "Last updated on",
  "es-ES": "Última actualización el",
};
