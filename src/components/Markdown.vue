<template>
  <div class="markdown">
    <slot></slot>
   <p>今天在折腾双域名的时候向 nginx 添加了<code>sub_filter</code>模块, 用来替换由 hao-zi.com 发送来的信息,所以我也顺便添加了<code>--with-http_v2_module</code> 的 flag 开启一下我们的 http2之旅 qwq<img src="https://cdn.hao-zi.com/content/images/2017/04/30D21F3F-C4FC-42C4-A5E8-64B2DF3A8963.jpg" alt="" title=""><img src="https://cdn.hao-zi.com/content/images/2017/04/821026-5.png" alt="" title=""></p>
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
