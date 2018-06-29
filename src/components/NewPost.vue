<template>
  <div class="relative">
    <div v-if="postActionStatus === 'loading'" class="title"><b>Processing ...</b></div>
   
    <PostForm v-if="postActionStatus === 'ready'"
      title="New Post"
      buttonText="Add Post"
      v-bind:authUser="authUser"
      v-on:submit="submit"
    ></PostForm>
    
  </div>
</template>

<script>
import PostForm from './templates/PostForm'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: { PostForm },
  name: 'NewPost',

  computed: {
    ...mapGetters({
      postActionStatus: 'posts/postActionStatus',
      authUser: 'auth/authUser'
    }),
  },
  methods: {
    ...mapActions({ addPost: 'posts/addPost', notify: 'globalWarning' }),

    submit: function (data) {
      // console.log('newPost: ', data)
      // if (this.$store.state.posts.postActionStatus === 'ready') {
      if (this.postActionStatus === 'ready') {
        this.addPost({ post: data }).then(() => { console.log('new post promise') })
      } else {
        this.notify({
          message: 'adding Post in progress, please wait',
          status: 'warning' 
        })
      }
    }
  },
}
</script>

