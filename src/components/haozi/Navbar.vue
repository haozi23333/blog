<template>
  <div>
    <div class="zhanwei"></div>
    <header :class="{openNav: store.state.isOpenBar}" :style="bar">
      <div class="openBar" @click="openNav" :class="{open: store.state.isOpenBar}">
        <Icon bars name="bars" scale="1.5"></Icon>
      </div>
      <a class="logo" href="" :style="logo">
        <img src="../../assets/image/ph.png" alt="haozi's faceImage" :style="logo">
        <span>haozi</span>
      </a>
      <nav>
        <ul>
          <li v-for="(navigation, index) in store.state.navigations" role="presentation">
            <router-link :to="navigation.path">
              <a :herf="navigation.path" :class="{'active': index === active}" @click="selectNavigations(index)">{{navigation.title}}</a>
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>
<script type="text/javascript">

  import Vue from 'vue'
  import Component from 'vue-class-component'
  import Icon from 'vue-awesome/components/Icon.vue'
  import 'vue-awesome/icons/bars'
  import { store } from '../../store/haozi'
  import {
    OPEN_NAVBAR,
    CLOSE_NAVBAR,
    MOBILE_SCLOLL,
    BODY_SCROLL
  } from '../../store/haoziMutationsType'

  @Component({
    components: {
      Icon
    }
  })
  export default class Navbar extends Vue {
    active = -1
    logo = {
      width: '80px',
      height: '80px',
      transition: 'none'
    }
    saveLogoPostion = {
      width: '80px',
      height: '80px',
      transition: 'none'
    }
    bar = {
      background: 'transparent',
      height: '50px'
    }
    store = store
    selectNavigations (index) {
      this.active = index
    }

    mounted () {
      this.store.state.navigations.map((v, i) => {
        if (v.path === this.$route.path) {
          this.active = i
        }
      })
      this.reloadLogo()
      this.getBodyScroll()
      document.onscroll = this.getBodyScroll.bind(this)
      this.$watch(() => {
        return this.store.state.isOpenBar
      }, (isOpen) => {
        if (this.isOpen) {
          this.logo.transition = 'all .5s ease'
        } else {
          this.logo.transition = 'none'
        }
      })
    }

    /**
     * 滚动事件
     */
    getBodyScroll () {
      this.store.commit(BODY_SCROLL, {
        x: document.body.scrollLeft,
        y: document.body.scrollTop
      })
      if ((80 - this.store.state.bodyScroll.y) > 40) {
        this.logo.width = this.logo.height = 80 - this.store.state.bodyScroll.y + 'px'
      }
      if (parseInt(this.store.state.bodyScroll.y) < 40) {
        this.bar.background = '#fff'
      }
    }
    openNav () {
      this.isOpen = !this.isOpen
      if (this.isOpen) {
        this.logo.transition = 'all .5s ease'
        this.saveLogoPostion = this.logo
      } else {
        this.logo.transition = 'none'
      }
      this.store.commit(this.isOpen ? OPEN_NAVBAR : CLOSE_NAVBAR)
    }

    reloadLogo () {
      this.$watch(() => {
        return this.store.state.isOpenBar
      }, () => {
        this.store.commit(MOBILE_SCLOLL, {
          scrollTop: 0
        })
      })
    }
  }
</script>
<style scoped lang="sass" rel="stylesheet/sass" media="all">

  @import "../../assets/css/global"
  @import "../../assets/css/mq"

  header
    width: 100%
    background-color: #fff
    height: 40px
    padding-top: 10px
    padding-bottom: 10px
    display: flex
    flex-wrap: nowrap
    flex-direction: row
    justify-content: flex-start
    min-width: 200px
    flex: 0 0 auto
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.25)
    transition: all .5s ease
    z-index: 9090

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
      z-index: 999999999999

      img
        float: left
        vertical-align: center
        height: 40px
        width: 40px
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
      box-shadow: none
      height: 115px
      position: fixed
      background: transparent
      .logo
        margin-left: 0
        align-self: center
        height: 80px
        /*margin-top: 20px*/
        /*position: absolute*/
        /*top: 20px*/
        img
          border-radius: 160px
          height: inherit
          width: inherit
        span
          display: none

      div.openBar
        display: block
        width: 20px
        height: 20px
        margin-left: 20px
        line-height: 20px
        padding: 5px
        svg[bars]
          height: 20px
          transition: all .5s ease
        &.open
          svg
            transform: rotate(-90deg)
      nav
        display: none

  .openNav
    margin-left: calc(256px)
    width: calc(100% - 250px)
    .logo
      position: absolute
      transform: rotate(360deg)
      margin-left: -250px
      top: 1em
      left: 1em

  div.zhanwei
    height: 120px
</style>
