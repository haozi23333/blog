/**
 * Created by haozi on 6/14/2017.
 */
import Vue from 'vue'
import Router from 'vue-router'

import Haozi from '../components/haozi/Haozi/Haozi'
import { PostList, Post} from '../components/haozi'
import Admin from '../components/Admin/Admin/Admin'
import EditorBox from '../components/Admin/Editor/EditorBox/EditorBox'
import {AdminPostList} from '../components/Admin'
import adminStore from '../store/admin'
import AdminLogin from '../components/Admin/Login/Login'
import adminTypes from '../store/adminTypes'

Vue.use(Router)
const router =  new Router({
  mode: "history",
  routes: [
    {
      // path: '/haozi',
      path: '/',
      name: 'haozi index',
      component: Haozi,
      redirect: '/posts',
      children: [
        {
          path: 'posts',
          name: 'PostList',
          component: PostList
        },
        {
          path: 'post/:postId',
          name: 'post -> ',
          component: Post
        },
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      meta: {
        /**
         * 需要验证
         */
        requireAuth: true
      },
      children: [
        {
          path: 'posts',
          name: 'post -> 1',
          component: AdminPostList,
          meta: {
            requireAuth: true
          },
        },
        {
          path: 'editor',
          name: 'editor',
          component: EditorBox,
          meta: {
            requireAuth: true
          },

        },
        {
          path: 'editor/:postId',
          name: 'post -> 2',
          component: EditorBox,
          meta: {
            requireAuth: true
          },
        }
      ]
    },
    {
      path: '/login',
      name: 'post -> 3',
      component: AdminLogin
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

/**
 * 拦截
 */
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    /**
     * 加载本地的token值
     */
    adminStore.dispatch(adminTypes.LOAD_LOCAL_USER_INFO)
    if (adminStore.state.username === '' || adminStore.state.user === null) {
      next({
        path: 'login'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})
export default router

