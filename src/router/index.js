import Vue from 'vue'
import Router from 'vue-router'
import Haozi from 'haozi/haozi.vue'
import Markdown from '../components/Markdown.vue'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
