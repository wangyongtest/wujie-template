<template>
  <section class="container">
    <!-- 禁止路由重复 -->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <section class="compContent">
          <component :is="Component" :key="$route.path" />
        </section>
      </transition>
    </router-view>
  </section>
</template>

<script lang="ts" setup>
const route = useRoute()
watch(
  () => route.query,
  (newVal) => {
    console.warn('base-watch-newVal======>', newVal)
  },
  {
    immediate: true,
    deep: true
  }
)
</script>

<style lang="less">
.container {
  width: calc(100% - 200px);
  background: #ccc;
  margin: 0;
  padding: 0;

  .compContent {
    width: 100%;
    height: 100%;
  }
}
</style>
