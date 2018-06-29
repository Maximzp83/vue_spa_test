<template>
  <div class="relative">
    <div v-if="postActionStatus === 'loading'" class="title"><b>Processing ...</b></div>
    
    <PostForm v-if="postActionStatus === 'ready' && post"
      title="Edit Post"
      buttonText="Save Post"
      v-bind:post="post"
      v-bind:authUser="authUser"
      v-on:submit="submit"
    ></PostForm>

  </div>
</template>

<script>
import PostForm from './templates/PostForm'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {  PostForm },
  name: 'EditPost',
  props: ['authorId', 'id'],
  
  computed: {
    ...mapGetters({
      postActionStatus: 'posts/postActionStatus',
      authUser: 'auth/authUser',
      getPost: 'posts/getPostById'
    }),

    post() {
      return  this.getPost(this.id);
    },
  },

  methods: {
    ...mapActions({ editPost: 'posts/editPost', notify: 'globalWarning' }),

    submit: function (data) {
      // console.log('newPost: ', data)
      // if (this.$store.state.posts.postActionStatus === 'ready') {
      if (this.postActionStatus === 'ready') {
        this.editPost({ post: data }).then(() => { console.log('edit promise') })
      } else {
        this.notify({
          message: 'saving Post in progress, please wait',
          status: 'warning' 
        })
      }
    }
  }, 

}
</script>

