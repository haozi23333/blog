<template>
  <div class="admin-editor-edit">
      <textarea ref="textarea" spellcheck="false" @keydown="keyDown" v-model="markdown">

      </textarea>
  </div>
</template>
<script type="text/javascript">

  import Vue from 'vue'
  import Component from 'vue-class-component'
  import {
    CHANGE_MARKDOWN
  } from '../../../store/editorMutationsType'
  import {store} from '../../../store/editor'

  @Component({
    components: {
    }
  })
  export default class Editor extends Vue {
    store = store
    markdown = '1'
    keyDown (e) {
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
    }
    mounted () {
      this.$watch(() => {
        return this.markdown
      }, () => {
        this.store.commit(CHANGE_MARKDOWN, this.markdown)
      })
    }
  }
</script>
<style scoped lang="sass" rel="stylesheet/sass" media="all">
  @import "../../../assets/css/global"

  .admin-editor-edit
    height: 100%
    flex: 1 1 50%
    box-shadow: $shadow
    /*max-width: calc(50% - 125px)*/

    textarea
      width: 100%
      height: 100%
      resize: none

</style>
