import { Ref } from 'vue'

interface RoutePayload {
  name: string
}

export const routeStore = defineStore('routeStore', () => {
  const routeState = reactive({
    name: 'child',
    tempPath: 'http://127.0.0.1:3003/'
  })

  const setState = async (payload: RoutePayload) => {
    routeState.name = payload.name
    routeState.tempPath = await tempPathList(payload.name)
    console.log(routeState, '===================routeState===============')
  }

  const tempPathList = (name: Ref) => {
    console.log(name, 'name=================')

    switch (name.value) {
      case '/home': {
        return 'http://127.0.0.1:3003/'
      }
      case '/system': {
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
