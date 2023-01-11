import { ElIcon } from 'element-plus'

export default defineComponent({
  components: {
    ElIcon
  },
  setup(props, { attrs }) {
    // TODO:JSX 元素类型“attrs.witchIcon”不具有任何构造签名或调用签名。ts(2604)
    // 解决以上 jsx 语法红色波浪
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const iconTag = <attrs.witchIcon />
    return () => (
      <>
        <el-icon size={attrs.size || 16} color={attrs.color || '##ffffff'}>
          {iconTag}
        </el-icon>
      </>
    )
  }
})
