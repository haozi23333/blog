<template>
  <div>
    <posts></posts>
  </div>
</template>
<script>
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import Posts from './PostList.vue'

  @Component({
    props: {
    },
    components: {
      Posts
    }
  })
  export default class Haozi extends Vue {

  }
</script>
<style scoped lang="sass" rel="stylesheet/sass" media="all">
  @import "../../assets/css/global.sass"


</style>
