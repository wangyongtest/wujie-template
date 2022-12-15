

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
 {
  path: '/system',
  name: '系统管理',
  children:[
     {
      path: '/systemRole',
      name: 'SystemRole',
      meta:{
        icon: '',
        menuName: ''
      },
      component: () => import('@/pages/Home/systemRole.vue')
    },
    {
      path: '/systemMenu',
      name: 'SystemMenu',
      meta:{
        icon: '',
        menuName: ''
      },
      component: () => import('@/pages/Home/systemMenu.vue')
    },
    {
      path: '/system',
      redirect:{
        path: '/systemRole'
      }
    }
  ]
 }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
