import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

type Theme = 'light' | 'dark'
type Currency = 'USD' | 'EUR'

const THEME_STORAGE_KEY = 'cvc-theme'
const CURRENCY_STORAGE_KEY = 'cvc-currency'

function readPreference<T extends string>(
  key: string,
  allowedValues: readonly T[],
  defaultValue: T,
): T {
  const storedValue = localStorage.getItem(key)
  return allowedValues.find((value) => value === storedValue) ?? defaultValue
}

export const usePreferencesStore = defineStore('preferences', () => {
  const theme = ref<Theme>(readPreference<Theme>(THEME_STORAGE_KEY, ['light', 'dark'], 'light'))
  const currency = ref<Currency>(
    readPreference<Currency>(CURRENCY_STORAGE_KEY, ['USD', 'EUR'], 'USD'),
  )

  watch(theme, (value) => localStorage.setItem(THEME_STORAGE_KEY, value), { flush: 'sync' })
  watch(currency, (value) => localStorage.setItem(CURRENCY_STORAGE_KEY, value), {
    flush: 'sync',
  })

  return { theme, currency }
})
