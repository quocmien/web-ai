import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  timeout: 2000000
})

service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['Authorization'] = 'Bearer ' + getToken()
    }
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
    /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

    /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    try {
      const status = res.status || 200
      if (status === 403) {
        window.location.replace('/')
      } else if (status === 400) {
        Message({
          message: res.message || 'Error',
          type: 'error',
          duration: 5 * 1000
        })
      }
    } catch (error) {
      console.log(error)
    }
    return res
  },
  error => {
    console.log('err' + error)
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
