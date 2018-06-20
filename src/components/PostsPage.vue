<template>
  <div class="page-wrapper">
    <Aside></Aside>
    <div class="page-content">
      <h1 v-if="author" class="title"><i>{{ author.name }}</i> Posts</h1>
      <h1 v-else>All posts</h1>
      <hr>
      <div v-if="posts.length">
        <ol>
          <li v-for="post in posts">
            <router-link :to="'/authors/'+ post.userId +'/posts/' + post.id">
            {{ post.title }}</router-link>
          </li>
        </ol>
      </div>
      <div v-else class="preloader">
        <p>Loading posts ... </p>
      </div>
    </div>
  </div>
</template>

<script>
import Aside from './templates/Aside'
import { mapState } from 'vuex'


export default {
  components: {
    Aside,
  },
  name: 'PostsPage',
  props: ['id'],
  data () {
    return {
      title: '',
      localPosts: {},
      authorId: this.$route.params.authorId
    }
  },
  computed: {
    // ...mapState({
    //   posts: state => state.posts.posts,
    // }),
    author() {
      return  this.$store.getters['authors/getAuthorById'](this.authorId);
    },
    posts() {
      // console.log('props', this.$route.params.id)
      if (this.authorId) {
        this.localPosts = this.$store.getters['posts/getPostsByAuthor'](this.authorId)
      } else {
        this.localPosts = this.$store.state.posts.posts
      }
      return this.localPosts
    }, 
    
  },
}
</script>

