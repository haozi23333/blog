<template>
  <div class="post">
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <article role="article" v-if="loaded">
        <h1 role="title">
          <router-link :to="this.post.postId">{{post.title}}</router-link>
        </h1>
        <time>{{ post.createDate }}</time>
        <Markdown v-html="post.html">
        </Markdown>
      </article>
    </transition>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <LoadOne class="load" v-if="!loaded"></LoadOne>
    </transition>
  </div>
</template>
<script>
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import Markdown from '../markdown/-Markdown.vue'
  import LoadOne from '../css-load/-LoadOne.vue'
  import posts from '../../api/posts'
  import {formatDate} from '../../util/formatDate'
  import {store} from '../../store/haozi'
  import {OPEN_POST, CLOSE_POST} from '../../store/haoziTypes'

  @Component({
    props: {
      postId: ''
    },
    components: {
      Markdown,
      LoadOne
    }
  })
  export default class Post extends Vue {
    store = store
    loaded = false
    post = {
      postId: '',
      title: '',
      html: '',
      excerpt: '',
      createDate: ''
    }
    mounted () {
      this.post.postId = this.$route.params.postId || this.postId
      this.getData().then(() => {})
    }
    destroyed () {
      this.store.commit(CLOSE_POST)
    }
    async getData () {
      const post = await posts.getPostById(this.post.postId)
      if (post) {
        this.store.commit(OPEN_POST, post)
        this.loaded = true
        this.post = post
        this.post.createDate = formatDate(this.post.createDate)
      }
    }

  }
</script>
<style scoped lang="sass" rel="stylesheet/sass" media="all">
  @import "../../assets/css/global.sass"
  @import "../../assets/css/mq"

  .post
    border-bottom: 1px solid rgba($gray, 0.2)
    padding-bottom: 1.5em
    min-height: 150px
    flex: 0 0 1
    width: 90%
    margin-bottom: 2em
    padding-top: 10px
    &:last-child
      border: 0 solid

    h1[role="title"]
      margin-top: 0.7em
      margin-bottom: 1.3em

      a
        color: black
        font-size: 1.2em
        font-weight: 400
        padding-bottom: 3px

        &:hover
          border-bottom: 1.5px solid $green

    time
      display: block
      font-size: 0.9em
      margin-top: 1em
      margin-bottom: 1em
      color: #7f8c8d

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

  @include mq($until: tablet)
    .post
      font-size: 0.9em
      width: 94%
      margin-left: 3%

</style>
