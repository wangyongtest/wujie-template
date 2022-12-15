


<template>
  <section class="content">
    <router-view></router-view>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
interface SubApplicationParams {
  path: string
  query?: {
    [key:string]: string
  }
}


const router = useRouter()

window.$wujie.bus.$on('distribution-to-sub', (res:SubApplicationParams) => {
  console.warn(
    `%c system------->${JSON.stringify(res)}`,
    'color:purple;font-size: 24px;font-weight: bold;text-decoration: underline;'
  )
  router.push({ path: res.path ,query:{...res.query} }  )
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
