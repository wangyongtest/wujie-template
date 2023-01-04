<!-- 
  tag
    1、首页不可删除
    2、右侧添加固定按钮关闭对应按钮
 -->
<template>
  <section class="menuTags">
    <section class="tagList">
      <template v-for="(tag, index) in getSelectedList" :key="tag.path">
        <el-tag
          :disable-transitions="true"
          :class="['menuTags_item', tag.isActive ? 'tagActive' : '']"
          size="default"
          @close="handleClose(tag)"
          @click="handlerClickTag(tag)"
        >
          <span class="tagCtx">
            {{ tag.name }}
          </span>
          <span v-if="index > 0" class="closeIcon">
            <el-icon><CloseBold /></el-icon>
          </span>
        </el-tag>
      </template>
    </section>

    <!-- 右侧操作项 -->
    <section class="handlersBtn">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-tag class="menuTags_item">
            标签选项
            <el-icon class="el-icon--right">
              <ArrowDown />
            </el-icon>
          </el-tag>
        </span>
        <template #dropdown>
          <el-dropdown-menu @click.prevent="handlerCloseTag">
            <el-dropdown-item value="current">关闭当前</el-dropdown-item>
            <el-dropdown-item value="right">关闭右侧</el-dropdown-item>
            <el-dropdown-item value="left">关闭左侧</el-dropdown-item>
            <el-dropdown-item class="all">关闭全部</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </section>
  </section>
</template>

<script setup lang="ts">
import { CloseBold, ArrowDown } from '@element-plus/icons-vue'
import { DefaultTagsItem, TagItem } from '~/types/menuTypes'
import { useSelectedMenuTags } from '~/store/selectedMenuTag'
import { handDispense } from '~/utils/wujie'

const { getSelectedList, defaultTags, updateSelectedTagList } = useSelectedMenuTags()

// TODO: 关闭按钮的点击事件
const handleClose = (tag: DefaultTagsItem) => {}

// TODO: 点击对应的tag跳转对应页面
const handlerClickTag = (tag: DefaultTagsItem) => {}

const handTags: Array<TagItem> = [
  {
    label: '关闭当前',
    value: 'current'
  },
  {
    label: '关闭右侧',
    value: 'right'
  },
  {
    label: '关闭左侧',
    value: 'left'
  },
  {
    label: '关闭全部',
    value: 'all'
  }
]

// TODO: 右侧操作添加点击事件
const handlerCloseTag = (e: PointerEvent) => {
  const itemLabel = (<HTMLInputElement>e?.target).innerText

  const val: TagItem = handTags.find((item) => item.label === itemLabel) || {}
  switch (val.value) {
    case 'current': {
      closeCurrentTag()
      break
    }
    case 'right': {
      closeRightTag()
      break
    }
    case 'left': {
      closeLeftTag()
      break
    }
    case 'all': {
      closeAllTag()
      break
    }
    default: {
      return false
    }
  }
}

// TODO: 关闭当前tag
const closeCurrentTag = () => {
  const currentIndex = getSelectedList.findIndex((tag) => tag.path === defaultTags.selectedItem)
  // TODO: 根据当前选中项，获取前一个tag
  // TODO: 移除当前 tag
  const prev = currentIndex - 1
  if (currentIndex === 0) {
    console.log('首页不可删除')
  } else {
    console.log('关闭当前，选中前一个tag', getSelectedList[prev])

    console.log(getSelectedList[currentIndex], 'getSelectedList[currentIndex]')
    // TODO: 更新tag
    const newTagList = getSelectedList
      .map((tag) => tag.path !== getSelectedList[currentIndex].path && tag)
      .filter(Boolean)

    // TODO: 当仅剩一项时，第一项选中，否则选中前一项
    if (newTagList.length === 1) {
      newTagList[0].isActive = true
    } else {
    }
    console.log(newTagList, 'newTagList')
    updateSelectedTagList(newTagList)

    handDispense(getSelectedList[prev])

    console.log(getSelectedList[currentIndex], 'getSelectedList[currentIndex]')
  }
}

// TODO: 关闭当前右侧， 不包含当前
const closeRightTag = () => {
  // TODO: 根据当前选中项，获取前一个tag
  // TODO: 移除当前 tag
  const currentIndex = getSelectedList.findIndex((tag) => tag.path === defaultTags.selectedItem)
  // const prev = getSelectedList[currentIndex - 1]
  console.log(
    '关闭右侧，选中当前tag前一个，截取列表到当前tag',
    getSelectedList.slice(0, currentIndex + 1)
  )
}

// TODO: 关闭当前左侧， 不包含当前和第一个
const closeLeftTag = () => {
  // TODO: 根据当前选中项，获取前一个tag
  // TODO: 移除当前 tag
  const currentIndex = getSelectedList.findIndex((tag) => tag.path === defaultTags.selectedItem)
  // const prev = getSelectedList[currentIndex - 1]
  console.log(
    '关闭左侧，选中当前tag前一个，截取列表到当前tag',
    getSelectedList.slice(1, currentIndex)
  )
}

// TODO: 关闭所有tag,不包含第一个
const closeAllTag = () => {
  // TODO: 根据当前选中项，获取前一个tag
  // TODO: 移除当前 tag
  const currentIndex = getSelectedList.findIndex((tag) => tag.path === defaultTags.selectedItem)
  // const prev = getSelectedList[currentIndex - 1]
  console.log(
    '关闭右侧，选中当前tag前一个，截取列表到当前tag',
    getSelectedList.slice(0, currentIndex)
  )
}
</script>

<style lang="less" scoped>
.menuTags {
  height: 32px;
  line-height: 32px;
  background: #ffffff;
  position: relative;
  overflow: hidden;

  .tagList {
    position: absolute;
    left: 0;
    top: 0;
    overflow-x: scroll;
  }

  // 右侧的 关闭操作
  .handlersBtn {
    position: absolute;
    right: 0;
    top: 0;
    width: 120px;
    line-height: 28px;
    text-align: center;
    background: #ffffff;
    box-shadow: 0px 0px 5px #ccc;
    padding: 3px 0 0 0;
    ::after {
      content: '';
      display: block;
      clear: both;
      width: 0;
      height: 0;
    }
  }
  .menuTags_item {
    width: 90px;
    margin: 0 5px;
    cursor: pointer;
    background: #ffffff;
    color: #000000;
    border: 1px solid #ccc;
    vertical-align: middle;

    .tagCtx {
      display: inline-block;
      height: 20px;
      line-height: 15px;
      padding: 2px;
      text-align: center;
      vertical-align: bottom;
    }
    .closeIcon {
      display: inline-block;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      text-align: center;
      line-height: 15px;
      padding-top: 2px;
      margin-left: 4px;
    }
  }
}

// TODO: tag 选中样式
.tagActive {
  background: #409eff !important;
  color: #ffffff !important;
}
</style>
