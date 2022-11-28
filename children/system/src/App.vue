<template>
  <section>
    <router-view></router-view>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
console.log(router, 'router-----------')
window.$wujie?.bus.$on('sub-route-change', (key: string, keyPath: string) => {
  console.log(key, keyPath, 'page- system')

  router.push({ path: keyPath })
})
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
