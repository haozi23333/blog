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
    /**
     * 在本地保存
     * @param state
     */
    [editorTypes.SAVE_POST_LOCALSTORAGE] (state) {
      localStorage.setItem(`post-${state.post.postId}`, JSON.stringify({
        ...state.post,
        saveTime: new Date()
      }))
      Vue.toasted.success('save localStorage success', {
        theme: "outline",
        position: "bottom-center",
        duration : 500
      })
    },
    /**
     * 设置markdown
     * @param state
     * @param newMarkdown
     */
    [editorTypes.UPDATE_EDITOR_MARKDOWN] (state, newMarkdown) {
      state.post.markdown = newMarkdown
      state.post.html = String(
        remark()
          .use(qwq)
          .use(remarkHtml)
          .processSync(state.post.markdown)
      )
    },
    /**
     * 更新整个post信息  （一般都是服务器加载
     * @param state
     * @param post
     */
    [editorTypes.UPDATE_POST] (state, post) {
      state.post = {
        ...state.post,
        ...post
      }
    }
  },
  actions: {
    /**
     * 在服务器保存  = =
     * @param commit
     * @returns {Promise<void>}
     */
    async [editorTypes.SAVE_POST_SERVER] ({commit}) {
      commit(editorTypes.SAVE_POST_LOCALSTORAGE)
    },
    /**
     * 在本地保存
     * @param commit
     * @returns {Promise<void>}
     */
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

    },
    /**
     *  从本地取回最新的blog， 本地没有数据的话就从服务器取回
     * @param state
     * @param post
     */
    [editorTypes.LOAD_POST_LOCALSTORAGE] ({dispatch, commit}, postId) {
      const post = localStorage.getItem(`post-${postId}`)
      if (!post) {
        dispatch(editorTypes.LOAD_POST_SERVER, postId)
      } else  {
        commit(editorTypes.UPDATE_POST, JSON.parse(post))
        Vue.toasted.success('load localStorage success', {
          theme: "outline",
          position: "bottom-center",
          duration : 500
        })
      }
    },
    /**
     * 从服务器加载最新的post
     * @param dispatch
     * @param commit
     * @param postId
     * @returns {Promise<void>}
     */
    async [editorTypes.LOAD_POST_SERVER] ({dispatch, commit}, postId) {
      try {
        const post =  await Posts.getPostById(postId)
        commit(editorTypes.UPDATE_POST, post)
        dispatch(editorTypes.CHANGE_MARKDOWN, post.markdown)
      } catch (e) {
        console.log('load error')
      }
    },
  }
})
