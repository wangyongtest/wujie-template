import type { App } from "vue";

// TODO: 需要引入接口返回的 权限数据
const permission = ['user:add', 'user:del']


export const btnAuthDiv = {
  install: (app:App) => {
    app.directive('btnAuth', {
      mounted(el:any, {value}) {
        if(!permission.includes(value)){
          // TODO: 存在权限的 展示 否则 移除 dom 元素
          el.style.display = 'none'
          el.parentNode.removeChild(el)
        }
      }
    });
  }
}

