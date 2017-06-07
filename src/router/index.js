import Vue from 'vue'
import Router from 'vue-router'
import Haozi from 'haozi/haozi.vue'
import Markdown from '../components/Markdown.vue'
import PostList from 'haozi/PostList.vue'
import About from 'haozi/About.vue'
import Post from 'haozi/Post.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/haozi',
      name: 'haozi',
      component: Haozi
    },
    {
      path: '/markdown',
      name: 'markdown',
      component: Markdown
    },
    {
      path: '/haoziPosts',
      name: 'PostList',
      component: PostList
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/post/:postId',
      name: 'post -> ',
      component: Post
    }
  ]
})
