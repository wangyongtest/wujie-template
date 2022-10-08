<template>
  <section class="header">
    <span>
      Logo
      <el-button type="primary">test</el-button>
      <br />
      <el-color-picker v-model="color" @change="changeColor" />
      <el-menu default-active="1" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">Processing Center</el-menu-item>
        <el-sub-menu index="2">
          <template #title>Workspace</template>
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item two</el-menu-item>
          <el-menu-item index="2-3">item three</el-menu-item>
          <el-sub-menu index="2-4">
            <template #title>item four</template>
            <el-menu-item index="2-4-1">item one</el-menu-item>
            <el-menu-item index="2-4-2">item two</el-menu-item>
            <el-menu-item index="2-4-3">item three</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="3" disabled>Info</el-menu-item>
        <el-menu-item index="4">Orders</el-menu-item>
      </el-menu>
    </span>
    <AvatarInfo />
  </section>
</template>

<script lang="ts" setup>
import AvatarInfo from '~/components/Header/avatar.vue'
const color = ref('red')

const changeColor = (e: string) => {
  const el = document.documentElement
  // const sideBarEl = document.getElementById('sideBar')
  el.style.setProperty('--el-color-primary', e)
  el.style.setProperty('--el-text-color-primary', e)
}
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
