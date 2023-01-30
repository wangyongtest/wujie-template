<template>
  <section class="colorPicker">
    <el-tooltip :effect="props.effectBg" :content="props.context" placement="bottom">
      <span>
        <el-color-picker v-model="themeColor" @change="change" />
      </span>
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
  defaultVal?: string
  type: string
  effectBg?: string
  context?: string
}

const themeColor = ref('')

const props = withDefaults(defineProps<CustomProps>(), {
  effectBg: 'dark',
  context: '主题'
})

// TODO:监测父级传回来值进行设置颜色
watch(
  () => props.defaultVal,
  (newVal) => {
    if (newVal) themeColor.value = newVal
  },
  {
    immediate: true
  }
)

// TODO: 主题颜色改变时，切换基座应用的主题风格，提交新的 颜色值 ，同时下发到子应用
const change = (e: string): void => {
  const el = document.documentElement
  // const sideBarEl = document.getElementById('sideBar')
  el.style.setProperty('--el-color-primary', e)
  el.style.setProperty('--el-menu-bg-color', e)
  changeTheme(e)
}
</script>

<!-- <style lang="scss" scope></style> -->
