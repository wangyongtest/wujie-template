<template>
  <!-- 一、保活模式，name相同则复用一个子应用实例，改变url无效，必须采用通信的方式告知路由变化  -->
  <!-- 二、
    段路径匹配：无界提供短路径的能力，当子应用的url过长时，可以通过配置 prefix 来缩短子应用同步到主应用的路径，无界在选取短路径的时候，按照匹配最长路径原则选取短路径
              完成匹配后子应用匹配到的路径将被{短路径} + 剩余路径的方式挂载到主应用url上，注意在匹配路径的时候请不要带上域名
    :prefix="{
    prod: '/example/prod',
    test: '/example/test'
    prodId: '/example/prod/debug?id=',
}" -->
  <!-- 三、 保活模式：子应用的 alive 设置为true时进入保活模式，内部的数据和路由的状态不会随着页面切换而丢失 -->

  <!--  exec 预执行 -->
  <!-- sync 路由同步开关 如果false，子应用跳转主应用路由无变化，但是主应用的history还是会增加 -->

  {{ typeof childSystem }}
  {{ props }}

  <section class="container">
    <WujieVue
      width="100%"
      height="100%"
      :name="childSystem.name"
      :url="childSystem.tempPath"
      :exec="false"
      :sync="true"
      :alive="false"
      :props="props"
      :beforeLoad="beforeLoad"
      :beforeMount="beforeMount"
      :afterMount="afterMount"
      :beforeUnmount="beforeUnmount"
      :afterUnmount="afterUnmount"
    ></WujieVue>
  </section>
</template>

<script lang="ts" setup>
import WuJieVue from 'wujie-vue3'
import { routeStore } from '~/store/routeStore'
const router = useRouter()
// 传参使用
const props = reactive({
  name: '',
  path: ''
})

const { setState, routeState } = routeStore()
const { bus } = WuJieVue
// 在 xxx-sub 路由下子应用将激活路由同步给主应用，主应用跳转对应路由高亮菜单栏
// !这里添加-sub子应用后缀文件夹
bus.$on('sub-route-change', (name: string, path: string) => {
  console.log('基座应用', 'name:', name, 'path:', path)
  const mainName = `${name}-sub`
  const mainPath = `/${name}-sub${path}`
  setState({ name, path })
  const currentName = router.currentRoute.value.name
  const currentPath = router.currentRoute.value.path
  if (mainName === currentName && mainPath !== currentPath) {
    router.push({ path: mainPath })
  }
})

// console.log('11111111111111', routeState)
const childSystem = computed(() => {
  return reactive({
    name: routeState.name || 'home',
    tempPath: routeState.tempPath || 'http://127.0.0.1:3003/'
  })
})

// const fetch = ref('')

watch(
  () => routeState?.name,
  (newVal) => {
    console.log(newVal, `=======基座-watch========${newVal}=============`)
  }
)

const beforeLoad = (appWindow: Window) => {
  console.log('beforeLoad=====>', appWindow)
}
const beforeMount = (appWindow: Window) => {
  console.log('beforeMount=====>', appWindow)
  // props.value = {
  //   path: '/systemMenu'
  // }
}
const afterMount = (appWindow: Window) => {
  console.log('afterMount=====>', appWindow)
}
const beforeUnmount = (appWindow: Window) => {
  console.log('beforeUnmount=====>', appWindow)
}
const afterUnmount = (appWindow: Window) => {
  console.log('afterUnmount=====>', appWindow)
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
