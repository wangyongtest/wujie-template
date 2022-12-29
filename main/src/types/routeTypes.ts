// TODO: TS 类型定义，基座与子应用交互的路由和参数
interface SystemRouteChange {
  system: string
  route: string
  query: {
    [key: string]: string
  }
}

// TODO: 系统间跳转相关数据
interface SystemJumpParam {
  system: string
  path: string
  query?: {
    [key: string]: string
  }
}

export type { SystemRouteChange, SystemJumpParam }
