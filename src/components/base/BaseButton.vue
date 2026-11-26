<script setup lang="ts">
import { computed } from 'vue'
import type { ButtonSize, ButtonVariant } from '@/types'

const props = withDefaults(
  defineProps<{
    variant?: ButtonVariant
    size?: ButtonSize
    block?: boolean
    href?: string
  }>(),
  { variant: 'primary', size: 'md', block: false },
)

const variants: Record<ButtonVariant, string> = {
  primary: 'border border-transparent bg-brand text-canvas hover:bg-brand/90',
  // Crimson es igual en Light y Dark, por eso el texto blanco fijo mantiene el contraste.
  crimson: 'border border-transparent bg-brand-crimson text-white hover:bg-brand-crimson/90',
  outline: 'border border-brand bg-transparent text-brand hover:bg-subtle',
  secondary: 'border border-line bg-surface text-ink hover:bg-subtle',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-6 py-3 text-lg',
}

const classes = computed(() => [
  'inline-flex items-center justify-center rounded-sm font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
  variants[props.variant],
  sizes[props.size],
  props.block ? 'w-full' : '',
])
</script>

<template>
  <a v-if="href" :href="href" :class="classes"><slot /></a>
  <button v-else type="button" :class="classes"><slot /></button>
</template>
