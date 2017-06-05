/**
 * Created by haozi on 6/5/2017.
 */
import {converter} from 'showdown-ghost'

/* eslint-disable */
const converterPreview =  new converter({
  extensions: ['table']
})
const converterHTML =  new converter({
  extensions: ['table']
})

export function markdownToEditorPreviewHTML(markdown) {
  return converterPreview.makeHtml(markdown)
}

export function markdownToHTML(markdown) {
  return converterHTML.makeHtml(markdown)
}


