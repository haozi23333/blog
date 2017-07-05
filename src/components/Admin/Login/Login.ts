/**
 * Created by haozi on 2017/06/21.
 */

import './Login.sass'

import Vue from 'vue'
import {Component} from 'vue-property-decorator'
import adminStore from '../../../store/admin'
import adminTypes from '../../../store/adminTypes'
import User from '../../../api/user'
import toasted from "../../../util/toasted";

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

  public async login() {
    // adminStore.dispatch(adminTypes.LOGIN, {
    //   username: this.username,
    //   password: this.password
    // })
    try {
      if (await User.login(this.username, this.password)) {
        adminStore.state.username = this.username
        adminStore.dispatch(adminTypes.LOAD_SERVER_USER_INFO)
        this.$router.push('/admin')
        toasted.success('登录成功')
      }
    } catch (e) {

    }
  }

}
