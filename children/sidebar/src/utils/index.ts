
import { RouteItem } from '~/types/index'


// TODO:实现路由的扁平化
export const floatDataArray = (menuList:RouteItem[]):RouteItem[] => {
    return menuList.reduce((prev:RouteItem[], current:RouteItem) => {
      // console.log(prev, current)
      if(current.meta.level === 1 && !current?.children?.length){
        return  prev.concat(current)
      }else{
        return prev.concat(current.children!)
      }
    }, [])
}