<template>
  <div :class="{open: store.state.isOpenBar}" class="mobileBar">
    <nav v-scroll="onNavScroll">
      <div class="zhanwei"></div>
      <ul class="navigation">
        <li class="search">这里应该有一个搜索框，但是现在没有</li>
        <li></li>
        <li v-for="(navigation, index) in navigations" role="presentation">
          <router-link :to="navigation.path">
            <a :herf="navigation.path" @click="closeNavBar">{{navigation.title}}</a>
          </router-link>
        </li>
      </ul>
      <div class="functionBar">
        <ul>
          <li><span><Icon name="moon-o"></Icon>夜间模式</span></li>
          <li><span><Icon name="moon-o"></Icon>夜间模式</span></li>
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
        title: 'PostList'
      },
      {
        path: '/about',
        title: 'about'
      }
    ]
    mounted () {
      this.$watch(() => {
        return this.store.state.isOpenBar
      }, () => {
        document.querySelector('.mobileBar nav').scrollTop = 0
      })
      this.createContents(this.store.state.post)
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
      var html = `<li>${list[0][0]}</li>`
      for (let i = 1; i < list.length; i++) {
        if (list[i - 1][1] != list[i][1]) {
          if (list[i -1] [1] > list[i][1]) {
            html += `</ul>`
            html +=  `<li>${list[i][0]}</li>`
          } else {
            html += `<ul>`
            html +=  `<li>${list[i][0]}</li>`
          }
        }else {
          html +=  `<li>${list[i][0]}</li>`
        }
      }
      return html
    }
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
    top: 0
    left: -100%
    z-index: 90
    display: flex


    nav
      height: 100%
      max-width: 250px
      width: 100%
      display: flex
      flex-direction: column
      background-color: #f9f9f9
      box-shadow: 0 0 10px rgba(0,0,0,0.2)
      flex-wrap: nowrap
      justify-content: flex-start
      align-items: flex-start
      overflow-x: auto
      overflow-y: visible

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
          width: 100%
          height: 40px
          display: flex
          flex-direction: row
          li
            text-align: center
            flex: 1
    .takeplace
      flex: 1

  ul.navigation
    li
      ul
        li
          margin-left: 1.5em




  .search
    margin-bottom: 2em



</style>
