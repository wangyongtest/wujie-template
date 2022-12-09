# wujie

## name ：子应用唯一标识符

## url : 子应用的路径地址

## html : 子应用的html，设置后子应用将直接读取该值，没有设置则子应用通过url请求获取

## props : 注入给子应用的数据

### exec为true此时子应用代码会预执行，如果子应用运行依赖props的数据则须传入props或者子应用做好兼容props不存在，否则子应用运行可能报错

## attrs : 自定义iframe属性，子应用运行在iframe内，attrs可以允许用户自定义iframe的属性

## replace : 全局代码替换钩子

### replace函数可以在运行时处理子应用的代码，如果子应用不方便修改代码，可以在这里进行代码替换，子应用的html、js、css代码均会做替换

## fetch : 自定义 fetch，添加自定义fetch后，子应用的静态资源请求和采用了 fetch 的接口请求全部会走自定义fetch

### 对于需要携带 cookie 的请求，可以采用自定义 fetch 方式实现：(url, options) => window.fetch(url, { ...options, credentials: "include" })

## alive : 保活模式，子应用实例instance和webcomponent都不会销毁，子应用的状态和路由都不会丢失，切换子应用只是对webcomponent和容器的热插拔

### 如果子应用不想做生命周期改造，子应用切换又不想有白屏时间，可以采用保活模式

### 如果主应用上有多个菜单栏跳转到子应用的不同页面，此时不建议采用保活模式。因为子应用在保活状态下startApp无法更改子应用路由，不同菜单栏无法跳转到指定子应用路由，推荐单例模式

### 预执行模式结合保活模式可以实现类似ssr的效果，包括页面数据的请求和渲染全部提前完成，用户可以瞬间打开子应用

## exec : 预执行模式，为false时只会预加载子应用的资源，为true时会预执行子应用代码，极大的加快子应用打开速度

## fiber : js 的执行模式，由于子应用的执行会阻塞主应用的渲染线程，当设置为true时js采取类似react fiber的模式方式间断执行，每个 js 文件的执行都包裹在requestidlecallback中，每执行一个js可以返回响应外部的输入，但是这个颗粒度是js文件，如果子应用单个js文件过大，可以通过拆包的方式降低达到fiber模式效益最大化

### 打开主应用就需要加载的子应用可以将fiber设置为false来加快加载速度;其他场景建议采用默认值

## degrade : 主动降级设置，无界方案采用了proxy和webcomponent等技术，在有些浏览器上可能出现不兼容的情况，此时无界会自动进行降级，采用一个的iframe替换webcomponent，用Object.defineProperty替换proxy，理论上可以兼容到 IE 9，但是用户也可以将degrade设置为true来主动降级

### 一旦采用降级方案，弹窗由于在 iframe 内部将无法覆盖整个应用

## plugins :  无界插件，在运行时动态的修改子应用代理

``` ts
interface ScriptObjectLoader {
  /** 脚本地址，内联为空 */
  src?: string;
  /** 脚本是否为module模块 */
  module?: boolean;
  /** 脚本是否为async执行 */
  async?: boolean;
  /** 脚本是否设置crossorigin */
  crossorigin?: boolean;
  /** 脚本crossorigin的类型 */
  crossoriginType?: "anonymous" | "use-credentials" | "";
  /** 内联script的代码 */
  content?: string;
  /** 执行回调钩子 */
  callback?: (appWindow: Window) => any;
}

interface StyleObjectLoader {
  /** 样式地址， 内联为空 */
  src?: string;
  /** 样式代码 */
  content?: string;
}

type eventListenerHook = (
  iframeWindow: Window,
  type: string,
  handler: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions
) => void;

interface plugin {
  /** 处理html的loader */
  htmlLoader?: (code: string) => string;
  /** js排除列表 */
  jsExcludes?: Array<string | RegExp>;
  /** js忽略列表 */
  jsIgnores?: Array<string | RegExp>;
  /** 处理js加载前的loader */
  jsBeforeLoaders?: Array<ScriptObjectLoader>;
  /** 处理js的loader */
  jsLoader?: (code: string, url: string, base: string) => string;
  /** 处理js加载后的loader */
  jsAfterLoaders?: Array<ScriptObjectLoader>;
  /** css排除列表 */
  cssExcludes?: Array<string | RegExp>;
  /** css忽略列表 */
  cssIgnores?: Array<string | RegExp>;
  /** 处理css加载前的loader */
  cssBeforeLoaders?: Array<StyleObject>;
  /** 处理css的loader */
  cssLoader?: (code: string, url: string, base: string) => string;
  /** 处理css加载后的loader */
  cssAfterLoaders?: Array<StyleObject>;
  /** 子应用 window addEventListener 钩子回调 */
  windowAddEventListenerHook?: eventListenerHook;
  /** 子应用 window removeEventListener 钩子回调 */
  windowRemoveEventListenerHook?: eventListenerHook;
  /** 子应用 document addEventListener 钩子回调 */
  documentAddEventListenerHook?: eventListenerHook;
  /** 子应用 document removeEventListener 钩子回调 */
  documentRemoveEventListenerHook?: eventListenerHook;
  /** 子应用 向body、head插入元素后执行的钩子回调 */
  appendOrInsertElementHook?: <T extends Node>(element: T, iframeWindow: Window) => void;
  /** 用户自定义覆盖子应用 window 属性 */
  windowPropertyOverride?: (iframeWindow: Window) => void;
  /** 用户自定义覆盖子应用 document 属性 */
  documentPropertyOverride?: (iframeWindow: Window) => void;
}
```

## beforeLoad

## beforeMount

## afterMount

## beforeUnmount

## afterUnmount

## activated

## deactivated

## loadError : 生命周期钩子，子应用加载资源失败后触发

### 如果子应用没有做生命周期改造，beforeMount、afterMount、beforeUnmount、afterUnmount 这四个生命周期都不会调用，非保活子应用 activated、deactivated 这两个生命周期不会调用
