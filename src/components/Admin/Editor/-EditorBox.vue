<template>
  <div class="admin-editor">
    <div class="admin-editor-title">
      <input type="text" placeholder="Your Post Title"><a>Save</a><a><Icon name="cog"></Icon></a>
      <select>
        <option value="localStorage">localStorage</option>
        <option value="server">server</option>
      </select>
    </div>
    <div class="admin-editor-editSpace">
      <Editor></Editor>
      <EditorView></EditorView>
    </div>
  </div>
</template>
<script type="text/javascript">

  import Vue from 'vue'
  import Component from 'vue-class-component'
  import Icon from 'vue-awesome/components/Icon.vue'
  import 'vue-awesome/icons/cog'
  import Editor from './Editor.vue'
  import EditorView from './EditorView.vue'
  @Component({
    components: {
      Editor,
      EditorView,
      Icon
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
    flex-direction: column

  .admin-editor-title
    height: 40px
    width: 100%
    input
      height: 40px
      width: calc(100% - 250px)
      margin-left: 10px
      margin-right: 10px
      box-shadow: none
      border: none
      &:focus
        outline: none

    a
      margin-left: 10px
  .admin-editor-editSpace
    display: flex
    justify-content: flex-start
    height: 1px
    min-height: 10px
    flex: 1 0


</style>
