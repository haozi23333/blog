/**
 * Created by haozi on 6/14/2017.
 */
// import './Hoazi.sass'
require('./Haozi.sass')
import Vue from 'vue'
import Component from 'vue-class-component'
import {Navbar, Tail, MobileNavBar} from '../index'
import haoziStore from '../../../store/haozi'

@Component({
  components: {
    Navbar,
    Tail,
    MobileNavBar
  },
  template: require('./Haozi.html'),
  name: 'Haozi'
})
export default class extends Vue {
  store = haoziStore
}
