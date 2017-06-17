/**
 * Created by haozi on 6/16/2017.
 */

import './AdminPostList.sass'
import Vue from 'vue'
import {Component} from 'vue-property-decorator'
import Posts from '../../../api/posts.ts'
import {Markdown} from '../../'

@Component({
  template: require('./AdminPostList.html'),
  components: {
    Markdown
  },
  name: 'AdminPostList'
})
export default class extends Vue {
  posts: any[] = []
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
