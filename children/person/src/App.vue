
<template>
  <section class="personContent">
    <router-view></router-view>
  </section>
</template>

<script setup lang="ts">
const router = useRouter()
window.$wujie.bus.$on('distribution-to-sub', (data) => {
router.push({path: data.path})
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
