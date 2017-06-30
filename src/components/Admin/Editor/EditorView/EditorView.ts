import './EditorView.sass'

import Vue from 'vue'
import {Store} from 'vuex'
import {Component} from 'vue-property-decorator'
import {Markdown} from '../../..'
import adminStore from '../../../../store/admin'
import editorStore from '../../../../store/editor'

@Component({
  template: require('./EditorView.html'),
  components: {
    Markdown
  },
  name: 'EditorView'
})
export default class extends Vue {
  adminStore = adminStore
  editorStore = editorStore
  public mounted() {
    this.$watch(() => {
      return this.editorStore.state.post.html
    }, (val: string) => {
      (this.$refs.view as Markdown).setHtml(val)
    })
  }
}
