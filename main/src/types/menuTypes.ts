export interface MenuTagItem {
  path: string
  system: string
  name: string
  showClose?: boolean
  isActive?: boolean
  query?: {
    [key: string]: string
  }
}

export interface DefaultTagsItem {
  path: string
  name: string
  system: string
}

export interface TagItem {
  label?: string
  value?: string
}
