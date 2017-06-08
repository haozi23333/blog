/**
 * Created by haozi on 2017/06/02.
 */

import Vuex from 'vuex'
import Vue from 'vue'
import {
  CHANGE_MARKDOWN
} from './editorMutationsType'

import remark from 'remark'
import remarkHtml from 'remark-html'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    html: '',
    markdown: ''
  },
  mutations: {
    [CHANGE_MARKDOWN] (state, markdown) {
      state.markdown = markdown
      state.html = String(remark().use(remarkHtml).processSync(markdown))
      console.log()
    }
  }
})

export {
  store
}
