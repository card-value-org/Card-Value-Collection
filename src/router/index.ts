import { createRouter, createWebHistory } from 'vue-router'
import type { MessageKey } from '@/types'

declare module 'vue-router' {
  interface RouteMeta {
    titleKey?: MessageKey
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/mercado',
      name: 'market',
      component: () => import('@/views/PlaceholderView.vue'),
      meta: { titleKey: 'nav.market' },
    },
    {
      path: '/coleccion',
      name: 'collection',
      component: () => import('@/views/PlaceholderView.vue'),
      meta: { titleKey: 'nav.collection' },
    },
    {
      path: '/checklists',
      name: 'checklists',
      component: () => import('@/views/PlaceholderView.vue'),
      meta: { titleKey: 'nav.checklists' },
    },
    {
      path: '/radar',
      name: 'radar',
      component: () => import('@/views/PlaceholderView.vue'),
      meta: { titleKey: 'nav.radar' },
    },
    {
      path: '/comparar',
      name: 'compare',
      component: () => import('@/views/PlaceholderView.vue'),
      meta: { titleKey: 'nav.compare' },
    },
    {
      path: '/cards/:id',
      name: 'card-detail',
      component: () => import('@/views/PlaceholderView.vue'),
      meta: { titleKey: 'nav.cardDetail' },
    },
  ],
})

export default router
