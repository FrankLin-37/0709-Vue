import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      props:true,
      component: () => import('../views/NotFound.vue')
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/VtextAndVmodel',
      name: 'VtextAndVmodel',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/VtextAndVmodel.vue')
    },
    {
      path: '/VforAndVbind',
      name: 'VforAndVbind',
      component: () => import('../views/VforAndVbind.vue')
    },
    {
      path: '/VonAndVifAndVshow',
      name: 'VonAndVifAndVshow',
      component: () => import('../views/VonAndVifAndVshow.vue')
    },
    {
      path: '/Props',
      name: 'Props',
      component: () => import('../views/Props.vue')
    },
    {
      path: '/Emit',
      name: 'Emit',
      component: () => import('../views/Emit.vue')
    },
    {
      path: '/WatchAndCompute',
      name: 'WatchAndCompute',
      component: () => import('../views/WatchAndCompute.vue')
    },
    {
      path: '/Pinia',
      name: 'Pinia',
      component: () => import('../views/Pinia.vue')
    },
    {
      path: '/Dynamic/:id',
      name: 'Dynamic',
      props:true,
      component: () => import('../views/DynamicView.vue')
    }
  ]
})

export default router
