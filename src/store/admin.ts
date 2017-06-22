/**
 * Created by haozi on 6/14/2017.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import adminTypes from './adminTypes'
import {getCookie} from '../util/cookie'
import User from '../api/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navigations: [
      {
        path: '/admin/editor',
        title: 'new Post'
      },
      {
        path: '/admin/posts',
        title: 'post list'
      },
      {
        path: '/admin/setting',
        title: '设置'
      },
      {
        path: '/admin/haozi',
        title: '导航4'
      }
    ],
    username: '',
    token: '',
    user: {
      token: ''
    }
  },
  mutations: {
    [adminTypes.SET_USER] (state, user) {
      state.user = user
    },
    [adminTypes.SET_TOKEN] (state, token) {
      state.token = token
    },
    [adminTypes.LOAD_TOKEN] (state) {
      state.token = getCookie('token')
    }
  },
  actions: {
    [adminTypes.LOAD_LOCAL_USER_INFO] ({commit, dispatch}) {
      const user = JSON.parse(localStorage.getItem('user'))
      if (user) {
        commit(adminTypes.SET_USER, user)
      }
      dispatch(adminTypes.LOAD_SERVER_USER_INFO)
      commit(adminTypes.SET_TOKEN, getCookie('token'))
    },
    async [adminTypes.LOAD_SERVER_USER_INFO] ({commit, state}) {
      commit(adminTypes.SET_USER, await User.getUserInfo(state.username))
    },
  }
})
