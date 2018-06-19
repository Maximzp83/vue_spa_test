<template>
  <aside class="aside">
    <h3>{{ title }}</h3>
    <p>{{ count }}</p>
  </aside>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Aside',
  data () {
    return {
      title: 'Aside Component',
    }
  },
  computed: mapState({
    count: state => state.posts.count,
  }),
  created() {
    // console.log('store: ', this.$store)
    // this.$store.commit('increment', 5);
    this.$store.dispatch('getPosts', {
      amount: 10
    });
  }
  
}
</script>

