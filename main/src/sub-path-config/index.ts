/*
 * @Author: wy wang.yong@easttrans.cn
 * @Date: 2022-12-08 19:49:20
 * @LastEditors: wy wang.yong@easttrans.cn
 * @LastEditTime: 2022-12-15 14:49:59
 * @FilePath: \main\src\sub-path-config\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const paths = import.meta.env
interface ConfigUlr {
  [key: string]: string
}

// TODO: 配置子应用地址
export const subPaths: ConfigUlr = {
  person: paths.VITE_SUB_PERSON,
  system: paths.VITE_SUB_SYSTEM
}
