import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'header',
      component: Hello
    }
  ]
})
