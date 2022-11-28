<template>
  <section class="header">
    <!-- 这里接收一个图片 -->
    <span class="header_logo">Logo</span>

    <!-- 以下为操作项 -->
    <section class="header_handles">
      <!-- header menu -->
      <section class="headerMenu">
        <el-menu default-active="1" class="header_customHands" mode="horizontal">
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
          <el-menu-item index="3">Orders</el-menu-item>
        </el-menu>
      </section>

      <!-- <el-button type="primary">test</el-button> -->
      <section class="header_customTheme">
        <!-- 自定义主题 -->
        <el-tooltip
          class="box-item handle_theme"
          effect="dark"
          content="自定义主题"
          placement="bottom"
        >
          <span class="customCtx">
            <el-color-picker v-model="color" @change="changeColor" />
          </span>
        </el-tooltip>
      </section>

      <section class="header_info">
        <el-tooltip effect="dark" content="消息" placement="bottom">
          <el-icon color="#fff" :size="24"><Bell /></el-icon>
        </el-tooltip>
      </section>

      <section class="header_fullScreen">
        <el-tooltip effect="dark" content="全屏" placement="bottom">
          <el-icon color="#fff" :size="24"><FullScreen /></el-icon>
        </el-tooltip>
      </section>

      <section class="header_setting">
        <el-tooltip effect="dark" content="设置" placement="bottom">
          <el-icon color="#fff" :size="24"><Setting /></el-icon>
        </el-tooltip>
      </section>

      <AvatarInfo class="header_avatar" />
    </section>
  </section>
</template>

<script lang="ts" setup>
import AvatarInfo from '~/components/Header/avatar.vue'
import { Bell, FullScreen, Setting } from '@element-plus/icons'
const color = ref('red')

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
  align-items: center;

  // LOGO
  .header_logo {
    width: 200px;
    border: 1px solid #ccc;
    text-align: center;
    line-height: 60px;
  }

  // 操作项
  .header_handles {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    // width: 640px;
    // position: relative;

    // 自定义主题操作项
    .header_customTheme {
      margin: 0 20px;
    }

    .header_info {
      // display: block;
      // width: 32px;
      // height: 32px;
      // background: #fff;
    }
    .header_fullScreen {
      margin: 0 0 0 20px;
    }

    .header_setting {
      margin: 0 0 0 20px;
    }

    // 操作项
    .headerMenu {
      background-color: red;

      .header_customHands {
        background: #000;
        ::v-deep(.el-menu-item .is-active) {
          bottom: none;
        }
      }
      ::v-deep(.el-menu--horizontal) {
        border-bottom: none !important;
      }
      ::v-deep(.is-active) {
        border-bottom: none !important;
      }
    }
  }

  .header_avatar {
    width: 52px;
    height: 52px;
    margin: 5px 5px 5px 20px;
  }
}
</style>
