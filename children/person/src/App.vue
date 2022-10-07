<template>
  <section>
    <router-view></router-view>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
window.$wujie?.bus.$on('sub-route-change', (key: string, keyPath: string[]) => {
  console.log(key, keyPath, 'page')
  router.push(key)
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
