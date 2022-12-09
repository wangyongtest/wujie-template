
<template>
  <section class="personContent">
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
