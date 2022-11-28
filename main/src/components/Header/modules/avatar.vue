<template>
  <section class="avatarInfo">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar :size="45" src="https://empty" @error="errorHandler">
          <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
        </el-avatar>
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <el-icon color="#000000"><Avatar /></el-icon>
            个人中心
          </el-dropdown-item>
          <el-dropdown-item>
            <el-icon color="#000000"><SwitchButton /></el-icon>
            登出
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </section>
</template>

<script lang="ts" setup>
import { SwitchButton, Avatar } from '@element-plus/icons-vue'

const errorHandler = () => true
</script>

<style lang="less">
.avatarInfo {
  width: 45px;
  height: 45px;
  margin-right: 40px;
  object-fit: contain;
  .el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
  }
}
</style>
