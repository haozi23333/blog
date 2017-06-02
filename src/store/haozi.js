/**
 * Created by haozi on 2017/06/02.
 */

import Vuex from 'vuex'
import Vue from 'vue'
import {
  OPEN_NAVBAR,
  SWITCH_DEVICE,
  CLOSE_NAVBAR
} from './haoziMutationsType'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isMobile: false,
    isOpenBar: false
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
    }
  }
})

export {
  store
}
