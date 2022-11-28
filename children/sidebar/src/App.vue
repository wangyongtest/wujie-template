<template>
  <section class="sideBarMenu">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="/homeList"
      :default-openeds="['/home']"
      text-color="#fff"
      router
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="/home">
        <template #title>
          <el-icon><location /></el-icon>
          <span>主页</span>
        </template>
        <!-- <el-menu-item-group title="Group One"> -->
        <el-menu-item index="/homeList">主页列表</el-menu-item>
        <el-menu-item index="/homeDetail">主页详情</el-menu-item>
        <!-- </el-menu-item-group> -->
      </el-sub-menu>
      <el-menu-item index="/about">
        <el-icon><document /></el-icon>
        <span>about</span>
      </el-menu-item>

      <el-sub-menu index="/system">
        <template #title>
          <el-icon><location /></el-icon>
          <span>系统管理</span>
        </template>
        <el-menu-item index="/systemRole">角色管理</el-menu-item>
        <el-menu-item index="/systemUser">用户管理</el-menu-item>
        <el-menu-item index="/systemMenu">菜单管理</el-menu-item>
        <!-- </el-menu-item-group> -->
      </el-sub-menu>
    </el-menu>
  </section>
</template>
<script setup lang="ts">
const route = useRoute()
const itemKey = ref('/home')
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath, 'sidebarMenu')
  itemKey.value = key
  // 子应用发送事件
  // window.$wujie?.bus.$emit('sub-route-change', key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
watch(
  () => route.path,
  (newValue, oldValue) => {
    console.log(newValue, oldValue, '============sidebar=============', route)
    window.$wujie?.bus.$emit('sub-route-change', itemKey, newValue)
  },
  { immediate: true }
)
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 200px;
  height: 100%;
}

#sideBar {
  width: 100%;
  height: 100%;
}
.sideBarMenu {
  width: 100%;
  height: 100%;
}

.el-menu {
  height: 100%;
}
</style>
