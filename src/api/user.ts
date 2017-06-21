/**
 * Created by haozi on 2017/06/21.
 */

import Config from '../config/config'
import axios from 'axios'

export default class {
  static async login(username, password) {
    try {
      const res = await axios.post(`${Config.apiUrl}/sessions`, {
        username,
        password
      })
      if (res.data && res.status === 200) {
        return await axios.get(`${Config.apiUrl}/user/${username}`)
      } else {
        null
      }
    } catch (e) {
      return null
    }
  }
}
