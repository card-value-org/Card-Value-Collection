import { Goal, Shield, Star, Trophy } from 'lucide-vue-next'
import type { Category } from '@/types'

export const categories: Category[] = [
  { id: 'world-cup', label: 'Mundial / FIFA', icon: Trophy },
  { id: 'champions-league', label: 'Champions League', icon: Star },
  { id: 'serie-a', label: 'Serie A', icon: Shield },
  { id: 'laliga', label: 'LaLiga', icon: Goal },
]

export const priceGuideLinks: { label: string; href: string }[] = categories.map((category) => ({
  label: category.label,
  href: '#',
}))
