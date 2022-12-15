<template>
  <section class="home">
    {{ attributes }}
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
import wujieVue3 from 'wujie-vue3'

/**
 * scheduler  调度器
 * 菜单选中 传值到基座  ==> 基座分发数据到 对应子应用
 * 跨系统之间的跳转  系统传值到基座 1、 基座 分发数据到 sidebar ,做菜单的选中
 *                                2、基座分发 路由 + 参数 到 对应子应用
 *  以上方式都采用广播形式， 是：对应子应用接收路由+参数跳转， 否： 放弃参数
 * ***/
// TODO：子应用 路径地址获取
import { subPaths } from '~/sub-path-config/index'
// TODO: 设置或获取 默认子应用配置项
import { defaultSubConf } from '~/store/defaultSubConf'

const { setDefaultSubConf, getDefaultSubConf } = defaultSubConf()

interface SystemRouteChange {
  system: string
  route: string
  query: {
    [key: string]: string
  }
}

const { bus } = wujieVue3

// TODO: 定义默认属性
const attributes = reactive({
  name: '',
  url: '',
  sync: false,
  exec: false,
  fiber: false,
  degrade: false,
  attrs: {},
  props: {}, // TODO: 首次渲染才会传值子组件
  prefix: {}
  // fetch: () => {},
  // replace: {},
})

onMounted(() => {
  attributes.name = 'person'
  attributes.url = 'http://127.0.0.1:3003/'
})

//  TODO: 菜单路由监听路由 切换
bus.$on('side-route-change', (...res: Array<{ subSys: string; keyPath: string }>) => {
  if (res.length) {
    const { subSys, keyPath } = res[0]
    attributes.props = Object.assign(
      {},
      {
        path: keyPath
      }
    )

    // TODO: 子应用相同不重新赋值
    if (!subSys.includes(attributes.name)) {
      attributes.name = subSys.replace(/sub-/, '')
      attributes.url = subPaths[attributes.name]
    } else {
      console.warn(
        `%c main--->${JSON.stringify(res)}`,
        'color:red;font-size: 24px;font-weight: bold;text-decoration: underline;'
      )
      // TODO: sideBar 选中 提交基座 基座分发子系统
      // TODO: 子系统  跨系统跳转  转发基座  基座传sidebar  再走基座选中
      bus.$emit('distribution-to-sub', attributes.props)
    }
  }
})

// TODO: 跨系统
// bus.$on('subSystem-route-change', (childParams: SystemRouteChange) => {
//   console.warn('子应用传参到基座', childParams)
//   attributes.name = childParams.system.replace(/sub-/, '')
//   attributes.url = subPaths[attributes.name]
//   attributes.props = Object.assign(
//     {},
//     {
//       path: childParams.route,
//       query: {
//         ...childParams.query
//       }
//     }
//   )
//   // TODO: 传惨给sideBar
//   bus.$emit('set-sideBar-select', childParams)
//   // TODO: 传参给对应子系统
//   bus.$emit('distribution-to-sub', attributes.props)
// })

const beforeLoad = (appWindow: Window) => {
  console.warn('base-index=======》 beforeLoad', appWindow)
}

const beforeMount = (appWindow: Window) => {
  console.warn('base-index=======》 beforeMount', appWindow)
  bus.$emit('distribution-to-sub', attributes.props)
}

const afterMount = (appWindow: Window) => {
  console.warn('base-index=======》 afterMount', appWindow)
  bus.$emit('distribution-to-sub', attributes.props)
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
