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
import { mapState } from 'vuex'

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
      authors: state => state.authors.authors,
    }),
    
  },
}
</script>

