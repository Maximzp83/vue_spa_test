<template>
  <aside class="aside">
    <h3 class="title">{{ title }}</h3>
    <!-- <p>posts in database: {{ posts.length }}</p> -->
    <div class="content-container">
      <p>authors: {{ authorsCount }}</p>
      <p>posts: {{ postsCount }}</p>
      <div class="user-panel" v-if="authUser">
        <h4 class="title">User Panel</h4>
        <p v-if="userPosts.length">Your 
          <router-link :to="{ name: 'authorPosts', params: {authorId: authUser.id} }"> Posts</router-link>
        </p>
        <p v-else>You do not have any posts yet</p>
        <p>
          <router-link :to="{ name: 'NewPost', params: {authUserId: authUser.id} }">Write a new Post</router-link>

        </p>
        <!-- <router-link :to="'/authors/'+ auth.userId +'/posts/' + post.id"> -->
        <!-- {{ post.title }}</router-link> -->
      </div>

    </div>

  </aside>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Aside',
  data () {
    return {
      title: 'Info',
    }
  },
  computed: {
    // ...mapState({
      // posts: state => state.posts.posts,
      // postsCount() {
      //   console.log(this.$store.getters.postsCount )
      //   return this.$store.getters.postsCount
      // }
    // }),
    ...mapGetters({
      postsCount: 'posts/postsCount',
      authorsCount: 'authors/authorsCount',
      authUser: 'auth/authUser'
    }),
    userPosts() {
      return this.$store.getters['posts/getPostsByAuthor'](this.authUser.id)
    },
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

