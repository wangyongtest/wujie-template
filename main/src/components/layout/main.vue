<template>
  <section class="main">
    <SideBar />
    <context />
  </section>
</template>

<script lang="ts" setup>
import context from './container.vue'
import SideBar from './sideMenu.vue'
</script>

<style lang="less">
.main {
  width: 100%;
  height: calc(100% - 68px);
  display: flex;
  justify-content: flex-start;
  box-sizing: border-box;
}
</style>
