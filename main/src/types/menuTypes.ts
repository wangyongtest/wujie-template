export interface MenuTagItem {
  path: string
  system: string
  name: string
  query?: {
    [key: string]: string
  }
}
