

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index'
import App from './App.vue'
import './config'

// TODO: 测试引入插件
import btnAuth from './plugins/btnAuth'

// TODO: 测试挂载自定义指令
import {btnAuthDiv} from './customDirective/btn/index'

if (window.__POWERED_BY_WUJIE__) {
  let instance: any
  window.__WUJIE_MOUNT = () => {
    instance = createApp(App)
    instance.use(router)
    instance.use(ElementPlus)
    instance.use(btnAuthDiv)
    instance.mount('#person')
  }
  window.__WUJIE_UNMOUNT = () => {
    instance.unmount()
  }
  // module脚本异步加载，应用主动调用生命周期
  window.__WUJIE.mount()
} else {
  const app = createApp(App)
  app.use(router)
  app.use(btnAuth)
  app.use(ElementPlus)
  app.mount('#person')
}

