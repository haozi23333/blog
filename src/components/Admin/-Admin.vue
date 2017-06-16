<template>
  <div class="admin">
    <NavBar>
    </NavBar>
    <main>
        <router-view>

        </router-view>
    </main>
  </div>
</template>
<script>
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import NavBar from './-NavBar.vue'
  import {store} from '../../store/admin'
  @Component({
    props: {
    },
    components: {
      NavBar
    }
  })
  export default class Admin extends Vue {
    store = store
    mounted () {
      document.body.style.overflow = 'hidden'
    }
  }
</script>
<style scoped lang="sass" rel="stylesheet/sass" media="all">
  // @import "../../assets/css/global.sass"
  .admin
    display: flex
    flex-direction: row
    flex-wrap: nowrap
    justify-content: flex-start
    overflow: hidden

  main
    flex: 1
    height: 100vh
</style>
