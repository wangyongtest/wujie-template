import wujieVue3 from 'wujie-vue3'

import { SystemJumpParam } from '~/types/routeTypes'
import { useWuJieScheduler } from '~/store/wujieStore'
const { setWuJieRouterState } = useWuJieScheduler()
/************************************************************************************************/
// TODO: 无界 eventBus
const { bus } = wujieVue3

//  TODO: 菜单路由监听路由 切换
bus.$on('side-route-change', (...res: Array<{ system: string; path: string }>) => {
  //  [{subSys: 'sub-person', keyPath: '/homeDetail'}]
  // [{subSys: 'sub-system', keyPath: '/systemMenu'}]
  // [{subSys: 'person', keyPath: '/about'}]
  // console.warn(res, 'main')
  let systemJumpInfo: SystemJumpParam = { path: '', system: '', query: {} }
  const [item] = res || []
  // if (item.subSys && !item.subSys.includes(systemJumpInfo.system)) {
  //   systemJumpInfo.system = item.subSys.replace(/sub-/, '')
  // }

  systemJumpInfo = Object.assign({}, item)

  if (res.length) {
    const { system, path } = res[0]
    setWuJieRouterState({ system, path })
    // TODO: sideBar 选中 提交基座 基座分发子系统
    // TODO: 子系统  跨系统跳转  转发基座  基座传sidebar  再走基座选中
    bus.$emit('distribution-to-sub', systemJumpInfo)
  }
})

// TODO: 跨系统
bus.$on('subSystem-route-change', (childParams: SystemRouteChange) => {
  console.warn('子应用传参到基座', childParams)
  const { path, system, query } = childParams
  setWuJieRouterState({ system, path, query })
  // TODO: 传惨给sideBar
  bus.$emit('set-sideBar-select', childParams)
  // TODO: 传参给对应子系统
  bus.$emit('distribution-to-sub', childParams)
})
