import flyio from 'flyio'
import config from '@/config'

// request拦截器
flyio.interceptors.request.use((conf) => {
  conf.baseURL = config.baseURL
  conf.headers['Content-Type'] = 'application/json;charset=UTF-8'
  conf.timeout = 0
  return conf
})

// respone拦截器
flyio.interceptors.response.use(
  ({ data }) => {
    const status = Number(data.status)
    if (status !== 200) {
      alert(data.message)
      return Promise.reject(data)
    }
    return data
  },
  (error) => {
    // 这里是返回状态码不为200时候的错误处理
    const err = {}
    err.message = error.message || '未知错误'
    if (error.response) {
      err.status = error.response.status
      const messages = {
        400: '请求错误',
        401: '未授权，请登录',
        403: '拒绝访问',
        404: `请求地址出错 ${error.response.config.url}`,
        408: '请求超时',
        500: '服务器内部错误',
        501: '服务未实现',
        502: '网关错误',
        503: '服务不可用',
        504: '网关超时',
        505: 'HTTP版本不受支持'
      }
      if (messages[err.status]) {
        err.message = messages[err.status]
      }
    }
    return Promise.reject(error)
  }
)
