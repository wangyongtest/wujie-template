


<template>
  <section class="personContent">
    <router-view></router-view>
  </section>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue'
interface SubApplicationParams {
  path: string
  params?: {
    [key:string]: string
  }
}

const router = useRouter()

window.$wujie?.bus.$on('distribution-to-sub', (res:SubApplicationParams) => {
  
  if(res.path){
    // console.warn(`%c person--->${JSON.stringify(res)}`,'color: #43bb;font-size: 24px;font-weight: bold;text-decoration: underline;')
    router.push({path: res.path})
  }

})

watch(()=> window.$wujie.props, (newVal, oldVal) => {
  if(newVal&&newVal.path) {
    // console.warn(`%c person--->${JSON.stringify(newVal)}`,'color: #43bb;font-size: 24px;font-weight: bold;text-decoration: underline;')
   router.push({path: newVal.path})
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
