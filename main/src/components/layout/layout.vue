<template>
  <section class="layout">
    <Header />
    <Main />
  </section>
</template>

<script lang="ts" setup>
import Header from './header.vue'
import Main from './main.vue'
</script>

<style lang="less" scoped>
.layout {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
