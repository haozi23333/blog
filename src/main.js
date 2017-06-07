// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import Icon from 'vue-awesome/components/Icon'
import VueResoure from 'vue-resource'
import VueScroll from 'vue-scroll'

Vue.use(Vuex)
Vue.use(VueResoure)
Vue.use(VueScroll)
Vue.component('icon', Icon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
