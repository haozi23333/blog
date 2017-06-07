/**
 * Created by haozi on 2017/06/05.
 */
import Vue from 'vue'

const apiUrl = 'http://127.0.0.1:3000/api'

export default class posts {
  static async getPostById (id) {
    try {
      const res = await Vue.http.get(`${apiUrl}/post/${id}`)
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

  /**
   * 获取目录结果类似
   * {
   *  key(目录名称): 层级
   * }
   * @param html
   */
  static getPostContents (html) {
    const list = html.match(/<h\d.*?>/g)
    if (!list) {
      return null
    }
    return list.map(v => [v.match(/id="(.*?)"/)[1], v.match(/h(\d)/)[1]])
  }
}
