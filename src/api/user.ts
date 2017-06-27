/**
 * Created by haozi on 2017/06/21.
 */

import Config from '../config/config'
import axios from './http'
import * as ts from "typescript/lib/tsserverlibrary";
import Err = ts.server.Msg.Err;
import router from "../router/index";

export default class {
  /**
   * 登录
   * @param username  用户名
   * @param password  密码
   * @returns {Promise<undefined|null>}
   */
  static async login(username, password) {
    const res = await axios.post(`sessions`, {
      username,
      password
    })
    if (res.data && res.status === 201) {
      return true
    }
  }

  /**
   *  获取用户信息 -> 需要cookie的
   * @param username
   * @returns {Promise<null>}
   */
  static async getUserInfo (username) {
    const res = await axios.get(`user/${username}`)
    if (res.data && res.status === 200) {
      return res.data
    } else {
      return null
    }
  }

  /**
   * 更新用户信息
   * @param username
   * @param info
   * @returns {Promise<boolean>}
   */
  static async updateUserInfo (username, info) {
    const res = await axios.put(`user/${username}`, info)
    if (res.data && res.status === 200) {
      return true
    } else {
      return false
    }
  }

  static async logout(username) {
    const res = await axios.delete(`sessions/logout`)
    if (res.data && res.status === 204) {
      router.push({
        path: '/login'
      })
    } else {
      return false
    }
  }
}
