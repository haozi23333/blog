/**
 * Created by haozi on 6/14/2017.
 */

import Vuex from 'vuex'
import Vue from 'vue'

import editorTypes from './editorTypes'

import remark = require('remark')
import remarkHtml = require('remark-html')
import qwq from 'remark-haozi-extend'
import Posts from '../api/posts'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    post: {
      postId: '1',
      html: '',
      markdown: '',
      title: ''
    },
    savelocation: 'localStorage'
  },
  mutations: {
    [editorTypes.SAVE_POST_LOCALSTORAGE] (state) {
      localStorage.setItem(`post-${state.post.postId}`, JSON.stringify({
        ...state.post,
        saveTime: new Date()
      }))
    },
    [editorTypes.SAVE_POST_LOCALSTORAGE_SUCCESS] (state, savePosition) {
    },
    [editorTypes.UPDATE_EDITOR_MARKDOWN] (state, newMarkdown) {
      state.post.markdown = newMarkdown
    },
    [editorTypes.UPDATE_EDITOR_HTML] (state, newhtml) {
      state.post.html = newhtml
    },
    [editorTypes.UPDATE_POST] (state, post) {
      state.post = {
        ...state.post,
        ...post
      }
    }
  },
  actions: {
    /**
     * 在本地保存
     * @param commit
     * @returns {Promise<void>}
     */
    async [editorTypes.SAVE_POST_SERVER] ({commit}) {
      commit(editorTypes.SAVE_POST_LOCALSTORAGE)
    },
    async [editorTypes.SAVE_POST_LOCALSTORAGE] ({commit}) {
      commit(editorTypes.SAVE_POST_LOCALSTORAGE)
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
    /**
     *
     * @param state
     * @param post
     */
    [editorTypes.LOAD_POST_LOCALSTORAGE] ({dispatch, commit}, postId) {
      const post = localStorage.getItem(`post-${postId}`)
      if (!post) {
        dispatch(editorTypes.LOAD_POST_SERVER, postId)
      } else  {
        commit(editorTypes.UPDATE_POST, JSON.parse(post))
      }
    },
    async [editorTypes.LOAD_POST_SERVER] ({dispatch, commit}, postId) {
      try {
        commit(editorTypes.UPDATE_POST, await Posts.getPostById(postId))
      } catch (e) {
        console.log('load error')
      }
    },
  }
})
