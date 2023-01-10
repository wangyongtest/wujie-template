import { MenuTagItem } from '~/types/menuTypes'

export const useSelectedMenuTags = defineStore('defaultSubConf', () => {
  const defaultTags: {
    selectedItem: string
    selectedTagList: Array<MenuTagItem>
  } = reactive({
    selectedItem: '',
    selectedTagList: []
  })

  const setActiveItem = (tagItem: MenuTagItem) => {
    // TODO: 当前选中tag（菜单）
    defaultTags.selectedItem = tagItem.path
    // TODO: 设置tag 选中
    commonTagActive(tagItem)
  }

  // TODO: 设置显示 close 图标
  const setDelIcon = (tagItem: MenuTagItem) => {
    defaultTags.selectedTagList.forEach((tag) => {
      if (tag.path === tagItem.path) {
        tag.showClose = tagItem.showClose
      } else {
        tag.showClose = !tagItem.showClose
      }
    })
  }

  // TODO: 获取当前 tagList
  const getSelectedList = computed(() => {
    return defaultTags.selectedTagList
  })

  // TODO: 更新情况，当关闭当前 tag || 当前 tag以左 || 当前 tag以右 || 关闭全部 tag
  // TODO: 数据 在调用方法时已处理好
  const updateSelectedTagList = (tagIndex: Array<number>, currentActivePath: string) => {
    // 关闭后可能会重新选中 tag
    if (currentActivePath) {
      defaultTags.selectedItem = currentActivePath
    }

    // 根据关闭操作，截取掉对应数组 splice 截取数组改变原数组
    const len = tagIndex.length
    let start = 0
    let end = 1
    if (len === 1) {
      start = tagIndex[0]
    } else if (len > 1) {
      start = tagIndex[0]
      end = len
    }
    // TODO: 获取当前选中项
    const activeItem = defaultTags.selectedTagList.find((tag) => tag.path === currentActivePath)
    // TODO: 设置当前选中项的 状态
    !!activeItem && commonTagActive(activeItem)

    defaultTags.selectedTagList.splice(start, end)
  }

  // TODO: 设置公共方法 处理 tag选中
  const commonTagActive = (tagItem: MenuTagItem) => {
    // TODO: 通过调取接口来获取默认子应用配置
    const len = defaultTags.selectedTagList.length
    const index = defaultTags.selectedTagList.findIndex((item) => item.path === tagItem.path)
    let activeItem = {
      system: '',
      path: '',
      name: '',
      isActive: false
    }

    // TODO: 重置 tag 状态
    defaultTags.selectedTagList.forEach((item) => {
      item.isActive = false
    })

    // TODO: 1、不存在 tag 列表中时，添加
    //       2、存在 tag 列表中设置选中状态
    if (index < 0) {
      activeItem = {
        ...tagItem,
        isActive: true
      }
      defaultTags.selectedTagList.splice(len, 0, activeItem)
      // TODO: 为每个tag添加关闭按钮
    } else {
      activeItem = {
        ...tagItem,
        isActive: true
      }
      defaultTags.selectedTagList.splice(index, 1, activeItem)
    }
  }

  return {
    setActiveItem,
    setDelIcon,
    updateSelectedTagList,
    getSelectedList,
    defaultTags
  }
})
