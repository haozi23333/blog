/**
 * Created by haozi on 2017/06/02.
 */

import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
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

export {
  store
}
