<template>
  <div id="app">
    <Navbar></Navbar>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script >

  import Vue from 'vue'
  import Component from 'vue-class-component'
  import Navbar from './components/index/Navbar.vue'

  @Component({
    components: {
      Navbar
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50

main
  position: relative
  z-index: 1
  padding: 0 60px 30px
  overflow-x: hidden
  top: 60px
</style>
