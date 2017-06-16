/**
 * Created by haozi on 2017/06/16.
 */

import './EditorBox.sass'

import Vue from 'vue'
import {Store} from 'vuex'
import {Component} from 'vue-property-decorator'
import {Editor, EditorView} from '../../'

@Component({
  template: require('./EditorBox.html'),
  component: {
    Editor,
    EditorView
  },
  name: 'EditorBox'
})
export default class extends Vue{ 

}
