import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import legacy from '@vitejs/plugin-legacy'
import Inspect from 'vite-plugin-inspect'

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
      // 浏览器兼容性插件
      targets: ['defaults', 'not IE 11']
    }),
    // ! enabled: true 这里用来解决 eslint报错的配置项，会根据filepath生成一个eslint 的配置文件，这个文件需要引入到eslintrc 的extends选项中
    // 由于仅需生成一次，所以生成完文件后，配置项改为false
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      eslintrc: { enabled: true },
      //  自动导入element plus 相关函数
      resolvers: [
        ElementPlusResolver(),
        // 自动导入图标组件
        IconsResolver({
          prefix: 'Icon'
        })
      ]
    }),
    Components({
      // 自动导入element plus 相关组件
      resolvers: [
        // 自动注册图标组件
        IconsResolver({
          // 自动导入的目录
          // dirs: ['src/components/common],
          enabledCollections: ['ep']
        }),
        ElementPlusResolver({
          importStyle: 'sass',
          directives: true,
          version: '2.1.5'
        })
      ],
      dts: path.resolve(pathSrc, 'components.d.ts')
    }),
    Icons({
      autoInstall: true
    }),
    Inspect()
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
    //target: 'es2015', // js兼容处理
    // cssTarget: 'chrome49', // css兼容处理
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
