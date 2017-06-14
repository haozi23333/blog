/**
 * Created by haozi on 6/14/2017.
 */
import Vue from 'vue'
import Router from 'vue-router'

import Haozi from '../components/haozi/'

Vue.use(Router)
export default new Router({
  mode: "history",
  routes: [
    {
      path: '/haozi',
      name: 'haozi index',
      component: Haozi
    }
    ]
})