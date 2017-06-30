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
  private postList: IPost[] = []
  public async mounted() {
    await this.getPostList()
  }
  public async getPostList() {
    this.postList = await Posts.getPostList()
  }
}
