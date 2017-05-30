<template>
  <div class="markdown">
    <slot></slot>
  </div>
</template>
<script>
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import Icon from 'vue-awesome/components/Icon.vue'
  import 'vue-awesome/icons/user'
  import 'vue-awesome/icons/clock-o'
  import 'vue-awesome/icons/tags'

  import Picture from './markdown/Picture.vue'

  @Component({
    props: {

    },
    components: {
      Icon,
      Picture
    }
  })
  export default class Markdown extends Vue {
  }
</script>
<style scoped lang="sass" rel="stylesheet/sass" media="all">
  @import "../assets/css/global"
  @import "../assets/css/markdown"



</style>
