<template>
  <el-drawer
    v-model="showDrawer"
    title="I am the title"
    :append-to-body="true"
    :lock-scroll="true"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    show-close
    size="20%"
    open-delay="200"
    @close="handlerClose"
  >
    <span>Hi there!</span>
  </el-drawer>
</template>

<script setup lang="ts">
import { useDrawerConf } from '~/store/drawerConf'
const props = defineProps(['isShow'])
const showDrawer = computed(() => {
  return props.isShow
})

const { setDrawerConf } = useDrawerConf()
const handlerClose = () => {
  setDrawerConf({ isShow: false })
}
</script>

<style lang="less" scoped></style>
