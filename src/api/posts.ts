/**
 * Created by haozi on 6/14/2017.
 */

import Vue from 'vue'
import Config from '../config/config'
import axios from './http'

export default class Posts {
  static async getPostById(id: string) {
    try {
      const res = await axios.get(`${Config.apiUrl}/post/${id}`)
      if (res.data && res.status === 200) {
        return res.data
      }
      return null
    } catch (e) {
      return null
    }
  }

  /**
   * 获取 文章列表
   * @returns {Promise<Array>}
   */
  static async getPostList (): Promise<any[]> {
    try {
      const res = await axios.get(`${Config.apiUrl}/posts`)
      if (res.data && res.status === 200) {
        return res.data
      }
    } catch (e) {
      return []
    }
  }

  /**
   * 保存数据
   * @param post
   * @returns {Promise<void>}
   */
  static async savePost (post) {
    await axios.get(`${Config.apiUrl}/post/${post.postId}`, post)
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

  /**
   * 对比两个对象的差异
   * 1. 直接记录差异(hook set
   * 2. 通过对比获得差异(遍历
   * @param oldObj
   * @param newObj
   */
  static diff (oldObj, newObj) {

  }
}
