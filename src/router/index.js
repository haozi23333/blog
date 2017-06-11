import Vue from 'vue'
import Router from 'vue-router'
import Haozi from 'haozi/haozi.vue'
import Markdown from '../components/markdown/Markdown.vue'
import PostList from 'haozi/PostList.vue'
import About from 'haozi/About.vue'
import Post from 'haozi/Post.vue'
import Admin from '../components/Admin/Admin.vue'
import EditorBox from '../components/Admin/editor/EditorBox.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/haozi',
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
  },
  {
    path: '/admin',
    name: 'admin -> ',
    component: Admin,
    children: [
      {
        path: 'editor',
        name: 'post -> ',
        component: EditorBox
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
