<template>
  <div class="page-wrapper">
    <Aside></Aside>
    <div class="page-content">
<!--       <div v-if="author">
  <h1 class="title"><i>{{ author.name }}</i> Posts</h1>
  <div v-if="authUser && authUser.id == author.id">
    <router-link :to="'/authors/'+ authUser.id +'/posts/new-post'">
    Write new post</router-link>
    <router-link :to="{ name: 'NewPost', params: {authUserId: authUser.id} }">Write new post</router-link>
  </div>
</div> -->
      <h1>All posts</h1>
      <hr>
      <div v-if="posts.length">
        <ol>
          <li v-for="post in posts" :key="post.id">
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
  name: 'AllPosts',
  props: ['id'],
  data () {
    return {
      title: '',
      localPosts: {},
    }
  },
  computed: {
    ...mapState({
      posts: state => state.posts.posts,
    }),   
  },

  
}
</script>

