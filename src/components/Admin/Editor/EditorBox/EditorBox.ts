/**
 * Created by haozi on 2017/06/16.
 */

import './EditorBox.sass'

import Vue from 'vue'
import {Component} from 'vue-property-decorator'
import {Editor, EditorView} from '../../index'
import 'vue-awesome/icons/cog'
import 'vue-awesome/icons/refresh'
import adminStore from '../../../../store/admin'
import editorStore from '../../../../store/editor'
import editorTypes from '../../../../store/editorTypes'

@Component({
  template: require('./EditorBox.html'),
  components: {
    Editor,
    EditorView,
  },
  name: 'EditorBox',
})
export default class extends Vue {
  adminStore = adminStore
  editorStore = editorStore

  public mounted() {
    if (this.$route.params.postId) {
      this.editorStore.dispatch(editorTypes.LOAD_POST_LOCALSTORAGE, this.$route.params.postId)
    }
  }

  public data () {
    return {
      savelocation: 'localStorage'
    }
  }

  /**
   *  当保存的地方发生改变的是触发这个事件
   */
  public onSaveLocationChange() {
    console.log('听说新的风暴已经出现 -> ' +  this.editorStore.state.savelocation)
  }
  private save () {
    this.editorStore.dispatch(editorTypes.SAVE_POST_LOCALSTORAGE)
  }
  private reload () {
    if(this.editorStore.state.savelocation === 'server') {
      this.editorStore.dispatch(editorTypes.LOAD_POST_SERVER)
    } else {
      this.editorStore.dispatch(editorTypes.LOAD_POST_LOCALSTORAGE)
    }
  }

}
