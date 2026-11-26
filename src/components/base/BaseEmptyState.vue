<script setup lang="ts">
import BaseCrownIcon from '@/components/base/BaseCrownIcon.vue'

defineProps<{ message: string }>()
</script>

<template>
  <section
    class="flex flex-col items-center gap-4 py-10 text-center"
    role="status"
    aria-live="polite"
  >
    <span class="block h-10 w-10 text-ink-muted">
      <BaseCrownIcon />
    </span>
    <p class="max-w-prose text-ink-muted">{{ message }}</p>
    <slot name="cta" />
  </section>
</template>
