export const themeStore = defineStore('theme', () => {
  const customTheme = ref('#FFFFFF')
  const getCustomTheme = computed(() => customTheme.value)

  const changeTheme = (payload: string) => {
    return new Promise<void>((resolve) => {
      customTheme.value = payload
      resolve()
    })
  }

  return { customTheme, getCustomTheme, changeTheme }
})
