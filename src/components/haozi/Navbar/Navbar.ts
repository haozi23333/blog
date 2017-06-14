/**
 * Created by haozi on 6/14/2017.
 */

import Vue from 'vue'
import Component from 'vue-class-component'
const Icon = require('vue-awesome/components/Icon.vue')
import 'vue-awesome/icons/bars'

import store from '../../../store/haozi'
import haoziTypes from '../../../store/haoziTypes'

@Component({
  template: require('./NavBar.html'),
  components: {
    Icon
  },
  name: 'Navbar',
  style: ''
})
export default class extends Vue {
  active: number = -1
  logo = {
    width: '80px',
    height: '80px',
    transition: 'all .5s ease'
  }
  saveLogoPostion = {
    width: '80px',
    height: '80px',
    transition: 'all .5s ease'
  }
  bar = {
    background: 'transparent',
    height: '50px'
  }
  isOpen: boolean = false
  store = store
  selectNavigations (index) {
    this.active = index
  }

  mounted () {
    this.store.state.navigations.map((v, i) => {
      if (v.path === this.$route.path) {
        this.active = i
      }
    })
    this.reloadLogo()
    this.getBodyScroll()
    document.onscroll = this.getBodyScroll.bind(this)
    this.$watch(() => {
      return this.store.state.isOpenBar
    }, (isOpen) => {
      if (this.isOpen) {
        this.logo.transition = 'all .5s ease'
      } else {
        this.logo.transition = 'all .5s ease'
      }
    })
  }

  /**
   * 滚动事件
   */
  getBodyScroll () {
    this.store.commit(haoziTypes.BODY_SCROLL, {
      x: document.body.scrollLeft,
      y: document.body.scrollTop
    })
    if ((80 - this.store.state.bodyScroll.y) > 40) {
      this.logo.width = this.logo.height = 80 - this.store.state.bodyScroll.y + 'px'
    }
    if (this.store.state.bodyScroll.y < 40) {
      this.bar.background = '#fff'
    }
  }
  openNav () {
    this.isOpen = !this.isOpen
    if (this.isOpen) {
      this.logo.transition = 'all .5s ease'
      this.saveLogoPostion = this.logo
    } else {
      this.logo.transition = 'none'
    }
    this.store.commit(this.isOpen ? haoziTypes.OPEN_NAVBAR : haoziTypes.CLOSE_NAVBAR)
  }

  reloadLogo () {
    this.$watch(() => {
      return this.store.state.isOpenBar
    }, () => {
      this.store.commit(haoziTypes.MOBILE_SCLOLL, {
        scrollTop: 0
      })
    })
  }
}
