/**
 * Created by haozi on 6/16/2017.
 */

import './AdminNavBar.sass'

import Vue from 'vue'
import {Component} from 'vue-property-decorator'
import adminStore from '../../../store/admin'
import adminTypes from '../../../store/adminTypes'


@Component({
  template: require('./AdminNavBar.html'),
  components: {
  },
  name: 'AdminNavBar'
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

  public logout() {
    adminStore.dispatch(adminTypes.LOGOUT)
    this.$router.push('/login')
  }
}
