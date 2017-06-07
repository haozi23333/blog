<template>
  <header :class="{openNav: store.state.isOpenBar}">
    <div class="openBar" @click="openNav" :class="{open: store.state.isOpenBar}">
      <Icon bars name="bars" scale="1.5"></Icon>
    </div>
    <a class="logo" href="" :style="{top: store.state.logoTop + 'px'}">
      <img src="../../assets/image/ph.png" alt="haozi's faceImage">
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
  MOBILE_SCLOLL
} from '../../store/haoziMutationsType'

@Component({
  components: {
    Icon
  }
})
export default class Navbar extends Vue {
  active = -1
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
  }

  openNav () {
    this.isOpen = !this.isOpen
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
    transition: all .5s

    *
      transition: all .5s

    .openBar
      flex: 0 0 1
      align-self: flex-start
      display: none

    .logo
      transition: all .5s
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

      .logo
        transition: all .5s
        margin-left: 0
        align-self: center
        height: 80px
        margin-top: 40px
        position: absolute
        left: calc(50% - 40px)
        top: 20px
        img
          border-radius: 160px
          height: 80px
          width: 80px
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
          transition: all .5s
        &.open
          svg
            transform: rotate(-90deg)
      nav
        display: none

  .openNav
    margin-left: calc(250px)
    width: calc(100% - 250px)
    .logo
      transform: rotate(360deg)
      top: 1em
      left: 1em
      z-index: 99999999


</style>
