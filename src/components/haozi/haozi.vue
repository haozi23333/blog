<template>
  <div>
    <Navbar></Navbar>
    <mobileNavBar></mobileNavBar>
    <main class="main" :class="{openNav: store.state.isOpenBar }" @click="">
      <router-view></router-view>
    </main>
    <Tail></Tail>
  </div>
</template>

<script >

  import Vue from 'vue'
  import Component from 'vue-class-component'
  import Navbar from './Navbar.vue'
  import Tail from './Tail.vue'
  import mobileNavBar from './mobileNavBar.vue'
  import {store} from '../../store/haozi'

  @Component({
    components: {
      Navbar,
      Tail,
      mobileNavBar
    }
  })
  export default class App extends Vue {
    store = store
    mounted () {

    }
    closeNavBar () {
    }
  }
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import "../../assets/css/global.sass"
  @import "../../assets/css/cover.sass"
  @import "../../assets/css/mq"

  div
    display: flex
    flex-direction: column
    flex-wrap: nowrap
    justify-content: flex-start
    align-self: center
    flex: 1
    width: 100%


  .main
    min-height: calc(100vh - 120px)
    min-width: 320px
    width: 100%
    max-width: 740px
    flex: 1 0 auto
    z-index: 2
    overflow-x: hidden
    align-content: center
    align-self: center

    @include mq($until: tablet)
      min-height: calc(100vh - 120px)

</style>
