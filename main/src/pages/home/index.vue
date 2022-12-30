<template>
  <section class="home">
    <WujieVue
      width="100%"
      height="100%"
      :name="attributes.name"
      :url="attributes.url"
      :sync="attributes.sync"
      :exec="attributes.exec"
      :fiber="attributes.fiber"
      :degrade="attributes.degrade"
      :attrs="attributes.attrs"
      :props="attributes.props"
      :prefix="attributes.prefix"
      :beforeLoad="beforeLoad"
      :beforeMount="beforeMount"
      :afterMount="afterMount"
      :beforeUnmount="beforeUnmount"
      :afterUnmount="afterUnmount"
      :activated="activated"
      :deactivated="deactivated"
      :loadError="loadError"
    ></WujieVue>
  </section>
</template>

<script setup lang="ts">
import '~/utils/wujie'
import { SystemRouteChange } from '~/types/routeTypes'
//  TODO： wujie 更新调度
import { useWuJieScheduler } from '~/store/wujieStore'
//  TODO: 选中菜单
import { routeStore } from '~/store/routeStore'
// TODO: 设置或获取 默认子应用配置项
import { defaultChildConf } from '~/store/defaultSubConf'

const { stateRoute } = useWuJieScheduler()

const { tempPathList } = routeStore()
// TODO: 设置 & 获取默认配置项
const { defaultConf } = defaultChildConf()

// TODO: 定义默认属性
const attributes = reactive({
  name: '',
  url: '',
  sync: true,
  exec: true,
  fiber: true,
  degrade: false,
  attrs: {},
  props: {}, // TODO: 首次渲染才会传值子组件
  prefix: {}
  // fetch: () => {},
  // replace: {},
})

// 在 页面挂载时，设置要挂载的 子应用
onMounted(() => {
  //  TODO: 设置默认子应用，可配置、可调接口设置
  attributes.name = defaultConf.name
  attributes.url = defaultConf.path
})

//  TODO: 配置默认的 子系统【待确认】
watch(
  () => stateRoute,
  (newVal) => {
    if (newVal.path && newVal.system) {
      attributes.name = newVal.system
      attributes.props = { path: newVal.path, query: newVal.query || {} }
      attributes.url = tempPathList(newVal.system)
    }
    console.log(attributes.props, 'props')
  },
  {
    immediate: true,
    deep: true
  }
)

/**
 * scheduler  调度器
 * 菜单选中 传值到基座  ==> 基座分发数据到 对应子应用
 * 跨系统之间的跳转  系统传值到基座 1、 基座 分发数据到 sidebar ,做菜单的选中
 *                                2、基座分发 路由 + 参数 到 对应子应用
 *  以上方式都采用广播形式， 是：对应子应用接收路由+参数跳转， 否： 放弃参数
 * ***/

// TODO:子应用 路径地址获取
import { subPaths } from '~/sub-path-config/index'

const beforeLoad = (appWindow: Window) => {
  console.warn('base-index=======》 beforeLoad', appWindow)
}

const beforeMount = (appWindow: Window) => {
  console.warn('base-index=======》 beforeMount', appWindow)
  // bus.$emit('distribution-to-sub', attributes.props)
}

const afterMount = (appWindow: Window) => {
  console.warn('base-index=======》 afterMount', appWindow)
  // bus.$emit('distribution-to-sub', attributes.props)
}

const beforeUnmount = (appWindow: Window) => {
  console.warn('base-index=======》 beforeUnmount', appWindow)
}

const afterUnmount = (appWindow: Window) => {
  console.warn('base-index=======》 afterUnmount', appWindow)
}

const activated = (appWindow: Window) => {
  console.warn('base-index=======》 activated', appWindow)
}

const deactivated = (appWindow: Window) => {
  console.warn('base-index=======》 deactivated', appWindow)
}

const loadError = (url: string, e: Error) => {
  console.warn('base-index=======》 loadError', url, e)
}
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
