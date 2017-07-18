/**
 * Created by haozi on 6/15/2017.
 */

import './PostList.sass'

import Vue from 'vue'
import Component from 'vue-class-component'
import {PostListItem} from '../index'
import Posts from "../../../api/posts";

@Component({
  template: require('./PostList.html'),
  components: {
    PostListItem
  },
  name: 'PostList'
})
export default class extends Vue {
  // 当前page页
  private postsPage = 1
  // 下一页的链接， 没有的时候为空
  private next = ""
  // 上一页的链接， 没有的时候为空
  private prev = ""
  // 文章数组
  private data: IPost[] = []

  public async mounted() {
    await this.getPostList("", 1, 10)
  }

  /**
   * 下一页
   * @returns {Promise<void>}
   */
  public async nextPage() {
    await this.getPostList("", --this.postsPage, 10)
  }

  /**
   * 上一页
   * @returns {Promise<void>}
   */
  public async prevPage() {
    await this.getPostList("", ++this.postsPage, 10)
  }

  public async getPostList(param: string = "", page: number = 1, limit: number = 10) {
    const posts = await Posts.getPostList(`?page=${page}&limit=${limit}${param !== "" ? "&" + param : ""}`)
    for (let key in posts) {
      this[key] = posts[key]
    }
  }
}
