<template>
  <footer>
    <p>©2016 - 2017 haozi, keke by Vue and Koa</p>
  </footer>
</template>
<script>
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component({
    props: {

    }
  })
  export default class Tail extends Vue {
  }
</script>
<style scoped lang="sass" rel="stylesheet/sass" media="all">
  @import "../../assets/css/global.sass"

  footer
    flex: 0 0 auto
    height: 60px
    width: 100%
    line-height: 60px
    align-items: flex-end
    z-index: 1

    border-top: 1px solid rgba($gray, 0.2)

    p
      font-size: 0.8em
      color: #2c3e50
      text-align: center
</style>
