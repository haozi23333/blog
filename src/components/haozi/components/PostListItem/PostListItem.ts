/**
 * Created by haozi on 6/14/2017.
 */
import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from 'vue-property-decorator'
import Posts from '../../../../api/posts'
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
  postUrl = `/haozi/post/${this.postId}`
  post = {
    title: '',
    html: '',
    excerpt: ''
  }
  mounted () {
//      posts.getPostById(this.postId).then()
    this.postId = this.$route.params.postId || this.postId
    this.getData().then(() => {})
  }
  async getData () {
    const post = await Posts.getPostById(this.postId)
    if (post) {
      this.loaded = true
      this.post = post
      this.post.excerpt = (`<h1 role="title">
      <router-link :to="postUrl">${this.post.title}</router-link>
    </h1>
    <time>${formatDate(this.post.createDate)}</time>` + this.post.excerpt)
    }
  }
}
