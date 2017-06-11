<template>
  <div class="markdown">
    <slot></slot>
    <p>本文是阅读<a href="https://book.douban.com/subject/20440003/" target="_blank" rel="external">《HTML5 与 CSS3 设计模式》</a>时摘录的一篇读书笔记，内容主要是使用 table 标签设计列布局，这里讲的布局适用于表格式数据（tabular data），不建议用于页面布局，使用表格设计页面布局会降低内容的可访问性。在讲布局之前，先说两条 table 元素的特殊特性：</p>\n<p>一是，表格单元格 td / th 的 height 属性只能指定单元格的最小高度，当内容过长超过容器容量时，容器高度就会自动增大。解决这个问题有两种方法：为单元格内的内容设置一层容器，比如 div，并为容器设置 <code>height: 固定高度值;</code> 和 <code>overflow: hidden</code> 样式；为单元格内容设置 <code>white-space: nowrap</code>，杜绝自动换行行为，继而在水平方向隐藏溢出。</p>\n<p>二是，单元格上设置 <code>visibility: hidden</code> 只会隐藏单元格内容，单元格的边框样式仍然存在。</p>\n<p>使用表格布局主要有四种方案，而这四种方案由 <code>table-layout</code> 和 <code>width</code> 两个 CSS 样式决定。<code>table-layout</code> 支持两个值：<code>auto</code> 和 <code>fixed</code>，<code>auto</code> 自动布局的表格会根据内容宽度、单元格宽度设置列宽，而 <code>fixed</code> 固定布局会忽略内容宽度，仅仅根据第一行单元格的宽度来设置列宽。<code>width</code> 支持三种值：<code>auto</code>、固定值和百分比。四种布局如下（）：</p>\n<ul>\n<li>表格 <code>table-layout: auto</code> 和单元格 <code>width: auto</code>，收缩适应型，表格会自动缩小到所有列宽之和，且不会超过容器宽度</li>\n<li>表格 <code>table-layout: auto</code> 和单元格 <code>width: 固定宽度</code>，设定尺寸型，表格会根据宽度值按比例分配列宽</li>\n<li>表格 <code>table-layout: auto</code> 和单元格 <code>width: 100%</code>，拉伸型，表格宽度会拉伸为父容器的宽度，并按比例分配列宽</li>\n<li>表格 <code>table-layout: fixed</code> 和单元格 <code>width: 固定宽度</code>，固定尺寸型，表格会忽略内容高度而设置列宽</li>\n</ul>\n<a id="more"></a>\n<p>除固定尺寸型表格外，其他类型的表格列宽都是由浏览器决定的，这里涉及到一个概念：<code>最小内容宽度</code>，指单元格中最宽单词的宽度，中文是一个字，英文是一个以空白符分割的词块，比如 ‘a alkdjsfka b’ 中的 ‘a’、’alkdjsfka’ 和 ‘b’ 都是词块，其中 ‘alkdjsfka’ 就是这个单元格的最宽词块。浏览器会按照如下规则设置列宽：</p>\n<ol>\n<li>列默认设置为自动宽度，也就是根据宽度类型（width 的值类型）、最大宽度值、最小内容宽度和最大内容宽度自动设置列宽</li>\n<li>如果 <code>width</code> 为固定值，比如 ‘100px’，那么这个固定宽度就会成为列宽（取当前列的最大固定宽度），替代当前列的默认值</li>\n<li>如果 <code>width</code> 为百分比，比如 ‘10%’，那么这个百分比宽度就会成为列宽（去当前列的最大百分比），替代当前列的固定值和默认值</li>\n<li>如果列宽小于最小内容宽度了，那么使用最小内容宽度成为列宽，替代当前列的百分比、固定值和默认值</li>\n<li>如果列宽大于最大内容宽度了，那么使用最大内容宽度成为列宽，替代当前列的百分比、固定值和默认值</li>\n</ol>\n<blockquote>\n<p>通过 <code>width</code> 设置的列宽并不会完全生效，当表格容器宽度过大或过小时，浏览器会按比例设置列宽。</p>\n</blockquote>\n<h2 id="收缩适应型表格"><a href="#收缩适应型表格" class="headerlink" title="收缩适应型表格"></a>收缩适应型表格</h2><figure class="highlight css"><table><tbody><tr><td class="code"><pre><div class="line"><span class="selector-tag">table</span> {</div><div class="line">    <span class="attribute">width</span>: auto;</div><div class="line">    <span class="attribute">table-layout</span>: auto;</div><div class="line">}</div><div class="line"></div><div class="line"><span class="selector-tag">td</span> {</div><div class="line">    <span class="attribute">width</span>: auto;</div><div class="line">}</div></pre></td></tr></tbody></table></figure>\n<p>表格中的单元格会自动收缩到最小宽度，但如果内容很长，又会扩展到容器的最大宽度，一旦出现这种情况，浏览器会按照内容比例配置列宽。</p>\n<h2 id="设定尺寸型表格"><a href="#设定尺寸型表格" class="headerlink" title="设定尺寸型表格"></a>设定尺寸型表格</h2><figure class="highlight css"><table><tbody><tr><td class="code"><pre><div class="line"><span class="selector-tag">table</span> {</div><div class="line">    <span class="attribute">width</span>: auto;</div><div class="line">    <span class="attribute">table-layout</span>: auto;</div><div class="line">}</div><div class="line"></div><div class="line"><span class="selector-tag">td</span> {</div><div class="line">    <span class="attribute">width</span>: &lt;固定值&gt; | &lt;百分比&gt;;</div><div class="line">}</div></pre></td></tr></tbody></table></figure>\n<p>只有当同一行单元格的总宽度小于等于容器宽度，设置的固定值才会生效，否则浏览器会按宽度比例设定列宽，无论设置什么样的宽度值，列宽都不会小于最小内容宽度。</p>\n<h2 id="拉伸尺寸型表格"><a href="#拉伸尺寸型表格" class="headerlink" title="拉伸尺寸型表格"></a>拉伸尺寸型表格</h2><figure class="highlight css"><table><tbody><tr><td class="code"><pre><div class="line"><span class="selector-tag">table</span> {</div><div class="line">    <span class="attribute">width</span>: auto;</div><div class="line">    <span class="attribute">table-layout</span>: auto;</div><div class="line">}</div><div class="line"></div><div class="line"><span class="selector-tag">td</span> {</div><div class="line">    <span class="attribute">width</span>: <span class="number">100%</span>;</div><div class="line">}</div></pre></td></tr></tbody></table></figure>\n<p>在拉伸尺寸型表格中，百分比宽度具有最高优先级，如果空间不足够，则会压缩固定宽度和自动宽度列到最小内容宽度。</p>\n<h2 id="固定尺寸型表格"><a href="#固定尺寸型表格" class="headerlink" title="固定尺寸型表格"></a>固定尺寸型表格</h2><figure class="highlight css"><table><tbody><tr><td class="code"><pre><div class="line"><span class="selector-tag">table</span> {</div><div class="line">    <span class="attribute">width</span>: &lt;固定值&gt; | &lt;百分比&gt;;</div><div class="line">    <span class="attribute">table-layout</span>: fixed;</div><div class="line">}</div><div class="line"></div><div class="line"><span class="selector-tag">td</span> {</div><div class="line">    <span class="attribute">width</span>: &lt;固定值&gt;;</div><div class="line">}</div></pre></td></tr></tbody></table></figure>\n<p>在固定尺寸型表格中，固定值具有最高优先级，然后是百分比宽度和自动宽度，也就是说，如果空间不够，使用自动宽度和百分比宽度的列都会被折叠。</p>\n<h6 id="参考资料"><a href="#参考资料" class="headerlink" title="参考资料"></a>参考资料</h6><ul>\n<li><a href="https://book.douban.com/subject/20440003/" target="_blank" rel="external">《HTML5 与 CSS3 设计模式》P319~P371</a></li>\n</ul>
    </div>
</template>
<script>
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import Icon from 'vue-awesome/components/Icon.vue'
  import 'vue-awesome/icons/user'
  import 'vue-awesome/icons/clock-o'
  import 'vue-awesome/icons/tags'

  import Picture from './Picture.vue'

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
<style lang="sass" rel="stylesheet/sass" media="all">
  @import "../../assets/css/global"
  @import "../../assets/css/markdown"
  /*@import "../../assets/css/vue"*/


</style>
