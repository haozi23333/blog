/**
 * Created by haozi on 2017/06/02.
 */

import Vuex from 'vuex'
import Vue from 'vue'
import {
  CHANGE_MARKDOWN,
  SAVE_POST_SERVER,
  SAVE_POST_LOCALSTORAGE,
  SAVE_POST_SUCCESS
} from './editorTypes'

import remark from 'remark'
import remarkHtml from 'remark-html'
import qwq from 'remark-haozi-extend'
import posts from '../api/posts'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    html: '',
    markdown: ''
  },
  mutations: {
    /**
     * 更新当前编辑器的markdown
     * @param state
     * @param markdown
     */
    [CHANGE_MARKDOWN] (state, markdown) {
      state.markdown = markdown
      state.html = String(
        remark()
          .use(qwq)
          .use(remarkHtml)
          .processSync(markdown)
      )
    },
    [SAVE_POST_LOCALSTORAGE] (state, post) {
      localStorage.setItem(`post-${post.postId}`, JSON.stringify({
        saveTime: new Date()
      }))
    },
    [SAVE_POST_SUCCESS] (state, savePosition) {
    }
  },
  actions: {
    async [SAVE_POST_SERVER] ({commit}, post) {
      try {
        await posts.savePost(post)
        commit()
      } catch (e) {
        console.log('save error')
      }
    }
  }
})

export {
  store
}
