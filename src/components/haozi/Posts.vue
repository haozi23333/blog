<template>
  <section class="posts">
    <post postId="1"></post>
    <!--<post postId="2"></post>-->
    <!--<post postId="3"></post>-->
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
    display: flex
    flex-wrap: nowrap
    flex-direction: column
    height: 100%

    ul
      list-style-type: none

</style>
