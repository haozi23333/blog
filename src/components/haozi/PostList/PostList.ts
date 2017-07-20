/**
 * Created by haozi on 6/15/2017.
 */

import './PostList.sass'

import Vue from 'vue'
import {PostListItem} from '../index'
import Posts from "../../../api/posts";
import {Prop, Component, Watch} from "vue-property-decorator";
import http from "../../../api/http";

interface PostListData {
  prev: string,
  next: string,
  data: IPost[]
}

@Component({
  template: require('./PostList.html'),
  components: {
    PostListItem
  },
  name: 'PostList'
})
export default class extends Vue {
  @Prop({
    default: null
  })
  public type: string
  // 默认参数
  @Prop({
    default: ''
  })
  public param: string
  // 每页的条数
  @Prop({
    default: 10
  })
  public limit: number
  // 当前page页
  public page: number = 1
  // 下一页的链接， 没有的时候为空
  private next = ''
  // 上一页的链接， 没有的时候为空
  private prev = ''

  private posts = {} as PostListData

  public async mounted() {
    if (this.$route.query.page) {
      this.page = Number(this.$route.query.page) || 1
    } else {
      this.page = 1
    }
    await this.getPostList(this.page)
  }

  @Watch('page')
  public async switchPage(nowPage: number) {
    await this.getPostList(nowPage)
  }

  @Watch('posts')
  public onPostsChange(posts: PostListData) {
    this.next = posts.next !== '' ?  `/posts${(this.type ? "/" + this.type : '') + posts.next.match(/\?.*/).shift()}`  : ''
    this.prev = posts.prev !== '' ?  `/posts${(this.type ? "/" + this.type : '') + posts.prev.match(/\?.*/).shift()}`  : ''
  }

  @Watch('$route')
  public onRouteChange(to, form) {
    if (to.params) {
      if (to.query.page) {
        this.page = Number(to.query.page) || 1
      }
    }
  }

  public async getPostList(page: number = 1) {
    const {
      data,
      status
    } = await http.get(`/posts${this.type ? "/" + this.type + "/" : ''}?page=${page}`)
    if (data && status === 200) {
      console.log(data)
      this.posts = data
    }
  }
}
