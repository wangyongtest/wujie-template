
import { defineStore } from 'pinia'

interface RouteMapping {
  [key: string]: string
}

export const routeForSystem = defineStore('mappingRoutes', () => {
  const routeForSys = ref<RouteMapping>({
    '/home': 'sub-person',
    '/system': 'sub-system'
  })

  return {
    routeForSys
  }
})