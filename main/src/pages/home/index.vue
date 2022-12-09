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
      :loadError="loadError"
    ></WujieVue>
  </section>
</template>

<script setup lang="ts">
import { bus } from 'wujie'
import { subPaths } from '~/sub-path-config/index'

console.log('subPaths=======>', subPaths)
// TODO: 定义默认属性
const attributes = reactive({
  name: 'person',
  url: 'http://127.0.0.1:3003/',
  sync: true,
  exec: true,
  fiber: true,
  degrade: false,
  attrs: {},
  props: {}, // TODO: 首次渲染才会传值子组件
  prefix: {}
  // fetch: () => {},
  // replace: {}
})

//  TODO: 监听路由 切换
bus.$on('side-route-change', (...res: Array<{ subSys: string; keyPath: string }>) => {
  const { subSys, keyPath } = res[0]
  attributes.name = subSys.replace(/sub-/, '')
  attributes.url =
    attributes.name === 'system' ? 'http://127.0.0.1:3004/' : 'http://127.0.0.1:3003/'
  attributes.props = Object.assign(
    {},
    {
      path: keyPath
    }
  )
  bus.$emit('distribution-to-sub', attributes.props)
  console.warn('home-index', res, attributes)
})

const beforeLoad = (appWindow: Window) => {
  console.warn('base-index=======》 beforeLoad', appWindow)
}

const beforeMount = (appWindow: Window) => {
  console.warn('base-index=======》 beforeMount', appWindow)
}

const afterMount = (appWindow: Window) => {
  console.warn('base-index=======》 afterMount', appWindow)
}

const beforeUnmount = (appWindow: Window) => {
  console.warn('base-index=======》 beforeUnmount', appWindow)
}

const afterUnmount = (appWindow: Window) => {
  console.warn('base-index=======》 afterUnmount', appWindow)
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
