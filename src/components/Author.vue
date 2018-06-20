<template>
  <div class="page-wrapper">
    <Aside></Aside>
    <div class="page-content">
      <!-- <h1 class="title"><i>{{ authors[id].name }}</i> Info</h1> -->
      <div v-if="author">
        <h1 class="title"><i>{{ author.name }}</i> Info</h1>
        <div v-if="posts.length">Has: {{ posts.length }}
          <!-- <router-link
            v-bind:to="'/authors/' + author.id + '/posts'"> Posts</router-link> -->
            <router-link
              :to="{ name: 'PostsPage', 
                    params: {authorId: author.id} }"> Posts</router-link>
        </div>
      </div>
      <h1 class="title" v-else>Loading Info</h1>
      <hr>
      <p v-if="author">
        <ul class="info">
          <li v-for="(value, key) in author"><b>{{ key }}:</b>
            <span v-if="typeof value !== 'object'">{{value}}</span>
            <ul v-else class="info">
              <li v-for="(subValue, subKey) in value">
                <b>{{ subKey }}:</b> <span>{{subValue}}</span>
              </li>
            </ul>
          </li>
        </ul>
      </p>
      <div v-else class="preloader">
        <p>Loading ... </p>
      </div>
    </div>
  </div>
</template>

<script>
import Aside from './templates/Aside'
import { mapState, mapActions, mapGetters } from 'vuex'


export default {
  components: {
    Aside,
  },
  name: 'Author',
  props: ['id'],
  data () {
    return {
      title: 'Author Info',
    }
  },
  computed: {
    ...mapState({
      // posts: state => state.posts.posts,
      // authors: state => state.authors.authors,
    }),
    ...mapGetters({
      // postsCount: 'posts/postsCount',
      // authorsCount: 'authors/authorsCount'
      // Author: 'authors/getAuthorById', this.$props.id
    }),
    author() {
      // this.localAuthor.hasPosts
      return  this.$store.getters['authors/getAuthorById'](this.id);
    },
    posts() {
      return this.$store.getters['posts/getPostsByAuthor'](this.id)
    },    
  },

  // updated() {
  //   // console.log('updated')
  //   this.localAuthor.posts = this.$store.getters['posts/getPostsByAuthor'](this.id);
  //   console.log(this.localAuthor.posts)
    
  // },
  
}
</script>

