// color-mix permite usar opacidad (ej. bg-ink/40) con variables CSS en formato hex.
const token = (name) =>
  `color-mix(in srgb, var(--color-${name}) calc(<alpha-value> * 100%), transparent)`

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: token('bg-canvas'),
        surface: token('bg-surface'),
        subtle: token('bg-subtle'),
        ink: {
          DEFAULT: token('ink-primary'),
          heading: token('ink-heading'),
          muted: token('ink-muted'),
        },
        brand: {
          DEFAULT: token('brand-primary'),
          crimson: token('brand-crimson'),
          'crimson-text': token('brand-crimson-text'),
          'crimson-soft': token('brand-crimson-soft'),
          // Alias legacy: los componentes actuales los usan hasta su migración (CVC-6 / CVC-8).
          dark: token('ink-heading'),
          soft: token('bg-subtle'),
        },
        hairline: token('border-hairline'),
        positive: token('positive'),
        ribbon: {
          mid: token('ribbon-mid'),
        },
        ticker: {
          DEFAULT: token('ticker-bg'),
          ink: token('ticker-ink'),
          accent: token('ticker-accent'),
          up: token('ticker-up'),
          live: token('ticker-live'),
        },
        // Alias legacy
        line: token('border-hairline'),
        negative: token('brand-crimson-text'),
        grade: {
          psa: token('brand-crimson-text'),
          bgs: token('ink-heading'),
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
