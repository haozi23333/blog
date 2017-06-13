// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import {default as Vue} from 'vue'
import {default as Vuex} from 'vuex'
import App from './App'
import router from './router'
import Icon from 'vue-awesome/components/Icon'
import VueResoure from 'vue-resource'
import VueScroll from 'vue-scroll'

/**
 * 加载Vuex的插件
 */
Vue.use(Vuex)
/**
 *  加载Vue 的 网络请求插件
 */
Vue.use(VueResoure)
/**
 *  加载Vue的花地部分
 */
Vue.use(VueScroll)
Vue.component('icon', Icon)
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
