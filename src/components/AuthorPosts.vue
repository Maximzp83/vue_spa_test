<template>
  <div class="page-wrapper">
    <Aside></Aside>
    <div class="page-content">
      <!-- <div v-if="author"> -->
        <h1 class="title"><i>{{ author.name }}</i> Posts</h1>
        <div v-if="authUser && authUser.id == author.id">
          <!-- <router-link :to="'/authors/'+ authUser.id +'/posts/new-post'"> -->
          <!-- Write new post</router-link> -->
          <router-link :to="{ name: 'NewPost', params: {authUserId: authUser.id} }">Write new post</router-link>
        </div>
      <!-- </div> -->
      <!-- <h1 v-else>All posts</h1> -->
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
import { mapGetters } from 'vuex'

export default {
  components: {
    Aside,
  },
  name: 'AuthorPosts',
  props: ['authorId'],
  data () {
    return {
      title: '',
      localPosts: {},
      localAuthorId: this.$props.id || this.$route.params.authorId ,
    }
  },
  computed: {
    // ...mapState({
    //   posts: state => state.posts.posts,
    // }),
    ...mapGetters({
      authUser: 'auth/authUser'
    }),
    author() {
      return  this.$store.getters['authors/getAuthorById'](this.localAuthorId);
    },
    
    posts() {
      // console.log('props', this.$route.params.id)
      if (this.localAuthorId) {
        this.localPosts = this.$store.getters['posts/getPostsByAuthor'](this.localAuthorId)
      } else {
        // this.localPosts = this.$store.state.posts.posts
      }
      return this.localPosts
    }, 
    
  },

  
}
</script>

