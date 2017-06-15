/**
 * Created by haozi on 6/14/2017.
 */
import Vue from 'vue'
import Router from 'vue-router'

import Haozi from '../components/haozi/Haozi/Haozi'
import {About, PostList, Post} from '../components/haozi'
import {Markdown} from '../components'

Vue.use(Router)
export default new Router({
  mode: "history",
  routes: [
    {
      path: '/haozi',
      name: 'haozi index',
      component: Haozi,
      children: [
        {
          path: 'markdown',
          name: 'markdown',
          component: Markdown
        },
        {
          path: 'posts',
          name: 'PostList',
          component: PostList
        },
        {
          path: 'about',
          name: 'about',
          component: About
        },
        {
          path: 'post/:postId',
          name: 'post -> ',
          component: Post
        }
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
