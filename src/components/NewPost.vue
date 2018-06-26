<template>
  <div class="relative">
    <div v-if="postAddStatus == 'success'" class="message-box success">New Post added</div>
    <!-- <div v-else-if="authStatus == 'error'" class="message-box warning">Login {{ authStatus }}, user not found</div> -->
    <div v-if="postAddStatus === 'loading'" class="title"><b>Processing ...</b></div>
    <form v-if="postAddStatus === 'ready'" class="form postForm" @submit.prevent="submit">
      <h1 class="title">New Post</h1>
      <div class="form-group">
        <label>Post title</label>
        <input required v-model="newPost.title" type="text" placeholder="input title"/>
      </div>
      <div class="form-group">
        <label>Content</label>
        <textarea v-model="newPost.body" placeholder="text"></textarea>
      </div>
      <hr/>
      <div class="submitButtonWrapper">
        <button type="submit">Add post</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NewPost',
  // beforeRouteEnter (to, from, next) {
  //   (vm) => {
      
  //     // console.log(vm)
  //   } 
  //   // if (true) {}
  // },
  // props: ['authUserId'],
  data () {
    return {
      newPost: {
        userId: this.$store.state.auth.authUser ? this.$store.state.auth.authUser.id :null,
        title: null,
        body: null,
        views: 0
      },      
    }
  },
  computed: {
    ...mapGetters({
      postAddStatus: 'posts/postAddStatus',
    }),
  },
  methods: {
    submit: function () {
      if (this.$store.state.posts.postAddStatus === 'ready') {
        // console.log('ready' )
        this.$store.dispatch('posts/addPost', { post: this.newPost }).then(() => {
          // console.log(this.$store.state.posts.postAddStatus)
        })
      } else {
        console.log('not  ready' )
      }

        // const {newPost } = this;
        // console.log(postTitle)
      
      // this.newPost
    }
  },
  // updated() {
  //   console.log('updated:', this.localPostAddStatus)
  // }
  
}
</script>

