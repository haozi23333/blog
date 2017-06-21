/**
 * Created by haozi on 2017/06/16.
 */

import './Editor.sass'

import Vue from 'vue'
import {Store} from 'vuex'
import {Component, Watch} from 'vue-property-decorator'
import editorStore from '../../../../store/editor'
import adminStore from '../../../../store/admin'
import editorTypes from '../../../../store/editorTypes'

@Component({
  template: require('./Editor.html'),
  components: {

  },
  name: 'Editor'
})
export default class extends Vue {
  // store = new Store({
  //   ...adminStore,
  //   ...editorStore
  // })
  editorStore = editorStore
  adminStore = adminStore
  public markdown = '1'
  public $refs: {
    textarea: HTMLTextAreaElement
  }

  @Watch('markdown')
  public onMarkdownChange(val) {
    this.editorStore.dispatch( editorTypes.CHANGE_MARKDOWN, val)
  }

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
      this.markdown = this.markdown.substring(0, start) + selected + this.markdown.substring(end);
      this.$refs.textarea.setSelectionRange(start + indent.length, start + selected.length)
    }
    /**
     * ctrl + s
     */
    if (e.ctrlKey === true && (e.keyCode === 83 || e.keyCode === 115)) {
      event.preventDefault()
      console.log('save')
    if (this.editorStore.state.savelocation === 'localStorage') {
      this.editorStore.dispatch(editorTypes.SAVE_POST_LOCALSTORAGE)
    } else {
      this.editorStore.dispatch(editorTypes.SAVE_POST_SERVER)
    }
    return false
    }
  }

  /**
   * 在这里注册一下全局快捷键 = =  保存
   */
  public globalKeyDown () {
    // key('⌘+s, ctrl+s', (event, handle) => {
    //   event.preventDefault()
    //   console.log('save')
    //   if (this.editorStore.state) {
    //     this.editorStore.dispatch(editorTypes.SAVE_POST_LOCALSTORAGE)
    //   }
    //
    //   return false
    // })
  }

  mounted () {
    this.$watch(() => {
      return this.editorStore.state.post.markdown
    }, (newValue) => {
      this.$refs.textarea.value = newValue
    })
    this.globalKeyDown()
  }
}
