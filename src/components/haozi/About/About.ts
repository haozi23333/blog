/**
 * Created by haozi on 6/14/2017.
 */
import './About.sass'

import Vue from 'vue'
import Component from 'vue-class-component'
import {Markdown} from '../../index'

@Component({
  template: require('./About.html'),
  components: {
    Markdown
  },
  name: 'About'
})
export default class extends Vue {

}
