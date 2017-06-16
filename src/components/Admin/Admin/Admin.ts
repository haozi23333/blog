/**
 * Created by haozi on 6/16/2017.
 */

import Vue from 'vue'
import {Component} from 'vue-property-decorator'

@Component({
  template: require('./Admin.html'),
  components: {

  }
})
export default class extends Vue {
  mounted () {
    document.body.style.overflow = 'hidden'
  }
}