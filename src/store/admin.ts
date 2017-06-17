/**
 * Created by haozi on 6/14/2017.
 */

import Vue from 'vue'
import Vuex from 'vuex'
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
    ]
  },
  mutations: {
  }
})
