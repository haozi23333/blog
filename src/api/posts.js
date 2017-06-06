/**
 * Created by haozi on 2017/06/05.
 */
import Vue from 'vue'

const apiUrl = 'http://haozi.com/api'

export class posts {
  static async getPostById (id) {
    try {
      const res = await Vue.http.get(`${apiUrl}/posts/${id}`)
      if (res.body && res.status === 200) {
        return res.body
      }
      return null
    } catch (e) {
      return null
    }
  }
  static async getPostList () {
    try {
      return (await Vue.http.get(`${apiUrl}/posts`)).body
    } catch (e) {
      return []
    }
  }
}
