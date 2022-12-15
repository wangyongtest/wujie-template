/*
 * @Author: wy wang.yong@easttrans.cn
 * @Date: 2022-12-01 10:07:21
 * @LastEditors: wy wang.yong@easttrans.cn
 * @LastEditTime: 2022-12-09 14:52:54
 * @FilePath: \main\src\store\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// demo pinia示例

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  const doubleCount = computed(() => {
    return count.value * 2
  })

  const changeCount = (payload: number) => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        count.value += payload
        resolve()
      }, 1000)
    })
  }
  return { count, doubleCount, changeCount }
})
