<template>
  <div id="app">
    <Navbar></Navbar>
    <main class="main" @click="">
      <mobileNavBar></mobileNavBar>
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
  import mobileNavBar from './components/index/mobileNavBar.vue'

  @Component({
    components: {
      Navbar,
      Tail,
      mobileNavBar
    }
  })
  export default class App extends Vue {
    mounted () {

    }
    closeNavBar () {
    }
  }
</script>

<style lang="sass" rel="stylesheet/sass">
@import "./assets/css/global.sass"
@import "./assets/css/cover.sass"
@import "./assets/css/mq"

#app
  display: flex
  flex-direction: column
  flex-wrap: nowrap
  justify-content: flex-start
  align-self: center

.main
  min-height: calc(100vh - 100px)
  min-width: 320px
  width: 90%
  max-width: 740px
  flex: 1 0 auto
  z-index: 2
  overflow-x: hidden
  top: 60px
  align-content: center
  align-self: center

@include mq($until: tablet)

</style>
