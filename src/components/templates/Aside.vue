<template>
  <aside class="aside">
    <h3>{{ title }}</h3>
    <!-- <p>posts in database: {{ posts.length }}</p> -->
    <p>authors: {{ authorsCount }}</p>

    <p>posts: {{ postsCount }}</p>
    <!-- <ul>
      <li v-for="post in posts">
        {{ post.title }}
      </li>
    </ul> -->
  </aside>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'Aside',
  data () {
    return {
      title: 'Info',
    }
  },
  computed: {
    ...mapState({
      posts: state => state.posts.posts,
      // postsCount() {
      //   console.log(this.$store.getters.postsCount )
      //   return this.$store.getters.postsCount
      // }
    }),
    ...mapGetters({
      postsCount: 'posts/postsCount',
      authorsCount: 'authors/authorsCount'

    }),
  },
  created() {
    // console.log('store: ', this.$store)
    // this.$store.commit('increment', 5);
    // this.$store.dispatch('getPosts', { amount: 10 });
    this.$store.dispatch('authors/getAuthors');
    this.$store.dispatch('posts/getPosts');

      // console.log('getters: ', this.$store.getters['posts/postsCount'] )

  } 
}
</script>

