import {createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    component:   () => import('@/pages/Home.vue')
  },
]

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes,
})

export default router;
