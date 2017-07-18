/**
 * Created by haozi on 2017/06/29.
 */
import './Project.sass'
import Vue from 'vue'
import {Component} from 'vue-property-decorator'
import api from '../../../api/http'
import browserMD5File = require('browser-md5-file')
import {promisify} from '../../../util/promisify'

@Component({
  template: require('./Project.html')
})
export default class extends Vue {
  public async changeFile(e: Event) {
    const files = (e.target as HTMLInputElement).files || (e as DragEvent).dataTransfer.files
    console.log(files)
    const data = new FormData()
    data.append('file', files[0])
    const md5 = await promisify(browserMD5File, null)(files[0]) as string
    console.log(`fileName -> ${files[0].name}  md5 -> ${md5}` )
    data.append('md5', md5)
    await api.post(`disk/file`, data, {
      headers: {
        'Content-Type': 'multipart-form-data'
      }
    })
  }

  private list: {a: number}[] = []

  private add () {
    this.list.push({
      a: 2333
    })
  }
}
