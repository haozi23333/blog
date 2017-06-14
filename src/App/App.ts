/**
 * Created by haozi on 6/14/2017.
 */
import './App.sass'

import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  template: require('./App.html')
})
export default class App extends Vue {
  message: string = 'Hello!'
  // Component methods can be declared as instance methods
  onClick (): void {
    window.alert(this.message)
  }
}
