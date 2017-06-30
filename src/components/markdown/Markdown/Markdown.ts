/**
 * Created by haozi on 6/14/2017.
 */
import './Markdown.sass'
import Vue from 'vue'
import {Component, Prop, Watch} from 'vue-property-decorator'
import "vue-awesome/icons/cog"
import http from '../../../api/http'
import toasted from "../../../util/toasted"

@Component({
  template: require('./Markdown.html'),
  components: {
  },
  name: 'Markdown'
})
export default class extends Vue {
  public async aceInit() {
    const baseUrl = '//cdn.bootcss.com/ace/1.2.7/'
    if(document.getElementsByTagName('pre').length == 0) {
      console.log('Ace.js 未加载 -> 没有找到代码段')
      return
    }
    try {
      if (!window['ace']) {
        await this.getScript(baseUrl + 'ace.js')
        await this.getScript(baseUrl + 'ext-static_highlight.js')
      }
      console.log('Ace.js 加载完成')
      ace.config.set('basePath', baseUrl);
      const highlight = ace.require("ace/ext/static_highlight")
      const dom = ace.require("ace/lib/dom")
      new Array().map.call(document.querySelectorAll('pre code'), ((el) => {
        if (this.getAttr(el, 'ace-mode'))
          return
        const p = el.className.split('-').map(v => v.replace(/ /g,''))
        this.setAttr(el, 'ace-mode', 'ace/mode/' + (p[1] || "plain_text"))
        this.setAttr(el, 'ace-theme', 'ace/theme/' + (p[2] || "chrome"))
        this.setAttr(el, 'gutter',  p[3] || true)
        highlight(el, {
          mode: el.getAttribute("ace-mode"),
          theme: el.getAttribute("ace-theme"),
          startLineNumber: 1,
          trim: true,
          showGutter: el.getAttribute("gutter")
        })
      }))
    } catch (e) {
      toasted.success('代码高亮加载失败, 请刷新 or pullRequest')
      throw e
    }
  }
  public setAttr(el:HTMLElement , key, val) {
    el.setAttribute(key, val)
  }
  public getAttr(el:HTMLElement , key): string {
    return el.getAttribute(key)
  }
  public async mounted() {
    await this.aceInit()
  }

  /**
   * 动态加载库
   * @param url
   * @returns {Promise<void>}
   */
  public async getScript(url) {
    const {status, data} = await http.get(url)
    if (status === 200 && data) {
      eval(data)
    } else {
      throw  new Error("get error")
    }
  }

  public setHtml(html: string) {
    this.$el.innerHTML = html
  }
}
