/**
 * Created by haozi on 2017/06/02.
 */

import Vuex from 'vuex'
import Vue from 'vue'
import haoziTypes from './haoziTypes'
import Posts from "../api/posts";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMobile: false,
    isOpenBar: false,
    logoTop: 0,
    bodyScroll: {
      x: 0,
      y: 0
    },
    posts: [],
    navigations: [
      {
        path: '/posts',
        title: 'HOME'
      },
      {
        path: '/posts',
        title: '文章列表'
      }
     ]
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
    [haoziTypes.BODY_SCROLL] (state, scroll) {
      state.bodyScroll = scroll
    },
    [haoziTypes.SET_POSTS] (state, posts: IPost[]) {
      state.posts = posts
    }
  },
  actions: {
    async [haoziTypes.GET_POSTS] ({commit}, page = 1, limit = 10) {
     // const posts =  await Posts.getPostList(`?showAll=false&page=${page}&limit=${limit}`)
     //
     //  commit(haoziTypes.SET_POSTS, posts)
    }
  }
})

