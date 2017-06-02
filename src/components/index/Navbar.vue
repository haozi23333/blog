<template>
  <header>
    <div class="openBar" @click="openNav" :class="{open: isOpen}">
      <Icon bars name="bars" scale="1.5"></Icon>
    </div>
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
  import 'vue-awesome/icons/bars'
  import {store} from '../../store/haozi'
  import {
      OPEN_NAVBAR,
      CLOSE_NAVBAR
  } from '../../store/haoziMutationsType'

  @Component({
    components: {
      Icon
    }
  })
  export default class Navbar extends Vue {
    active = -1
    isOpen = false
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

    openNav () {
      document.body.style.overflowY = this.isOpen ? 'hidden' : 'block'
      this.isOpen = !this.isOpen
      if (this.isOpen) {
        this.store.commit(OPEN_NAVBAR)
      } else {
        this.store.commit(CLOSE_NAVBAR)
      }
    }
  }
</script>
<style scoped lang="sass" rel="stylesheet/sass" media="all">

  @import "../../assets/css/global.sass"
  @import "../../assets/css/mq"

  header
    width: 100%
    background-color: #fff
    height: 40px
    padding-top: 10px
    padding-bottom: 10px
    z-index: 99
    display: flex
    flex-wrap: nowrap
    flex-direction: row
    justify-content: flex-start
    min-width: 200px
    flex: 0 0 auto
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.25)

    *
      transition: all .5s

    .openBar
      flex: 0 0 1
      align-self: flex-start
      display: none

    .logo
      height: 40px
      overflow: hidden
      margin-right: 6px
      width: auto
      display: block
      flex: 0 0 auto
      margin-left: 60px

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
    flex: 1

  ul
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

  @include mq($until: tablet)
    header
      justify-content: flex-start
      align-items: center
      flex-direction: column
      padding-top: 5px
      padding-bottom: 5px
      .logo
        margin-left: 0
        align-self: center
        margin-top: -20px


        img
          border-radius: 40px

        span
          display: none

      div.openBar
        display: block
        width: 20px
        height: 20px
        margin-left: 20px
        line-height: 20px
        svg[bars]
          height: 20px
          transition: all .5s
          margin-top: 10px
        &.open
          svg
            transform: rotate(-90deg)
      nav
        display: none
</style>
