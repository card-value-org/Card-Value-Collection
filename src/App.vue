<script setup lang="ts">
import { watch } from 'vue'
import AppTopNav from '@/components/layout/AppTopNav.vue'
import MarketPulseTicker from '@/components/layout/MarketPulseTicker.vue'
import { usePreferencesStore } from '@/stores/usePreferencesStore'

const preferences = usePreferencesStore()

watch(
  () => preferences.theme,
  (theme) => document.documentElement.classList.toggle('dark', theme === 'dark'),
  { immediate: true },
)

watch(
  () => preferences.locale,
  (locale) => (document.documentElement.lang = locale),
  { immediate: true },
)
</script>

<template>
  <AppTopNav />
  <MarketPulseTicker />
  <RouterView />
</template>
