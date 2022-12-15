
<template>
  <Menu
    ref="menuNode"
    :menuConfig="menuConfig"
    @getSelect="getSelectPath"/>
</template>
<script setup lang="ts">
import Menu from './pages/menu/index.vue'
import { MenuConfig } from '~/types/index'

// TODO: 菜单默认选项可根据接口返回设置
const menuConfig = reactive<MenuConfig>({
  defaultOpened: ['/home'],
  menuMode: 'vertical',
  collapse: false,
  backgroundColor: '#ffffff',
  textColor: '#303133',
  activeTextColor: '#409EFF',
  defaultActive: '/homeList',
  uniqueOpened: true,
  isRouter: true,
  collapseTransition: true,
  popperEffect: 'dark'
})

interface SystemRouteChange {
system: string
route: string
query:{
  [key:string]: string
}
}


// TODO: 默认首次进入系统设置选中： 菜单+ 跳转至默认页面
const getSelectPath = (val:{subSys:string, keyPath:string}) => {
  console.warn(`%csidebar-select--->${JSON.stringify(val)}`,'color: #43bb88;font-size: 24px;font-weight: bold;text-decoration: underline;')
  menuConfig.defaultActive = val.keyPath
  menuConfig.defaultOpened = val.subSys.includes('sub-') ? [`${val.subSys.replace(/sub-/, '')}`]:[`${val.subSys}`]
  window.$wujie.bus.$emit('side-route-change', val)
}



// TODO: 跨系统跳转时 sideBar 选中
// window.$wujie.bus.$on('set-sideBar-select', (parameter: SystemRouteChange) => {
//   console.warn('====getSelectPath=====set-sideBar-select==========', parameter)
//   const routeParams = {
//     system: parameter.system,
//     route: parameter.route,
//     query: {
//       ...parameter.query
//     }
//   }

//   menuConfig.defaultOpened = [`${parameter.system}`]
//   menuConfig.defaultActive = parameter.route

//   // window.$wujie.bus.$emit('distribution-to-sub', routeParams)
// })



</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 200px;
  height: 100%;
  margin:0;
  padding: 0;
}

#sideBar {
  width: 100%;
  height: 100%;
}
.sideBarMenu {
  width: 100%;
  height: 100%;
}

.el-menu {
  height: 100%;
}
</style>
