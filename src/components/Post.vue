<template>
  <div class="page-wrapper">
    <Aside></Aside>
    <div class="page-content">
      <!-- <h1 class="title"><i>{{ authors[id].name }}</i> Info</h1> -->
      <div v-if="post">
        <h1 class="title">{{ post.title }}</h1>
        <div class="sub-title">By: <router-link :to="'/authors/' + author.id"><i>{{ author.name }}</i></router-link></div>
      </div>
      <h1 class="title" v-else>Loading Post</h1>
      <hr>
      <div v-if="post" class="description">
        <p>{{ post.body }}</p>
      </div>
      <div v-else class="preloader">
        <p>Loading ... </p>
      </div>
    </div>
  </div>
</template>

<script>
import Aside from './templates/Aside'
// import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  components: {
    Aside,
  },
  name: 'Post',
  props: ['authorId', 'id'],
  data () {
    return {
      title: '',
    }
  },
  computed: {
    // ...mapState({
      // posts: state => state.posts.posts,
      // authors: state => state.authors.authors,
    // }),
    // ...mapGetters({
      // postsCount: 'posts/postsCount',
      // authorsCount: 'authors/authorsCount'
      // Author: 'authors/getAuthorById', this.$props.id
    // }),

    post() {
      return  this.$store.getters['posts/getPostById'](this.id);
    },
    author() {
      return this.$store.getters['authors/getAuthorById'](this.authorId)
    }
  },

  // created() {
  //   if (!this.authToken) {
  //     this.$router.replace('/login');
  //   }
  // },
  updated() {
    // console.log(this.$props)
  }
  
}
</script>

