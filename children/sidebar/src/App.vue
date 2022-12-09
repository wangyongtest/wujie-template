
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


const getSelectPath = (val:{subSys:string, keyPath:string}) => {
  console.warn(val)
  window.$wujie?.bus.$emit('side-route-change', val)
}

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
