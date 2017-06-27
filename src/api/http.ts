/**
 * Created by haozi on 2017/06/22.
 */

/**
 * 这个文件封装了 axios
 * 添加了 baseURL 和 httpCode 的拦截器
 */
import Vue from 'vue'
import axios from 'axios'
import config from '../config/config'
import router from '../router'

// axios 配置
axios.defaults.timeout = 5000
axios.defaults.baseURL = config.apiUrl

axios.interceptors.response.use((response) => {
  return response
}, (error) => {
  if (error.response) {
    console.log(error.response.status)
    switch (error.response.status) {
      /**
       * 不存在 = =
       */
      case 404:
        break
      /**
       * 没有权限
       */
      case 401:
        Vue.toasted.success('老哥你没有权限访问这个东西, 尝试登录吧~', {
          theme: "outline",
          position: "bottom-center",
          duration : 1500
        })
        router.replace({
          path: 'login'
        })
        break
      case 400:
        Vue.toasted.error(error.response.data.message, {
          theme: "outline",
          position: "bottom-center",
          duration : 1500
        })
        break
    }
    return Promise.reject(error.response.data)
  }
})

export default axios
