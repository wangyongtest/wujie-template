<template>
  <section class="handlerItem" v-for="com in handList" :key="com.type">
    <component :is="comps[com.type]" :itemAttr="com" />
  </section>
</template>

<script lang="ts" setup>
import CustomPicker from '~/components/Header/modules/picker.vue'
import Avatar from '~/components/Header/modules/avatar.vue'
import type { Component } from 'vue'

export interface HandListItem {
  name: string
  icon: string
  tips: string
  defaultVal: string | boolean
  effectBg?: string
  context?: string
  type: string
}

export interface Comps {
  [key: string]: Component
}

const handList: Array<HandListItem> = [
  {
    name: '主题',
    icon: '',
    tips: '',
    defaultVal: '',
    effectBg: 'dark',
    context: '主题',
    type: 'CustomPicker'
  },
  {
    name: '全屏',
    icon: '',
    tips: '',
    defaultVal: false,
    type: 'IsFullScreen'
  },
  // {
  //   name: 'ZH',
  //   icon: '',
  //   tips: '',
  //   defaultVal: '',
  //   type: ''
  // },
  // {
  //   name: '锁屏',
  //   icon: '',
  //   tips: '',
  //   defaultVal: '',
  //   type: 'LockScreen'
  // },
  {
    name: '用户',
    icon: '',
    tips: '',
    defaultVal: '',
    type: 'Avatar'
  }
]
const comps: Comps = {
  CustomPicker: CustomPicker,
  Avatar: Avatar
}
</script>

<style lang="less">
.handlerItem {
  display: flex;
  // justify-content: flex-end;
  align-items: center;
}
</style>
