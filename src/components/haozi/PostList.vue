<template>
  <section class="posts">
    <PostListItem v-once postId="1"></PostListItem>
    <PostListItem v-once postId="2"></PostListItem>
    <PostListItem v-once postId="3"></PostListItem>
  </section>
</template>
<script>
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import PostListItem from './components/-PostListItem.vue'

  @Component({
    props: {

    },
    components: {
      PostListItem
    }
  })
  export default class Posts extends Vue {
  }
</script>
<style lang="sass" rel="stylesheet/sass" media="all">

  .posts
    display: flex
    flex-wrap: nowrap
    flex-direction: column
    height: 100%
    width: 90%
    margin-left: 5%


    ul
      list-style-type: none

  img
    box-shadow: none !important

</style>
