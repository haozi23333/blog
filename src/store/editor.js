/**
 * Created by haozi on 2017/06/02.
 */

import Vuex from 'vuex'
import Vue from 'vue'
import {
  CHANGE_MARKDOWN
} from './editorMutationsType'

import remark from 'remark'
import remarkHtml from 'remark-html'
// import remarkCollapse from 'remark-collapse'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    html: '',
    markdown: ''
  },
  mutations: {
    [CHANGE_MARKDOWN] (state, markdown) {
      state.markdown = markdown
      state.html = String(
        remark()
          .use(() => {
            return (tree, file) => {
              console.log(tree)
              const map = (_tree) => {
                if (_tree.type === 'image') {
                  console.log(_tree)
                  console.log('image')
                  console.log(`alt -> ${_tree.alt}`)
                  _tree.alt = '23333'
                  _tree.data = _tree.data || {}
                  /**
                   *  这个属性是
                   */
                  _tree.data.hProperties = {
                    width: 1,
                    big: true
                  }
                  _tree.data.className = ['123']
                  return
                }
                if (_tree.children) {
                  _tree.children.map(v => {
                    map(v)
                  })
                }
              }
              map(tree)
            }
          })
          .use(remarkHtml)
          // .use(remarkCollapse)
          .processSync(markdown)
      )
      console.log()
    }
  }
})

export {
  store
}
