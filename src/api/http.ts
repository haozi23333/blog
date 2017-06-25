/**
 * Created by haozi on 2017/06/22.
 */

/**
 * 这个文件封装了 axios
 * 添加了 baseURL 和 httpCode 的拦截器
 */

import axios from 'axios'
import config from '../config/config'
import router from '../router'
import main from '../store/main'
import mainTypes from '../store/mainTypes'

// axios 配置
axios.defaults.timeout = 5000
axios.defaults.baseURL = config.apiUrl

axios.interceptors.response.use((response) => {
  return response
}, (error) => {
  if (error.response) {
    switch (error.response.status) {
      /**
       * 不存在 = =
       */
      case '404':
        break
      /**
       * 没有权限
       */
      case '401':
        main.dispatch(mainTypes.LOGOUT)
        router.replace({
          path: 'login'
        })
        break
    }
    return Promise.reject(error.response.data)
  }
})

export default axios
