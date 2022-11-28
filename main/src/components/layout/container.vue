<template>
  <section class="container">
    <!-- 禁止路由重复 -->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path" />
      </transition>
    </router-view>
  </section>
</template>

<script lang="ts" setup>
const route = useRoute()
</script>

<style lang="less">
.container {
  width: calc(100% - 208px);
  background: #ccc;
}
</style>
