// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App/App'
import router from './router/index'
import VueResoure from 'vue-resource'

/**
 * 加载Vuex的插件
 */
Vue.use(Vuex)
/**
 *  加载Vue 的 网络请求插件
 */
Vue.use(VueResoure)
/**
 *  加载Vue的
 */
// Vue.use(VueScroll)
// Vue.component('icon', Icon)
/**
 * 生产模式的提示
 * @type {boolean}
 */
Vue.config.productionTip = false

/* eslint-disable no-new */
// @Component({
//   components: {
//     App
//   }
// })
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
