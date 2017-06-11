<template>
  <div :class="{open: store.state.isOpenBar}" class="mobileBar">
    <nav v-scroll="onNavScroll">
      <div class="zhanwei"></div>
      <ul class="navigation">
        <li class="search">这里应该有一个搜索框，但是现在没有</li>
        <li>
          <ul v-html="contents" class="contents"></ul>
        </li>
        <li class="routerLink" v-for="(navigation, index) in store.state.navigations" role="presentation">
          <router-link :to="navigation.path">
            <a :herf="navigation.path" @click="closeNavBar">{{navigation.title}}</a>
          </router-link>
        </li>
      </ul>
      <div class="functionBar">
        <ul>
          <li><label><Icon name="moon-o"></Icon>夜间模式</label></li>
          <li><span><Icon name="moon-o"></Icon>???????</span></li>
        </ul>
      </div>
    </nav>
    <div class="takeplace" @click="closeNavBar">
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import {store} from '../../store/haozi'
  import {
    CLOSE_NAVBAR,
    MOBILE_SCLOLL
  } from '../../store/haoziMutationsType'
  import Icon from 'vue-awesome/components/Icon.vue'
  import 'vue-awesome/icons/moon-o'
  import posts from '../../api/posts'

  @Component({
    components: {
      Icon
    }
  })
  export default class MobileNavBar extends Vue {
    store = store
    contents = null
    mounted () {
      this.$watch(() => {
        return this.store.state.isOpenBar
      }, () => {
        document.querySelector('.mobileBar nav').scrollTop = 0
        this.contents = this.createContents(this.store.state.nowPost)
      })
    }
    closeNavBar () {
      this.store.commit(CLOSE_NAVBAR)
    }

    onNavScroll (e, position) {
      this.store.commit(MOBILE_SCLOLL, position)
    }

    createContents (post) {
      if (!post) {
        return
      }
      const contents = posts.getPostContents(post.html)
      if (!contents) {
        return
      }
      let html = `<li>${contents[0][0]}</li>`
      for (let i = 1; i < contents.length; i++) {
        if (contents[i - 1][1] !== contents[i][1]) {
          if (contents[i - 1][1] > contents[i][1]) {
            html += `</li></ul>`
            html += `<li>${contents[i][0]}</li>`
          } else {
            html += `<li><ul>`
            html += `<li>${contents[i][0]}</li>`
          }
        } else {
          html += `<li>${contents[i][0]}</li>`
        }
      }
      return html
    }
  }
</script>
<style scoped lang="sass" rel="stylesheet/sass" media="all">
  @import "../../assets/css/global"

  *
    transition: all .5s ease


  div.open
    left: 0

  .mobileBar
    height: 100%
    width: 100%
    position: fixed
    top: 0
    left: -100%
    z-index: 90
    display: flex
    flex-direction: row


    nav
      height: 100%
      width: 250px
      display: flex
      flex-direction: column
      background-color: #f9f9f9
      box-shadow: 0 0 10px rgba(0,0,0,0.2)
      flex-wrap: nowrap
      justify-content: flex-start
      align-items: flex-start
      overflow-x: auto
      overflow-y: visible
      z-index: 100
      .zhanwei
        flex: 0 0 auto
        height: 140px
        width: 100%
      ul
        flex: 1 0 auto
        li
          list-style-type: none

      .functionBar
        flex: 0 0 40px
        height: 40px
        width: 100%
        line-height: 40px

        ul
          width: 90%
          margin-left: 5%
          height: 40px
          display: flex
          flex-direction: row
          li
            text-align: center
            flex: 1
    .takeplace
      flex: 1
      z-index: 100



  .contents
    list-style-type: none
    font-size: 0.8em
    width: 90%
    margin-left: 5%

  .search
    margin-bottom: 2em


  .routerLink
    margin-left: 20%
    height: 40px
    line-height: 40px
</style>
