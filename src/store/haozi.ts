/**
 * Created by haozi on 2017/06/02.
 */

import Vuex from 'vuex'
import Vue from 'vue'
import haoziTypes from './haoziTypes'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMobile: false,
    isOpenBar: false,
    logoTop: 0,
    nowPost: null,
    bodyScroll: {
      x: 0,
      y: 0
    },
    navigations: [
      {
        path: '/haozi',
        title: 'HOME'
      },
      {
        path: '/haozi/markdown',
        title: 'Markdown Test'
      },
      {
        path: '/haozi/posts',
        title: '文章列表'
      },
      {
        path: '/haozi/about',
        title: 'about'
      }]
  },
  mutations: {
    [haoziTypes.SWITCH_DEVICE] (state, {isMobile}) {
      state.isMobile = isMobile
    },
    [haoziTypes.OPEN_NAVBAR] (state) {
      state.isOpenBar = true
      document.body.style.overflowY = 'hidden'
    },
    [haoziTypes.CLOSE_NAVBAR] (state) {
      document.body.style.overflowY = ''
      state.isOpenBar = false
    },
    [haoziTypes.MOBILE_SCLOLL] (state, {scrollTop}) {
      state.logoTop = ~scrollTop + 1
    },
    [haoziTypes.OPEN_POST] (state, post) {
      console.log(haoziTypes.OPEN_POST)
      state.nowPost = post
    },
    [haoziTypes.CLOSE_POST] (state) {
      state.nowPost = null
    },
    [haoziTypes.BODY_SCROLL] (state, scroll) {
      state.bodyScroll = scroll
    }
  }
})

