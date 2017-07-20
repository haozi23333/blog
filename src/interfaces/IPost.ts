/**
 * Created by haozi on 2017/06/27.
 */

interface IPost{
  // 文章ID
  postId: string
  // 文章标题
  title: string
  // 标签
  tags: string[]
  // 文章图片(显示在文章列表用的) 储存
  image: string
  // markdown 储存
  markdown: string
  // 预编译好的html 储存
  html: string
  // 是否展示
  isShow: boolean
  // 创建时间
  createDate: string
  // 创建人
  createBy: string
  // 更新日期
  updateDate: string
  // 概览
  excerpt: string
}
