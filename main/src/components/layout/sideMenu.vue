<template>
  <section class="sideBar">
    <WujieVue
      width="100%"
      height="100%"
      name="sideBar"
      :url="sideBarUrl"
      :sync="true"
      :props="{ propsData }"
    ></WujieVue>
  </section>
</template>

<script lang="ts" setup>
import WujieVue from 'wujie-vue3'
import { themeStore } from '~/store/theme'
const store = themeStore()

const propsData = reactive({
  customTheme: store.getCustomTheme
})

watch(
  () => store.getCustomTheme,
  (newVal, oldVal) => {
    console.log(newVal, '***********************')
    propsData.customTheme = newVal
  }
)

const { bus } = WujieVue
const sideBarUrl = computed(() => {
  return 'http://127.0.0.1:3002/'
})
// 接受到信息之后存储到 pinia 中，下发对应子应用
bus.$on('sub-route-change', (key: string) => {
  console.log('基座接收自应用路由信息', key)
})
</script>

<style lang="less">
.sideBar {
  max-width: 200px;
}
</style>
