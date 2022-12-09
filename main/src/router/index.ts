import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: {
      path: '/login'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('~/components/layout/layout.vue'),
    redirect: {
      path: '/homePage'
    },
    children: [
      {
        path: '/homePage',
        name: 'homePage',
        component: () => import('~/pages/Home/index.vue')
      }
      // {
      //   path: '/person',
      //   name: 'PersonPage',
      //   component: () => import('~/pages/person/index.vue')
      // },
      // {
      //   path: '/system',
      //   name: 'SystemPage',
      //   component: () => import('~/pages/system/index.vue')
      // }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('~/pages/login/index.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('~/pages/notFound/index.vue')
  },
  {
    // TODO: 浏览器不兼容页面
    path: '/compatibility',
    name: 'NomPatibility',
    component: () => import('~/pages/compatibility/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('~/pages/notFound/index.vue')
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
