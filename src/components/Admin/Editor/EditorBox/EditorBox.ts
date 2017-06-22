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
  name: 'EditorBox'
})
export default class extends Vue {
  /**
   * 两个store
   * @type {Store<{navigations: [{path: string; title: string},{path: string; title: string},{path: string; title: string},{path: string; title: string}]}>}
   */
  adminStore = adminStore
  editorStore = editorStore

  /**
   * 路由补全 = =
   */
  public $route: {
    params:{
      postId:　string
    }
  }

  /**
   * 挂载时候调用
   * 提交加载本地存储的actions, 没有的话就调用网络的
   */
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

  }
  private save () {
    this.editorStore.dispatch(editorTypes.SAVE_POST_LOCALSTORAGE)
  }

  /**
   * 重新从本地加载数据 -> 放弃
   */
  private reload () {
    if(this.editorStore.state.savelocation === 'server') {
      this.editorStore.dispatch(editorTypes.LOAD_POST_SERVER)
    } else {
      this.editorStore.dispatch(editorTypes.LOAD_POST_LOCALSTORAGE)
    }
  }

}
