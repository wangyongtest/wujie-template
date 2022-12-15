import { createApp } from 'vue'
import WuJieVue from 'wujie-vue3'
import hostMap from '~/wujie/hostMap'
// import credentialsFetch from '~/wujie/fetch'
import { createPinia } from 'pinia'
import router from '~/router/index'
import Layout from '~/components/layout/index.vue'
// import lifeCycles from '~/wujie/lifeCycles'
// import plugins from '~/wujie/plugins'
import 'element-plus/dist/index.css'

// import '~/assets/styles/index.scss'
import '~/assets/styles/common.scss'

const { setupApp, preloadApp, destroyApp } = WuJieVue

const isProduction = import.meta.env.NODE_ENV === 'production'

// const degrade =
//   window.localStorage.getItem('degrade') === 'true' ||
// !window.Proxy ||
//   !window.CustomElementRegistry
// const props = {
//   jump: (name: string) => {
//     router.push({ name })
//   }
// }

/**
 * 大部分业务无需设置 attrs
 * 此处修正 iframe 的 src，是防止github pages csp报错
 * 因为默认是只有 host+port，没有携带路径
 */
// const attrs = isProduction ? { src: hostMap('//localhost:8000/') } : {}

/**
 * 配置应用，主要是设置默认配置
 * preloadApp、startApp的配置会基于这个配置做覆盖
 */
// setupApp({
//   name: 'vite-vue3',
//   url: hostMap('//localhost:3001/'),
//   attrs,
//   exec: true,
//   props,
//   fetch: credentialsFetch,
//   plugins,
//   prefix: { 'prefix-dialog': '/dialog', 'prefix-location': '/location' },
//   degrade,
//   ...lifeCycles
// })
// setupApp({
//   name: 'child',
//   url: hostMap('//localhost:3003/'),
//   attrs,
//   exec: true,
//   props,
//   // 引入了的第三方样式不需要添加credentials
//   fetch: (url: string, options) =>
//     url.includes(hostMap('//localhost:3003/'))
//       ? credentialsFetch(url, options)
//       : window.fetch(url, options),
//   plugins,
//   prefix: { 'prefix-dialog': '/dialog', 'prefix-location': '/location' },
//   degrade,
//   ...lifeCycles
// })

// setupApp({
// name: 'system',
// url: hostMap('//localhost:3004/'),

// exec: false,

// 引入了的第三方样式不需要添加credentials
// fetch: (url: string, options) =>
//   url.includes(hostMap('//localhost:3004/'))
// ? credentialsFetch(url, options)
//     : window.fetch(url, options),
// plugins,
// prefix: { 'prefix-dialog': '/dialog', 'prefix-location': '/location' }
// degrade,
// ...lifeCycles
// })

// 预加载
// if (window.localStorage.getItem('preload') !== 'false') {
//   preloadApp({
//     name: 'sideBar',
//     url: '/home'
//   })
// }

const app = createApp(Layout)
app.use(WuJieVue)
app.use(router)
app.use(createPinia())
app.mount('#app')
