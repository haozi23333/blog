/**
 * Created by haozi on 6/16/2017.
 */
import './Admin.sass'

import Vue from 'vue'
import {Component} from 'vue-property-decorator'
import {AdminNavBar} from '../'

@Component({
  template: require('./Admin.html'),
  components: {
    AdminNavBar
  },
  name: 'Admin'
})
export default class extends Vue {
  mounted () {
    document.body.style.overflow = 'hidden'
  }
}
