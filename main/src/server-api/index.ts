import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

export interface ResponseData<T> {
  code: number
  data?: T
  msg?: string
  // 存在其他属性继续添加
}

class HttpRequest {
  public baseURL = import.meta.env.DEV ? '/api' : '/'
  public timeout = 3000

  // 每次请求都创建一个单独的实例，请求之间互不影响
  public request(options: AxiosRequestConfig) {
    const instance = axios.create()
    options = this.mergeOptions(options)
    this.setInterceptors(instance)
    return instance(options) // 最终发出的核心请求
  }

  // 设置请求和响应拦截器
  setInterceptors(instance: AxiosInstance) {
    instance.interceptors.request.use(
      (config) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        config.headers!['token'] = 'token'
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        config.headers!['Content-Type'] = 'application/json'
        return config
      },
      (err) => {
        return Promise.reject(err)
      }
    )

    instance.interceptors.response.use(
      (response) => {
        const { code = 0 } = response
        if (code !== 200) {
          return Promise.reject(response)
        }
        //  403 404
        return response
      },
      (err) => {
        return Promise.reject(err)
      }
    )
  }

  // 合并请求参数
  mergeOptions(options: AxiosRequestConfig) {
    return Object.assign(
      {
        baseURL: this.baseURL,
        timeout: this.timeout
      },
      options
    )
  }

  // 以下为定义 get post 请求
  public get<T>(url: string, data: unknown): Promise<ResponseData<T>> {
    return this.request({
      method: 'get',
      url,
      params: data
    }).then(
      (res) => {
        return Promise.resolve(res.data)
      },
      (err: string) => {
        return Promise.reject(err)
      }
    )
  }

  public post<T>(url: string, data: unknown): Promise<ResponseData<T>> {
    return this.request({
      method: 'post',
      url,
      data
    }).then(
      (res) => {
        return Promise.resolve(res.data)
      },
      (err: string) => {
        return Promise.reject(err)
      }
    )
  }
}

export default new HttpRequest()
