import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/views/HomePage.vue';
import CataloguePage from '@/views/CataloguePage.vue';
import WishList from '@/views/WishList.vue';

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
    {
      path: '/wishlist',
      name: 'WishList',
      component: WishList
    },
  ]
})

export default router
