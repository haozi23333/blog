<template>
  <div class="changelog">
    <Markdown>
      <h1><p class="center">changelog</p></h1>
      <hr>
      <ul>
        <li>
          <time>2017/6/4</time><span></span>
          <ul>
            <li><s>洗衣机股大跌</s></li>
            <li>哎 昨天智障吧config.ts 丢到git上去了 </li>
          </ul>
        </li>
        <li>
          <time>2017/6/3</time><span></span>
          <ul>
            <li><s> 发现一件事情我的手指打字的时候,每根手指是单独的进程, 进程之间同步的方式是 <code>setTimeOut</code>所以我打字经常错字</s></li>
            <li>和可可打了三盘农药</li>
            <li>添加了<code>Vue-resource</code></li>
            <li>server - api{user, posts}基本完工(post的commit一字未动</li>
            <li>server - 明天的话对接一下控制器, 测试 API 的功能是不是完好的</li>
          </ul>
        </li>
        <li>
          <time>2017/6/2</time><span></span>
          <ul>
            <li>安装了<code>Vuex</code>感觉很好用</li>
            <li>导航条依然是用<code>flex</code>修好了所以<code>flex</code>大法好,<code>flex</code>是万能的<s>(简直打脸</s></li>
            <li><s>辣鸡时钟机关之心</s> 狐妖大法好 <s><strong>蓉蓉赛高</strong></s></li>
            <li>server - 一字未动</li>
            <li>好累准备在梦里规划一下<code>store</code></li>
            <li>todo 虽然是记起来了 但是今天并没有动 server 的代码</li>
          </ul>
        </li>
        <li>
          <time>2017/6/1</time><span></span>
          <ul>
            <li>今天俱乐部有那个什么61儿童节活动,过去逛了一圈,吸收了一堆灰(路上灰大)</li>
            <li>然后.......忘记昨晚记录的 todo 了</li>
            <li>稍微整改了 haozi 页面的响应式布局(然而写炸了<code>flex</code>不是万能的)</li>
            <li>server - 创建了README.MD 文件( 但是并没有写东西</li>
            <li>server - 开始写用户控制器</li>
            <li>server - 对数据库的的user模型进行了一些新的设计</li>
            <li>server - 新增了config文件</li>
            <li>脑海里面规划了一下验证参数的做法</li>
            <li><s> 明天一定记得看 todo</s></li>
          </ul>
        </li>
        <li>
          <time>2017/5/31</time><span></span>
          <ul>
            <li>修改了 post.vue 的文章标题的间距</li>
            <li>提交了 blog-server 项目</li>
            <li>server - 替换了 Nodejs 本来的 Promise 为 bluebird</li>
            <li>钦点了响应式库为 sass-mq </li>
            <li>修复了 haozi - index的页脚</li>
            <li>server - 大概的设计了一下 restful api </li>
            <li>server - 设计了{file, user, post, tag} 的数据库模型</li>
            <li>server - 规划了文件夹</li>
            <li><s>怕是开了一个网盘{...}的大坑</s></li>
            <li>困死了,早点睡😴. 肝崩坏去~~~</li>
          </ul>
        </li>
        <li>
          <time>2017/5/30</time><span></span>
          <ul>
            <li>微调 markdown.sass</li>
            <li>写完了 haozi 的 footer, 文章列表, 文章内容页面</li>
            <li>解决了 haozi 的 NavBar 的 <code>haozi</code> 居中问题</li>
            <li>修改路由的模式为 <code>history</code></li>
            <li>修改了 <code>App</code>的布局方式为 <code>flex</code></li>
            <li> 添加了 index.html 的 head meat</li>
            <li>做了这个精简版本的 about 页面</li>
          </ul>
        </li>
        <li>
          <time>2017/5/29</time>
          <ul>
            <li>添加了几只遗漏的文件到 git</li>
            <li>发现 emoji 表情有点问题用 i标签套起来吧</li>
          </ul>
        </li>
        <li>
          <time>2017/5/28</time>
          <ul>
            <li>添加了对 typescript 的滋瓷</li>
            <li>钦定了 icon 库 -> fontawesome</li>
            <li>webpack 的 alias 添加了<code>keke</code> <code>haozi</code><code>emoticon</code>的定义</li>
            <li>构想了点东西</li>
          </ul>
        </li>
        <li>
          <time>2017/5/15</time>
          <ul>
            <li>init</li>
          </ul>
        </li>
      </ul>
    </Markdown>
  </div>
</template>
<script>
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import Markdown from '../Markdown.vue'

  @Component({
    props: {

    },
    components: {
      Markdown
    }
  })
  export default class About extends Vue {
  }
</script>
<style scoped lang="sass" rel="stylesheet/sass" media="all">
  @import "../../assets/css/global.sass"

  .center
    text-align: center

  .changlog
    .markdown
      ul
        li
          border-bottom: 1px solid $red

</style>
