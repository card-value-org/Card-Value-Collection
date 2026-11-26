// Diccionario base: define las claves que en.ts y fr.ts deben traducir completas.
export const es = {
  nav: {
    home: 'Inicio',
    market: 'Mercado',
    collection: 'Mi colección',
    checklists: 'Checklists',
    radar: 'Radar',
    compare: 'Comparar',
    cardDetail: 'Detalle de carta',
  },
  actions: {
    login: 'Iniciar sesión',
    goPro: 'Hazte Pro',
    search: 'Buscar',
    viewMore: 'Ver más',
    back: 'Volver',
    save: 'Guardar',
    cancel: 'Cancelar',
    retry: 'Reintentar',
    searchPhoto: 'Buscar · Foto',
  },
  topNav: {
    mainNav: 'Navegación principal',
    language: 'Idioma',
    currency: 'Moneda',
  },
  theme: {
    dark: 'Oscuro',
    light: 'Claro',
    toDark: 'Activar modo oscuro',
    toLight: 'Activar modo claro',
  },
  ticker: {
    title: 'Pulso 24h',
    label: 'Pulso del mercado en las últimas 24 horas',
    live: 'en vivo',
  },
  empty: {
    comingSoon: 'Esta sección estará disponible próximamente.',
    noResults: 'No encontramos cartas con esa búsqueda.',
    emptyCollection: 'Tu colección todavía está vacía.',
  },
  card: {
    label: 'Carta',
  },
}

export type Messages = typeof es
