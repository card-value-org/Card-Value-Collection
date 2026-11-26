<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const title = computed(() => String(route.meta.title ?? 'Sección'))
const cardId = computed(() => route.params.id)
</script>

<template>
  <main class="flex min-h-screen items-center justify-center px-4 py-12">
    <section class="w-full max-w-2xl border border-line bg-surface p-8 text-center">
      <h1 class="font-display text-3xl font-bold text-ink-heading">{{ title }}</h1>
      <p class="mt-4 text-ink-muted">Esta sección estará disponible próximamente.</p>
      <p v-if="cardId" class="mt-2 text-sm text-ink-muted">Carta: {{ cardId }}</p>
    </section>
  </main>
</template>
