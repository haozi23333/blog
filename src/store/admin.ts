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
    user: {
      token: ''
    }
  },
  mutations: {
    [adminTypes.SET_USER] (state, user) {
      state.user = user
    },
  },
  actions: {
    /**
     *  加载本地用户数据
     * @param commit
     * @param dispatch
     */
    [adminTypes.LOAD_LOCAL_USER_INFO] ({commit, dispatch}) {
      const user = JSON.parse(localStorage.getItem('user'))
      if (user) {
        commit(adminTypes.SET_USER, user)
      }
      dispatch(adminTypes.LOAD_SERVER_USER_INFO)
    },
    /**
     *  从服务器加载用户数据 需要 cookie
     * @param commit
     * @param state
     * @returns {Promise<void>}
     */
    async [adminTypes.LOAD_SERVER_USER_INFO] ({commit, state}) {
      commit(adminTypes.SET_USER, await User.getUserInfo(state.username))
    },
  }
})
