<template>
  <div id="app">
    <Navbar></Navbar>
    <main>
      <router-view></router-view>
    </main>
    <Tail></Tail>
  </div>
</template>

<script >

  import Vue from 'vue'
  import Component from 'vue-class-component'
  import Navbar from './components/index/Navbar.vue'
  import Tail from './components/haozi/Tail.vue'

  @Component({
    components: {
      Navbar,
      Tail
    }
  })
  export default class App extends Vue {
    mounted () {

    }
  }
</script>

<style lang="sass" rel="stylesheet/sass">
@import "./assets/css/global.sass"
@import "./assets/css/cover.sass"

#app
  display: flex
  flex-direction: column
  flex-wrap: nowrap
  justify-content: flex-start


main
  min-height: calc(100vh - 100px)
  position: relative
  flex: 1
  z-index: 2
  padding: 0 60px 30px
  overflow-x: hidden
  top: 60px
</style>
