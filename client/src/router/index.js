import { createRouter, createWebHistory } from 'vue-router'
import SeminarHome from '../views/SeminarHome.vue'
import { globalUserData } from '../data/globalUserData';

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
    },
    {
      path: '/error',
      name: 'error',
      component: () => import('../views/ErrorView.vue')
    }
  ]
});

router.beforeEach(async (to, from, next) => {
  try {

    if (to.name === 'error') {
      next();
      return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const jwtFromQuery = urlParams.get('user');
    console.log('jwtFromQuery:', jwtFromQuery);

    if (jwtFromQuery && !globalUserData.jwt) {
      globalUserData.jwt = jwtFromQuery;
    }

    if (!globalUserData.jwt) {
      console.error('No JWT found');
      next('/error');
      return;
    }

    if(!globalUserData.user) {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${globalUserData.jwt}`
        }
      });
      const data = await response.json();
      globalUserData.user = data;
    }
    next();
  } catch (error) {
    console.error(error);
    next('/error');
  }
});
export default router
