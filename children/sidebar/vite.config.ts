
import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import JSX from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const pathSrc = resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    JSX(),
    // ! enabled: true 这里用来解决 eslint报错的配置项，会根据filepath生成一个eslint 的配置文件，这个文件需要引入到eslintrc 的extends选项中
    // 由于仅需生成一次，所以生成完文件后，配置项改为false
    AutoImport({
      imports: ['vue', 'vue-router','pinia'],
      eslintrc: { enabled: true },
      //  自动导入element plus 相关函数
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      // 自动导入element plus 相关组件
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: [
      {
        find: '~/',
        replacement: `${pathSrc}/`
      },
    ],
  },
  server: {
    host: 'localhost',
    port: 3002,
    cors: true,
    proxy: {},
  },
})
