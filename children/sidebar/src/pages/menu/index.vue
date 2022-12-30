

<template>
  <section class="leftMenu">
    <el-menu
      :mode="setDefault.menuMode"
      :collapse="setDefault.collapse"
      :background-color="setDefault.backgroundColor"
      :text-color="setDefault.textColor"
      :active-text-color="setDefault.activeTextColor"
      :default-active="setDefault.defaultActive"
      :default-opened="setDefault.defaultOpened"
      :unique-opened="setDefault.uniqueOpened"
      :collapse-transition="setDefault.collapseTransition"
      :popper-effect="setDefault.popperEffect"
      @select="handSelect">
        <template v-for="route in menuData" :key="route.id">
            <!-- 递归的组件 -->
            <MenuList :list="route" />
        </template>
    </el-menu>
  </section>
</template>


<script setup lang="ts">
import MenuList from '~/components/defaultMenu/menuItem.vue'
// TODO: 测试 router 字段
import { testRoute } from '~/mock/index'

// TODO: 配置参数类型定义
import { MenuConfig } from '~/types/index'

// TODO: 获取菜单和系统的映射关系表
import { routeForSystem } from '~/store/routeForSystem'


import { floatDataArray } from '~/utils/index'

// TODO: 获取父组件传过来的配置参数
const props = withDefaults(defineProps<{
  menuConfig:MenuConfig
}>(), {})

const {
  menuMode,
  collapse,
  backgroundColor,
  textColor,
  activeTextColor,
  defaultActive,
  uniqueOpened,
  isRouter,
  collapseTransition,
  popperEffect,
  defaultOpened
} = toRaw(props.menuConfig)

const menuData = reactive(testRoute)

// 系统和子应用的对应关系
const { routeForSys } = routeForSystem()

const setDefault = computed(() => {
  return props.menuConfig
})

// console.log(floatDataArray(testRoute))
const floatRoutes = floatDataArray(testRoute)

const emits = defineEmits(['getSelect'])

// *TODO: 左侧菜单选中
const handSelect = (key:string) => {
  const item = floatRoutes.find(r=> r.path === key&&r)
  emits('getSelect', {
    system: item?.meta.systemName || '',
    path: item?.path || ''
  })
}

watch(()=> defaultOpened, (newVal, oldVal) => {
  if(newVal) {
    const sysKey = newVal[0]
    emits('getSelect', {
    system: routeForSys[sysKey] || routeForSys[`/${sysKey}`],
    path: defaultActive
  })
  }
},{
  immediate: true,
  deep: true
})

</script>


<style lang="less" scoped>
  .leftMenu{
    width: 200px;
    height: 100%;
  }
</style>