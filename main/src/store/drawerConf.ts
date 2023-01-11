interface DrawerConfData {
  isShow: boolean
}

export const useDrawerConf = defineStore('drawerConf', () => {
  const drawerConfData: DrawerConfData = reactive({
    isShow: false
  })

  // TODO: 设置drawer 弹框显示
  const setDrawerConf = (conf: DrawerConfData) => {
    drawerConfData.isShow = conf.isShow
  }

  // TODO: 获取配置数据
  const getDrawerConfData = computed(() => {
    return drawerConfData
  })

  return {
    drawerConfData,
    getDrawerConfData,
    setDrawerConf
  }
})
