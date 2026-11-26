import type { NavItem } from '@/types'

export const navItems: NavItem[] = [
  { id: 'home', labelKey: 'nav.home', to: '/' },
  { id: 'market', labelKey: 'nav.market', to: '/mercado' },
  { id: 'collection', labelKey: 'nav.collection', to: '/coleccion' },
  { id: 'checklists', labelKey: 'nav.checklists', to: '/checklists' },
  { id: 'radar', labelKey: 'nav.radar', to: '/radar' },
  { id: 'compare', labelKey: 'nav.compare', to: '/comparar' },
]
