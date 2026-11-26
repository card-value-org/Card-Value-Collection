<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'
import { liveAuction, marketPulse } from '@/data/marketPulse'

const { t } = useI18n()

const formatUsd = (value: number) => `$${value.toLocaleString('en-US')}`
const formatChange = (value: number) => `${value > 0 ? '▲' : '▼'}${Math.abs(value).toFixed(1)}%`
</script>

<template>
  <section
    class="bg-ticker text-ticker-ink"
    :aria-label="t('ticker.label')"
  >
    <div
      class="flex items-center gap-8 overflow-x-auto whitespace-nowrap px-4 py-2 text-xs tabular-nums md:px-14"
    >
      <span class="font-bold uppercase tracking-widest text-ticker-accent">{{ t('ticker.title') }}</span>

      <ul class="flex flex-1 items-center gap-8 md:justify-around">
        <li v-for="item in marketPulse" :key="item.id" class="uppercase">
          {{ item.label }}
          <span class="ml-1.5">{{ formatUsd(item.price) }}</span>
          <span class="ml-1.5" :class="item.change >= 0 ? 'text-ticker-up' : 'text-ticker-live'">
            {{ formatChange(item.change) }}
          </span>
        </li>
      </ul>

      <span class="font-bold uppercase tracking-wider text-ticker-live">
        {{ liveAuction.house }} {{ t('ticker.live') }}: {{ liveAuction.endsIn }}
      </span>
    </div>
  </section>
</template>
