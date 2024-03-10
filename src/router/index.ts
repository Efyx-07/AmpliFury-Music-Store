import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/views/HomePage.vue';
import ProductCategories from '@/views/ProductCategories.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/product-categories',
      name: 'ProductCategories',
      component: ProductCategories
    },
    {
      path: '/product-categories/:category',
      name: 'ProductCategories',
      component: ProductCategories
    },

  ]
})

export default router
