import server from '@/server-api/index'

// 封装接口类型为枚举类型
const enum USER_API_LIST {
  login = '/login'
}

// 登陆接口参数类型
export interface IUserData {
  userName: string
  passWord: string
}

export const login = async <T>(data: IUserData) => server.post<T>(USER_API_LIST.login, data)
