/**
 * Created by haozi on 2017/06/28.
 */

import Vue from 'vue'

namespace toasted {
  export function success(message, duration = 500) {
    Vue.toasted.success('创建成功', {
      theme: "outline",
      position: "bottom-center",
      duration : 500
    })
  }
  export function show(message, duration = 500) {
    Vue.toasted.show('创建成功', {
      theme: "outline",
      position: "bottom-center",
      duration : 500
    })
  }
  export function error(message, duration = 500) {
    Vue.toasted.error('创建成功', {
      theme: "outline",
      position: "bottom-center",
      duration : 500
    })
  }
}

export default toasted
