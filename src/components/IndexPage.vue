<template>
  <div class="page-wrapper">
    <Aside></Aside>
    <div class="page-content">
      <h1 class="title">{{ title }}</h1>
      <hr>
      <div class="description">
        <ol v-if="mostViewedPosts"><h2 class="title">Recent Posts:</h2>
          <li v-for="post in mostViewedPosts">
            <span>Title: </span>
            <b><router-link :to="'/authors/'+ post.userId +'/posts/' + post.id">
            {{ post.title }}</router-link></b>
            <div><span>Post Viewed: </span> <b>{{ post.views }}</b> times</div>
          </li>
        </ol>
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
  name: 'IndexPage',
  data () {
    return {
      title: 'indexPage content'
    }
  },
  computed: {
    ...mapGetters({
      mostViewedPosts: 'posts/getMostViewedPosts',
    }),
        
  },
}
</script>

