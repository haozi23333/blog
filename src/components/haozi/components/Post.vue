<template>
  <div class="post">
    <article role="article">
      <h1 role="title">
        <router-link to="23">文章标题</router-link>
      </h1>
      <time>Oct 9, 2016</time>
      <Markdown>
        <article class="post-block">
          <div class="post-content"><p>本文是阅读<a href="https://book.douban.com/subject/20440003/">《HTML5 与 CSS3 设计模式》</a>时摘录的一篇读书笔记，内容主要是使用 table 标签设计列布局，这里讲的布局适用于表格式数据（tabular data），不建议用于页面布局，使用表格设计页面布局会降低内容的可访问性。在讲布局之前，先说两条 table 元素的特殊特性：</p>
          <p>一是，表格单元格 td / th 的 height 属性只能指定单元格的最小高度，当内容过长超过容器容量时，容器高度就会自动增大。解决这个问题有两种方法：为单元格内的内容设置一层容器，比如 div，并为容器设置 <code>height: 固定高度值;</code> 和 <code>overflow: hidden</code> 样式；为单元格内容设置 <code>white-space: nowrap</code>，杜绝自动换行行为，继而在水平方向隐藏溢出。</p>
          <p>二是，单元格上设置 <code>visibility: hidden</code> 只会隐藏单元格内容，单元格的边框样式仍然存在。</p>
          <p>使用表格布局主要有四种方案，而这四种方案由 <code>table-layout</code> 和 <code>width</code> 两个 CSS 样式决定。<code>table-layout</code> 支持两个值：<code>auto</code> 和 <code>fixed</code>，<code>auto</code> 自动布局的表格会根据内容宽度、单元格宽度设置列宽，而 <code>fixed</code> 固定布局会忽略内容宽度，仅仅根据第一行单元格的宽度来设置列宽。<code>width</code> 支持三种值：<code>auto</code>、固定值和百分比。四种布局如下（）：</p>
          <ul>
            <li>表格 <code>table-layout: auto</code> 和单元格 <code>width: auto</code>，收缩适应型，表格会自动缩小到所有列宽之和，且不会超过容器宽度</li>
            <li>表格 <code>table-layout: auto</code> 和单元格 <code>width: 固定宽度</code>，设定尺寸型，表格会根据宽度值按比例分配列宽</li>
            <li>表格 <code>table-layout: auto</code> 和单元格 <code>width: 100%</code>，拉伸型，表格宽度会拉伸为父容器的宽度，并按比例分配列宽</li>
            <li>表格 <code>table-layout: fixed</code> 和单元格 <code>width: 固定宽度</code>，固定尺寸型，表格会忽略内容高度而设置列宽</li>
          </ul>
          </div>
          <a href="read-more" class="more">...更多</a>
        </article>
      </Markdown>
    </article>
  </div>
</template>
<script>
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import Markdown from '../../Markdown.vue'

  @Component({
    props: {

    },
    components: {
      Markdown
    }
  })
  export default class Post extends Vue {
  }
</script>
<style scoped lang="sass" rel="stylesheet/sass" media="all">
  @import "../../../assets/css/global.sass"

  .post
    border-bottom: 1px solid rgba($gray, 0.2)
    padding-bottom: 20px
    margin-bottom: 30px

    &:last-child
      border: 0 solid

    h1[role="title"]
      margin-top: 0.7em
      margin-bottom: 2em

      a
        color: black
        font-size: 1.2em
        font-weight: 400
        padding-bottom: 3px

        &:hover
          border-bottom: 1.5px solid $green

    time
      display: block
      font-size: 0.8em
      margin-top: 5px
      margin-bottom: 8px

  .more
    display: block
    width: 100%
    text-align: right
</style>
