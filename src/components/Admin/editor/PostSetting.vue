<template>
  <div class="admin-post-setting">
  </div>
</template>
<script type="text/javascript">

  import Vue from 'vue'
  import Component from 'vue-class-component'
  import {store} from '../../../store/editor'

  @Component({
    components: {
    }
  })
  export default class PostSetting extends Vue {
    store = store
    mounted () {
    }
  }
</script>
<style scoped lang="sass" rel="stylesheet/sass" media="all">
  @import "../../../assets/css/global"

</style>
