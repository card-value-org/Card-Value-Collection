import type { LiveAuction, MarketPulseItem } from '@/types'

export const marketPulse: MarketPulseItem[] = [
  { id: 'messi-2014', label: 'Messi 2014 Prizm PSA 10', price: 4850, change: 18.4 },
  { id: 'yamal-chrome', label: 'Yamal Chrome /50 BGS 9.5', price: 3290, change: 42.1 },
  { id: 'maradona-1986', label: 'Maradona 1986 Foot PSA 9', price: 6400, change: 6.2 },
]

export const liveAuction: LiveAuction = { house: 'Goldin', endsIn: '2h 14m' }
