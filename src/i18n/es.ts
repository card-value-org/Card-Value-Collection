// Diccionario base: define las claves que en.ts y fr.ts deben traducir completas.
export const es = {
  nav: {
    home: 'Inicio',
    market: 'Mercado',
    collection: 'Colección',
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
