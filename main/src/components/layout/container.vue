<template>
  <section class="container">
    <menu-tag />
    <!-- 禁止路由重复 -->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <section class="compContent">
          <component :is="Component" :key="$route.path" />
        </section>
      </transition>
    </router-view>
  </section>
  <!-- 右侧配置弹框 -->
  <drawer-conf v-if="getDrawerConfData.isShow" :isShow="getDrawerConfData.isShow" />
</template>

<script lang="ts" setup>
import MenuTag from '~/components/menuTags/index.vue'
import DrawerConf from '~/components/layout/drawerConf.vue'
import { useDrawerConf } from '~/store/drawerConf'
import { themeStore } from '~/store/theme'
import { basePayoutToChild } from '~/utils/wujie'

const { getDrawerConfData } = useDrawerConf()
const { customTheme } = themeStore()

// TODO: 监听主题变化，发送子应用
watch(
  () => customTheme,
  (newVal) => {
    console.warn(newVal, '主题切换')
    basePayoutToChild(newVal)
  },
  {
    immediate: true,
    deep: true
  }
)

// const route = useRoute()
// watch(
//   () => route.query,
//   (newVal) => {
//     console.warn('base-watch-newVal======>', newVal)
//   },
//   {
//     immediate: true,
//     deep: true
//   }
// )
</script>

<style lang="less">
.container {
  width: calc(100% - 200px);
  background: #ccc;
  margin: 0;
  padding: 0;

  .compContent {
    width: 100%;
    height: 100%;
    padding: 10px 5px 0 5px;
  }
}
</style>
