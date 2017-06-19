/**
 * Created by haozi on 6/14/2017.
 */

import Vuex from 'vuex'
import Vue from 'vue'

import editorTypes from './editorTypes'

import remark = require('remark')
import remarkHtml = require('remark-html')
import qwq from 'remark-haozi-extend'
import posts from '../api/posts.ts'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    html: '',
    markdown: ''
  },
  mutations: {
    [editorTypes.SAVE_POST_LOCALSTORAGE] (state, post) {
      localStorage.setItem(`post-${post.postId}`, JSON.stringify({
        saveTime: new Date()
      }))
    },
    [editorTypes.SAVE_POST_SUCCESS] (state, savePosition) {
    },
    [editorTypes.UPDATE_EDITOR_MARKDOWN] (state, newMarkdown) {
      state.markdown = newMarkdown
    },
    [editorTypes.UPDATE_EDITOR_HTML] (state, newhtml) {
      state.html = newhtml
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
    },
    /**
     * 更新当前编辑器的markdown
     * @param state
     * @param markdown
     */
      [editorTypes.CHANGE_MARKDOWN] ({commit}, markdown) {
        commit(editorTypes.UPDATE_EDITOR_MARKDOWN, markdown)
        commit(editorTypes.UPDATE_EDITOR_HTML , String(
          remark()
            .use(qwq)
            .use(remarkHtml)
            .processSync(markdown)
        ))
    },
  }
})
