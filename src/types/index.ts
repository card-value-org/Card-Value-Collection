import type { Component } from 'vue'
import type { Messages } from '@/i18n/es'

export interface NavItem {
  id: string
  labelKey: MessageKey
  to: string
}

export interface MarketPulseItem {
  id: string
  label: string
  /** Precio en USD. */
  price: number
  /** Variación porcentual en 24 h. */
  change: number
}

export interface LiveAuction {
  house: string
  endsIn: string
}

export type Competition = 'world-cup' | 'champions-league' | 'serie-a' | 'laliga'

export interface Category {
  id: Competition
  label: string
  icon: Component
}

export type Grader = 'PSA' | 'BGS' | 'Raw'

export interface CardGrade {
  grader: Grader
  value?: number
}

export type SaleSource =
  | 'eBay Best Offer'
  | 'eBay Subasta'
  | 'Goldin Auctions'
  | 'Heritage Auctions'
  | 'PWCC Marketplace'
  | 'CardHobby'

export type LiquidityLevel = 'high' | 'medium' | 'low'

export interface Liquidity {
  level: LiquidityLevel
  salesPerMonth: number
}

export interface Sale {
  /** Fecha ISO `AAAA-MM-DD`. */
  date: string
  /** Precio en USD. */
  price: number
  source: SaleSource
}

export interface TradingCard {
  id: string
  set: string
  name: string
  number: string
  variant: string
  grade: CardGrade
  image: string
  population: number | null
  monthlyChange: number
  lastSold: number
  competition: Competition
  /** Fuente de la última venta (`lastSold`). */
  source: SaleSource
  liquidity: Liquidity
  /** Precios de venta de los últimos 30 días, del más antiguo al más reciente. */
  sparkline: number[]
  recentSales: Sale[]
  isSealed: boolean
}

export type BadgeTone = 'neutral' | 'psa' | 'bgs' | 'positive' | 'plain'
export type ButtonVariant = 'primary' | 'crimson' | 'outline' | 'secondary'
export type ButtonSize = 'sm' | 'md' | 'lg'

export type Locale = 'es' | 'en' | 'fr'

/** Rutas con punto hacia cada texto del diccionario, ej. 'nav.market'. */
type LeafPaths<T> = {
  [K in keyof T & string]: T[K] extends string ? K : `${K}.${LeafPaths<T[K]>}`
}[keyof T & string]

export type MessageKey = LeafPaths<Messages>
