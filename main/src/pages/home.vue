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
  <section style="width: 100%; height: 100%">
    <WujieVue width="100%" height="100%" name="child" :url="childUrl" :sync="true"></WujieVue>
  </section>
</template>

<script lang="ts" setup>
// import hostMap from '@/wujie/hostMap'
// const route = useRoute()
const childUrl = computed(() => {
  return 'http://127.0.0.1:3003/'
})
</script>

<style lang="less" scoped></style>
