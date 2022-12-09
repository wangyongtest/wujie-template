
<template>
  <section class="menuItem">
    <template v-if="(list.children&&list.children.length)">
      <el-sub-menu :index="list.path">
        <template #title>
          <el-icon>
            <Expand/>
          </el-icon>
          <span>{{ list.name }}</span>
        </template>
        <template v-for="childRoute in list.children" :key="childRoute.id">
            <MenuItem :list="childRoute"></MenuItem>
        </template>
      </el-sub-menu>
    </template>

     <!-- 设置终止条件，如果没有子级，就不在调用自己 -->
     <template v-else>
         <el-menu-item :index="list.path" :disabled="list.meta.isDisabled">
            <template #title>
               <el-icon>
                  <Expand />
               </el-icon>
               <span>{{ list.name }}</span>
            </template>
         </el-menu-item>
      </template>
  </section>
</template>

<script setup lang="ts">
import { Expand } from '@element-plus/icons-vue';
import MenuItem from './menuItem.vue'

const props = defineProps({
  list: {
    type: Object,
    default: () =>{}
  }
})
  
  const {list} = toRefs(props)
</script>

<style lang="less" scoped>
  .menuItem {}
</style>