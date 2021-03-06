import axios from 'axios'
import store from '@/store'
 // 创建axios实例
const service = axios.create({
  baseURL: ' https://easy-mock.com/mock/5b14daa717d97b289c30cd93/example/smart/',
   // baseURL: '/smart/',
  timeout: 15000 ,// 请求超时时间
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: [function (data) {
    // Do whatever you want to transform the data
    let ret = ''
    for (let it in data) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret
  }],
})

service.interceptors.response.use(
    function(response) {
      //请求正常则返回
      return Promise.resolve(response)
    },
    function(error) {
      // 请求错误则向store commit这个状态变化
      const httpError= { 
        hasError:true,
        status:error.response.status,
        statusText:error.response.statusText
      }
      store.commit('ON_HTTP_ERROR', httpError)
      return Promise.reject(error)
    }
  )

  export default service