<template>
  <div class="admin-editor-view">
    <Markdown v-html="store.state.editorStore.html">

    </Markdown>
  </div>
</template>
<script type="text/javascript">

  import Vue from 'vue'
  import {Store} from 'vuex'
  import Component from 'vue-class-component'
  import Markdown from '../../markdown/-Markdown.vue'
  import {store as adminStore} from '../../../store/admin'
//  import {
//    CHANGE_MARKDOWN
//  } from '../../../store/editorMutationsType'
  import {store as editorStore} from '../../../store/editor'
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
</script>
<style scoped lang="sass" rel="stylesheet/sass" media="all">

  @import "../../../assets/css/global"

  .admin-editor-view
    width: 500px
    height: 100%
    flex: 1 1 50%
    box-shadow: $shadow
    overflow: auto
    overflow-x: hidden
    /*max-width: calc(50% - 125px)*/
    margin: 5px
</style>
