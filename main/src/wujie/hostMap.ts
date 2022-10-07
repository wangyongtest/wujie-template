interface CHILDSYSTEM {
  [key: string]: string
}

const map: CHILDSYSTEM = {
  '//localhost:3003/': '//wujie-micro.github.io/demo-react17/'
}

export default function hostMap(host: string) {
  if (import.meta.env.NODE_ENV === 'production') return map[host]
  return host
}
