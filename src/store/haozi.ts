/**
 * Created by haozi on 2017/06/02.
 */

import Vuex from 'vuex'
import Vue from 'vue'
import {
  OPEN_NAVBAR,
  SWITCH_DEVICE,
  CLOSE_NAVBAR,
  MOBILE_SCLOLL,
  OPEN_POST,
  CLOSE_POST,
  BODY_SCROLL
} from './haoziMutationsType'

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
    [SWITCH_DEVICE] (state, {isMobile}) {
      state.isMobile = isMobile
    },
    [OPEN_NAVBAR] (state) {
      state.isOpenBar = true
      document.body.style.overflowY = 'hidden'
    },
    [CLOSE_NAVBAR] (state) {
      document.body.style.overflowY = ''
      state.isOpenBar = false
    },
    [MOBILE_SCLOLL] (state, {scrollTop}) {
      state.logoTop = ~scrollTop + 1
    },
    [OPEN_POST] (state, post) {
      console.log(OPEN_POST)
      state.nowPost = post
    },
    [CLOSE_POST] (state) {
      state.nowPost = null
    },
    [BODY_SCROLL] (state, scroll) {
      state.bodyScroll = scroll
    }
  }
})

