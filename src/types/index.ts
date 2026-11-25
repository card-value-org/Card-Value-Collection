import type { Component } from 'vue'

export interface NavItem {
  id: string
  label: string
  icon: Component
  href: string
  isPro?: boolean
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

export type BadgeTone = 'neutral' | 'psa' | 'bgs' | 'plain'
export type ButtonVariant = 'primary' | 'secondary'
export type ButtonSize = 'sm' | 'md' | 'lg'
