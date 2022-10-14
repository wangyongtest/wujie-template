<template>
  <section class="colorPicker">
    <el-tooltip :effect="props.effectBg" :content="props.context" placement="bottom">
      <el-color-picker v-model="themeColor" @change="change" />
    </el-tooltip>
  </section>
</template>

<script lang="ts" setup>
import { themeStore } from '~/store/theme'
const { changeTheme } = themeStore()

interface CustomProps {
  name: string
  icon?: string
  tips?: string
  defaultVal: string | boolean
  type: string
  effectBg?: string
  context?: string
}

const props = withDefaults(defineProps<CustomProps>(), {
  effectBg: 'dark',
  context: '主题'
})

const themeColor = ref('#409EFF')

const change = (e: string): void => {
  const el = document.documentElement
  // const sideBarEl = document.getElementById('sideBar')
  el.style.setProperty('--el-color-primary', e)
  el.style.setProperty('--el-menu-bg-color', e)
  changeTheme(e)
}
</script>

<!-- <style lang="scss" scope></style> -->
