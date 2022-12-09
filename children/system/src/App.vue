

<template>
  <section class="content">
    <router-view></router-view>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
interface SubApplicationParams {
  path: string
  params?: {
    [key:string]: string
  }
}

const router = useRouter()

window.$wujie.bus.$on('distribution-to-sub', (res:SubApplicationParams) => {
  router.push(res.path)
})


// TODO: $wujie.props 仅初始化渲染执行【待确认】
// watch(()=> window.$wujie?.props, (newVal, oldVal) => {
//   console.warn(newVal, '---')
//   if(newVal) {
//     router.push(newVal.path)
//   }
// },{
//   immediate: true,
//   deep: true
// })


</script>

<style lang="less">
html,
body {
  width: 100%;
  height: 100%;
}
#child {
  width: 100%;
  height: 100%;
}
</style>
