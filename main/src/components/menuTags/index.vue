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
          @click="handlerClickTag(tag)"
        >
          <span class="tagCtx">
            {{ tag.name }}
          </span>
          <span v-if="index > 0" class="closeIcon" @click="closeCurrentTag(tag)">
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
            <el-dropdown-item value="all">关闭全部</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </section>
  </section>
</template>

<script setup lang="ts">
import { CloseBold, ArrowDown } from '@element-plus/icons-vue'
import { MenuTagItem, TagItem } from '~/types/menuTypes'
import { useSelectedMenuTags } from '~/store/selectedMenuTag'
import { handDispense } from '~/utils/wujie'
import { useMessageDialog } from '~/hooks/messageHooks'

const { showMessageBox } = useMessageDialog()

const { getSelectedList, defaultTags, updateSelectedTagList, setActiveItem } = useSelectedMenuTags()

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

// TODO: 点击对应的tag跳转对应页面
const handlerClickTag = async (tagItem: MenuTagItem) => {
  await setActiveItem(tagItem)
  await handDispense(tagItem)
}

// TODO: 右侧操作添（下拉选项）加点击事件
const handlerCloseTag = (e: PointerEvent) => {
  const itemLabel = (<HTMLInputElement>e?.target).innerText

  const val: TagItem = handTags.find((item) => item.label === itemLabel) || {}
  switch (val.value) {
    case 'current': {
      closeCurrentTag(null)
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
const closeCurrentTag = async (tagItem: MenuTagItem | null) => {
  const comparePath = tagItem?.path || defaultTags.selectedItem
  // TODO: 如果韦第一个时不可删除
  // TODO--注意: 这里和下摆你判断 currentIndex 可选其一
  if (getSelectedList.length === 1) return
  // TODO： 获取当前 要删除tag 索引值
  const currentIndex = getSelectedList.findIndex((tag) => tag.path === comparePath)
  // TODO: 根据当前选中项，获取前一个tag
  // TODO: 移除当前 tag
  const prev = currentIndex - 1
  // TODO：如果当前索引未 第一个，则不可删除
  if (currentIndex === 0) {
    // console.log('首页不可删除')
    showMessageBox({ message: '首页不可删除', type: 'info' })
  } else {
    // TODO: 更新tag, 出去仅剩第一个情况
    const newTagList: Array<MenuTagItem> = getSelectedList.filter(
      (tag) => tag.path !== getSelectedList[currentIndex].path
    )
    let currentActivePath = ''
    // TODO: 当仅剩一项时，第一项选中，否则选中前一项
    if (newTagList.length === 1) {
      newTagList[0].isActive = true
      currentActivePath = newTagList[0].path
    } else {
      newTagList[prev].isActive = true
      currentActivePath = newTagList[prev].path
    }
    updateFunc([currentIndex], currentActivePath, getSelectedList[prev])
  }
}

// TODO: 关闭当前右侧， 不包含当前
const closeRightTag = () => {
  // TODO: 根据当前选中项，获取前一个tag
  // TODO: 移除当前 tag
  const currentIndex = getSelectedList.findIndex((tag) => tag.path === defaultTags.selectedItem)

  const rightDelIndex = Object.keys(getSelectedList)
    .map((k) => Number(k))
    .filter((_, index) => index > currentIndex)

  // TODO: 清除当前选中以右的情况，只需要清除右侧的
  updateFunc(rightDelIndex, '', '')
}

// TODO: 关闭当前左侧， 不包含当前和第一个
const closeLeftTag = () => {
  // TODO: 根据当前选中项，获取前一个tag
  // TODO: 移除当前 tag
  const currentIndex = getSelectedList.findIndex((tag) => tag.path === defaultTags.selectedItem)

  // 当关闭左侧时，第一个不能删除, 且 选中不会变
  const delListIndex = Object.keys(getSelectedList)
    .map((k) => Number(k))
    .slice(1, currentIndex)
  updateFunc(delListIndex, '', '')
}

// TODO: 关闭所有tag,不包含第一个
const closeAllTag = () => {
  // TODO: 根据当前选中项，获取前一个tag
  // TODO: 移除当前 tag

  const delListIndex = Object.keys(getSelectedList)
    .map((k) => Number(k))
    .slice(1)
  const currentActiveItem = getSelectedList[0]
  updateFunc(delListIndex, currentActiveItem.path, currentActiveItem)
}

/** TODO: 根据操作更新 tagsMenu + 左侧菜单 + 子系统跳转
 * @params {Array<number>} closeTagIndexList
 * @params {string}  currentPath
 * @params {MenuTagItem} tagItem || ''
 *
 * **/
const updateFunc = async (
  closeTagIndexList: Array<number>,
  currentActivePath: string,
  tagItem: MenuTagItem | string
) => {
  await updateSelectedTagList(closeTagIndexList, currentActivePath)
  typeof tagItem !== 'string' && (await handDispense(tagItem))
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
