

import { defineStore } from 'pinia'

interface RouteJsonItem {
  path?: string
  name?: string
  menuName?: string
  meta?: MenuItemMeta
}

interface MenuItemMeta {
  icon?: string
  role?: Array<string | never>
}

interface RouterJson {
  children?: Array<RouteJsonItem> | Array<never>
}

export const routesJson = defineStore('testRouter', () =>{
  const routeList = ref<Array<RouteJsonItem&RouterJson>>([])

  const getRouteList = computed(() => routeList)

  const setRouteList = (payload:Array<RouteJsonItem&RouterJson>) => {
    routeList.value = payload
  }

  return { routeList, getRouteList, setRouteList }
})