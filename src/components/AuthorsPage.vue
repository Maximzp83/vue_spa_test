<template>
  <div class="page-wrapper">
    <Aside></Aside>
    <div class="page-content">
      <h1 class="title">{{ title }}</h1>
      <hr>
      <ol>
        <li v-for="author in authors">
          <router-link v-bind:to="'/authors/' + author.id">{{ author.name }}</router-link>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import Aside from './templates/Aside'
import { mapState, mapGetters } from 'vuex'

export default {
  components: {
    Aside,
  },
  name: 'AuthorsPage',
  data () {
    return {
      title: 'Authors List'
    }
  },
  computed: {
    ...mapState({
      // posts: state => state.posts.posts,
      authors: state => state.authors.authors,
    }),
    ...mapGetters({
      // postsCount: 'posts/postsCount',
      // authorsCount: 'authors/authorsCount'

    }),
  },
}
</script>

