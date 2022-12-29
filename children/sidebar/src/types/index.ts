


export interface MenuConfig {
  defaultOpened: Array<string>
  menuMode: string
  collapse: boolean
  backgroundColor: string
  textColor: string
  activeTextColor: string
  defaultActive: string
  uniqueOpened: boolean
  isRouter: boolean
  collapseTransition: boolean
  popperEffect: string
}

export interface RouteItem {
    id:string,
    name: string,
    path: string,
    meta:{
      icon?: string
      role?: Array<string>
      isDisabled?: boolean
      level?: number
      systemName?: string
    }
    children?: RouteItem[]
}