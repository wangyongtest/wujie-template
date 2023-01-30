export const themeStore = defineStore('themeColor', () => {
  const customTheme = reactive({
    themeColor: '#FFFFFF'
  })

  const getCustomTheme = computed(() => customTheme.themeColor)

  const changeTheme = (payload: string) => {
    console.warn(payload, 'payload')
    return new Promise<void>((resolve) => {
      customTheme.themeColor = payload
      resolve()
    })
  }

  return { changeTheme, customTheme, getCustomTheme }
})
