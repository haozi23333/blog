<template>
  <div :class="{open: isOpen}" class="mobileBar">
    <nav>
      <ul>
        <li v-for="(navigation, index) in navigations" role="presentation">
          <router-link :to="navigation.path">
            <a :herf="navigation.path" :class="{'active': index === active}" @click="selectNavigations(index)">{{navigation.title}}</a>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component({
    props: {

    }
  })
  export default class MobileNavBar extends Vue {
    isOpen = true
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

  .mobileBar
    height: 100%
    width: 100%
    position: absolute
    left: 0
    top: 60px
    box-shadow: $shadow

    nav
      height: 100%
      background-color: $white
      min-width: 250px
      width: 60%



</style>
