<template>
  <section class="posts">
    <post></post>
    <post></post>
    <post></post>
  </section>
</template>
<script>
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import Post from './components/Post.vue'

  @Component({
    props: {

    },
    components: {
      Post
    }
  })
  export default class Posts extends Vue {

  }
</script>
<style scoped lang="sass" rel="stylesheet/sass" media="all">
  @import "../../assets/css/global"

  .posts
    ul
      list-style-type: none

</style>
