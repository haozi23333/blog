/**
 * Created by haozi on 6/16/2017.
 */

import './AdminNavBar.sass'

import Vue from 'vue'
import {Component} from 'vue-property-decorator'
import adminStore from '../../../store/admin'
import adminTypes from '../../../store/adminTypes'
import editorTypes from '../../../store/editorTypes'
import editorStore from '../../../store/editor'
import {mapActions} from 'vuex'

@Component({
  template: require('./AdminNavBar.html'),
  components: {
  },
  name: 'AdminNavBar',
})
export default class extends Vue {
  active = -1
  adminStore = adminStore
  editorStore = editorStore
  selectNavigations (index) {
    this.active = index
  }
  mounted () {
    this.adminStore.state.navigations.map((v, i) => {
      if (v.path === this.$route.path) {
        this.active = i
      }
    })
  }

  public logout() {
    adminStore.dispatch(adminTypes.LOGOUT)
    this.$router.push('/login')
  }

  public createPost() {
    editorStore.dispatch(editorTypes.CREATE_POST)
  }
}
