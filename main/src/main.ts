import { createApp } from 'vue'
import WuJieVue from 'wujie-vue3'
import { createPinia } from 'pinia'
import router from '~/router/index'
import Layout from '~/components/layout/index.vue'
import 'element-plus/dist/index.css'
import '~/assets/styles/common.scss'

const app = createApp(Layout)
app.use(WuJieVue)
app.use(router)
app.use(createPinia())
app.mount('#app')
