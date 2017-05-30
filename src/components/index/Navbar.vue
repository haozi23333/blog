<template>
  <header id="header">
    <a class="logo" href="!#">
      <img src="../../assets/image/ph.png" width="40" height="40" alt="haozi's faceImage">
      <span>Vue.js</span>
    </a>
    <nav>
      <ul>
        <li v-for="(navigation, index) in navigations" role="presentation">
          <router-link :to="navigation.path">
            <a :herf="navigation.path" :class="{'active': index === active}" @click="selectNavigations(index)">{{navigation.title}}</a>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>

  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component()
  export default class Navbar extends Vue {
    active = 0
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
        path: '/3',
        title: '示例'
      },
      {
        path: 's/4',
        title: '社区'
      }
    ]
    selectNavigations (index) {
      this.active = index
    }

    mounted () {
    }
  }
</script>
<style scoped lang="sass" rel="stylesheet/sass" media="all">

  @import "../../assets/css/global.sass"

  #header
    position: fixed
    top: 0
    left: 0
    width: 100%
    background-color: #fff
    height: 40px
    padding-top: 10px
    padding-right: 60px
    padding-bottom: 10px
    padding-left: 60px
    z-index: 99

    box-shadow: 0 0 2px rgba(0, 0, 0, 0.25)

    .logo
      height: 40px
      display: initial
      overflow: hidden
      margin-right: 6px

      img
        vertical-align: middle

      span
        color: black
        font-size: 1.5em
        line-height: 40px
        font-weight: 500

        margin-left: 10px

  nav
    padding-left: 20px
    padding-top: 10px
    padding-bottom: 10px

    right: 60px
    position: fixed
    display: inline

  ul
    float: left
    list-style-type: none

    li
      list-style-type: none
      float: left
      margin: 0 0.6em
      cursor: pointer

      a
        color: black

        &:hover
          border-bottom: solid 3px $green

  .active
    border-bottom: solid 3px $green

</style>
