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
     */
    const d = document,
      s = d.createElement('script')
    s.src = 'https://haozi-moe.disqus.com/embed.js'
    s.setAttribute('data-timestamp', String(new Date()));
    (d.head || d.body).appendChild(s)
    // try {
    //   window.d = document
    //   const script = await this.getScript('https://haozi-moe.disqus.com/embed.js');
    //   (new Function(script)).call(this)();
    // } catch (e) {
    //   toasted.error('评论加载失败')
    // }
  }

  public async getScript(url): Promise<string> {
    const {status, data} = await http.get(url)
    if (status === 200 && data) {
      return data
    } else {
      throw  new Error("get error")
    }
  }
}
