import './EditorView.sass'

import Vue from 'vue'
import {Store} from 'vuex'
import {Component} from 'vue-property-decorator'
import {Markdown} from '../../..'
import adminStore from '../../../../store/admin'
import editorStore from '../../../../store/editor'

@Component({
    components: {
      Markdown
    }
  })
  export default class EditorView extends Vue {
    store = new Store({
      modules: {
        adminStore,
        editorStore
      }
    })
  }