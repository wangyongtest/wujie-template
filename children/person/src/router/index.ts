
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
 {
  path: '/home',
  name: '主页',
  children:[
     {
      path: '/homeList',
      component: () => import('@/pages/home.vue')
    },
    {
      path: '/homeDetail',
      component: () => import('@/pages/homeDetail.vue')
    }
  ]
 },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/about.vue')
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
