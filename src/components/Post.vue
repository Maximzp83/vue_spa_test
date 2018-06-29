<template>
  <div class="page-wrapper">
    <Aside></Aside>
    <div class="page-content">
      <!-- <h1 class="title"><i>{{ authors[id].name }}</i> Info</h1> -->
      <div v-if="postActionStatus === 'loading'" class="title"><b>Processing ...</b></div>

      <div v-else-if="postActionStatus === 'ready'">
        <div v-if="post">
          <h1 class="title">{{ post.title }}</h1>
          <div class="sub-title relative">
            <div>By: 
              <router-link :to="'/authors/' + author.id"><i>{{ author.name }}</i></router-link>
            </div>
            <div v-if="authUser && authUser.id == author.id" class="toRight">
              <router-link :to="{ name: 'EditPost',
                 params: {authorId: authUser.id, id: post.id } }">Edit this Post
              </router-link>
              <button type="button" class="delete-button" v-on:click="deleteClick">
                Delete this Post
              </button>
            </div>
          </div>
        </div>
        <h1 class="title" v-else>Loading Post</h1>
      </div>
      <hr>
      <div v-if="postActionStatus === 'ready' && post" class="description">
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
import { mapGetters, mapActions } from 'vuex'

export default {
  components: { Aside },
  name: 'Post',
  props: ['authorId', 'id'],

  computed: {
    ...mapGetters({
      postActionStatus: 'posts/postActionStatus',
      authUser: 'auth/authUser',
      getPost: 'posts/getPostById',
      getAuthor: 'authors/getAuthorById'
    }),

    post() {
      return this.getPost(this.id);
    },
    author() {
      return this.getAuthor(this.authorId)
    }
  },

  methods: {
    ...mapActions({ deletePost: 'posts/deletePost', notify: 'globalWarning' }),

    deleteClick: function () {
      // console.log(data)
      if (this.postActionStatus === 'ready') {
        this.deletePost({ post: this.post })
      } else {
        this.notify({
          message: 'deleting Post in progress, please wait',
          status: 'warning' 
        })
      }
    }
  },
  
}
</script>

