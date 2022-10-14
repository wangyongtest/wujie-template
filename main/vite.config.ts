import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import legacy from '@vitejs/plugin-legacy'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const pathSrc = path.resolve(__dirname, 'src')
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/assets/styles/index.scss" as *;`
      }
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    // ! enabled: true 这里用来解决 eslint报错的配置项，会根据filepath生成一个eslint 的配置文件，这个文件需要引入到eslintrc 的extends选项中
    // 由于仅需生成一次，所以生成完文件后，配置项改为false
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      eslintrc: { enabled: true },
      //  自动导入element plus 相关函数
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      // 自动导入element plus 相关组件
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
          directives: true,
          version: '2.1.5'
        })
      ]
    })
  ],
  resolve: {
    alias: [
      {
        find: '~/',
        replacement: `${pathSrc}/`
      }
    ]
  },
  server: {
    cors: true,
    host: 'localhost',
    port: 3000,
    // 方向代理  不需要配置跨域  http://127.0.0.1:3000/login
    proxy: {
      // http-proxy 在中间做了个中间层  客户端->(中间层*透明的* -> 真实服务器)
      '/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true, // 这里不加服务端无法拿到origin属性
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  // logLevel: 'error',
  build: {
    //target: 'es2015',
    minify: 'terser',
    // brotliSize: false,
    // 消除打包大小超过500kb警告
    chunkSizeWarningLimit: 5000,
    //remote console.log in prod
    terserOptions: {
      //detail to look https://terser.org/docs/api-reference#compress-options
      compress: {
        drop_console: false,
        pure_funcs: ['console.log', 'console.info'],
        drop_debugger: true
      }
    },
    //build assets Separate
    assetsDir: 'static/assets',
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
      }
    }
  }
})
