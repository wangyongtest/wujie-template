interface RoutePayload {
  subSys: string
  keyPath: string
  params?: {
    [key: string]: string
  }
}

export const routeStore = defineStore('routeStore', () => {
  const routeState = ref<RoutePayload>({
    subSys: '',
    keyPath: '',
    params: {}
  })

  const setState = async ({ subSys, keyPath, params }: RoutePayload) => {
    routeState.value = Object.assign(
      {},
      {
        subSys,
        keyPath,
        params
      }
    )
  }

  const tempPathList = (name: string) => {
    switch (name) {
      case 'person': {
        return 'http://127.0.0.1:3003/'
      }
      case 'system': {
        return 'http://127.0.0.1:3004/'
      }
      default:
        return 'http://127.0.0.1:3003/'
    }
  }

  return {
    setState,
    routeState
  }
})
