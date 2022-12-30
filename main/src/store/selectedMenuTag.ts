import { MenuTagItem } from '~/types/menuTypes'

export const useSelectedMenuTags = defineStore('defaultSubConf', () => {
  const defaultTags: {
    activeItem: string
    selectedTagList: Array<MenuTagItem>
  } = reactive({
    activeItem: '',
    selectedTagList: []
  })

  const setActiveItem = (tagItem: MenuTagItem) => {
    // TODO: 通过调取接口来获取默认子应用配置
    console.log(tagItem, 'tagItem')
    defaultTags.selectedTagList.push(tagItem)
  }

  return {
    setActiveItem,
    defaultTags
  }
})
