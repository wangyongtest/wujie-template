
<template>
  <section>
    <el-button @click="jump">jump</el-button>
  </section>
</template>

<script lang="ts" setup>
import {ref, watch} from 'vue'
interface SubApplicationParams {
  path: string
  params?: {
    [key:string]: string
  }
}

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
    route: '/systemUser',
    query:{
      name: 'test',
      age: 10
    }
  })
}


const router = useRouter()

window.$wujie?.bus.$on('distribution-to-sub', (res:SubApplicationParams) => {
  console.warn(`%c person--->${JSON.stringify(res)}`,'color: #43bb;font-size: 24px;font-weight: bold;text-decoration: underline;')
  router.push({path: res.path})
})

watch(()=>window.$wujie.props, (newVal, oldVal) => {
  console.warn('person-----watch',newVal)
},{
  immediate: true,
  deep: true
})





</script>

<style lang="less"></style>
