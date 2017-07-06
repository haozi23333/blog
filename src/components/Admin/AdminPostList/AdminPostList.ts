/**
 * Created by haozi on 6/16/2017.
 */

import './AdminPostList.sass'
import Vue from 'vue'
import {Component} from 'vue-property-decorator'
import Posts from '../../../api/posts.ts'
import {Markdown} from '../../'
import adminStore from '../../../store/admin'

@Component({
  template: require('./AdminPostList.html'),
  components: {
    Markdown
  },
  name: 'AdminPostList'
})
export default class extends Vue {

  private posts: IPost[] = []

  private selectpost = {
    html: '????'
  } as IPost

  public mounted () {
    this.loadPosts().then(_ => {})
  }

  public async loadPosts () {
    this.posts = await Posts.getPostList('?isShow=true')
  }

  public preview (postId) {
    this.posts.map(v => {
      if (v.postId === postId) {
        this.selectpost = v
      }
    })
  }

  public edit () {
    this.$router.push(`/admin/editor/${this.selectpost.postId}`)
  }

  /**
   * 查询本地是否有未完成的编辑
   * @param post
   * @returns {any|boolean}
   */
  public ifHasLocalStorageVersion(post: IPost): boolean {
    const localPost = JSON.parse(localStorage.getItem(`post-${adminStore.state.username}-${post.postId}`))
    // console.log(localPost && post.edit)
    return localPost && localPost.edit
  }
}
