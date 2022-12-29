import { SystemJumpParam } from '~/types/routeTypes'

export const useWuJieScheduler = defineStore('useWuJieScheduler', () => {
  // TODO: state
  const stateRoute: SystemJumpParam = reactive({
    path: '', // 路由
    system: '', // 系统,
    query: {} // 参数
  })

  //  TODO: 获取更新数据 getter
  const getWuJieRouterState = computed(() => stateRoute)

  // TODO: actions
  const setWuJieRouterState = (payload: SystemJumpParam) => {
    // !reactive 不能直接赋值对象，否则失去响应式
    // stateRoute = {
    //   path: payload.path,
    //   system: payload.system,
    //   query: {
    //     ...payload.query
    //   }
    // }
    stateRoute.path = payload.path
    stateRoute.system = payload.system
    stateRoute.query = payload.query
  }

  return { setWuJieRouterState, getWuJieRouterState, stateRoute }
})
