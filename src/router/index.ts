import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/views/HomePage.vue';
import CataloguePage from '@/views/CataloguePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/catalogue',
      name: 'CataloguePage',
      component: CataloguePage
    },
    {
      path: '/catalogue/:category',
      name: 'CatalogueCategoryPage',
      component: CataloguePage
    },
  ]
})

export default router
