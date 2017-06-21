/**
 * Created by haozi on 2017/06/21.
 */

import './Login.sass'

import Vue from 'vue'
import {Component} from 'vue-property-decorator'
import adminStore from '../../../store/admin'
import User from '../../../api/user'

@Component({
  template: require('./Login.html'),
  name: 'Admin-Login'
})
export default class extends Vue {
  adminStore = adminStore
  public username = ''
  public password = ''
  /**
   *  挂载调用逻辑
   */
  public mounted () {

  }

  public login() {
    User.login(this.username, this.password).then((...v) => {
      console.log(v)
    })
  }
}
