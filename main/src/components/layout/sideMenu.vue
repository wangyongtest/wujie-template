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
import { bus } from 'wujie'
import { themeStore } from '~/store/theme'
const store = themeStore()
const router = useRouter()
const propsData = reactive({
  customTheme: store.getCustomTheme
})

watch(
  () => store.getCustomTheme,
  (newVal) => {
    propsData.customTheme = newVal
  }
)

const sideBarUrl = computed(() => {
  return `${import.meta.env.VITE_SIDE_BAR}`
})

// TODO: 无界接手菜单传回来参数
interface WujieParams {
  [key: string]: string
}

// 接受到信息之后存储到 pinia 中，下发对应子应用
// bus.$on('side-route-change', (params: WujieParams) => {
// 根据菜单 更新 name
// console.warn('基座接收自应用路由信息', params)
// const { subSys } = params
// const sysRoute = subSys && subSys.split('-')[1]
// router.push(`/${sysRoute}`)
// })
</script>

<style lang="less" scoped>
.sideBar {
  max-width: 200px;
  height: 100%;
  background: red;
}
</style>
