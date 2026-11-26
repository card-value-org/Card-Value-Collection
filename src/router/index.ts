import { createRouter, createWebHistory } from 'vue-router'

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
      meta: { title: 'Mercado' },
    },
    {
      path: '/coleccion',
      name: 'collection',
      component: () => import('@/views/PlaceholderView.vue'),
      meta: { title: 'Colección' },
    },
    {
      path: '/checklists',
      name: 'checklists',
      component: () => import('@/views/PlaceholderView.vue'),
      meta: { title: 'Checklists' },
    },
    {
      path: '/radar',
      name: 'radar',
      component: () => import('@/views/PlaceholderView.vue'),
      meta: { title: 'Radar' },
    },
    {
      path: '/comparar',
      name: 'compare',
      component: () => import('@/views/PlaceholderView.vue'),
      meta: { title: 'Comparar' },
    },
    {
      path: '/cards/:id',
      name: 'card-detail',
      component: () => import('@/views/PlaceholderView.vue'),
      meta: { title: 'Detalle de carta' },
    },
  ],
})

export default router
