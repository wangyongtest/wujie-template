import { createApp } from 'vue'
import router from '@/router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'

if (window.__POWERED_BY_WUJIE__) {
  let instance: any
  window.__WUJIE_MOUNT = () => {
    instance = createApp(App)
    instance.use(router)
    instance.use(ElementPlus)
    instance.mount('#sideBar')
  }
  window.__WUJIE_UNMOUNT = () => {
    instance.unmount()
  }
  // module脚本异步加载，应用主动调用生命周期
  window.__WUJIE.mount()
} else {
  const app = createApp(App)
  app.use(router)
  app.use(ElementPlus)
  app.mount('#sideBar')
}
