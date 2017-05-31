<template>
  <div class="post">
    <article role="article">
      <h1 role="title">
        <router-link to="23">文章标题</router-link>
      </h1>
      <time>Oct 9, 2016</time>
      <Markdown>
        没有任何东西
      </Markdown>
      <a href="" class="more">more</a>
    </article>
  </div>
</template>
<script>
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import Markdown from '../../Markdown.vue'

  @Component({
    props: {

    },
    components: {
      Markdown
    }
  })
  export default class Post extends Vue {
  }
</script>
<style scoped lang="sass" rel="stylesheet/sass" media="all">
  @import "../../../assets/css/global.sass"

  .post
    border-bottom: 1px solid rgba($gray, 0.2)
    padding-bottom: 20px
    margin-bottom: 30px

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

  .more
    display: block
    width: 100%
    text-align: right
    color: $green
</style>
