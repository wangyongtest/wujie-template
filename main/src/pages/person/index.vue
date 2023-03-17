<template>
  <WujieVue
    width="100%"
    height="100%"
    :name="attributes.name"
    :url="attributes.url"
    :exec="true"
    :sync="true"
    :alive="false"
    :props="attributes.props"
    :beforeLoad="beforeLoad"
    :beforeMount="beforeMount"
    :afterMount="afterMount"
    :beforeUnmount="beforeUnmount"
    :afterUnmount="afterUnmount"
  ></WujieVue>
</template>

<script setup lang="ts">
// import WuJieVue from 'wujie-vue3'

const attributes = reactive({
  name: 'person',
  url: '',
  props: {}
})

const beforeLoad = (appWindow: Window) => {
  console.log(appWindow)
}

const beforeMount = (appWindow: Window) => {
  console.log(appWindow)
}

const afterMount = (appWindow: Window) => {
  console.log(appWindow)
}

const beforeUnmount = (appWindow: Window) => {
  console.log(appWindow)
}

const afterUnmount = (appWindow: Window) => {
  console.log(appWindow)
}
</script>

<style lang="scss" scoped></style>
