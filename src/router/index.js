import Vue from 'vue'
import Router from 'vue-router'
import Haozi from 'haozi/haozi.vue'
import Markdown from '../components/Markdown.vue'
import Posts from 'haozi/Posts.vue'
import About from 'haozi/About.vue'

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
      name: 'Posts',
      component: Posts
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
