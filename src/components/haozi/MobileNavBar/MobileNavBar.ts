/**
 * Created by haozi on 6/14/2017.
 */
import './MobileNavBar.sass'
// require('./MobileNavbar.sass')
import Vue from 'vue'
import Component from 'vue-class-component'
const Icon = require('vue-awesome/components/Icon.vue')
import 'vue-awesome/icons/moon-o'
import Posts from '../../../api/posts'
import haoziTypes from '../../../store/haoziTypes'
import haoziStore from '../../../store/haozi'


@Component({
  template: require('./MobileNavBar.html'),
  components: {
    Icon
  },
  name: 'MobileNavBar'
})
export default class extends Vue {
  store = haoziStore
  contents = null
  mounted () {
    this.$watch(() => {
      return this.store.state.isOpenBar
    }, () => {
      document.querySelector('.mobileBar nav').scrollTop = 0
      this.contents = this.createContents(this.store.state.nowPost)
    })
  }
  closeNavBar () {
    this.store.commit(haoziTypes.CLOSE_NAVBAR)
  }

  onNavScroll (e, position) {
    this.store.commit(haoziTypes.MOBILE_SCLOLL, position)
  }

  createContents (post) {
    if (!post) {
      return
    }
    const contents = Posts.getPostContents(post.html)
    if (!contents) {
      return
    }
    let html = `<li>${contents[0][0]}</li>`
    for (let i = 1; i < contents.length; i++) {
      if (contents[i - 1][1] !== contents[i][1]) {
        if (contents[i - 1][1] > contents[i][1]) {
          html += `</li></ul>`
          html += `<li>${contents[i][0]}</li>`
        } else {
          html += `<li><ul>`
          html += `<li>${contents[i][0]}</li>`
        }
      } else {
        html += `<li>${contents[i][0]}</li>`
      }
    }
    return html
  }
}
