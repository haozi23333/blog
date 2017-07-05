/**
 * Created by haozi on 6/14/2017.
 */

import Vue from 'vue'
import Config from '../config/config'
import axios from './http'
import toasted from '../util/toasted'

export default class Posts {
  static async getPostById(id: string): Promise<IPost | null> {
    const {
      data,
      status
    }  = await axios.get(`post/${id}`)
    return status === 200? data : null
  }

  /**
   * 获取 文章列表
   * @returns {Promise<Array>}
   */
  static async getPostList (param: string = '?isShow=true'): Promise<IPost[] | null> {
    const {
      data,
      status
    } = await axios.get(`posts${ param}`)
    return status === 200? data : null
  }

  /**
   * 保存数据
   * @param post
   * @returns {Promise<void>}
   */
  static async savePost (post): Promise<void> {
    await axios.put(`post/${post.postId}`, post)
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
   * (ノಠ益ಠ)ノ彡┻━┻  不对比了 快滚
   * @param oldObj
   * @param newObj
   */
  static diff (oldObj, newObj) {

  }

  static async createPost (): Promise<IPost|null> {
    const {
      data: {
        postId
      }
    } = await axios.post(`post`)
    return postId ? await this.getPostById(postId) : null
  }

  /**
   * 删除文章
   * @param postId
   * @returns {Promise<boolean>}
   */
  static async deletePost(postId: string): Promise<boolean> {
    const {status} = await axios.delete(`post/${postId}`)
    return status === 204
  }
}
