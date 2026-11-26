<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from '@/composables/useI18n'

const route = useRoute()
const { t } = useI18n()

const title = computed(() => (route.meta.titleKey ? t(route.meta.titleKey) : ''))
const cardId = computed(() => route.params.id)
</script>

<template>
  <main class="flex min-h-[60vh] items-center justify-center px-4 py-12">
    <section class="w-full max-w-2xl border border-line bg-surface p-8 text-center">
      <h1 class="font-display text-3xl font-bold text-ink-heading">{{ title }}</h1>
      <p class="mt-4 text-ink-muted">{{ t('empty.comingSoon') }}</p>
      <p v-if="cardId" class="mt-2 text-sm text-ink-muted">{{ t('card.label') }}: {{ cardId }}</p>
    </section>
  </main>
</template>
