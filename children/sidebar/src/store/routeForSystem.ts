
import { defineStore } from 'pinia'

interface RouteMapping {
  [key: string]: string
}

export const routeForSystem = defineStore('mappingRoutes', () => {
  const routeForSys = ref<RouteMapping>({
    '/home': 'person',
    '/system': 'system'
  })

  return {
    routeForSys
  }
})