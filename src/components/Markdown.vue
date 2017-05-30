<template>
  <div class="markdown">
    <article class="post-block"><h1 class="post-title">Flexbox</h1><div class="post-info">Jul 20, 2016</div><div class="post-content"><p>几年前学习 <a href="http://zh.learnlayout.com/toc.html" target="_blank" rel="external">learnlayout</a> 时第一次了解到 flexbox，后来写 CSS 的任务越来越少，但还是挺关注 flexbox 的兼容情况，这几年移动端对 flexbox 的使用越来越多，相关的实践也越来越成熟。去年了解到 React Native 也在使用 flexbox 做布局设计的时候，我第一次完整地学习了 flexbox 的使用方式并写了这篇博客，但最近重新阅读之后，发现自己对相关概念仍然存在误区，所以花了一天左右的时间做各种布局实践，来检验自己对相关概念的理解并整理如下。</p>
      <p>哈哈在 flexbox 布局中有两个核心元素：<code>container</code> 和 <code>item</code>。item 是 container 所包含的直接子节点，它们的布局方式会受到 container 的约束。对于 container，必须理解两条轴和四个点：main axis、cross axis、main start、main end、cross start、cross end。下图是两轴四点在<strong>默认情况</strong>下的位置，这里的默认情况是指 <code>flex-flow: row nowrap;</code>。理解 main axis 和 cross axis 能够根据 <code>flex-flow</code>动态变化这一点很重要，这也是它为什么不叫作 x 轴和 y 轴的原因，以 main axis 举例来说，<code>flex-flow: row nowrap</code> 时它是水平方向的，<code>flex-flow: column nowrap</code> 则是垂直方向的。</p>
      <p><img big src="http://pinggod.com/img/flexbox.png" alt="Flexbox"></p>
      <a id="more"></a>
      <h2 id="Container"><a href="#Container" class="headerlink" title="Container"></a>Container</h2><p>一个元素要成为 flexbox 中的 container，有两种声明类型：</p>
      <figure class="highlight scss"><table><tbody><tr><td class="code"><pre><div class="line"><span class="selector-class">.container</span> {</div><div class="line">    <span class="attribute">display</span>: flex;</div><div class="line">}</div><div class="line"></div><div class="line"><span class="comment">// or</span></div><div class="line"><span class="selector-class">.container</span> {</div><div class="line">    <span class="attribute">display</span>: inline-flex</div><div class="line">}</div></pre></td></tr></tbody></table></figure>
      <p>每一个 flexbox container 可以使用五种规则对 item 进行约束：</p>
      <ul>
        <li><code>flex-flow: &lt;flex-direction&gt; &lt;flex-wrpa&gt;</code>，一种缩写形式</li>
        <li><code>flex-direction</code>，约束 item 的布局排列方向，决定 main axis 的方向</li>
        <li><code>flex-wrap</code>，约束 item 在超出布局边界的处理方式，决定 cross axis 的方向</li>
        <li><code>justify-content</code>，约束 item 在 main axis 上的排列方式</li>
        <li><code>align-items</code>，约束 item 在 cross axis 上的排列方式</li>
        <li><code>align-content</code>，约束 main axis 在 cross axis 上的排列方式</li>
      </ul>
      <p>如果使用 flexbox 布局的结果与预期不一致，问题很可能出现在对上述属性的误解上。这些属性从上到下是一种相互制约的关系，如果你无法在思维中明确 flex-flow 所指定的 main axis 和 cross axis，那么后续的布局都是盲目的：</p>
      <ul>
        <li><code>flex-direction: row</code>，默认值，main axis 与水平方向平行，由左到右走向</li>
        <li><code>flex-direction: row-reverse</code>，main axis 与水平方向平行，由右到左走向</li>
        <li><code>flex-direction: column</code>，main axis 与垂直方向平行，由上到下走向</li>
        <li><code>flex-direction: column-reverse</code>，main axis 与垂直方向平行，由下到上走向</li>
        <li><code>flex-wrap: nowrap</code>，默认值，cross axis 与 main axis 方向垂直，由上到下或者由左到右走向</li>
        <li><code>flex-wrap: wrap</code>，cross axis 与 main axis 方向垂直，由上到下或者由左到右走向</li>
        <li><code>flex-wrap: wrap-reverse</code>，cross axis 与 main axis 方向垂直，由上到下或者由右到左走向</li>
      </ul>
      <p>每一个 flexbox item 可以使用六种规则对自身在 container 中的布局方式进行微调：</p>
      <ul>
        <li><code>order</code>，默认值为 0，数值越小，排列时越靠前</li>
        <li><code>align-self</code>，调整 item 在 cross axis 上的排列方式</li>
        <li><code>flex: &lt;flex-grow&gt; &lt;flex-shrink&gt; &lt;flex-basis&gt;</code>，一种缩写形式</li>
        <li><code>flex-grow</code>，当 container 空间多余 item 所需空间时，该属性决定 item 的放大比例，默认值为 0，表示不放大</li>
        <li><code>flex-shrink</code>，当 container 空间不足时，该属性决定 item 的缩小比例，默认值为 1，如果值为 0，则表示不收缩</li>
        <li><code>flex-basis</code>，决定 item 在 main axis 的大小</li>
      </ul>
      <p>这里的 <code>flex-basis</code> 与 <code>width</code> 是不同的概念，当 <code>flex-direction: row</code> main axis 与水平方向平行时，<code>flex-basis</code> 用于控制 <code>item</code> 的宽度；当 <code>flex-direction: column</code> main-axis 与垂直方向平行时，<code>flex-basis</code> 用于控制 <code>item</code> 的高度。更多 <code>flex-basis</code> 与 <code>width</code> 和 <code>height</code> 的不同，请参考 Stack Overflow 上的问题<a href="http://stackoverflow.com/questions/34352140/what-are-the-differences-between-flex-basis-and-width" target="_blank" rel="external">《What are the differences between flex-basis and width?》</a>。</p>
      <h2 id="box-sizing"><a href="#box-sizing" class="headerlink" title="box-sizing"></a>box-sizing</h2><p>话外提一下 <code>box-sizing</code>， 该属性用于声明 <code>width</code> 和 <code>height</code> 的约束范围：<code>border-box</code> 表示边框、内边距和内容块的宽高计入容器宽高；<code>content-box</code> 表示只有内容块的宽高计入容器宽高。此外，该属性可继承，可以通过设置 body 的 box-sizing 统一约束容器的宽高。</p>
      <h2 id="参考资料"><a href="#参考资料" class="headerlink" title="参考资料"></a>参考资料</h2><ul>
        <li><a href="http://flexboxfroggy.com" target="_blank" rel="external">flexfroggy</a></li>
        <li><a href="http://zh.learnlayout.com/toc.html" target="_blank" rel="external">learnlayout</a></li>
        <li><a href="http://stackoverflow.com/questions/34352140/what-are-the-differences-between-flex-basis-and-width" target="_blank" rel="external">What are the differences between flex-basis and width?</a></li>
        <li><a href="http://www.ruanyifeng.com/blog/2015/07/flex-examples.html" target="_blank" rel="external">flexbox 布局实例</a></li>
      </ul>
    </div></article>
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
