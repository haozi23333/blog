/**
 * Created by haozi on 2017/06/21.
 */

import Config from '../config/config'
import axios from './http'
import * as ts from "typescript/lib/tsserverlibrary";
import Err = ts.server.Msg.Err;

const userAPI = axios.create({
  baseURL: Config.apiUrl
})

export default class {
  static async login(username, password) {
    const res = await userAPI.post(`sessions`, {
      username,
      password
    })
    if (res.data && res.status === 201) {
      return await this.getUserInfo(username)
    }
    throw new Error()
  }
  static async getUserInfo (username) {
    const res = await userAPI.get(`user/${username}`)
    if (res.data && res.status === 200) {
      return
    } else {
      return null
    }
  }
  static async updateUserInfo (username, info) {
    const res = await userAPI.put(`user/${username}`, info)
    if (res.data && res.status === 200) {
      return true
    } else {
      return false
    }
  }
}
