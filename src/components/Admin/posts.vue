<template>
  <div class="admin-posts">
    <div class="post-list">
      <ul>
        <li v-for="post in posts" @click="preview(post.postId)">
          title: {{ post.title}}
        </li>
      </ul>
    </div>
    <div class="admin-preview">
      <div>
        <a @click="edit">Edit</a>
        <a>Preview</a>
      </div>
      <Markdown v-html="selectpost.html"></Markdown>
    </div>
  </div>
</template>
<script type="text/javascript">

  import Vue from 'vue'
  import Component from 'vue-class-component'
  import Markdown from '../markdown/Markdown.vue'
  import posts from '../../api/posts'
  @Component({
    components: {
      Markdown
    }
  })
  export default class AdminPosts extends Vue {
    posts = []
    selectpost = {
      html: '????'
    }
    mounted () {
      this.loadPosts().then(_ => {})
    }

    async loadPosts () {
      this.posts = await posts.getPostList()
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
</script>
<style scoped lang="sass" rel="stylesheet/sass" media="all">

  @import "../../assets/css/global"
  @import "../../assets/css/mq"

  .admin-posts
    display: flex
    justify-content: flex-start

    .post-list
      flex: 0 0 400px
      height: 100vh
      overflow-y: auto
  .admin-preview
    min-width: 250px
    width: 1px
    flex: 1 0
    height: 100vh
    overflow-y: auto
</style>
