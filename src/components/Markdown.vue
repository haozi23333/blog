<template>
  <div>
    <h1>给 ghost 图片服务加上 CDN</h1>
    <div id="ember1592">
      <p>注意: 只是图片服务. 🌰(栗子)是七牛云的  、</p>

      <ul>
        <li>图片CDN </li>
        <li>图片CDN参数压缩 <img src="https://img.shields.io/npm/v/node-coolq.svg" alt=""><br>
          可以参考我的
          <a href="https://github.com/haozi23333/ghost/commit/e71c9dc23592ba2d11523968b59b82a73d90cb01">commit</a>
        </li>
        <li>
          4444
          <ul>
            <li>
              23333
            </li>
          </ul>
        </li>
      </ul>
      <hr>

      <h2 id="233">效果</h2>

      <p><a href="https://cdn.hao-zi.com/content/images/2017/04/62463049_p0-2.jpg?imageView2/0/q/75|imageslim">测试图片</a> <br>
        我的原图是 859KB <br>
        使用七牛压缩参数</p>

      <pre><code>imageView2/1/w/800/h/600/interlace/1/q/100|watermark/2/text/QGhhb3pp/font/Y29uc29sYXM=/fontsize/500/fill/I0E3QTdBNw==/dissolve/100/gravity/SouthEast/dx/10/dy/10|imageslim
</code></pre>

      <p>图片指定800*600的区域中心剪裁，加上@haozi的水印压缩图片，图片质量100% <br>
        这个缩略图是用在正文当中的 <br>
        : 60.7KB
        参数

      </p>

      <pre><code>imageView2/0/q/75|imageslim
</code></pre>

      <p>不剪裁，75%的质量，做图片压缩: 155kb
        这个是用在正文图片被点击放大的时候加载的 <br>
        压缩效果还是不错的。大图片我这边访问还是比较慢的，尤其是做了处理的</p>

      <h2 id="">实践</h2>

      <h3 id="configjs">config.js</h3>

      <p>我们先在config.js中加上我们需要的配置</p>

      <pre><code>   production: {
        url: 'http://my-ghost-blog.com',
        mail: {},
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost.db')
            },
            debug: false
        },

        server: {
            host: '127.0.0.1',
            port: '2368'
        },
        cdn: {
            url: 'https://cdn.hao-zi.com',
            defaultImageParam: '?imageView2/0/q/100|imageslim',
            imageParam: '?imageView2/1/w/800/h/600/interlace/1/q/100|watermark/2/text/QGhhb3pp/font/Y29uc29sYXM=/fontsize/500/fill/I0E3QTdBNw%3d%3d/dissolve/100/gravity/SouthEast/dx/10/dy/10|imageslim'
        }
    },
</code></pre>

      <img src="../assets/emoticon/bigPic.jpg" big alt="">

      <p>在这注意一下<code>==</code>会被解析成<code>&lt;mark&gt;</code>所以要转义<code>%3d%3d</code></p>

      <h3 id="localfilestorejs">local-file.store.js</h3>

      <p>找到<code>core/server/storage/local-file-store.js</code>
        在第42行 返回了一个相对于我们域名的一个资源地址(/content/images/xxx.png)。我们在这个路径前面加上cdn的地址，后面加上默认的图片处理参数。 <br>
        在这个地方修改了之后，新上传的图片都会被转换成带cdn和处理参数的地址。(旧的图片需要重新上传)</p>

      <pre><code>return config.cdn.url + fullUrl + config.cdn.defaultImageParam;
</code></pre>

      <h3 id="markdown">markdown</h3>

      <p>ghostBlog 使用的是 <a href="https://github.com/bsansouci/showdown-ghost">showdown-ghost</a> 来解析markdown语法的。在文档中有介绍如何去编写扩展。 <br>
        我从这个插件<code>/src/extensions/ghostgfm.js</code>中找到了用来匹配出<code>![]</code>语法的<a href="https://github.com/bsansouci/showdown-ghost/blob/master/src/extensions/ghostgfm.js#L38">正则表达式</a><del>不会写QAQ</del> <br>
        在<code>/core/server/models</code>下面新建一个文件'cdnImage.js'导出一个函数，并返回一个数组. <br>
        <code>type: lang</code>的意思语言扩展(扩展语法) <br>
        <code>filter</code>就是过滤器，传入整个markdown文本，返回被处理好的文本. <br>
        下面的代码基本都是<a href="https://github.com/bsansouci/showdown-ghost/blob/master/src/extensions/ghostgfm.js">ghostgfm.js</a>的东西,不做过多的解释。在img的src加上我们config里面的cdn.imageParam</p>

      <pre><code>var config = require('../config')
module.exports = function () {
    return [
        {
            type: 'lang',
            filter: function (text) {
                imageMarkdownRegex = /^(?:\{(.*?)\})?!(?:\[([^\n\]]*)\])(?:\(([^\n\]]*)\))?$/gim
                return text.replace(imageMarkdownRegex, function (match, key, alt, src) {
                    if (src) {
                        if (src.indexOf(".pdf") === src.length-4){
                            return '&lt;object data="' + src + '" type="application/pdf" width="100%" height="100%"&gt;' + alt + '&lt;/object&gt;';
                        }

                        return '&lt;img src="' + src.replace(/\?.*/, "") + config.cdn.imageParam + '" alt="' + alt + '" /&gt;';
                    }
                    return '';
                });
            }
        }
    ]
}
</code></pre>

      <p>找到<code>/core/content/models/post.js</code>在Showdown的扩展上加上我们刚刚编写的扩展<code>require('./cdnImage')</code>。这样我们的扩展会被优先处理. <br>
        重启ghost看看有没有成功.</p>

      <h2 id="">后记</h2>

      <p>蓝瘦，ghost都没有插件机制，加功能还要改源码~~</p>

      <blockquote>
        <p>有什么问题的话请在下面的评论区告诉我QAQ(评论需要翻墙)</p>
      </blockquote>

      <!----></div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import Icon from 'vue-awesome/components/Icon.vue'
  import 'vue-awesome/icons/user'
  import 'vue-awesome/icons/clock-o'
  import 'vue-awesome/icons/tags'

  @Component({
    props: {

    },
    components: {
      Icon
    }
  })
  export default class Markdown extends Vue {
  }
</script>
<style scoped lang="sass" rel="stylesheet/sass" media="all">
  @import "../assets/css/global"
  @import "../assets/css/markdown"



</style>
