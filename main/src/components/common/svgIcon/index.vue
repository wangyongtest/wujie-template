<!-- TODO:兼容 阿里矢量图标库  + element-plus 图标 -->
<template>
  <section class="iconComp">
    <span
      v-if="setIcon.isSvg"
      :class="['iconfont', setIcon.className]"
      :style="{ fontSize: setIcon.fontSize, color: setIcon.color }"
    ></span>

    <ElIconComp
      v-else
      :size="setIcon.fontSize"
      :color="setIcon.color"
      :witchIcon="props.iconClass"
    />
  </section>
</template>

<script setup lang="ts">
import ElIconComp from './component/elIcon'

const props = defineProps(['iconClass', 'fontSize', 'color'])
console.log(props, 'iconClass')
const setIcon = computed(() => {
  if (!props?.iconClass.name && props?.iconClass.includes('-')) {
    return {
      isSvg: true,
      className: props.iconClass,
      fontSize: props.fontSize,
      color: props.color
    }
  } else {
    return {
      fontSize: props.fontSize,
      color: props.color
    }
  }
})
</script>

<style lang="less" scoped></style>
