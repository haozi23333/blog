/**
 * Created by haozi on 2017/06/16.
 */

import './EditorBox.sass'

import Vue from 'vue'
import {Component} from 'vue-property-decorator'
import {Editor, EditorView} from '../../index'
import 'vue-awesome/icons/cog'
console.log(Editor)
@Component({
  template: require('./EditorBox.html'),
  components: {
    Editor,
    EditorView
  },
  name: 'EditorBox'
})
export default class extends Vue { 
}
