/**
 * Created by haozi on 2017/06/16.
 */

import './Editor.sass'

import Vue from 'vue'
import {Store} from 'vuex'
import {Component} from 'vue-property-decorator'
import editorStore from '../../../../store/editor'
import adminStore from '../../../../store/admin'
import {CHANGE_MARKDOWN} from '../../../../store/editorTypes'

@Component({
  template: require('./Editor.html')
})
export default class extends Vue {
  store = new Store({
    modules: {
      adminStore,
      editorStore
    }
  })
  markdown = '1'
  keyDown (e) {
    /**
     * tab
     */
    if (e.keyCode === 9) {
      e.preventDefault()
      let indent = '  '
      let start = this.$refs.textarea.selectionStart
      let end = this.$refs.textarea.selectionEnd
      let selected = window.getSelection().toString()
      selected = indent + selected.replace(/\n/g, '\n' + indent)
      this.markdown = this.markdown.substring(0, start) + selected + this.markdown.substring(end)
      this.$refs.textarea.setSelectionRange(start + indent.length, start + selected.length)
    }
    /**
     * ctrl + s
     */
    if (e.ctrlKey === true && (e.keyCode === 83 || e.keyCode === 115)) {
      event.preventDefault()
      console.log('save')
      return false
    }
  }
  mounted () {
    this.$watch(() => {
      return this.markdown
    }, () => {
      this.store.editorStore.commit(CHANGE_MARKDOWN, this.markdown)
    })
  }
}
