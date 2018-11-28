import axios from 'axios'
import qs from 'querystring'
// 响应时间
axios.defaults.timeout = 10000
// axios.defaults.baseURL = 'http://192.168.8.8:5888/website'
axios.defaults.baseURL = 'https://mp.chikalicious.cn/website'
// 添加凭证
axios.defaults.withCredentials = true
// http请求拦截器
axios.interceptors.request.use(
  config => {
    // 修改了axios的post调用方法，将post参数转化成键值对
    if (config.method === 'post' || config.method === 'put') {
      if (config.headers['Content-Type'] !== 'multipart/form-data') {
        config.data = qs.stringify(config.data)
      }
    }
    return config
  },
  error => {
    return Promise.reject(error)
  })

// http响应拦截器
axios.interceptors.response.use(
  response => {
    response.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    return response
  },
  error => {
    return Promise.reject(error)
  })
export default axios
