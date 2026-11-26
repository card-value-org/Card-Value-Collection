<script setup lang="ts">
import type { BadgeTone } from '@/types'

withDefaults(defineProps<{ tone?: BadgeTone }>(), { tone: 'neutral' })

const tones: Record<BadgeTone, string> = {
  neutral: 'bg-subtle text-ink-muted',
  psa: 'bg-brand-crimson-soft text-brand-crimson-text',
  bgs: 'bg-subtle text-ink-heading',
  positive: 'bg-positive/10 text-positive',
  plain: 'text-ink',
}
</script>

<template>
  <span
    class="inline-flex items-center rounded-sm px-2.5 py-1.5 text-xs font-semibold leading-none tabular-nums"
    :class="tones[tone]"
  >
    <slot />
  </span>
</template>
