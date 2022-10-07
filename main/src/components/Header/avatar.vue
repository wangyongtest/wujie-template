<template>
  <section class="avatarInfo">
    <el-avatar :size="60" src="https://empty" @error="errorHandler">
      <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
    </el-avatar>
  </section>
</template>

<script lang="ts" setup>
const errorHandler = () => true
</script>

<style lang="less">
.avatarInfo {
  width: 45px;
  height: 45px;
  margin-right: 40px;
}
</style>
