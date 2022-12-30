interface DefaultConf {
  name: string
  path: string
}

export const defaultChildConf = defineStore('defaultChildConf', () => {
  const defaultConf: DefaultConf = reactive({
    name: 'person',
    path: 'http://127.0.0.1:3003/'
  })

  const setDefaultSubConf = () => {
    // TODO: 通过调取接口来获取默认子应用配置
  }

  // TODO: 获取默认配置项
  const getDefaultSubConf = computed(() => {
    return defaultConf
  })

  return {
    getDefaultSubConf,
    defaultConf,
    setDefaultSubConf
  }
})
