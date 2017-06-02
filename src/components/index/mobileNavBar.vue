<template>
  <div :class="{open: store.state.isOpenBar}" class="mobileBar">
    <nav>
      <ul>
        <li>搜索框占位</li>
        <li v-for="(navigation, index) in navigations" role="presentation">
          <router-link :to="navigation.path">
            <a :herf="navigation.path">{{navigation.title}}</a>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import {store} from '../../store/haozi'

  @Component({
    props: {

    }
  })
  export default class MobileNavBar extends Vue {
    store = store
    navigations = [
      {
        path: '/haozi',
        title: 'haozi'
      },
      {
        path: '/markdown',
        title: 'Markdown'
      },
      {
        path: '/haoziPosts',
        title: 'Posts'
      },
      {
        path: '/about',
        title: 'about'
      }
    ]
  }
</script>
<style scoped lang="sass" rel="stylesheet/sass" media="all">
  @import "../../assets/css/global.sass"

  *
    transition: all .5s

  div.open
    left: 0

  .mobileBar
    height: 100%
    width: 100%
    position: absolute
    top: 50px
    left: -100%

    nav
      height: 100%
      min-width: 300px
      width: 40%

      background-color: #f9f9f9
      box-shadow: 0 0 10px rgba(0,0,0,0.2)

      ul
        li
          list-style-type: none

</style>
