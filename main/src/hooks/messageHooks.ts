import { ElMessage } from 'element-plus'

interface OptionsTypes {
  message: string
  type?: 'success' | 'warning' | 'info' | 'error'
  showClose?: boolean
  center?: boolean
  grouping?: boolean
}

export const useMessageDialog = () => {
  const showMessageBox = (options: OptionsTypes) => {
    const {
      message = '',
      type = 'success',
      showClose = false,
      center = false,
      grouping = false
    } = options
    console.log(options)
    ElMessage({
      message: message,
      type: type,
      showClose: showClose,
      center: center,
      grouping: grouping
    })
  }
  return { showMessageBox }
}
