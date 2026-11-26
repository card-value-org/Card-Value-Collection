<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { ChevronDown, Moon, Search, Sun } from 'lucide-vue-next'
import BrandLogo from '@/components/base/BrandLogo.vue'
import { useI18n } from '@/composables/useI18n'
import { navItems } from '@/data/navigation'
import { usePreferencesStore } from '@/stores/usePreferencesStore'
import type { Locale } from '@/types'

const route = useRoute()
const { t } = useI18n()
const { theme, currency, locale } = storeToRefs(usePreferencesStore())

const locales: Locale[] = ['es', 'en', 'fr']
const currencies = ['USD', 'EUR'] as const

const isActive = (to: string) => (to === '/' ? route.path === '/' : route.path.startsWith(to))

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}

const control =
  'h-8 rounded-sm border border-line text-xs font-semibold uppercase tracking-wider text-ink-heading transition-colors hover:bg-subtle dark:border-brand'
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-line bg-canvas dark:border-brand">
    <div class="grid h-[3px] grid-cols-3" aria-hidden="true">
      <span class="bg-brand" />
      <span class="bg-ribbon-mid" />
      <span class="bg-brand-crimson" />
    </div>

    <div class="flex flex-wrap items-center gap-x-6 gap-y-3 px-4 pt-3 md:px-14 lg:flex-nowrap lg:py-4">
      <BrandLogo class="order-1" />

      <div class="order-2 ml-auto flex items-center gap-2 lg:order-3 lg:ml-0">
        <button
          type="button"
          :class="control"
          class="inline-flex items-center gap-2 bg-surface px-2.5 lg:px-3"
          :aria-label="t('actions.searchPhoto')"
        >
          <Search class="h-4 w-4 lg:hidden" aria-hidden="true" />
          <span class="hidden lg:inline">{{ t('actions.searchPhoto') }}</span>
          <kbd class="hidden font-sans lg:inline" aria-hidden="true">⌘K</kbd>
        </button>

        <label class="relative">
          <span class="sr-only">{{ t('topNav.currency') }}</span>
          <select v-model="currency" :class="control" class="appearance-none bg-canvas pl-2.5 pr-6">
            <option v-for="code in currencies" :key="code" :value="code">{{ code }}</option>
          </select>
          <ChevronDown class="pointer-events-none absolute right-1.5 top-2 h-4 w-4 text-ink-muted" aria-hidden="true" />
        </label>

        <label class="relative">
          <span class="sr-only">{{ t('topNav.language') }}</span>
          <select v-model="locale" :class="control" class="appearance-none bg-canvas pl-2.5 pr-6">
            <option v-for="code in locales" :key="code" :value="code">{{ code.toUpperCase() }}</option>
          </select>
          <ChevronDown class="pointer-events-none absolute right-1.5 top-2 h-4 w-4 text-ink-muted" aria-hidden="true" />
        </label>

        <button
          type="button"
          class="inline-flex h-8 items-center gap-1.5 rounded-sm border border-ticker-accent bg-ticker px-2.5 text-xs font-semibold uppercase tracking-wider text-ticker-accent"
          :aria-label="theme === 'dark' ? t('theme.toLight') : t('theme.toDark')"
          @click="toggleTheme"
        >
          <Sun v-if="theme === 'dark'" class="h-4 w-4" aria-hidden="true" />
          <Moon v-else class="h-4 w-4" aria-hidden="true" />
          <span class="hidden sm:inline">{{ theme === 'dark' ? t('theme.light') : t('theme.dark') }}</span>
        </button>
      </div>

      <nav
        :aria-label="t('topNav.mainNav')"
        class="order-3 -mx-4 w-[calc(100%+2rem)] overflow-x-auto px-4 md:-mx-14 md:w-[calc(100%+7rem)] md:px-14 lg:order-2 lg:mx-auto lg:w-auto lg:px-0"
      >
        <ul class="flex gap-6 whitespace-nowrap">
          <li v-for="item in navItems" :key="item.id">
            <RouterLink
              :to="item.to"
              :aria-current="isActive(item.to) ? 'page' : undefined"
              class="block border-b-2 pb-2 text-xs uppercase tracking-widest transition-colors lg:pb-1"
              :class="
                isActive(item.to)
                  ? 'border-brand-crimson font-semibold text-ink-heading'
                  : 'border-transparent text-ink-muted hover:text-ink-heading'
              "
            >
              {{ t(item.labelKey) }}
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
