/**
 * Created by haozi on 6/14/2017.
 */

import './loadOne'
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  template: require('./loadOne.html'),
  components: {
  },
  name: 'loadOne'
})
export default class loadOne extends Vue {
}
