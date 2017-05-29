<template>
  <li>
    <article role="article">
      <h2>
        <router-link to="23"></router-link>
      </h2>
    </article>
  </li>
</template>
<script>
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component({
    props: {

    }
  })
  export default class Post extends Vue {
  }
</script>
<style scoped lang="sass" rel="stylesheet/sass" media="all">
  @import "../../../assets/css/global.sass"


</style>
