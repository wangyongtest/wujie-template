
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
 {
  path: '/system',
  name: '系统管理',
  children:[
     {
      path: '/systemRole',
      component: () => import('@/pages/home.vue')
    },
    {
      path: '/systemMenu',
      component: () => import('@/pages/homeDetail.vue')
    }
  ]
 },
  {
    path: '/systemUser',
    name: 'About',
    component: () => import('@/pages/about.vue')
  },
  {
    path: '/system',
    redirect:{
      path: '/systemRole'
    }
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
