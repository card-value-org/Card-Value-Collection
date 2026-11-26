import { storeToRefs } from 'pinia'
import { es } from '@/i18n/es'
import { en } from '@/i18n/en'
import { fr } from '@/i18n/fr'
import { usePreferencesStore } from '@/stores/usePreferencesStore'
import type { Locale, MessageKey } from '@/types'

function flatten(node: Record<string, unknown>, prefix = ''): Record<string, string> {
  const result: Record<string, string> = {}
  for (const [key, value] of Object.entries(node)) {
    const path = prefix ? `${prefix}.${key}` : key
    if (typeof value === 'string') result[path] = value
    else if (typeof value === 'object' && value !== null) {
      Object.assign(result, flatten(value as Record<string, unknown>, path))
    }
  }
  return result
}

// Se aplanan una sola vez al cargar: { 'nav.market': 'Mercado', ... }
const dictionaries: Record<Locale, Record<string, string>> = {
  es: flatten(es),
  en: flatten(en),
  fr: flatten(fr),
}

export function useI18n() {
  const { locale } = storeToRefs(usePreferencesStore())

  // Lee locale.value en cada llamada, así los templates se re-renderizan al cambiar de idioma.
  function t(key: MessageKey): string {
    return dictionaries[locale.value][key] ?? dictionaries.es[key] ?? key
  }

  return { locale, t }
}
