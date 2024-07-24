import { createRouter, createWebHistory } from 'vue-router'
import SeminarHome from '../views/SeminarHome.vue'

const router = createRouter({
  // Grabs base url
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SeminarHome
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: () => import('../views/ScheduleView.vue')
    },
    {
      path: '/seminars/:id',
      name: 'seminar',
      component: () => import('../views/SeminarView.vue')
    }
  ]
})

export default router
