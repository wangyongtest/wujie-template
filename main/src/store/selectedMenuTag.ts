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
    // TODO: 通过调取接口来获取默认子应用配置
    const len = defaultTags.selectedTagList.length
    const index = defaultTags.selectedTagList.findIndex((item) => item.path === tagItem.path)
    let activeItem = {
      system: '',
      path: '',
      name: '',
      isActive: false
    }

    // TODO: 当前选中tag（菜单）
    defaultTags.selectedItem = tagItem.path
    console.log('defaultTags', defaultTags)
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
    console.log(defaultTags.selectedTagList, 'defaultTags.selectedTagList----pinia')
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
  const updateSelectedTagList = (tags: Array<MenuTagItem>) => {
    defaultTags.selectedTagList = tags
  }

  return {
    setActiveItem,
    setDelIcon,
    getSelectedList,
    updateSelectedTagList,
    defaultTags
  }
})
