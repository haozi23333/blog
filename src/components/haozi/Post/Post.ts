/**
 * Created by haozi on 6/15/2017.
 */

import './Post.sass'

import Vue from 'vue'
import Component from 'vue-class-component'
import {Markdown, loadOne} from '../../'
import {Prop} from 'vue-property-decorator'
import {formatDate} from '../../../util/formatDate'
import haoziStore from '../../../store/haozi'
import haoziTypes from '../../../store/haoziTypes'
import Posts from '../../../api/posts.ts'
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
  @Prop({
    default: ''
  })
  private postId: string
  private store = haoziStore
  private loaded = false
  private post = {} as IPost

  public async mounted () {
    this.post.postId = this.$route.params.postId || this.postId
    await this.getData()
  }

  public destroyed () {
    this.store.commit(haoziTypes.CLOSE_POST)
  }
  private async getData () {
    const post = await Posts.getPostById(this.post.postId)
    if (post) {
      this.store.commit(haoziTypes.OPEN_POST, post)
      this.loaded = true
      this.post = post
      this.post.createDate = formatDate(this.post.createDate)
    }
  }
}
