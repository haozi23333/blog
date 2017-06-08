<template>
  <div class="post">
      <article role="article" v-if="loaded">
        <h1 role="title">
          <router-link :to="postUrl">{{post.title}}</router-link>
        </h1>
        <time></time>
        <Markdown v-html="post.excerpt">
        </Markdown>
        <a href="" class="more">
          <router-link :to="postUrl">more</router-link>
        </a>
      </article>
  </div>
</template>
<script>
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import Markdown from '../../markdown/Markdown.vue'
  import LoadOne from '../../css-load/LoadOne.vue'
  import posts from '../../../api/posts'

  @Component({
    props: {
      postId: ''
    },
    components: {
      Markdown,
      LoadOne
    }
  })
  export default class PostListItem extends Vue {
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
      const post = await posts.getPostById(this.postId)
      if (post) {
        this.loaded = true
        this.post = post
      }
    }
  }
</script>
<style scoped lang="sass" rel="stylesheet/sass" media="all">
  @import "../../../assets/css/global.sass"

  .post
    border-bottom: 1px solid rgba($gray, 0.2)
    padding-bottom: 20px
    margin-bottom: 30px
    min-height: 150px
    flex: 0 0 1
    width: 100%

    &:last-child
      border: 0 solid

    h1[role="title"]
      margin-top: 0.7em
      margin-bottom: 2em

      a
        color: black
        font-size: 1.2em
        font-weight: 400
        padding-bottom: 3px

        &:hover
          border-bottom: 1.5px solid $green

    time
      display: block
      font-size: 0.8em
      margin-top: 5px
      margin-bottom: 8px
    .load
      height: 100%
      width: 100%
      max-height: 500px
      min-height: 150px

  article
    width: 100%

  .more
    display: block
    width: 100%
    text-align: right
    color: $green
</style>
