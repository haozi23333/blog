/**
 * Created by haozi on 6/14/2017.
 */

import Vuex from 'vuex'
import Vue from 'vue'

import editorTypes from './editorTypes'

import remark from 'remark'
import remarkHtml from 'remark-html'
import qwq from 'remark-haozi-extend'
import posts from '../api/posts.ts'

Vue.use(Vuex)

export default new Vuex.Store({
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
      [editorTypes.CHANGE_MARKDOWN] (state, markdown) {
      state.markdown = markdown
      state.html = String(
        remark()
          .use(qwq)
          .use(remarkHtml)
          .processSync(markdown)
      )
    },
    [editorTypes.SAVE_POST_LOCALSTORAGE] (state, post) {
      localStorage.setItem(`post-${post.postId}`, JSON.stringify({
        saveTime: new Date()
      }))
    },
    [editorTypes.SAVE_POST_SUCCESS] (state, savePosition) {
    }
  },
  actions: {
    async [editorTypes.SAVE_POST_SERVER] ({commit}, post) {
      try {
        await posts.savePost(post)
        // commit()
      } catch (e) {
        console.log('save error')
      }
    }
  }
})
