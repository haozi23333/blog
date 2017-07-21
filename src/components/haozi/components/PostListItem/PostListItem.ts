/**
 * Created by haozi on 6/14/2017.
 */
import './PostListItem.sass'
import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from 'vue-property-decorator'
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
  private post: IPost
  @Prop()
  private index: number

  private postUrl = `/post/${this.post.postId}`

  public mounted () {
    this.post.excerpt =
      `<h1 role="title">
            <a href="${this.postUrl}">${this.post.title}</a>
        </h1>
        <time>${formatDate(this.post.createDate)}</time>`
      + this.post.excerpt
  }

  public getExcerpt () {

  }
}
