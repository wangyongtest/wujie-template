


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
        menuName: '角色管理'
      },
      component: () => import('@/pages/role/index.vue')
    },
    {
      path: '/systemMenu',
      name: 'SystemMenu',
      meta:{
        icon: '',
        menuName: '菜单管理'
      },
      component: () => import('@/pages/menus/index.vue')
    },
    {
      path: '/systemAuth',
      name: 'SystemAuth',
      meta:{
        icon: '',
        menuName: '权限管理'
      },
      component: () => import('@/pages/auth/index.vue')
    }
  ]
 }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
