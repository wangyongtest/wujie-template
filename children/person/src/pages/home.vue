

<template>
  <section>
    <el-button @click="jump">jump</el-button>
  </section>
</template>

<script lang="ts" setup>

interface CrossSystemParameter {
  system: string
  route: string
  query: {
    [key: string]: string | number
  }
}

const jump = (parameter:CrossSystemParameter) => {
  window.$wujie?.bus.$emit('subSystem-route-change', {
    system: 'sub-system',
    route: '/systemMenu',
    query:{
      name: 'test',
      age: 10
    }
  })
}








</script>

<style lang="less"></style>
