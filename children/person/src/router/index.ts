import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
 {
  path: '/home',
  name: '主页',
  redirect:{
    path: '/homeList'
  },
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
  },
  {
    path: '/',
    redirect:{
      path: '/home'
    }
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
