/**
 * Created by haozi on 6/14/2017.
 */
import './PostListItem.sass'
import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from 'vue-property-decorator'
import Posts from '../../../../api/posts.ts'
import {Markdown} from '../../../index'
import {formatDate} from '../../../../util/formatDate'

@Component({
  template: require('./PostListItem.html'),
  components: {
    Markdown
  },
  name: 'PostListItem'
})
export default class extends Vue {
  @Prop()
  postId:string
  loaded = false
  postUrl = `/post/${this.postId}`
  post = {
    title: '',
    html: '',
    excerpt: ''
  }
  public mounted () {
    this.postId = this.$route.params.postId || this.postId
    this.getData().then(() => {})
  }
  public async getData () {
    const post = await Posts.getPostById(this.postId)
    if (post) {
      this.loaded = true
      this.post = post
      this.post.excerpt = (`<h1 role="title">
      <a href="${this.postUrl}">${this.post.title}</a>
    </h1>
    <time>${formatDate(this.post.createDate)}</time>` + this.post.excerpt)
    }
  }
}
