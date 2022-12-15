const paths = import.meta.env
interface ConfigUlr {
  [key: string]: string
}

// TODO: 配置子应用地址
export const subPaths: ConfigUlr = {
  person: paths.VITE_SUB_PERSON,
  system: paths.VITE_SUB_SYSTEM
}
