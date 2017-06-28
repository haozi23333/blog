/**
 * Created by haozi on 2017/06/27.
 */

interface IPost{
  // 文章ID
  postId: string
  // 当前版本
  ref: string
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
  publish: boolean
  createDate: Date
  createBy: string
  updateDate: Date
  updateBy: string
  publishDate: Date
  publishBy: string
  excerpt: string
  commits: ICommit[],
  edit: boolean
}
