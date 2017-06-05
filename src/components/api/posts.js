/**
 * Created by haozi on 2017/06/05.
 */
import Vue from 'vue'

const apiUrl = 'http://haozi.com/api'

export class posts {
  static async getPostById (id) {
    try {
      return (await Vue.http.get(`${apiUrl}/posts/${id}`)).body
    } catch (e) {
      return {}
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
