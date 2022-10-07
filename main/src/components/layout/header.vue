<template>
  <section class="header">
    <span>Logo</span>
    <AvatarInfo />
  </section>
</template>

<script lang="ts" setup>
import AvatarInfo from '@/components/Header/avatar.vue'
</script>

<style lang="less" scoped>
.header {
  height: 60px;
  width: 100%;
  background: #000000;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
}
</style>
