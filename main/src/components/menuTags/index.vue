<template>
  <section class="menuTags">
    <el-tag
      class="menuTags_item"
      v-for="tag in menuList"
      :key="tag"
      closable
      :disable-transitions="true"
      size="default"
      @close="handleClose(tag)"
      >{{ tag }}</el-tag
    >
  </section>
</template>

<script setup lang="ts">
const menuList = [
  {
    system: '',
    path: '',
    name: ''
  },
  {
    system: '',
    path: '',
    type: 'success' // tag 颜色
  }
]

const handleClose = (tagItem) => {}
</script>

<style lang="less" scoped>
.menuTags {
  height: 32px;
  line-height: 32px;
  background: #ffffff;

  .menuTags_item {
    margin: 0 5px;
  }
}
</style>
