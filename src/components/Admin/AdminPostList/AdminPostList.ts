/**
 * Created by haozi on 6/16/2017.
 */

import Vue from 'vue'
import {Component} from 'vue-property-decorator'
import Posts from '../../../api/posts'

@Component({
  template: require('./AdminPostList.html'),
  components: {
  }
})
export default class extends Vue {
  posts = []
  selectpost = {
    html: '????'
  }
  mounted () {
    this.loadPosts().then(_ => {})
  }

  async loadPosts () {
    this.posts = await Posts.getPostList()
  }

  preview (postId) {
    this.posts.map(v => {
      if (v.postId === postId) {
        this.selectpost = v
      }
    })
  }

  edit () {
    this.$router.push(`/admin/editor/${this.selectpost.postId}`)
  }
}