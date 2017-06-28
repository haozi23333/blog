/**
 * Created by haozi on 2017/06/28.
 */

import Vue from 'vue'

namespace toasted {
  export function success(message, duration = 500) {
    Vue.toasted.success(message, {
      theme: "outline",
      position: "bottom-center",
      duration : 500
    })
  }
  export function show(message, duration = 500) {
    Vue.toasted.show(message, {
      theme: "outline",
      position: "bottom-center",
      duration : 500
    })
  }
  export function error(message, duration = 500) {
    Vue.toasted.error(message, {
      theme: "outline",
      position: "bottom-center",
      duration : 500
    })
  }
}

export default toasted
