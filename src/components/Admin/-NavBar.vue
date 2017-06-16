<template>
  <div class="admin-nav">
    <nav>
      <ul>
        <li v-for="(navigation, index) in store.state.navigations" role="presentation">
          <router-link :to="navigation.path">
            <a :herf="navigation.path" :class="{'active': index === active}" @click="selectNavigations(index)">{{navigation.title}}</a>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script type="text/javascript">

  import Vue from 'vue'
  import Component from 'vue-class-component'
  import Icon from 'vue-awesome/components/Icon.vue'
  import 'vue-awesome/icons/bars'
  import { store } from '../../store/admin'

  @Component({
    components: {
      Icon
    }
  })
  export default class AdminNav extends Vue {
    active = -1
    store = store
    selectNavigations (index) {
      this.active = index
    }

    mounted () {
      this.store.state.navigations.map((v, i) => {
        if (v.path === this.$route.path) {
          this.active = i
        }
      })
    }
  }
</script>
<style scoped lang="sass" rel="stylesheet/sass" media="all">

  @import "../../assets/css/global"
  @import "../../assets/css/mq"

  .admin-nav
    width: 250px
    height: 100vh
    box-shadow: $shadow
    max-width: 250px
    flex: 0 0 250px

</style>
