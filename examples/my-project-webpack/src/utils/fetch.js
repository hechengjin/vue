import axios from 'axios'
import { Message } from 'element-ui'

var myconfigTaoBao = {
  // baseURL: process.env.BASE_API_TAOBAO,
  timeout: 5000
}
var myconfig126 = {
  baseURL: process.env.BASE_API_126,
  timeout: 5000
}

// 创建axios实例
const instance = axios.create(myconfigTaoBao)

// request拦截器
instance.interceptors.request.use(config => {
  // Do something before request is sent
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
instance.interceptors.response.use(
  response => response,
  error => {
    console.log('err' + error)// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default instance
