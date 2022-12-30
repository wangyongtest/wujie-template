


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

const router = useRouter()

window.$wujie?.bus.$on('distribution-to-sub', (res:SubApplicationParams) => {
  console.log(res, '====res')
  if(res.path){
    router.push({path: res.path})
  }
})

// TODO: 初次监听默认值
watch(()=> window.$wujie.props, (newVal, oldVal) => {
  console.log(newVal, '====')
  if(newVal&&newVal.path) {
    console.log(newVal, '=======')
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
