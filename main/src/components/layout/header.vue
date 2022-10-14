<template>
  <section class="header" :style="{ background: color }">
    <el-row :gutter="20" justify="end" align="top" class="headerContent">
      <el-col :span="4">
        <section class="logoComp">
          <LogoComp />
        </section>
      </el-col>
      <el-col :span="15">
        <el-menu class="el-menu-demo" mode="horizontal">
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
      </el-col>
      <el-col :span="5">
        <section class="handInfo">
          <HandMenu />
        </section>
      </el-col>
    </el-row>
  </section>
</template>

<script lang="ts" setup>
import { themeStore } from '~/store/theme'

import LogoComp from '~/components/Header/logoComp.vue'
import HandMenu from '~/components/Header/handMenu.vue'

const store = themeStore()
const color = computed(() => store.customTheme)
</script>

<style lang="less" scoped>
.header {
  height: 60px;
  width: 100%;
  background: #000000;
  color: #ffffff;
  display: flex;
  justify-content: space-between;

  .headerContent {
    width: 100%;
  }

  .handInfo {
    display: flex;
    justify-content: space-between;
    height: 60px;
  }

  // 取消menu边框
  .el-menu-demo {
    border: none;
  }
}
</style>
