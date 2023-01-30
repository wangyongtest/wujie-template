import wujieVue3 from 'wujie-vue3'

import { SystemJumpParam } from '~/types/routeTypes'
import { PayoutParam } from '~/types/paramsTypes'
import { useWuJieScheduler } from '~/store/wujieStore'
import { useSelectedMenuTags } from '~/store/selectedMenuTag'
const { setWuJieRouterState } = useWuJieScheduler()
const { setActiveItem } = useSelectedMenuTags()
/************************************************************************************************/
// TODO: 无界 eventBus
const { bus } = wujieVue3

//  TODO: 菜单路由监听路由 切换
bus.$on('side-route-change', (...res: Array<{ system: string; path: string; name: string }>) => {
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
    const { system, path, name } = res[0]
    setActiveItem({
      system,
      path,
      name
    })
    setWuJieRouterState({ system, path })
    // TODO: sideBar 选中 提交基座 基座分发子系统
    // TODO: 子系统  跨系统跳转  转发基座  基座传sidebar  再走基座选中
    bus.$emit('distribution-to-sub', systemJumpInfo)
  }
})

// TODO: 跨系统
bus.$on('subSystem-route-change', (childParams: SystemJumpParam) => {
  console.warn('子应用传参到基座', childParams)
  handDispense(childParams)
  bus.$emit('distribution-to-sub', childParams)
})

// TODO: 系统分发到子系统
export const handDispense = (params: SystemJumpParam) => {
  const { path, system, query } = params
  setWuJieRouterState({ system, path, query })
  // TODO: 传惨给sideBar
  bus.$emit('set-sideBar-select', params)
  // TODO: 传参给对应子系统
  bus.$emit('distribution-to-sub', params)
}

// TODO: 基座分发参数到子系统
export const basePayoutToChild = (params: PayoutParam) => {
  console.log(params)
  bus.$emit('base-to-child-conf', params)
}
