<template>
  <div class="admin-editor">
    <Editor></Editor>
    <EditorView></EditorView>
  </div>
</template>
<script type="text/javascript">

  import Vue from 'vue'
  import Component from 'vue-class-component'
  import Editor from './Editor.vue'
  import EditorView from './EditorView.vue'
  @Component({
    components: {
      Editor,
      EditorView
    }
  })
  export default class EditorBox extends Vue {

  }
</script>
<style scoped lang="sass" rel="stylesheet/sass" media="all">

  @import "../../../assets/css/global"

  .admin-editor
    width: 100%
    height: 100%
    flex: 1
    display: flex
    justify-content: flex-start

</style>
