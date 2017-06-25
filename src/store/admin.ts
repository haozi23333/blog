/**
 * Created by haozi on 6/14/2017.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import adminTypes from './adminTypes'
import {getCookie} from '../util/cookie'
import User from '../api/user'
import router from "../router/index";

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
      localStorage.setItem('username', user.name)
      state.user = user
      state.username = user.name
    }
  },
  actions: {
    /**
     *  加载本地用户数据
     * @param commit
     * @param dispatch
     */
    async [adminTypes.LOAD_LOCAL_USER_INFO] ({dispatch, state}) {
      state.user =  JSON.parse(localStorage.getItem('user'))
      state.username = localStorage.getItem('username')
      if (state.username !== ''){
        console.log(state.username)
        dispatch(adminTypes.LOAD_SERVER_USER_INFO)
      }
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
    /**
     * 登录
     * 调用api 登录
     * @param commit
     * @param username
     * @param password
     * @returns {Promise<void>}
     */
    async [adminTypes.LOGIN] ({dispatch, state}, {username, password}) {
      try {
        if (await User.login(username, password)) {
          state.username = username
          dispatch(adminTypes.LOAD_SERVER_USER_INFO)
          router.push({
            path: '/admin'
          })
        }
      } catch (e) {

      }
    },
    /**
     * 登出  = =
     * 清除本地存储的数据
     * @returns {Promise<void>}
     */
    [adminTypes.LOGOUT] ({state}) {
      state.user = {}
      state.username  =　''
      localStorage.setItem('username', '')
      localStorage.setItem('user', JSON.stringify({}))
    }
  }
})
