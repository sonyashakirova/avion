import { createRouter, createWebHistory } from 'vue-router'
import LayoutV2 from '@/layouts/LayoutV2.vue'
import LayoutV3 from '@/layouts/LayoutV3.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import HomeView from '@/views/HomeView.vue'
import NotFound from '@/views/NotFound.vue'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: '/cart',
          name: 'cart',
          component: () => import('@/views/CartView.vue')
        },
        {
          path: '/products',
          name: 'catalog',
          component: () => import('@/views/CatalogView.vue')
        },
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
      ]
    },
    {
      path: '',
      component: LayoutV2,
      children: [
        {
          path: '/product/:id',
          name: 'product',
          component: () => import('@/views/ProductView.vue')
        }
      ]
    },
    {
      path: '',
      component: LayoutV3,
      children: [
        {
          path: '/about',
          name: 'about',
          component: () => import('@/views/AboutView.vue')
        }
      ]
    }
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})
