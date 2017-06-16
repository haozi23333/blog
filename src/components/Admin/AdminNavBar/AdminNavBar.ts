/**
 * Created by haozi on 6/16/2017.
 */

import Vue from 'vue'
import {Component} from 'vue-property-decorator'
import adminStore from '../../../store/admin'

@Component({
  template: require('./AdminNavBar.html'),
  components: {
  }
})
export default class extends Vue {
  active = -1
  store = adminStore
  selectNavigations (index) {
    this.active = index
  }

  mounted () {
    this.store.state.navigations.map((v, i) => {
      if (v.path === this.$route.path) {
        this.active = i
      }
    })
  }
}