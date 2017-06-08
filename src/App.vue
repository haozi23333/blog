<template>
  <div id="app">
    <router-view>
      </router-view>
  </div>
</template>
<script >

  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component({
    components: {
    }
  })
  export default class App extends Vue {
  }
</script>

<style lang="sass" rel="stylesheet/sass">
  @import "./assets/css/global.sass"
  @import "./assets/css/cover.sass"
  @import "./assets/css/mq"
  @import "assets/css/normalize.css"
  #app
    display: flex
    flex-direction: column
    flex-wrap: nowrap
    justify-content: flex-start
    align-self: center

</style>
