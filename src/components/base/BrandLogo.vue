<script setup lang="ts">
import BaseCrownIcon from '@/components/base/BaseCrownIcon.vue'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()
</script>

<template>
  <RouterLink
    to="/"
    class="inline-flex shrink-0 items-center gap-2.5 text-brand"
    :aria-label="`Card Value, ${t('nav.home')}`"
  >
    <span class="block h-6 w-7 shrink-0">
      <BaseCrownIcon />
    </span>
    <span class="whitespace-nowrap text-sm font-bold uppercase tracking-[0.2em] text-ink-heading">
      Card Value
    </span>
  </RouterLink>
</template>
