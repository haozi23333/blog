/**
 * Created by haozi on 6/14/2017.
 */
import './Markdown.sass'
import Vue from 'vue'
import Component from 'vue-class-component'
const Icon = require('vue-awesome/components/Icon.vue')

@Component({
  template: require('./Markdown.html'),
  components: {
    Icon
  },
  name: 'Markdown'
})
export default class extends Vue {
}
