const lifeCycles = {
  beforeLoad: (appWindow: Window) => console.log(`${appWindow.__WUJIE.id} 基座beforeLoad 生命周期`),
  beforeMount: (appWindow: Window) =>
    console.log(`${appWindow.__WUJIE.id} 基座beforeMount 生命周期`),
  afterMount: (appWindow: Window) => console.log(`${appWindow.__WUJIE.id} 基座afterMount 生命周期`),
  beforeUnmount: (appWindow: Window) =>
    console.log(`${appWindow.__WUJIE.id} 基座beforeUnmount 生命周期`),
  afterUnmount: (appWindow: Window) =>
    console.log(`${appWindow.__WUJIE.id} 基座afterUnmount 生命周期`),
  activated: (appWindow: Window) => console.log(`${appWindow.__WUJIE.id} 基座activated 生命周期`),
  deactivated: (appWindow: Window) =>
    console.log(`${appWindow.__WUJIE.id} 基座deactivated 生命周期`),
  loadError: (url: string, e: Error) => console.log(`${url} 加载失败`, e)
}

export default lifeCycles
