/**
 * Created by haozi on 6/14/2017.
 */

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
  template: require('./Haozi.html')
})
export default class Haozi extends Vue {
  store = haoziStore
}