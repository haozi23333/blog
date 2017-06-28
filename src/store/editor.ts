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
import toasted from '../util/toasted'
import router from "../router/index";
import adminStore from './admin'

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
      localStorage.setItem(`post-${adminStore.state.username}-${state.post.postId}`, JSON.stringify({
        ...state.post,
        saveTime: new Date()
      }))
      toasted.success(`postId -> ${state.post.postId} save localStorage success`,)
    },
    /**
     * 设置markdown
     * @param state
     * @param newMarkdown
     */
      [editorTypes.UPDATE_EDITOR_MARKDOWN] (state, newMarkdown) {
      (state.post as IPost).edit = true
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
    },
    /**
     * 保存成功的回调
     * @param state
     */
      [editorTypes.SAVE_POST_SERVER_SUCCESS] (state) {
      (state.post as IPost).edit = false
      toasted.success(`postId -> ${state.post.postId} save server success`)
    }
  },
  actions: {
    /**
     * 在服务器保存  = =
     * @param commit
     * @returns {Promise<void>}
     */
    async [editorTypes.SAVE_POST_SERVER] ({commit, state}) {
      await Posts.savePost(state.post)
      commit(editorTypes.SAVE_POST_SERVER_SUCCESS)
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
      const post = localStorage.getItem(`post-${adminStore.state.username}-${postId}`)
      if (!post) {
        dispatch(editorTypes.LOAD_POST_SERVER, postId)
      } else  {
        commit(editorTypes.UPDATE_POST, JSON.parse(post))
        toasted.success('load localStorage success')
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
        await dispatch(editorTypes.CHANGE_MARKDOWN, post.markdown)
        dispatch(editorTypes.SAVE_POST_LOCALSTORAGE)
      } catch (e) {
        console.log('load error')
      }
    },
    /**
     * 创建新的 post
     * @param commit
     * @returns {Promise<void>}
     */
    async [editorTypes.CREATE_POST] ({commit}) {
      commit(editorTypes.SAVE_POST_LOCALSTORAGE)
      const newPost = await Posts.createPost()
      if (newPost) {
        router.push({
          path: `/admin/editor/${newPost.postId}`
        })
        toasted.success('创建成功')
      } else {
        toasted.success('新文章创建失败')
      }
      commit(editorTypes.UPDATE_POST, newPost)
    },
    /**
     * 删除 post
     * @param commit
     * @param state
     * @returns {Promise<void>}
     */
    async [editorTypes.DELETE_POPST] ({commit, state}) {
      if (await Posts.deletePost(state.post.postId)) {
        commit(editorTypes.UPDATE_POST, {})
        localStorage.removeItem(`post-${adminStore.state.username}-${state.post.postId}`)
        router.push({
          path: '/admin/posts'
        })
        toasted.success('删除成功')
      }
    }
  }
})
