<template>
  <header id="header">
    <a class="logo" href="!#">
      <img src="../../assets/image/ph.png" width="40" height="40" alt="haozi's faceImage">
      <span>haozi</span>
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
<script type="text/javascript">

  import Vue from 'vue'
  import Component from 'vue-class-component'
  import Icon from 'vue-awesome/components/Icon.vue'
  import 'vue-awesome/icons/slack'

  @Component({
    components: {
      Icon
    }
  })
  export default class Navbar extends Vue {
    active = -1
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
    selectNavigations (index) {
      this.active = index
    }

    mounted () {
      this.navigations.map((v, i) => {
        if (v.path === this.$route.path) {
          this.active = i
        }
      })
    }
  }
</script>
<style scoped lang="sass" rel="stylesheet/sass" media="all">

  @import "../../assets/css/global.sass"
  @import "../../assets/css/mq"

  #header
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

    flex: 0 0 auto
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.25)

    .logo
      height: 40px
      overflow: hidden
      margin-right: 6px
      width: auto
      display: block
      float: left

      img
        float: left
        vertical-align: center
      span
        color: black
        font-size: 1.5em
        line-height: 40px
        font-weight: 500
        width: auto
        height: 40px

        margin-left: 10px

  nav
    padding-left: 20px
    padding-top: 10px
    padding-bottom: 10px
    right: 60px
    position: absolute
    display: inline

    float: left

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

  @include mq($from: mobile)
    nav
      display: block
      content: '<i class="fa fa-slack"><i>'
      background: green

      ul
        display: none
        background: red
        &::after

</style>
