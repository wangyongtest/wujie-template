<!--
 * @Author: wy wang.yong@easttrans.cn
 * @Date: 2022-12-01 10:07:21
 * @LastEditors: wy wang.yong@easttrans.cn
 * @LastEditTime: 2023-01-30 11:11:03
 * @FilePath: \wujie-template\children\person\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->



<template>
  <section class="personContent">
    <router-view></router-view>
  </section>
</template>

<script setup lang="ts">
import { watch } from 'vue'
interface SubApplicationParams {
  path: string
  params?: {
    [key:string]: string
  }
}

interface BaseToChildParam {
  themeColor: string
}

const router = useRouter()

// TODO：接收基座发送的路由，用于子应用路由跳转
window.$wujie?.bus.$on('distribution-to-sub', (res:SubApplicationParams) => {
  if(res.path){
    router.push({path: res.path})
  }
})

// TODO: 基座发送例如主题等配置项
window.$wujie?.bus.$on('base-to-child-conf', (baseConf:BaseToChildParam) => {
  console.log(baseConf, 'base-to-child-conf')
  const el = document.documentElement
  // const sideBarEl = document.getElementById('sideBar')
  el.style.setProperty('--el-color-primary', baseConf.themeColor)
  el.style.setProperty('--el-menu-bg-color', baseConf.themeColor)
})

// TODO: 初次监听默认值，包含【初始选中路由+初始配置项】
watch(()=> window.$wujie.props, (newVal) => {
  if(newVal&&newVal.path) {
   router.push({path: newVal.path, query: newVal.query})
  }
},{
  immediate: true,
  deep: true
})

</script>

<style lang="less">
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;

}
#child {
  width: 100%;
  height: 100%;
}

.personContent{}
</style>
