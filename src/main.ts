// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App/App'
import router from './router/index'
import Toasted from 'vue-toasted'

const Icon = require('vue-awesome/components/Icon.vue')

// import './assets/js/keymaster.js'

/**
 * 加载Vuex的插件
 */
Vue.use(Vuex)

/**
 *  加载一个Toast 组件
 */
Vue.use(Toasted)

/**
 * 全局注册图标组件
 */
Vue.component('Icon', Icon)


/**
 * 生产模式的提示
 * @type {boolean}
 */
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
