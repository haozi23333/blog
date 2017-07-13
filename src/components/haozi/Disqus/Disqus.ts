/**
 * Created by haozi on 2017/07/09.
 */

import './Disqus.sass'
import {Component} from 'vue-property-decorator'
import Vue from 'vue'
import http from '../../../api/http'
import toasted from "../../../util/toasted"

@Component({
  template: require('./Disqus.html'),
  name: 'Disqus'
})
export default class Disqus extends Vue {
  public async mounted() {
    /**
     * Disqus 的 js
     * @type {Document}
     * 
     */
    const d = document,
      s = d.createElement('script')
    s.src = 'https://haozinowo.disqus.com/embed.js'
    s.setAttribute('data-timestamp', String(new Date()));
    (d.head || d.body).appendChild(s)
  }
}
