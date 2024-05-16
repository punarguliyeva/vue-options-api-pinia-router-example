import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EasterEgg from '@/views/EasterEgg.vue'
import Products from '@/views/Products.vue'
import Product from '@/views/Product.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/easterEgg',
      name: 'easterEgg',
      component: EasterEgg
    },
    {
      path: '/products',
      name: 'products',
      component: Products,
    },
    {
      path: '/products/:id',
      name: 'product',
      component: Product
    }
  ]
})

export default router
