<script setup lang="ts">
import { watch } from 'vue'
import { usePreferencesStore } from '@/stores/usePreferencesStore'

const preferences = usePreferencesStore()

watch(
  () => preferences.theme,
  (theme) => document.documentElement.classList.toggle('dark', theme === 'dark'),
  { immediate: true },
)
</script>

<template>
  <RouterView />
</template>
