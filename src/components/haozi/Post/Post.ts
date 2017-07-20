/**
 * Created by haozi on 6/15/2017.
 */

import './Post.sass'

import Vue from 'vue'
import {Markdown, loadOne} from '../../'
import {Component} from 'vue-property-decorator'
import {formatDate} from '../../../util/formatDate'
import haoziStore from '../../../store/haozi'
import haoziTypes from '../../../store/haoziTypes'
import Posts from '../../../api/posts'
import Disqus from '../Disqus/Disqus'

@Component({
  template: require('./Post.html'),
  name: 'Post',
  components: {
    Markdown,
    loadOne,
    Disqus
  }
})
export default class extends Vue {
  private postId: number
  private store = haoziStore
  private loaded = false
  private post = {} as IPost

  public async mounted () {
    this.postId = Number(this.$route.params.postId || this.postId)
    await this.getData()
  }

  /**
   * 获取数据
   * @returns {Promise<void>}
   */
  private async getData () {
    const post = await Posts.getPostById(this.postId)
    if (post) {
      this.store.commit(haoziTypes.OPEN_POST, post)
      this.loaded = true
      this.post = post
      this.post.createDate = formatDate(this.post.createDate)
    }
  }
}
